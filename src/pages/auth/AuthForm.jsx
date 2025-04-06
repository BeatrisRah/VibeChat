import { useState } from "react";
import { useForm } from "react-hook-form"

export default function AuthForm() {
    const [tab, setTab] = useState("login");
    const {register, handleSubmit, formState: { errors }, watch} = useForm()

    const password = watch('password')

    const onSubmit = (data) => {
        if (tab === "login") {
          
          console.log("Logging in with:", data);
        } else if (tab === "register") {
         
          console.log("Registering with:", data);
        }
      };

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
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <h2 className="text-xl font-bold text-center">Login</h2>
                        <div className="form-control w-11/12 mx-auto space-y-2">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input 
                                type="email"
                                {...register("email", { required: "Email is required" })} 
                                placeholder="email@example.com" 
                                className="input input-bordered w-full" 
                                />
                                {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                        </div>
                        <div className="form-control w-11/12 mx-auto space-y-2">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input 
                                type="password" 
                                {...register("password", { required: "Password is required" })}
                                placeholder="password" 
                                className="input input-bordered w-full" />
                                {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                        </div>
                        <button type="submit" className="btn btn-primary w-full">Login</button>
                    </form>
                )}

                {tab === "register" && (
                    <form  onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <h2 className="text-xl font-bold text-center">Register</h2>
                        <div className="form-control w-11/12 mx-auto space-y-2">
                            <label className="label">
                                <span className="label-text">Username</span>
                            </label>
                            <input 
                            type="text" 
                            {...register("username", { required: "Username is required" })}
                            placeholder="Your username" 
                            className="input input-bordered w-full" 
                            />
                            {errors.username && <p className="text-red-500">{errors.username.message}</p>}
                        </div>
                        <div className="form-control w-11/12 mx-auto space-y-2">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input 
                                type="email" 
                                {...register("email", { required: "Email is required" })}
                                placeholder="email@example.com" 
                                className="input input-bordered w-full"/>
                                {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                        </div>
                        <div className="form-control w-11/12 mx-auto space-y-2">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input 
                                type="password" 
                                {...register("password", { required: "Password is required" })}
                                placeholder="password" 
                                className="input input-bordered w-full"/>
                                {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                        </div>
                        <div className="form-control w-11/12 mx-auto space-y-2">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input 
                                type="password" 
                                {...register("rePass", { 
                                    required: "Confirm Password is required",
                                    validate: value => value === password || 'Passwords do not match'  })}
                                placeholder="Confirm Password" 
                                className="input input-bordered w-full"/>
                                {errors.rePass && <p className="text-red-500">{errors.rePass.message}</p>}
                        </div>
                        <button type="submit" className="btn btn-secondary w-full">Register</button>
                    </form>
                )}
            </div>
        </div>
    );
}