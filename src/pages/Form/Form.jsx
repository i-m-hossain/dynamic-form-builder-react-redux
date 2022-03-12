import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AddSection from "../../components/AddSection/AddSection";
import InputFields from "../../components/InputFields/InputFields";
import Title from "../../components/Title/Title";
import { RiDeleteBin5Line } from "react-icons/ri";
import { deleteStep } from "../../store/slices/stepSlice/stepSlice";
const Form = () => {
    const inputs = useSelector((state) => state.inputCounter.values);
    const steps = useSelector((state) => state.steps.steps);
    const dispatch = useDispatch();
    return (
        <div className="flex justify-center items-center space-x-20 p-10 bg-slate-50 w-3/4 mx-auto mt-10">
            <div className="w-full space-y-4 mx-auto">
                {steps.map((step, index) => (
                    <div className="space-y-4 ">
                        <div className="flex justify-between px-4">
                            <h4>Step {index + 1}</h4>
                            {index !== 0 && (
                                <button
                                    className="text-lg text-red-400"
                                    onClick={() =>
                                        dispatch(deleteStep({ id: step.id }))
                                    }
                                >
                                    <RiDeleteBin5Line title="Delete step" />
                                </button>
                            )}
                        </div>
                        <Title />
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
