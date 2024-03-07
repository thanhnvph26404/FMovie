export interface Cinema {
    id?: string | number
    name: string
    address: string
    screeningRooms: string | number
    description: string
    phoneContact: string | number
    image: string
}

export interface CinemaState {
    cinemas: Cinema[]
}