<?php

namespace App\Http\Controllers\api;

use Illuminate\Support\Facades\DB;
use App\Models\Category;
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
        $validator = Validator::make($request->all(), []);
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
        if (!$movies) {
            return response()->json(['message' => 'Không tìm thấy ']);
        } else {
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
        if (!$movies) {
            return response()->json(['message' => 'Không tìm thấy movies']);
        }
        $movies->update($request->all());
        return new MoviesResource($movies);
    }

    public function search(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'message' => $validator->messages()
            ], 422);
        }

        $name = $request->input('name');

        $movies = Movies::where('name', 'like', "%$name%")->get();

        if ($movies->isEmpty()) {
            return response()->json(['message' => 'Không tìm thấy phim nào có tiêu đề tương tự'], 404);
        }

        return MoviesResource::collection($movies);
    }


    /**
     * Lọc phim theo danh mục.
     *
     * @param  string  $categoryName
     * @return \Illuminate\Http\Response
     */
    public function filterByCategory($categoryName)
    {
        // Tìm danh mục theo tên
        $category = Category::where('name', $categoryName)->first();

        // Nếu không tìm thấy danh mục, trả về một thông báo lỗi
        if (!$category) {
            return response()->json(['message' => 'Không tìm thấy danh mục'], 404);
        }

        // Lọc phim theo danh mục
        $movies = Movies::where('id_category', $category->id)->get();

        // Trả về danh sách phim dưới dạng JSON
        return MoviesResource::collection($movies);
    }
}
