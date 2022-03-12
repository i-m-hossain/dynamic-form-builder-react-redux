import React from "react";
import SelectInput from "../SelectInput/SelectInput";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import {
    deleteInput,
    handleCheckRequired,
} from "../../store/slices/inputCounter/inputCounterSlice";
import InputLabel from "../InputLabel/InputLabel";
import InputOptions from "../InputOptions/InputOptions";
const InputFields = ({ input }) => {
    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(deleteInput(input.id));
    };

    return (
        <div className="flex flex-col  rounded-md p-4  border-2 ">
            <div className="flex flex-col pb-4 space-y-4 border-b-2 ">
                <div className="flex space-x-4">
                    <InputLabel input={input} />
                    <SelectInput input={input} />
                </div>
                <div>
                    {(input.type === "radio" ||
                        input.type === "checkbox" ||
                        input.type === "select") && (
                        <InputOptions input={input}></InputOptions>
                    )}
                </div>
            </div>

            <div className="flex flex-row justify-end pt-4 space-x-10">
                <div>
                    <input
                        type="checkbox"
                        value={input.required}
                        onChange={(e) =>
                            dispatch(
                                handleCheckRequired({
                                    id: input.id,
                                    required: e.target.checked,
                                })
                            )
                        }
                    />{" "}
                    <label htmlFor="required">Required</label>
                </div>
                <RiDeleteBin5Line
                    className="text-3xl cursor-pointer text-red-400 hover:text-red-600"
                    title="Delete input"
                    onClick={handleDelete}
                />
            </div>
        </div>
    );
};

export default InputFields;
