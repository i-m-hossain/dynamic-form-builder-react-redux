import { createSlice } from "@reduxjs/toolkit";
import { generateId } from "../../../helper/generateId";
const initialState = {
    steps: [
        {
            id: generateId(6),
            name: "",
            description: "",
            inputs: [
                {
                    label: "",
                    inputType: "",
                    options: [
                        {
                            id: "",
                            name: "",
                        },
                    ],
                },
            ],
        },
    ],
};
export const stepSlice = createSlice({
    name: "step",
    initialState,
    reducers: {
        addStepName: (state, { payload }) => {},
        addStepDetails: (state, { payload }) => {},
    },
});

export const { addStepName, addStepDetails } = stepSlice.actions;
export default stepSlice.reducer;
