import { useState } from "react";

export default function AuthForm() {
    const [tab, setTab] = useState("login");

    return (
        <div className="flex items-center justify-center min-h-screen bg-base-200">
            <div className="w-full max-w-md p-6 bg-base-100 shadow-xl rounded-box">
                <div role="tablist" className="tabs tabs-boxed mb-4 flex justify-center">
                    <button
                        role="tab"
                        className={`tab ${tab === "login" ? "tab-active" : ""}`}
                        onClick={() => setTab("login")}
                    >
                        Login
                    </button>
                    <button
                        role="tab"
                        className={`tab ${tab === "register" ? "tab-active" : ""}`}
                        onClick={() => setTab("register")}
                    >
                        Register
                    </button>
                </div>

                {tab === "login" && (
                    <form className="space-y-6">
                        <h2 className="text-xl font-bold text-center">Login</h2>
                        <div className="form-control w-11/12 mx-auto space-y-2">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email@example.com" className="input input-bordered w-full" required />
                        </div>
                        <div className="form-control w-11/12 mx-auto space-y-2">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered w-full" required />
                        </div>
                        <button type="submit" className="btn btn-primary w-full">Login</button>
                    </form>
                )}

                {tab === "register" && (
                    <form className="space-y-6">
                        <h2 className="text-xl font-bold text-center">Register</h2>
                        <div className="form-control w-11/12 mx-auto space-y-2">
                            <label className="label">
                                <span className="label-text">Username</span>
                            </label>
                            <input type="text" placeholder="Your username" className="input input-bordered w-full" required />
                        </div>
                        <div className="form-control w-11/12 mx-auto space-y-2">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email@example.com" className="input input-bordered w-full" required />
                        </div>
                        <div className="form-control w-11/12 mx-auto space-y-2">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered w-full" required />
                        </div>
                        <button type="submit" className="btn btn-secondary w-full">Register</button>
                    </form>
                )}
            </div>
        </div>
    );
}