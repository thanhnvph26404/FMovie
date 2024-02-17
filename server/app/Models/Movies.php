<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Movies extends Model
{
    use HasFactory;
    public $timestamp = false;
    protected $fillable = [
        'code',
        'name',
        'description',
        'time',
        'director',
        'actor',
        'releaseDate',
        'language',
        'genre',
        'image',
        'idTrailer',
    ];
}
