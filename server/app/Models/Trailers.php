<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Trailers extends Model
{
    protected $table = 'Trailers';
    use HasFactory;
    public $timestamp = false;
    protected $fillable = [
        'code',
        'discount',
        'startDate',
        'endDate',
        'quantity',
        'condition'
    ];
}
