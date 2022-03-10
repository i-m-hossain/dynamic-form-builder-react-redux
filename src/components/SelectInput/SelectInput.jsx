import React from "react";
import inputs from "./data";
const SelectInput = () => {
    const items = inputs || [];
    return (
        <div className="">
            {/* selectInput */}
            <select name="" id="" className="outline-none p-2">
                {items.map((item, index) => (
                    <option key={index} value={item}>
                        Add {item} input
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SelectInput;
