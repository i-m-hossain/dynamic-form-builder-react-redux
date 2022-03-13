import React from "react";
import SelectInput from "../SelectInput/SelectInput";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import InputLabel from "../InputLabel/InputLabel";
import InputOptions from "../InputOptions/InputOptions";
import {
    deleteSingleInput,
    updateInput,
} from "../../store/slices/stepSlice/stepSlice";

const InputFields = ({ input, stepId }) => {
    const dispatch = useDispatch();
    return (
        <div className="flex flex-col  rounded-md  ">
            <div className="flex flex-col pb-4 space-y-4 border-b-2 ">
                <div className="flex space-x-4">
                    <InputLabel input={input} stepId={stepId} />
                    <SelectInput input={input} stepId={stepId} />
                </div>
                {/* <div>
                    {(input.type === "radio" ||
                        input.type === "checkbox" ||
                        input.type === "select") && (
                        <InputOptions input={input}></InputOptions>
                    )}
                </div> */}
            </div>

            <div className="flex flex-row justify-end pt-4 space-x-10">
                <div>
                    <input
                        type="checkbox"
                        value={input.required}
                        onChange={(e) =>
                            dispatch(
                                updateInput({
                                    id: input.id,
                                    required: e.target.checked,
                                    stepId: stepId,
                                    field: "required",
                                })
                            )
                        }
                    />{" "}
                    <label htmlFor="required">Required</label>
                </div>
                <RiDeleteBin5Line
                    className="text-3xl cursor-pointer text-red-400 hover:text-red-600"
                    title="Delete input"
                    onClick={() =>
                        dispatch(
                            deleteSingleInput({ id: input.id, stepId: stepId })
                        )
                    }
                />
            </div>
        </div>
    );
};

export default InputFields;
