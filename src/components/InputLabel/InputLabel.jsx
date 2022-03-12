import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addInputLabel } from "../../store/slices/inputCounter/inputCounterSlice";

const InputLabel = ({ input }) => {
    const inputs = useSelector((state) => state.inputCounter.values);
    const dispatch = useDispatch();

    return (
        <div className="w-1/2 flex flex-col space-y-4">
            <input
                type="text"
                placeholder="Label"
                className="outline-none border-b-2 w-full  border-gray-200 p-2 rounded-sm"
                value={inputs.label}
                onChange={(e) =>
                    dispatch(
                        addInputLabel({ id: input.id, label: e.target.value })
                    )
                }
            />
        </div>
    );
};

export default InputLabel;
