import React from "react";
import { useDispatch } from "react-redux";

const InputLabel = ({ input }) => {
    const dispatch = useDispatch();

    return (
        <div className="w-1/2 flex flex-col space-y-4">
            <input
                type="text"
                placeholder="Label"
                className="outline-none border-b-2 w-full  border-gray-200 p-2 rounded-sm"
            />
        </div>
    );
};

export default InputLabel;
