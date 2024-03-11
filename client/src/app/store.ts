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
import {  cinemasApi } from '../services/cinema/cinemas.services';
import cinemasSlices from "@/services/cinema/cinemasSlices";


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
    //cinemas
    [cinemasApi.reducerPath]: cinemasApi.reducer,
    cinemas: cinemasSlices,
   
});
const middleware = [
    categoryApi.middleware,
    moviesApi.middleware,
    cinemasApi.middleware
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
