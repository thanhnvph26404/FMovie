import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
    FLUSH,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    REHYDRATE,
    persistReducer,
    persistStore,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { categoryApi } from "@/services/categories/categories.services";
import categoriesSlices from "@/services/categories/categoriesSlices";
import { moviesApi } from "@/services/movies/movies.services";
import movieSlice from "@/services/movies/moviesSlices";
import { seattypeApi } from "@/services/seatstype/seatstype.services";
import seatstypeSlices from "@/services/seatstype/seatstypeSlices";
import { roomApi } from "@/services/rooms/rooms.services";
import roomsSlices from "@/services/rooms/roomsSlices";
import { seatApi } from "@/services/seats/seats.services";
import seatsSlices from "@/services/seats/seatsSlices";


const persistConfig = {
    key: "root",
    storage,
    whitelist: [""],
};
const rootReducer = combineReducers({
    //category
    [categoryApi.reducerPath]: categoryApi.reducer,
    categories: categoriesSlices,
    //room
    [roomApi.reducerPath]: roomApi.reducer,
    rooms: roomsSlices,
    //movies
    [moviesApi.reducerPath]: moviesApi.reducer,
    movies: movieSlice,
    //seattype
    [seattypeApi.reducerPath]: seattypeApi.reducer,
    seatstype: seatstypeSlices,
    //seats
   [seatApi.reducerPath]: seatApi.reducer,
   seats: seatsSlices,
});
const middleware = [
    categoryApi.middleware,
    moviesApi.middleware,
    seattypeApi.middleware,
    roomApi.middleware,
    seatApi.middleware,
];

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }).concat(...middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default persistStore(store);
