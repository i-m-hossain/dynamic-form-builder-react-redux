import { createSlice } from "@reduxjs/toolkit";
import { useForm } from "react-hook-form";
const initialState = {
    values: [],
    options: [],
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
            if (state.options.length > 0) {
                state.options.forEach((option) => {
                    if (option.inputId === payload.id) {
                        const index = state.options.indexOf(option);
                        if (index > -1) {
                            state.options[index].type = payload.type;
                        }
                    }
                });
            }
        },
        addOption: (state, { payload }) => {
            state.options.push(payload);
        },
        deleteOption: (state, { payload }) => {
            state.options.forEach((option) => {
                if (option.optionId === payload) {
                    const index = state.options.indexOf(option);
                    if (index > -1) {
                        state.options.splice(index, 1);
                    }
                }
            });
        },
        addOptionTitle: (state, { payload }) => {
            state.options.forEach((option) => {
                if (option.optionId === payload.optionId) {
                    const index = state.options.indexOf(option);
                    if (index > -1) {
                        state.options[index].optionTitle = payload.title;
                    }
                }
            });
        },
        addInputLabel: (state, { payload }) => {
            state.values.forEach((item) => {
                if (item.id === payload.id) {
                    const index = state.values.indexOf(item);
                    if (index > -1) {
                        state.values[index].label = payload.label;
                    }
                }
            });
        },
        handleCheckRequired: (state, { payload }) => {
            state.values.forEach((item) => {
                if (item.id === payload.id) {
                    const index = state.values.indexOf(item);
                    if (index > -1) {
                        state.values[index].required = payload.required;
                    }
                }
            });
        },
    },
});
export const {
    addInput,
    deleteInput,
    updateInput,
    addOption,
    deleteOption,
    addOptionTitle,
    addInputLabel,
    handleCheckRequired,
} = inputCounterSlice.actions;
export default inputCounterSlice.reducer;
