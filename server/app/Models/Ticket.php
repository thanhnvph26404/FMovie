<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ticket extends Model
{
    use HasFactory;
    // protected $table = 'categories';

    protected $fillable = [
        'id_user',
        'quantity',
        'id_seat',
        'id_showtime'
        ];

    public function user()
    {
        return $this->belongsTo(User::class, 'id_user');
    }
    public function seat()
    {
        return $this->belongsTo(Seats::class, 'id_seat');
    }
    public function showtime()
    {
        return $this->belongsTo(Showtimes::class, 'id_showtime');
    }
}
