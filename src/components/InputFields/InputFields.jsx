import React from "react";
import SelectInput from "../SelectInput/SelectInput";
import ShowInput from "../ShowInput/ShowInput";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { deleteInput } from "../../store/slices/inputCounter/inputCounterSlice";
const InputFields = ({ input }) => {
    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(deleteInput(input.id));
    };
    console.log("input id---->", input);
    return (
        <div className="flex flex-col  rounded-md p-4  border-2 ">
            <div className="flex pb-4 space-x-4 border-b-2 ">
                <ShowInput input={input} />
                <SelectInput input={input} />
            </div>

            <div className="flex flex-row justify-end pt-4 space-x-10">
                <div>
                    <input type="checkbox" />{" "}
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
