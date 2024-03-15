<?php

namespace App\Http\Controllers\api;

use App\Models\Transaction;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use App\Http\Resources\TransactionResource;

class TransactionController extends Controller
{
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'id_user' => 'nullable|exists:users,id',
            'totalQuantity' => 'required|integer',
            'paymentMethod' => 'required|in:Cash,Transfer',
            'totalPayment' => 'required|numeric',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $transaction = Transaction::create([
            'id_user' => $request->input('id_user'),
            'totalQuantity' => $request->input('totalQuantity'),
            'paymentMethod' => $request->input('paymentMethod'),
            'time' => now()->toTimeString(),
            'totalPayment' => $request->input('totalPayment'),
            'paymentStatus' => 'Chưa thanh toán',
        ]);

        if ($request->input('paymentMethod') === 'Tiền mặt') {
            $transaction->paymentStatus = 'Đã thanh toán';
            $transaction->save();

            return response()->json([
                'message' => 'Thanh toán thành công',
                'totalPayment' => $transaction->totalPayment,
            ]);
        }

        return $this->handleVNPayPayment($transaction);
    }

    protected function handleVNPayPayment(Transaction $transaction)
    {
        return response()->json([
            'message' => 'Đã bắt đầu thanh toán VNPay',
            'paymentData' => 'Thay thế dữ liệu này bằng dữ liệu thanh toán VNPay thực tế',
        ]);
    }

    public function handleVNPayCallback(Request $request)
    {
        $transactionId = $request->input('vnp_TxnRef'); 
        $transaction = Transaction::find($transactionId);

        if ($transaction) {
            $transaction->paymentStatus = 'Đã thanh toán'; 
            $transaction->save();
        }
    }

    public function handleVNPayReturn(Request $request)
    {
        $transactionId = $request->input('vnp_TxnRef'); 
        $transaction = Transaction::find($transactionId);

        if ($transaction) {
            $paymentStatus = $request->input('vnp_ResponseCode') === '00' ? 'Đã thanh toán' : 'Không thành công';
            $transaction->paymentStatus = $paymentStatus;
            $transaction->save();
        }
    }
}
