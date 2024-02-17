<?php

use App\Models\Voucher;
use Illuminate\Http\Request;
use App\Http\Controllers\api\VoucherController;
use App\Http\Controllers\api\GenreController;
use App\Http\Controllers\api\MovieGenreController;
use App\Http\Controllers\api\MoviesController;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::resource('voucher',VoucherController::class);
Route::resource('genre',GenreController::class);
Route::resource('moviegenre',MovieGenreController::class);
Route::resource('movies',MoviesController::class);
