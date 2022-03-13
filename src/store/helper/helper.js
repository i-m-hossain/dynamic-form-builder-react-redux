export const handleStepField = (steps, payload) => {
    steps.forEach((step) => {
        if (payload.field === "isCurrentStep") {
            step.isCurrentStep = false;
        }
        if (step.id === payload.id) {
            const index = steps.indexOf(step);
            if (index > -1) {
                if (payload.field === "name") {
                    step.name = payload.name;
                } else if (payload.field === "description") {
                    step.description = payload.description;
                } else if (payload.field === "isCurrentStep") {
                    step.isCurrentStep = true;
                }
            }
        }
    });
};
export const updateInputs = (steps, payload) => {
    steps.forEach((step) => {
        if (step.id === payload.stepId) {
            const stepIndex = steps.indexOf(step);
            if (stepIndex > -1) {
                if (payload.field === "label") {
                    step.inputs.forEach((input) => {
                        if (input.id === payload.id) {
                            const index = step.inputs.indexOf(input);
                            if (index > -1) {
                                input.label = payload.label;
                            }
                        }
                    });
                } else if (payload.field === "inputType") {
                    step.inputs.forEach((input) => {
                        if (input.id === payload.id) {
                            const index = step.inputs.indexOf(input);
                            if (index > -1) {
                                input.type = payload.type;
                            }
                        }
                    });
                } else if (payload.field === "required") {
                    step.inputs.forEach((input) => {
                        if (input.id === payload.id) {
                            const index = step.inputs.indexOf(input);
                            if (index > -1) {
                                input.required = payload.required;
                            }
                        }
                    });
                }
            }
        }
    });
};
