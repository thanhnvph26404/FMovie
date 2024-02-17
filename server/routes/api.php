<?php

use App\Http\Controllers\api\CinemaController;
use App\Models\Voucher;
use Illuminate\Http\Request;
use App\Http\Controllers\api\VoucherController;
use App\Http\Controllers\api\GenreController;
use App\Http\Controllers\api\MovieGenreController;
use App\Http\Controllers\api\MoviesController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', [AuthController::class,'user']);
    Route::get('/logout', [AuthController::class,'logout']);
});

Route::post('/login', [AuthController::class,'login']);
Route::post('/register', [AuthController::class,'register']);

Route::resource('cinema', CinemaController::class);
Route::resource('voucher',VoucherController::class);
Route::resource('genre',GenreController::class);
Route::resource('moviegenre',MovieGenreController::class);
Route::resource('movies',MoviesController::class);
