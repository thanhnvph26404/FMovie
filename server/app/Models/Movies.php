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
        'director',
        'actor',
        'releaseDate',
        'language',
        'id_category',
        'image',
        'id_trailer'
    ];

    public function category()
    {
        return $this->belongsTo(Category::class, 'id_category');
    }

    public function trailer()
    {
        return $this->belongsTo(Trailers::class, 'id_trailer');
    }
}
