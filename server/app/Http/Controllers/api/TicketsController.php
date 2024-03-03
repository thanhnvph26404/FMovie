<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Resources\TicketsResource;
use App\Models\Ticket;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class TicketsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $tickets = Ticket::all();
        return TicketsResource::collection($tickets);
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
        $tickets = Ticket::create($request->all());
        return new TicketsResource($tickets);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $tickets = Ticket::find($id);
        if(!$tickets){
            return response()->json(['message'=>'Không tìm thấy ']);
        }
        else{
            return new TicketsResource($tickets);
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
        $tickets = Ticket::find($id);
        if(!$tickets){
            return response()->json(['message'=>'Không tìm thấy ']);
        }
        $tickets->update($request->all());
        return new TicketsResource($tickets);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $tickets = Ticket::find($id);
        if(!$tickets){
            return response()->json(['message'=>'Không tìm thấy ']);
        }
        $tickets->delete();
        return response()->json(['message'=>'Xóa thành công thấy ']);
    }
}
