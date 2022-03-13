import { createSlice } from "@reduxjs/toolkit";
import { generateId } from "../../../helper/generateId";
import { handleStepField, updateInputs } from "../../helper/helper";
const initialState = {
    steps: [
        {
            id: generateId(8),
            name: "",
            description: "",
            isCurrentStep: false,
            inputs: [
                {
                    id: generateId(8),
                    label: "",
                    type: "",
                    required: false,
                    options: [
                        {
                            id: generateId(8),
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
                        id: generateId(8),
                        label: "",
                        type: "",
                        required: false,
                        options: [
                            {
                                id: generateId(8),
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
        addInput: (state) => {
            state.steps.forEach((step) => {
                if (step.isCurrentStep === true) {
                    step.inputs.push({
                        id: generateId(8),
                        label: "",
                        type: "",
                        required: false,
                        options: [
                            {
                                id: generateId(8),
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
        updateInput: (state, { payload }) => {
            updateInputs(state.steps, payload);
        },
        deleteSingleInput: (state, { payload }) => {
            console.log(payload);
            state.steps.forEach((step) => {
                if (step.id === payload.stepId) {
                    const stepIndex = state.steps.indexOf(step);
                    if (stepIndex > -1) {
                        step.inputs.forEach((input) => {
                            if (input.id === payload.id) {
                                console.log("payload----->", payload);
                                const index = step.inputs.indexOf(input);
                                console.log("index", index);
                                if (index > -1) {
                                    step.inputs.splice(index, 1);
                                }
                            }
                        });
                    }
                }
            });
        },
        addOption: (state) => {
            state.steps.forEach((step) => {
                if (step.isCurrentStep === true) {
                    step.inputs.forEach((input) => {
                        input.options.push({
                            id: generateId(8),
                            name: "",
                            icon: "",
                        });
                    });
                }
            });
        },
        updateOptionName: (state, { payload }) => {
            state.steps.forEach((step) => {
                if (step.id === payload.stepId) {
                    step.inputs.forEach((input) => {
                        if (input.id === payload.inputId) {
                            input.options.forEach((option) => {
                                if (option.id === payload.optionId) {
                                    const index = input.options.indexOf(option);
                                    if (index > -1) {
                                        option.name = payload.name;
                                    }
                                }
                            });
                        }
                    });
                }
            });
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
    updateInput,
    deleteSingleInput,
    addOption,
    updateOptionName,
} = stepSlice.actions;
export default stepSlice.reducer;
