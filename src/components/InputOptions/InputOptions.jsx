import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsCircle } from "react-icons/bs";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";
import {
    addOption,
    deleteOptionName,
    updateOptionName,
} from "../../store/slices/stepSlice/stepSlice";

const InputOptions = ({ input, stepId }) => {
    const dispatch = useDispatch();
    const steps = useSelector((state) => state.steps.steps);
    let options = [];
    steps.forEach((step) => {
        if (step.id === stepId) {
            step.inputs.forEach((item) => {
                if (item.id === input.id) {
                    item.options.forEach((option) => {
                        options.push(option);
                    });
                }
            });
        }
    });

    return (
        <div className="flex">
            <div className="flex flex-col space-y-2">
                {options.map((option, index) => (
                    <div
                        key={option.id}
                        className="flex justify-center items-center space-x-2"
                    >
                        {input.type === "radio" && <BsCircle />}
                        {input.type === "checkbox" && (
                            <MdCheckBoxOutlineBlank />
                        )}
                        {input.type === "select" && index + 1 + "."}
                        <input
                            type="text"
                            placeholder={`option ${index + 1}`}
                            className="outline-none p-1 rounded-md"
                            value={option.name}
                            onChange={(e) =>
                                dispatch(
                                    updateOptionName({
                                        optionId: option.id,
                                        inputId: input.id,
                                        stepId: stepId,
                                        name: e.target.value,
                                    })
                                )
                            }
                        />
                        <AiOutlineMinusCircle
                            className="text-xl cursor-pointer text-red-400 hover:text-red-600"
                            title="Delete input"
                            onClick={() =>
                                dispatch(
                                    deleteOptionName({
                                        stepId: stepId,
                                        inputId: input.id,
                                        optionId: option.id,
                                    })
                                )
                            }
                        />
                    </div>
                ))}
            </div>

            <div className="mx-auto pt-1">
                <button
                    className="cursor-pointer text-2xl"
                    onClick={() => {
                        dispatch(addOption());
                    }}
                >
                    <AiOutlinePlusCircle className="ml-4" />
                </button>
            </div>
        </div>
    );
};

export default InputOptions;
