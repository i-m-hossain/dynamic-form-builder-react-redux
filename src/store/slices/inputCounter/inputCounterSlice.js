import { createSlice } from "@reduxjs/toolkit";
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
            // state.options.length > 0
            //     ? state.options.forEach((option) => {
            //           if (option.id === payload.id) {
            //               const index = state.options.indexOf(option);
            //               if (index > -1) {
            //                   state.options.splice(index, 1);
            //                   state.options.push(payload);
            //               }
            //           }
            //       })
            //     : state.options.splice(0, 1, payload);
            // state.options.push(payload);
        },
        // addOption: (state, { payload }) => {
        //     console.log("payload---->", payload);
        //     state.values.forEach((item) => {
        //         if (item.id === payload.id) {
        //             const index = state.values.indexOf(item);
        //             console.log(index);
        //             if (index > -1) {
        //                 state.values[index].options = state.values[index]
        //                     .options
        //                     ? [...state.values[index].options]
        //                     : [];

        //                 state.values[index].options.push(payload.option);
        //             }
        //         }
        //     });
        // },
        addOption: (state, { payload }) => {
            state.options.push(payload);
        },
        deleteOption: (state, { payload }) => {
            state.options.forEach((option) => {
                console.log("option---> ", payload);
                if (option.optionId === payload) {
                    const index = state.options.indexOf(option);
                    if (index > -1) {
                        state.options.splice(index, 1);
                    }
                }
            });
        },
    },
});
export const { addInput, deleteInput, updateInput, addOption, deleteOption } =
    inputCounterSlice.actions;
export default inputCounterSlice.reducer;
