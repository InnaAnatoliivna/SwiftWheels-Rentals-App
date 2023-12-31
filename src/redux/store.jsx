import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import { advertsReducer } from './reducers/advertsSlice'
import { filtersReducer } from './reducers/filterSlice'
import { favoritiesReducer } from './reducers/favoritiesSlice'
import { modalReducer } from './reducers/modalSlice'

export const LOCAL_STORAGE_KEY = 'root';

const persistConfig = {
    key: LOCAL_STORAGE_KEY,
    storage,
    whitelist: ['favorities', 'items'],
};

const persistedFavoritiesReducer = persistReducer(persistConfig, favoritiesReducer);

export const store = configureStore({
    reducer: {
        adverts: advertsReducer,
        favorities: persistedFavoritiesReducer,
        filter: filtersReducer,
        modal: modalReducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        })
});

export const persistor = persistStore(store);