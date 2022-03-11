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
            state.values.forEach((item) => {
                if (item.id === payload) {
                    const index = state.values.indexOf(item);
                    if (index > -1) {
                        state.values.splice(index, 1);
                    }
                }
            });
        },
        updateInput: (state, { payload }) => {
            state.values.forEach((item) => {
                if (item.id === payload.id) {
                    const index = state.values.indexOf(item);
                    if (index > -1) {
                        state.values[index].type = payload.type;
                    }
                }
            });
        },
        addOption: (state, { payload }) => {
            console.log("payload---->", payload);
            state.values.forEach((item) => {
                if (item.id === payload.id) {
                    const index = state.values.indexOf(item);
                    console.log(index);
                    if (index > -1) {
                        state.values[index].options = state.values[index]
                            .options
                            ? [...state.values[index].options]
                            : [];

                        state.values[index].options.push(payload.option);
                    }
                }
            });
        },
    },
});
export const { addInput, deleteInput, updateInput, addOption } =
    inputCounterSlice.actions;
export default inputCounterSlice.reducer;
