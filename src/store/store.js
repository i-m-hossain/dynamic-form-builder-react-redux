import { combineReducers, configureStore } from "@reduxjs/toolkit";
import stepReducer from "./slices/stepSlice/stepSlice";
import userReducer from "./slices/userSlice/userSlice";
import storage from "redux-persist/lib/storage";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
const reducers = combineReducers({
    user: userReducer,
    steps: stepReducer,
});
const persistConfig = {
    key: "root",
    version: 1,
    storage,
};
const persistedReducer = persistReducer(persistConfig, reducers);
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
        }),
});
export const persistor = persistStore(store);
