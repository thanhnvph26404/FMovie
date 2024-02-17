<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Voucher extends Model
{
    use HasFactory;
    public $timestamp = false;
    protected $fillable = [
        'code',
        'discount',
        'startDate',
        'endDate',
        'quantity',
        'condition',
    ];
}
