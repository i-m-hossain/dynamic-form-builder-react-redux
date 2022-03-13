import { createSlice } from "@reduxjs/toolkit";
import { generateId } from "../../../helper/generateId";
import { handleStepField, handleStepName } from "../../helper/helper";
const initialState = {
    steps: [
        {
            id: generateId(8),
            name: "",
            description: "",
            isCurrentStep: false,
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
        addStep: (state) => {
            state.steps.push({
                id: generateId(6),
                name: "",
                description: "",
                isCurrentStep: false,
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
        handleCurrentStep: (state, { payload }) => {
            handleStepField(state.steps, payload);
        },
        addStepName: (state, { payload }) => {
            handleStepField(state.steps, payload);
        },
        addStepDescription: (state, { payload }) => {
            handleStepField(state.steps, payload);
        },
        addInput: (state, { payload }) => {
            state.steps.forEach((step) => {
                if (step.isCurrentStep === true) {
                    step.inputs.push({
                        id: generateId(8),
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
                    });
                }
            });
        },
        makeFirstStepActive: (state) => {
            state.steps[0].isCurrentStep = true;
        },
    },
});

export const {
    addStep,
    addStepName,
    addStepDescription,
    deleteStep,
    handleCurrentStep,
    addInput,
    makeFirstStepActive,
} = stepSlice.actions;
export default stepSlice.reducer;
