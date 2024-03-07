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
import { roomApi } from "@/services/rooms/rooms.services";
import roomsSlices from "@/services/rooms/roomsSlices";
import { cinemaApi } from "@/services/cinemas/cinemas.services";
import cinemasSlices from "@/services/cinemas/cinemasSlices";


const persistConfig = {
    key: "root",
    storage,
    whitelist: [""],
};
const rootReducer = combineReducers({
    //category
    [categoryApi.reducerPath]: categoryApi.reducer,
    categories: categoriesSlices,
    //movies
    [moviesApi.reducerPath]: moviesApi.reducer,
    movies: movieSlice,
    //room
    [roomApi.reducerPath]: roomApi.reducer,
    rooms: roomsSlices,
    //cinema
    [cinemaApi.reducerPath]: cinemaApi.reducer,
    cinemas: cinemasSlices,
});
const middleware = [
    categoryApi.middleware,
    moviesApi.middleware,
    roomApi.middleware,
    cinemaApi.middleware,
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
