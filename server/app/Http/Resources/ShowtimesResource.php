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
        $categoryNames = [];
        foreach ($this->movie->categories as $category) {
            $categoryNames[] = $category['name'];
        }

        $availableSeatsCount = $this->room->seats()->where('seatStatus', 'Chưa đặt')->count();

        // Lấy thông tin về các ghế
        $seats = [];
        foreach ($this->room->seats as $seat) {
            $seats[] = [
                'id' => $seat->id,
                'seatStatus' => $seat->seatStatus,
                // Thêm các thông tin khác của ghế nếu cần
            ];
        }

        return [
            'id' => $this->id,
            'movies' => [
                'name' => $this->movie->name,
                'description' => $this->movie->description,
                'categories' => $categoryNames,
                'time' => $this->movie->time,
                'director' => $this->movie->director,
                'actor' => $this->movie->actor,
                'releaseDate' => $this->movie->releaseDate,
                'language' => $this->movie->language,
                'image' => $this->movie->image,
            ],
            'cinema' => [
                'name' => $this->cinema->name,
                'address' => $this->cinema->address,
                'screeningRooms' => $this->cinema->screeningRooms,
                'description' => $this->cinema->description,
                'phoneContact' => $this->cinema->phoneContact,
                'image' => $this->cinema->image,
            ],
            'rooms' => [
                'name' => $this->room->name,
                'quantity' => $this->room->quantity,
                'available_seats_count' => $availableSeatsCount,
                'seats' => $seats, // Thêm thông tin về các ghế vào đây
            ],
            'showDate' => $this->showDate,
            'showTime' => $this->showTime,
            'releaseDate' => $this->releaseDate,
            'language' => $this->language,
        ];
    }
}
