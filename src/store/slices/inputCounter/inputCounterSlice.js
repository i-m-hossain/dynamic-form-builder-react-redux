import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    values: [],
};

export const inputCounterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        addInput: (state, { payload }) => {
            state.values.push(payload);
        },
        deleteInput: (state, { payload }) => {
            console.log(payload);
            state.values.forEach((item) => {
                if (item.id === payload) {
                    const index = state.values.indexOf(item);
                    if (index > -1) {
                        state.values.splice(index, 1);
                    }
                }
            });
        },
    },
});
export const { addInput, deleteInput } = inputCounterSlice.actions;
export default inputCounterSlice.reducer;
