export interface Seat {
    id?: string | number
    id_room: string | number
    quantity: string | number
    seatStatus: string
    id_seatstype: string | number
}

export interface SeatState {
    seats: Seat[]
}