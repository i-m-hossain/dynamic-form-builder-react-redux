import { configureStore } from "@reduxjs/toolkit";
import inputCounterReducer from "./slices/inputCounter/inputCounterSlice";
import stepReducer from "./slices/stepSlice/stepSlice";
import userReducer from "./slices/userSlice/userSlice";
export default configureStore({
    reducer: {
        inputCounter: inputCounterReducer,
        user: userReducer,
        steps: stepReducer,
    },
});
