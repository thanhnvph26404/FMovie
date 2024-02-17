<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Genre extends Model
{
    use HasFactory;
    public $timestamp = false; // Chỉnh sửa dòng này
    protected $fillable = [
        'name'
    ];
}
