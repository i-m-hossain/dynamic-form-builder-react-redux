import React from "react";
import { useSelector } from "react-redux";
import AddSection from "../../components/AddSection/AddSection";
import InputFields from "../../components/InputFields/InputFields";
import Title from "../../components/Title/Title";
const Form = () => {
    const inputs = useSelector((state) => state.inputCounter.values);

    return (
        <div>
            <div className="flex justify-center items-center space-x-20 p-10 bg-slate-50 w-3/4 mx-auto mt-10">
                <div className="space-y-4 w-2/4">
                    <Title />
                    {inputs.map((item) => (
                        <InputFields key={item.id} input={item} />
                    ))}
                </div>
                <AddSection />
            </div>
        </div>
    );
};

export default Form;
