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
        $movies = Movies::with('categories', 'trailer')->get();

        // Trả về dữ liệu phim dưới dạng resource
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
        // Tạo mới một bộ phim từ dữ liệu được gửi từ yêu cầu
        $movieData = $request->except('id_category');

        // Lưu phim vào cơ sở dữ liệu
        $movie = Movies::create($movieData);

        // Kiểm tra xem yêu cầu có chứa dữ liệu cho 'id_category' không
        if ($request->has('id_category')) {
            // Lấy danh sách các ID danh mục từ yêu cầu
            $categoryIds = $request->input('id_category');

            // Gắn danh mục cho bộ phim
            $movie->categories()->attach($categoryIds);
        }

        // Trả về phim mới đã tạo
        return new MoviesResource($movie);
    }




    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $movie = Movies::with('categories')->find($id);

        if (!$movie) {
            return response()->json(['message' => 'Không tìm thấy bộ phim'], 404);
        }

        return new MoviesResource($movie);
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
    public function update(Request $request, $id)
    {
        // Tìm bộ phim cần cập nhật
        $movie = Movies::findOrFail($id);

        // Cập nhật thông tin bộ phim từ dữ liệu được gửi từ yêu cầu
        $movie->fill($request->except('id_category'))->save();

        // Kiểm tra xem yêu cầu có chứa dữ liệu cho 'id_category' không
        if ($request->has('id_category')) {
            // Lấy danh sách các ID danh mục từ yêu cầu
            $categoryIds = $request->input('id_category');

            // Đồng bộ hóa danh mục cho bộ phim
            $movie->categories()->sync($categoryIds);
        } else {
            // Nếu không có dữ liệu danh mục được gửi, xóa tất cả các liên kết danh mục hiện tại
            $movie->categories()->detach();
        }

        // Trả về bộ phim đã cập nhật
        return new MoviesResource($movie);
    }

    public function destroy(string $id)
    {
        $movie = Movies::find($id);
        if(!$movie){
            return response()->json(['message' => 'Không tìm thấy phim']) ;
        }
        $movie->delete();
        return response()->json(['message' => 'Xoá phim thành công']) ;
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
        $movies = Movies::whereHas('categories', function ($query) use ($category) {
            $query->where('id', $category->id);
        })->get();

        // Trả về danh sách phim dưới dạng JSON
        return MoviesResource::collection($movies);
    }



    // Các phương thức khác đã được bao gồm ở trên

    /**
     * Lọc phim theo trạng thái.
     *
     * @param  string  $status
     * @return \Illuminate\Http\Response
     */
    public function filterByStatus($status)
    {
        // Lọc phim theo trạng thái
        $movies = Movies::where('status', $status)->get();

        // Trả về danh sách phim dưới dạng JSON
        return MoviesResource::collection($movies);
    }
}
