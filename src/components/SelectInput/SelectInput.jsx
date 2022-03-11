import React from "react";
import { useDispatch } from "react-redux";
import { updateInput } from "../../store/slices/inputCounter/inputCounterSlice";
import inputs from "./data";
const SelectInput = ({ input }) => {
    const dispatch = useDispatch();
    const items = inputs || [];
    console.log("item", input);
    return (
        <div className=" w-1/2 ">
            {/* selectInput */}
            <select
                name=""
                id=""
                className="outline-none w-full p-2 border-b-2 border-gray-200"
                onClick={(e) =>
                    dispatch(
                        updateInput({ id: input.id, type: e.target.value })
                    )
                }
            >
                <option>Select input</option>
                {items.map((item, index) => (
                    <option key={index} value={item}>
                        {item} input
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SelectInput;
