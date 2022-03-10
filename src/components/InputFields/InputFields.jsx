import React from "react";
import SelectInput from "../SelectInput/SelectInput";
import ShowInput from "../ShowInput/ShowInput";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { deleteInput } from "../../store/slices/inputCounter/inputCounterSlice";
const InputFields = ({ input }) => {
    const dispatch = useDispatch();
    const handleDelete = () => {
        // const confirm = window.confirm("are you sure want to delete?");
        // if (confirm) {
        dispatch(deleteInput(input.id));
        // }
    };
    return (
        <div className="flex justify-center items-center space-x-2 rounded-md p-4  border-2 ">
            <ShowInput />
            <SelectInput />
            <RiDeleteBin5Line
                className="text-3xl cursor-pointer text-red-400 hover:text-red-600"
                title="Delete input"
                onClick={handleDelete}
            />
        </div>
    );
};

export default InputFields;
