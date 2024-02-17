<?php

namespace App\Http\Controllers\api;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use App\Http\Resources\GenreResource;
use Illuminate\Support\Facades\Validator;
use App\Models\Genre;
use Illuminate\Http\Request;

class GenreController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // $genre = Genre::all();
        $genre = DB::table('vouchers')->get();
        return GenreResource::collection($genre);

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'message' => $validator->messages()
            ], 422);
        }
            $genre = Genre::create($request->all());
            return new GenreResource($genre);

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $genre = Genre::find($id);
        if(!$genre){
            return response()->json(['message'=>'Không tìm thấy ']);
        }
        else{
            return new GenreResource($genre);
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
        $genre = Genre::find($id);
        $validator = Validator::make($request->all(), [
            'name' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'message' => $validator->messages()
            ], 422);
        }
        if(!$genre){
            return response()->json(['message'=>'Không tìm thấy ']);
        }
        $genre->update($request->all());
        return new GenreResource($genre);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $genre = Genre::find($id);

        if(!$genre){
            return response()->json(['message'=>'Không tìm thấy ']);
        }
        $genre->delete();
        return response()->json(['message'=>'Xóa thành công ']);
    }
}
