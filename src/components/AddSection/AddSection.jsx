import React from "react";
import { GrSquare } from "react-icons/gr";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addInput } from "../../store/slices/inputCounter/inputCounterSlice";
import { generateId } from "../../helper/generateId";
import { addStep } from "../../store/slices/stepSlice/stepSlice";
const AddSection = () => {
    const dispatch = useDispatch();
    return (
        <div className="flex flex-col justify-center items-center border border-sm shadow-lg rounded-lg p-4">
            {/* add field or section */}
            <button
                className="text-6xl cursor-pointer"
                title="Add input"
                onClick={() =>
                    dispatch(
                        addInput({
                            id: generateId(8),
                            type: "",
                            label: "",
                            required: false,
                        })
                    )
                }
            >
                <AiOutlinePlusSquare />
            </button>
            <br />
            <button
                className="list-none text-5xl cursor-pointer"
                title="Add section"
                onClick={() => dispatch(addStep({ stepId: generateId(8) }))}
            >
                <GrSquare />
            </button>
        </div>
    );
};

export default AddSection;
