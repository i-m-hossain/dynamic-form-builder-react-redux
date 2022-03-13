import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    addStepDescription,
    addStepName,
} from "../../store/slices/stepSlice/stepSlice";

const Title = ({ step }) => {
    console.log(step);
    const dispatch = useDispatch();
    return (
        <div className="flex flex-col space-y-4 w-4/4 rounded-md ">
            {/* Title */}
            <input
                type="text"
                placeholder="Step Name"
                className="outline-none border-b-2 border-gray-200 p-2 rounded-md"
                value={step.name}
                onChange={(e) =>
                    dispatch(
                        addStepName({
                            id: step.id,
                            field: "name",
                            name: e.target.value,
                        })
                    )
                }
            />
            <textarea
                name=""
                id=""
                cols="20"
                rows="3"
                className="outline-none border-b-2 border-gray-200 p-2 rounded-md"
                placeholder="Description"
                value={step.description}
                onChange={(e) =>
                    dispatch(
                        addStepDescription({
                            id: step.id,
                            field: "description",
                            description: e.target.value,
                        })
                    )
                }
            ></textarea>
        </div>
    );
};

export default Title;
