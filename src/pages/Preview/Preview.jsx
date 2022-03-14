import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const Preview = () => {
    let inputs = [];
    let options = [];
    const steps = useSelector((state) => state.steps.steps);
    let index = 1;
    console.log(steps);
    return (
        <div className="flex flex-col justify-center items-center my-4">
            <div className="bg-purple-200 w-2/4 p-4 rounded-md">
                <h2>{steps[index].name}</h2>
                <p>{steps[index].description}</p>
            </div>
            {/* <Outlet /> */}
            <div className="border-2 w-2/4 p-4 rounded-md mt-4 border-blue-400 space-y-4">
                {steps[index].inputs.map((input) => (
                    <div
                        key={input.id}
                        className="border-2 p-4 border-slate-200 flex flex-col space-y-4 rounded-md"
                    >
                        <label htmlFor="">{input.label}</label>
                        {(input.type === "text" || input.type === "email") && (
                            <input
                                type={input.type}
                                className="p-3 outline-none bg-slate-200 rounded-md"
                                placeholder="enter credentials"
                                required={input.required}
                            />
                        )}
                        {(input.type === "radio" ||
                            input.type === "checkbox") &&
                            input.options.map((option) => (
                                <div
                                    key={option.id}
                                    className="flex justify-start items-center space-x-4"
                                >
                                    {option.name && (
                                        <>
                                            <input
                                                type={input.type}
                                                name={input.name}
                                            />
                                            <h4>{option.name}</h4>
                                        </>
                                    )}
                                </div>
                            ))}
                        {input.type === "select" && (
                            <div className="flex justify-start items-center space-x-4">
                                <select
                                    name=""
                                    id=""
                                    className="w-1/4 border-2 rounded-md p-2"
                                >
                                    {input.options.map((option) => (
                                        <option
                                            key={option.id}
                                            value={option.name}
                                        >
                                            {option.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <div className="flex justify-start w-2/4 border p-4 border-purple-500 mt-4 rounded-md space-x-4">
                {steps.length > 1 && (
                    <>
                        <button className="border rounded-md p-2">Back</button>
                        <button className="border rounded-md p-2">Next</button>
                    </>
                )}
                <button className="border rounded-md p-2">Submit</button>
            </div>
        </div>
    );
};

export default Preview;
