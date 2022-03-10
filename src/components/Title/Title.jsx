import React from "react";

const Title = () => {
    return (
        <div className="flex flex-col space-y-4 w-4/4 rounded-md p-4 border-2">
            {/* Title */}
            <input
                type="text"
                placeholder="Step Name"
                className="outline-none border-b-2 p-2 rounded-sm"
            />
            <textarea
                name=""
                id=""
                cols="20"
                rows="3"
                className="outline-none border-b-2 p-2 rounded-sm"
                placeholder="Description"
            ></textarea>
        </div>
    );
};

export default Title;
