import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    addOption,
    deleteOption,
} from "../../store/slices/inputCounter/inputCounterSlice";
import { BsCircle } from "react-icons/bs";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { generateId } from "../../helper/generateId";

const InputOptions = ({ input }) => {
    const dispatch = useDispatch();
    const options = useSelector((state) => state.inputCounter.options);
    let optionsById = [];
    options.forEach((option) => {
        if (option.inputId === input.id) {
            optionsById.push(option);
        }
    });
    console.log("optionsById---->", optionsById);
    const handleDelete = (optionId) => {
        console.log("option id", optionId);
        dispatch(deleteOption(optionId));
    };

    return (
        <div className="flex">
            <div className="flex flex-col space-y-2">
                {optionsById.length > 0
                    ? optionsById.map((option, index) => (
                          <div
                              key={option.optionId}
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
                              />
                              <AiOutlineMinusCircle
                                  className="text-xl cursor-pointer text-red-400 hover:text-red-600"
                                  title="Delete input"
                                  onClick={() => handleDelete(option.optionId)}
                              />
                          </div>
                      ))
                    : ""}
            </div>

            <div className="mx-auto pt-1">
                <button
                    className="cursor-pointer text-2xl"
                    onClick={() => {
                        dispatch(
                            addOption({
                                inputId: input.id,
                                type: input.type,
                                optionId: generateId(8),
                            })
                        );
                    }}
                >
                    <AiOutlinePlusCircle className="ml-4" />
                </button>
            </div>
        </div>
    );
};

export default InputOptions;
