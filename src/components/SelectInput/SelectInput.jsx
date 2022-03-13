import React from "react";
import { useDispatch } from "react-redux";
import { updateInput } from "../../store/slices/stepSlice/stepSlice";
import inputs from "./data";
const SelectInput = ({ input, stepId }) => {
    const dispatch = useDispatch();
    const items = inputs || [];
    return (
        <div className="w-1/2 ">
            {/* selectInput */}
            <select
                name=""
                id=""
                className="outline-none w-full p-2 border-b-2 border-gray-200"
                onChange={(e) =>
                    dispatch(
                        updateInput({
                            id: input.id,
                            type: e.target.value,
                            stepId: stepId,
                            field: "inputType",
                        })
                    )
                }
            >
                <option>Select input</option>
                {items.map((item, index) => (
                    <option key={index} value={item}>
                        {item}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SelectInput;
