import React from "react";
import { useDispatch } from "react-redux";
import { updateInput } from "../../store/slices/stepSlice/stepSlice";

const InputLabel = ({ input, stepId }) => {
    const dispatch = useDispatch();
    return (
        <div className="w-1/2 flex flex-col space-y-4">
            <input
                type="text"
                placeholder="Label"
                className="outline-none border-b-2 w-full  border-gray-200 p-2 rounded-sm"
                value={input.label}
                onChange={(e) =>
                    dispatch(
                        updateInput({
                            id: input.id,
                            label: e.target.value,
                            stepId: stepId,
                            field: "label",
                        })
                    )
                }
            />
        </div>
    );
};

export default InputLabel;
