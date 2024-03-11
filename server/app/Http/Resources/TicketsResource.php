<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TicketsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        // return parent::toArray($request);
        return [
            'id' => $this->id,
            'id_user' => $this->id_user,
            // 'total' => $this->total,
            'id_seat' => $this->id_seat,
            'price' => $this->seat->price,
            'seatsType' => $this->seat->seatstype->name,
            'id_showtime' => $this->id_showtime,
            'movie_name' => $this->showtime->movie->name,
            'time' => $this->showtime->movie->time,
            'date' => $this->showtime->showDate,
            'cinema' => $this->showtime->cinema->name,

            // 'trailer_url' => $this->trailer

        ];
    }
}
