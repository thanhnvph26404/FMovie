<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Resources\SeatsResource;
use App\Models\Seats;
use App\Models\Room;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class SeatsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $seats = Seats::all();
        return response()->json(['seats' => $seats]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

   /**
 * Store a newly created resource in storage.
 */
public function store(Request $request)
{
    $validator = Validator::make($request->all(), [
        'id_room' => 'required|exists:rooms,id',
        // Thêm các quy tắc kiểm tra khác tùy theo yêu cầu của bạn
    ]);

    if ($validator->fails()) {
        return response()->json(['errors' => $validator->errors()], 400);
    }

    $roomId = $request->input('id_room');

    $room = Room::find($roomId);

    // Kiểm tra xem phòng có tồn tại không
    if (!$room) {
        return response()->json(['message' => 'Không tìm thấy phòng'], 404);
    }

    // Kiểm tra số lượng ghế đã được thêm vào trong phòng
    $roomSeatsCount = $room->seats()->count();

    // Tính số lượng ghế còn lại có thể được thêm vào phòng
    $remainingSeats = $room->quantity - $roomSeatsCount;

    // Kiểm tra xem có đủ ghế trống để thêm vào không
    if ($remainingSeats <= 0) {
        return response()->json(['message' => 'Phòng đã đủ số lượng ghế tối đa'], 400);
    }

    // Tạo ghế mới
    $seat = new Seats();
    $seat->fill($request->all());
    $seat->save();

    return new SeatsResource($seat);
}




    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $seats = Seats::find($id);
        if (!$seats) {
            return response()->json(['message' => 'Không tìm thấy ']);
        } else {
            return new SeatsResource($seats);
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $seats = Seats::find($id);
        if (!$seats) {
            return response()->json(['message' => 'Không tìm thấy ']);
        }
        $seats->update($request->all());
        return new SeatsResource($seats);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $seats = Seats::find($id);
        if (!$seats) {
            return response()->json(['message' => 'Không tìm thấy ']);
        }
        $seats->delete();
        return response()->json(['message' => 'Xóa thành công']);
    }


}
