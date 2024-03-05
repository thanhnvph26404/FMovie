import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// export const authApi = createApi( {
//     reducerPath: 'authApi',
//     baseQuery: fetchBaseQuery( {
//         baseUrl: 'http://127.0.0.1:8000/api/'
//     } ),
//     tagTypes: [ 'Auth' ],
//     endpoints: ( builder ) => ( {
//         login: builder.mutation<Category[], Category>( {
//             query: ( data ) => ( {
//                 url: ``,
//                 method: 'POST',
//                 body: data
//             } ),
//             invalidatesTags: [ 'Auth' ]
//         } ),
//         register: builder.mutation<Category[], Category>( {
//             query: ( data ) => ( {
//                 url: `/${ data.id }`,
//                 method: 'POST',
//                 body: data
//             } ),
//             invalidatesTags: [ 'Auth' ]
//         } ),
        
//     } )

// } )