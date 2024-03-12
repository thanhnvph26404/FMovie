<?php

namespace App\Http\Controllers\api;

use Carbon\Carbon;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use App\Models\Transaction;

class VNPayController extends Controller
{
    public function index()
    {
        // Get parameters from .env
        $vnp_TmnCode = config('services.vnpay.tmncode');
        $vnp_HashSecret = config('services.vnpay.hash_secret');
        $vnp_Url = config('services.vnpay.url');
        
        // Generate order data
        $order = new Transaction();
        $order->totalPayment = 100000;
        $order->save();

        // VNPay request parameters
        $vnp_Params = array(
            'vnp_TmnCode' => $vnp_TmnCode,
            'vnp_Amount' => $order->totalPayment * 100,
            'vnp_Command' => 'pay',
            'vnp_CreateDate' => date('YmdHis'),
            'vnp_CurrCode' => 'VND',
            'vnp_Locale' => 'vn',
            'vnp_OrderInfo' => 'Thanh toan don hang',
            'vnp_OrderType' => 'billpayment',
            'vnp_ReturnUrl' => route('vnpay.callback'),
            'vnp_TxnRef' => Str::random(8),
        );

        // Sort all field of vnpay to make a signature
        ksort($vnp_Params);

        $vnp_Url .= '?' . http_build_query($vnp_Params);
        
        return redirect($vnp_Url);
    }

    public function callback(Request $request)
    {
        // Get parameters from .env
        $vnp_HashSecret = config('services.vnpay.hash_secret');

        $inputData = $request->all();
        $secureHash = $inputData['vnp_SecureHash'];
        unset($inputData['vnp_SecureHash']);

        // Verify signature
        $vnp_SecureHash = hash('sha256', $vnp_HashSecret . implode('', $inputData));
        if ($secureHash === $vnp_SecureHash) {
            // Verify success
            // Handle payment status here
            return "Payment success";
        } else {
            // Verify failed
            return "Payment failed";
        }
    }
}