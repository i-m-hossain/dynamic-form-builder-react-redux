import { configureStore } from "@reduxjs/toolkit";
import stepReducer from "./slices/stepSlice/stepSlice";
import userReducer from "./slices/userSlice/userSlice";
export default configureStore({
    reducer: {
        user: userReducer,
        steps: stepReducer,
    },
});
