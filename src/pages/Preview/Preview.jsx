import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

const Preview = () => {
    const steps = useSelector((state) => state.steps.steps);
    const [index, setIndex] = useState(0);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);
    const handleNextStep = (e) => {
        e.preventDefault();
        setIndex((state) => state + 1);
    };
    const handlePrevStep = (e) => {
        e.preventDefault();
        setIndex((state) => (state > 0 ? state - 1 : 0));
    };

    return (
        <form
            className="flex flex-col justify-center items-center my-4"
            onSubmit={handleSubmit(onSubmit)}
        >
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
                                {...register(
                                    `${input.name}`,
                                    input.required && {
                                        required: "This field is required",
                                    }
                                )}
                            />
                        )}
                        {/* {errors?.input?.name && (
                            <span>{errors?.input?.name?.message}</span>
                        )} */}
                        {input.type === "radio" &&
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
                                                {...register(
                                                    `${input.name}`,
                                                    input.required && {
                                                        required:
                                                            "This field is required",
                                                    }
                                                )}
                                            />
                                            <h4>{option.name}</h4>
                                        </>
                                    )}
                                </div>
                            ))}
                        {input.type === "checkbox" &&
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
                                                {...register(
                                                    `${input.name}`,
                                                    input.required && {
                                                        required:
                                                            "This field is required",
                                                    }
                                                )}
                                                value={option.name}
                                            />
                                            <label htmlFor={input.name}>
                                                {option.name}
                                            </label>
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
                                    {...register(
                                        `${input.name}`,
                                        input.required && {
                                            required: "This field is required",
                                        }
                                    )}
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
                        {index !== 0 && (
                            <button
                                className="border rounded-md p-2 bg-purple-300"
                                onClick={handlePrevStep}
                            >
                                Prev Step
                            </button>
                        )}
                        {index !== steps.length - 1 && (
                            <button
                                className="border rounded-md p-2 bg-red-300"
                                onClick={handleNextStep}
                            >
                                Next Step
                            </button>
                        )}
                    </>
                )}
                {index === steps.length - 1 && (
                    <button className="border rounded-md p-2 bg-orange-300 ">
                        Submit
                    </button>
                )}
            </div>
        </form>
    );
};

export default Preview;
