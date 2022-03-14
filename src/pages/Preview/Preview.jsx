import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const Preview = () => {
    let steps = [];
    let inputs = [];
    let options = [];
    const formSteps = useSelector((state) => state.steps.steps);
    console.log("state----->", formSteps);
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="bg-purple-400 w-2/4 p-4 rounded-md">
                <h2>Step Title</h2>
                <p>Step description</p>
                {/* <p>Logged in as admin@admin.com</p> */}
            </div>
            {/* <Outlet /> */}
            <div className="border-2 w-2/4 p-4 rounded-md mt-4 border-blue-400">
                <div className="border-2 p-4 border-slate-200 flex flex-col space-y-4">
                    <label htmlFor="">label</label>
                    <input type="text" className="outline-none bg-slate-200" />
                </div>
                <div className="border-2 p-4 border-slate-200 flex flex-col space-y-4">
                    <label htmlFor="">label</label>
                    <input type="text" className="outline-none bg-slate-200" />
                </div>
                <div className="border-2 p-4 border-slate-200 flex flex-col space-y-4">
                    <label htmlFor="">label</label>
                    <input type="text" className="outline-none bg-slate-200" />
                </div>
            </div>
            <div>
                <button>Next</button>
                <button>Submit</button>
            </div>
        </div>
    );
};

export default Preview;
