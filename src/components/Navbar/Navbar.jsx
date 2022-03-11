import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
    const user = useSelector((state) => state.user);
    return (
        user.isLoggedIn && (
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <Link to="/form" className="mr-5 hover:text-gray-900">
                            Create Form
                        </Link>
                        <Link
                            to="/preview"
                            className="mr-5 hover:text-gray-900"
                        >
                            Preview
                        </Link>
                    </nav>
                </div>
            </header>
        )
    );
};

export default Navbar;
