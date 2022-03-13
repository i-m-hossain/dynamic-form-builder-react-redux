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
