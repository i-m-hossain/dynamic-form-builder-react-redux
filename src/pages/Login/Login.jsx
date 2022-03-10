import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { fetchUser } from "../../store/slices/userSlice/userSlice";

const Login = () => {
    const user = useSelector((state) => state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(fetchUser({ email, password }));
    };
    useEffect(() => {
        if (user.isLoggedIn) {
            navigate("/form");
        }
    }, [user.isLoggedIn, navigate]);
    return (
        <section className="flex justify-center items-center h-screen bg-gray-100">
            <form
                className="max-w-md w-full bg-white rounded p-6 space-y-4"
                onSubmit={handleSubmit}
            >
                <div className="mb-4">
                    <p className="text-gray-600">Sign In</p>
                    <h2 className="text-xl font-bold">Join our community</h2>
                    <h4 className="text-center text-red-600">
                        {user.error ? "Admin credentials did not match" : ""}
                    </h4>
                </div>
                <div>
                    <input
                        className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <input
                        className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <button
                        className="w-full py-4 bg-blue-600 hover:bg-blue-700 rounded text-sm font-bold text-gray-50 transition duration-200"
                        type="submit"
                    >
                        {user.loading ? "loading..." : "Sign in"}
                    </button>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex flex-row items-center">
                        <input
                            type="checkbox"
                            className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                        />
                        <label
                            htmlFor="comments"
                            className="ml-2 text-sm font-normal text-gray-600"
                        >
                            Remember me
                        </label>
                    </div>
                    <div>
                        <a
                            className="text-sm text-blue-600 hover:underline"
                            href="#"
                        >
                            Forgot password?
                        </a>
                    </div>
                </div>
            </form>
        </section>
    );
};

export default Login;
