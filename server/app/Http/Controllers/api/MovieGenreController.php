<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Http\Resources\MovieGenreResource;
use App\Models\MovieGenre;
use Illuminate\Support\Facades\Validator;
class MovieGenreController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        // $genre = DB::table('movieGenre')->get();
        // return $genre;

        $moviegenre = MovieGenre::all();
        return MovieGenreResource::collection($moviegenre);
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
            'idMovie'=> 'required',
            'idGenre'=> 'required',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'message' => $validator->messages()
            ], 422);
        }
            $moviegenre = MovieGenre::create($request->all());
            return new MovieGenreResource($moviegenre);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $moviegenre = MovieGenre::find($id);
        if(!$moviegenre){
            return response()->json(['message'=>'Không tìm thấy ']);
        }
        else{
            return new MovieGenreResource($moviegenre);
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
        $moviegenre = MovieGenre::find($id);
        $validator = Validator::make($request->all(), [
            'idMovie'=> 'required',
            'idGenre'=> 'required',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'message' => $validator->messages()
            ], 422);
        }
        if(!$moviegenre){
            return response()->json(['message'=>'Không tìm thấy ']);
        }
        $moviegenre->update($request->all());
        return new MovieGenreResource($moviegenre);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $moviegenre = MovieGenre::find($id);
        if(!$moviegenre){
            return response()->json(['message'=>'Không tìm thấy moviegenre']);
        }
        $moviegenre->delete();
        return response()->json(['message'=>'Xóa thành công thấy moviegenre']);
    }
}
