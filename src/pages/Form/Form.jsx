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
    const steps = useSelector((state) => state.steps.steps);
    console.log("steps---->", steps);
    const dispatch = useDispatch();
    return (
        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-20 p-2 md:p-6 bg-slate-50 md:w-3/4 mx-auto  ">
            <div className="w-full space-y-4 mx-auto order-last md:order-first">
                {steps.map((step, index) => (
                    <div
                        className={`${
                            step.isCurrentStep ? "border-4 border-blue-400" : ""
                        } space-y-8 border  p-6 rounded-md`}
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
                            <div className="flex justify-between items-center px-4 bg-purple-400 p-2 rounded-md">
                                <h4>
                                    Step {index + 1} of {steps.length}
                                </h4>
                                {index !== 0 && (
                                    <button
                                        className="text-2xl text-red-400 bg-slate-100 rounded-full p-1"
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
                        {step.inputs.map((input) => (
                            <InputFields
                                key={input.id}
                                input={input}
                                stepId={step.id}
                            />
                        ))}
                    </div>
                ))}
            </div>
            <AddSection />
        </div>
    );
};

export default Form;
