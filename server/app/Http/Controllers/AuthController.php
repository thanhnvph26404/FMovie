<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Auth\Events\Validated;
use Illuminate\Support\Facades\Validator;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Mockery\Matcher\Type;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request){
        $user = User::where('email', $request->email)->first();

        if(!$user){
            return response()->json(
                [
                    'message' => "User không tồn tại",
                ],
                404
            );
        }else if(!Hash::check($request->password, $user->password, [])){
            return response()->json(
                [
                    'message' => "Password không đúng",
                ],
                404
            );
        }

        $token = $user->createToken('authToken')->plainTextToken;

        return response()->json(
            [
                'access_token' => $token,
                'type_token' => 'Đăng nhập thành công'
            ],
            200
        );
    }

    public function register(Request $request){
        $message = [
            'email.email' => 'Error email',
            'email.required' => 'Vui lòng nhập email!',
            'password.required' => 'Vui lòng nhập password!',
            'date.required' => 'Vui lòng nhập ngày tháng năm sinh!',
            'phone_number.required' => 'Vui lòng nhập số điện thoại!',
        ]; 

        $validate = Validator::make($request->all(), [
            'email'=> 'email|required',
            'password'=> 'required',
            'date'=> 'required',
            'phone_number'=> 'required',
        ], $message);

        if($validate->fails()){
            return response()->json(
                [
                    'message' => $validate->errors()
                ],
                404
            );
        }

        User::create([
            'name' => $request->name,
            'email'=> $request->email,
            'password'=> Hash::make($request->password),
            'date' => $request->date,
            'role' => $request->role,
            'phone_number'=> $request->phone_number,
        ]);

        return response()->json(
            [
                'message' => "Đăng ký thành công"
            ],
            200
        );
    }

    public function user(Request $request){
        return $request->user();
    }
}
