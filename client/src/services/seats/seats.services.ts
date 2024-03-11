import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Seat } from './seats.interface';

export const seatApi = createApi( {
    reducerPath: 'seatApi',
    baseQuery: fetchBaseQuery( {
        baseUrl: 'http://127.0.0.1:8000/api/seats'
    } ),
    tagTypes: [ 'Seat' ],
    endpoints: ( builder ) => ( {
        getSeatList: builder.query( {
            query: () => ``,
            providesTags: [ 'Seat' ]
        } ),
        getSeat: builder.query( {
            query: ( id: string | number ) => ( {
                url: `/${ id }`,
                method: 'GET',
            } ),
            providesTags: [ 'Seat' ]
        } ),
        addSeat: builder.mutation<Seat[], Seat>( {
            query: ( seat ) => ( {
                url: ``,
                method: 'POST',
                body: seat
            } ),
            invalidatesTags: [ 'Seat' ]
        } ),
        editSeat: builder.mutation<Seat[], Seat>( {
            query: ( seat ) => ( {
                url: `/${ seat.id }`,
                method: 'PATCH',
                body: seat
            } ),
            invalidatesTags: [ 'Seat' ]
        } ),
        deleteSeat: builder.mutation<Seat[], string | number>( {
            query: ( id ) => ( {
                url: `/${ id }`,
                method: 'DELETE',
            } ),
            invalidatesTags: [ 'Seat' ],
        } ),
    } )

} )

export const { useAddSeatMutation, useGetSeatListQuery, useDeleteSeatMutation, useEditSeatMutation, useGetSeatQuery } = seatApi    