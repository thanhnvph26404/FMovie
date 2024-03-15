<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ShowtimesResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        // return parent::toArray($request);
        $categoryIds = [];
        foreach ($this->movie->categories as $category) {
            $categoryIds[] = $category['id'];
        }
        $availableSeatsCount = $this->room->seats()->where('seatStatus', 'Chưa đặt')->count();

        $categoryNames = [];
        foreach ($this->movie->categories as $category) {
            $categoryNames[] = $category['name'];
        }
        return [
            'id' => $this->id,
            'movies' => [
               'name'=> $this->movie->name,
               'description'=> $this->movie->description,
               'name'=> $this->movie->name,
               'categories' => $categoryNames, // Mảng chứa tên của các category
               'time'=> $this->movie->time,
               'director'=> $this->movie->director,
               'actor'=> $this->movie->actor,
               'releaseDate'=> $this->movie->releaseDate,
               'language'=> $this->movie->language,
               'image'=> $this->movie->image,
            ],
            'cinema' => [
                'name'=> $this->cinema->name,
                'address'=> $this->cinema->address,
                'screeningRooms'=> $this->cinema->screeningRooms,
                'description'=> $this->cinema->description,
                'phoneContact'=> $this->cinema->phoneContact,
                'image'=> $this->cinema->image,

            ],
            'rooms' => [
                'name'=> $this->room->name,
                'quantity'=> $this->room->quantity,
                'available_seats_count' => $availableSeatsCount, // Số lượng ghế chưa đặt
            ],
                'showDate' => $this->showDate,
                'showTime' => $this->showTime,
                'releaseDate' => $this->releaseDate,
                'language' => $this->language,
        ];
    }
}
