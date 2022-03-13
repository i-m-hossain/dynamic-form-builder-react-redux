import React, { useEffect } from "react";
import { GrSquare } from "react-icons/gr";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
    addInput,
    addStep,
    makeFirstStepActive,
} from "../../store/slices/stepSlice/stepSlice";
const AddSection = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(makeFirstStepActive());
    }, [dispatch]);
    return (
        <div className="flex flex-col justify-center items-center border border-sm shadow-lg rounded-lg p-4">
            {/* add field or section */}
            <button
                className="text-6xl cursor-pointer"
                title="Add input"
                onClick={() => dispatch(addInput())}
            >
                <AiOutlinePlusSquare />
            </button>
            <br />
            <button
                className="list-none text-5xl cursor-pointer"
                title="Add section"
                onClick={() => dispatch(addStep())}
            >
                <GrSquare />
            </button>
        </div>
    );
};

export default AddSection;
