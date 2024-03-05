<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Movies extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'description',
        'time',
        'status',
        'director',
        'actor',
        'releaseDate',
        'language',
        'image',
        'id_trailer'
    ];

    public function categories()
{
    return $this->belongsToMany(Category::class, 'category_movie', 'movie_id', 'category_id');
}

    public function trailer()
    {
        return $this->belongsTo(Trailers::class, 'id_trailer');
    }
}
