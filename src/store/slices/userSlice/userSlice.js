import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userAPI } from "../../../helper/userAPI";

export const fetchUser = createAsyncThunk(
    "user/fetchUser",
    async (userData) => {
        console.log(userData);
        try {
            const response = await userAPI(userData);
            return response;
        } catch (err) {
            throw Error(err);
        }
    }
);

export const userSlice = createSlice({
    name: "user",
    initialState: {
        error: null,
        loading: false,
        isLoggedIn: false,
    },
    reducers: {},
    extraReducers: {
        [fetchUser.pending]: (state, action) => {
            state.loading = true;
            state.error = null;
            state.isLoggedIn = false;
        },
        [fetchUser.fulfilled]: (state, action) => {
            state.loading = false;
            state.error = null;
            state.isLoggedIn = action.payload;
        },
        [fetchUser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        },
    },
});
export const { authUser } = userSlice.actions;
export default userSlice.reducer;
