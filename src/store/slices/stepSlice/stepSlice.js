import { createSlice } from "@reduxjs/toolkit";
import { generateId } from "../../../helper/generateId";
const initialState = {
    steps: [
        {
            id: generateId(8),
            name: "",
            description: "",
            isCurrentStep: "",
            inputs: [
                {
                    id: "",
                    label: "",
                    inputType: "",
                    required: false,
                    options: [
                        {
                            id: "",
                            name: "",
                            icon: "",
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
        addStep: (state, { payload }) => {
            state.steps.push({
                id: payload.stepId,
                name: "",
                description: "",
                isCurrentStep: "",
                inputs: [
                    {
                        id: "",
                        label: "",
                        inputType: "",
                        required: false,
                        options: [
                            {
                                id: "",
                                name: "",
                                icon: "",
                            },
                        ],
                    },
                ],
            });
        },
        deleteStep: (state, { payload }) => {
            state.steps.forEach((step) => {
                if (step.id === payload.id) {
                    const index = state.steps.indexOf(step);
                    if (index > -1) {
                        state.steps.splice(index, 1);
                    }
                }
            });
        },
        addStepName: (state, { payload }) => {},
        addStepDescription: (state, { payload }) => {},
    },
});

export const { addStep, addStepName, addStepDetails, deleteStep } =
    stepSlice.actions;
export default stepSlice.reducer;
