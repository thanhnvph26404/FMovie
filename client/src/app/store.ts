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
import { voucherApi } from "@/services/vouchers/vouchers.services";
import vouchersSlices from "@/services/vouchers/vouchersSlices";


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
    //voucher
    [voucherApi.reducerPath]: voucherApi.reducer,
    vouchers: vouchersSlices,
});
const middleware = [
    categoryApi.middleware,
    moviesApi.middleware,
    voucherApi.middleware,
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
