<?php

namespace App\Http\Controllers\api;

use App\Models\Transaction;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use App\Http\Resources\TransactionResource;
use App\Mail\PaymentSuccessEmail;
use Illuminate\Support\Facades\Mail;

class TransactionController extends Controller
{
    public function PaymentHome(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'id_user' => 'nullable|exists:users,id',
            'totalQuantity' => 'required|integer',
            'paymentMethod' => 'required',
            'totalPayment' => 'required|numeric',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        Transaction::create([
            'id_user' => $request->input('id_user'),
            'totalQuantity' => $request->input('totalQuantity'),
            'paymentMethod' => $request->input('paymentMethod'),
            'time' => now()->toTimeString(),
            'totalPayment' => $request->input('totalPayment'),
            'paymentStatus' => 'Chưa thanh toán',
        ]);

        return response()->json([
            'code' => 201,
            'message' => 'Đơn hàng đang chờ duyệt',
        ]);

        // if ($request->input('paymentMethod') === 'Tiền mặt') {
        //     $transaction->paymentStatus = 'Đã thanh toán';
        //     $transaction->save();

        //     return response()->json([
        //         'message' => 'Thanh toán thành công',
        //         'totalPayment' => $transaction->totalPayment,
        //     ]);
        // }

        // return $this->handleVNPayPayment($transaction);
    }


    public function PaymentOnline(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'id_user' => 'nullable|exists:users,id',
            'totalQuantity' => 'required|integer',
            'paymentMethod' => 'required',
            'totalPayment' => 'required|numeric',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $transaction = Transaction::create([
            'id_user' => $request->input('id_user'),
            'totalQuantity' => $request->input('totalQuantity'),
            'paymentMethod' => $request->input('paymentMethod'),
            'time' => now(),
            'totalPayment' => $request->input('totalPayment'),
            'paymentStatus' => 'Chưa thanh toán',
        ]);

        Mail::to($request->email)->send(new PaymentSuccessEmail(
            $transaction->totalQuantity,
            $transaction->paymentMethod,
            $transaction->time,
            $transaction->totalPayment,
            $transaction->paymentStatus,
        ));

        return response()->json([
            'message' => 'Thanh toán thành công. Email thông báo đã được gửi.',
        ]);
    }

    public function UpdatePaymentOnline(Request $request)
    {
        // Lấy ID của người dùng và trạng thái thanh toán từ request
        $id = $request->input('id');
        $paymentStatus = $request->input('paymentStatus');

        $transaction = Transaction::where('id', $id)->first();

        if (!$transaction || !$paymentStatus) {
            return response()->json(['error' => 'Không tìm thấy giao dịch hoặc trạng thái thanh toán không hợp lệ.'], 404);
        }

        $transaction->paymentStatus = $paymentStatus;
        $transaction->save();

        Mail::to($request->email)->send(new PaymentSuccessEmail(
            $transaction->totalQuantity,
            $transaction->paymentMethod,
            $transaction->time,
            $transaction->totalPayment,
            $transaction->paymentStatus,
        ));

        return response()->json([
            'message' => 'Cập nhật trạng thái thanh toán thành công. Email thông báo đã được gửi.',
        ]);
    }


    // protected function handleVNPayPayment(Transaction $transaction)
    // {
    //     return response()->json([
    //         'message' => 'Đã bắt đầu thanh toán VNPay',
    //         'paymentData' => 'Thay thế dữ liệu này bằng dữ liệu thanh toán VNPay thực tế',
    //     ]);
    // }

    // public function handleVNPayCallback(Request $request)
    // {
    //     $transactionId = $request->input('vnp_TxnRef'); 
    //     $transaction = Transaction::find($transactionId);

    //     if ($transaction) {
    //         $transaction->paymentStatus = 'Đã thanh toán'; 
    //         $transaction->save();
    //     }
    // }

    // public function handleVNPayReturn(Request $request)
    // {
    //     $transactionId = $request->input('vnp_TxnRef'); 
    //     $transaction = Transaction::find($transactionId);

    //     if ($transaction) {
    //         $paymentStatus = $request->input('vnp_ResponseCode') === '00' ? 'Đã thanh toán' : 'Không thành công';
    //         $transaction->paymentStatus = $paymentStatus;
    //         $transaction->save();
    //     }
    // }
}
