import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    deleteOption,
    addOptionTitle,
} from "../../store/slices/inputCounter/inputCounterSlice";
import { BsCircle } from "react-icons/bs";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { addOption } from "../../store/slices/stepSlice/stepSlice";

const InputOptions = ({ input, stepId }) => {
    const dispatch = useDispatch();
    const steps = useSelector((state) => state.steps.steps);
    console.log("steps--->", steps);
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

    const handleDelete = (optionId) => {
        console.log("option id", optionId);
        dispatch(deleteOption(optionId));
    };

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
                            value={option.optionTitle}
                            onChange={(e) =>
                                dispatch(
                                    addOptionTitle({
                                        inputId: input.id,
                                        title: e.target.value,
                                        optionId: option.optionId,
                                    })
                                )
                            }
                        />
                        <AiOutlineMinusCircle
                            className="text-xl cursor-pointer text-red-400 hover:text-red-600"
                            title="Delete input"
                            onClick={() => handleDelete(option.optionId)}
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
