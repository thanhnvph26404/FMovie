<?php

use App\Models\Voucher;
use App\Models\Trailers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\api\UserController;
use App\Http\Controllers\api\RoomsController;
use App\Http\Controllers\api\SeatsController;
use App\Http\Controllers\api\CinemaController;
use App\Http\Controllers\api\MoviesController;
use App\Http\Controllers\api\TicketsController;
use App\Http\Controllers\api\VoucherController;
use App\Http\Controllers\api\CategoryController;
use App\Http\Controllers\api\TrailersController;
use App\Http\Controllers\api\SeatsTypeController;
use App\Http\Controllers\api\ShowtimesController;
use App\Http\Controllers\api\TransactionController;
use App\Http\Resources\TransactionVoucherLinkResource;
use App\Http\Controllers\api\TransactionVoucherLinkController;
use App\Http\Controllers\api\VNPayController;

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
Route::resource('category',CategoryController::class);
Route::resource('movies',MoviesController::class);
Route::get('/movies_search', [MoviesController::class, 'search']);  // tìm kiếm theo name
Route::get('/movies/filter-by-category/{categoryName}', [MoviesController::class, 'filterByCategory']); // lọc phim theo danh mục
Route::get('/movies/filter-by-status/{status}', [MoviesController::class, 'filterByStatus']);
Route::get('showtimes/filter', [ShowtimesController::class, 'filterByDate']); // lọc theo ngày chiếu
Route::post('tickets/book', [TicketsController::class, 'bookTicket']); // Đặt vé tạm thời bỏ
Route::post('/select-seat', [SeatsController::class, 'chooseSeat']); // chọn ghế
Route::resource('trailers',TrailersController::class);
Route::resource('showtimes',ShowtimesController::class);
Route::resource('transactionvoucher',TransactionVoucherLinkController::class);
Route::resource('rooms',RoomsController::class);
Route::resource('seats',SeatsController::class);
Route::resource('seatstype',SeatsTypeController::class);
Route::resource('tickets',TicketsController::class);
Route::post('paymentHome',[TransactionController::class, 'PaymentHome']);
Route::post('paymentOnline',[TransactionController::class, 'PaymentOnline']);
Route::post('paymentOnline/update',[TransactionController::class, 'UpdatePaymentOnline']);

Route::post('/payment', [VNPayController::class, 'index']);
Route::get('/vnpay/callback', [VNPayController::class, 'callback'])->name('vnpay.callback');
