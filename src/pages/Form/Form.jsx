import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AddSection from "../../components/AddSection/AddSection";
import InputFields from "../../components/InputFields/InputFields";
import Title from "../../components/Title/Title";
import { RiDeleteBin5Line } from "react-icons/ri";
import {
    deleteStep,
    handleCurrentStep,
} from "../../store/slices/stepSlice/stepSlice";
const Form = () => {
    const inputs = useSelector((state) => state.inputCounter.values);
    const steps = useSelector((state) => state.steps.steps);
    const dispatch = useDispatch();
    return (
        <div className="flex justify-center items-center space-x-20 p-10 bg-slate-50 w-3/4 mx-auto mt-10">
            <div className="w-full space-y-4 mx-auto">
                {steps.map((step, index) => (
                    <div
                        className="space-y-8 bg-blue-100 p-6 rounded-md"
                        onClick={() => {
                            dispatch(
                                handleCurrentStep({
                                    id: step.id,
                                    field: "isCurrentStep",
                                })
                            );
                        }}
                        key={step.id}
                    >
                        {steps.length !== 1 && (
                            <div className="flex justify-between items-center px-4 bg-green-200 p-2 rounded-md">
                                <h4>Step {index + 1}</h4>
                                {index !== 0 && (
                                    <button
                                        className="text-2xl text-red-400"
                                        onClick={() =>
                                            dispatch(
                                                deleteStep({ id: step.id })
                                            )
                                        }
                                    >
                                        <RiDeleteBin5Line />
                                    </button>
                                )}
                            </div>
                        )}
                        <Title step={step} />
                        {inputs.map((item) => (
                            <InputFields key={item.id} input={item} />
                        ))}
                    </div>
                ))}
            </div>
            <AddSection />
        </div>
    );
};

export default Form;
