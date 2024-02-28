<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Seats extends Model
{
    use HasFactory;

    protected $fillable = [
        'id_room',
        'quantity',
        'seatStatus',
        'id_seatstype'
    ];

    public function room()
    {
        return $this->belongsTo(Room::class, 'id_room');
    }
    public function seatstype()
    {
        return $this->belongsTo(SeatsType::class, 'id_seatstype');
    }

}
