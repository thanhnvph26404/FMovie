<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Room extends Model
{
    use HasFactory;

    protected $fillable = [
        'id_cinema',
        'quantity'
        ];

    public function cinema()
    {
        return $this->belongsTo(Cinema::class, 'id_cinema');
    }
}
