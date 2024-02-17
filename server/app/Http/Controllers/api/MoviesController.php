<?php

namespace App\Http\Controllers\api;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\MoviesResource;
use App\Models\Movies;
use Illuminate\Support\Str;
class MoviesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $movies = Movies::all();
        return MoviesResource::collection($movies);
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

    ]);
    if ($validator->fails()) {
        return response()->json([
            'status' => 422,
            'message' => $validator->messages()
        ], 422);
    }
        $movies = Movies::create($request->all());
        return new MoviesResource($movies);
}


    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $movies = Movies::find($id);
        if(!$movies){
            return response()->json(['message'=>'Không tìm thấy ']);
        }
        else{
            return new MoviesResource($movies);
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
        $movies = Movies::find($id);
        if(!$movies){
            return response()->json(['message'=>'Không tìm thấy movies']);
        }
        $movies->update($request->all());
        return new MoviesResource($movies);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $movies = Movies::find($id);
        if(!$movies){
            return response()->json(['message'=>'Không tìm thấy movies']);
        }
        $movies->delete();
        return response()->json(['message'=>'Xóa thành công thấy movies']);
    }
}
