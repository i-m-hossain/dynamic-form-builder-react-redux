import { configureStore } from "@reduxjs/toolkit";
import inputCounterReducer from "./slices/inputCounter/inputCounterSlice";
import userReducer from "./slices/userSlice/userSlice";
export default configureStore({
    reducer: {
        inputCounter: inputCounterReducer,
        user: userReducer,
    },
});
