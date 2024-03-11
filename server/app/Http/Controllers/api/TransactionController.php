<?php

namespace App\Http\Controllers\api;

use App\Models\Transaction;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use App\Http\Resources\TransactionResource;

class TransactionController extends Controller
{
    // Phương thức để lấy tất cả các giao dịch
    public function index()
    {
        $transaction = Transaction::all();
        return TransactionResource::collection($transaction);
    }

    // Phương thức để lấy một giao dịch cụ thể dựa trên ID
    public function show(string $id)
    {
        $transaction = Transaction::find($id);
        if (!$transaction) {
            return response()->json(['message' => 'Không tìm thấy giao dịch'], 404);
        }
        return new TransactionResource($transaction);
    }

    // Phương thức để tạo một giao dịch mới
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'id_user' => 'nullable|exists:users,id',
            'totalQuantity' => 'required|integer',
            'paymentMethod' => 'required|in:Tiền mặt,Chuyển khoản',
            'time' => 'required|date_format:H:i:s',
            'totalPayment' => 'required|numeric',
            'paymentStatus' => 'required|in:Đã thanh toán,Chưa thanh toán',
        ]);
         if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        }

        $transaction = Transaction::create($request->all());
        return new TransactionResource($transaction);
    }

    // Phương thức để cập nhật một giao dịch
    public function update(Request $request, string $id)
    {
        $validator = Validator::make($request->all(),[
            'id_user' => 'nullable|exists:users,id',
            'totalQuantity' => 'required|integer',
            'paymentMethod' => 'required|in:Tiền mặt,Chuyển khoản',
            'time' => 'required|date_format:H:i:s',
            'totalPayment' => 'required|numeric',
            'paymentStatus' => 'required|in:Đã thanh toán,Chưa thanh toán',
        ]);
         if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        }

        $transaction = Transaction::find($id);
        if (!$transaction) {
            return response()->json(['message' => 'Không tìm thấy giao dịch'], 404);
        }

        $transaction->update($request->all());
        return new TransactionResource($transaction);
    }

    // Phương thức để xóa một giao dịch
    public function destroy(string $id)
    {
        $transaction = Transaction::find($id);
        if (!$transaction) {
            return response()->json(['message' => 'Không tìm thấy giao dịch'], 404);
        }

        $transaction->delete();
        return response()->json(['message' => 'Xóa thành công'], 200);
    }
}
