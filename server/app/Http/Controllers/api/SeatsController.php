<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Resources\SeatsResource;
use App\Models\Seats;
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
        return SeatsResource::collection($seats);
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
        $seats = Seats::create($request->all());
        return new SeatsResource($seats);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $seats = Seats::find($id);
        if(!$seats){
            return response()->json(['message'=>'Không tìm thấy ']);
        }
        else{
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
        if(!$seats){
            return response()->json(['message'=>'Không tìm thấy ']);
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
        if(!$seats){
            return response()->json(['message'=>'Không tìm thấy ']);
        }
        $seats->delete();
        return response()->json(['message'=>'Xóa thành công thấy ']);
    }
}
