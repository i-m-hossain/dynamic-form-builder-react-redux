import React from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useDispatch } from "react-redux";
import { addOption } from "../../store/slices/inputCounter/inputCounterSlice";
import { BsCircle } from "react-icons/bs";
const ShowInput = ({ input }) => {
    const dispatch = useDispatch();

    return (
        <div className="w-1/2 flex flex-col space-y-4">
            <input
                type="text"
                placeholder="Label"
                className="outline-none border-b-2 w-full  border-gray-200 p-2 rounded-sm"
            />
            {input.type === "radio" && (
                <div className="flex space-x-4">
                    <div className="flex">
                        <div className="flex justify-center items-center space-x-2">
                            <BsCircle />
                            <input
                                type="text"
                                placeholder="option 1"
                                className="outline-none p-1"
                                onBlur={(e) =>
                                    dispatch(
                                        addOption({
                                            id: input.id,
                                            option: e.target.value,
                                        })
                                    )
                                }
                            />
                        </div>
                    </div>
                    <div>
                        <IoIosAddCircleOutline
                            className="text-2xl"
                            title="add another option"
                            // onClick={handleAddOption}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ShowInput;
