import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserLoginMutation } from "../../redux/features/auth";
import toast from "react-hot-toast";
import { KEY_ACCESS_TOKEN } from "../../utils/localStorageManager";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [loginApi] = useUserLoginMutation();

  async function handleSubmit(e) {
    try {
      e.preventDefault();
      const res = await loginApi({ email, password });
      if (res.data) {
        localStorage.setItem(KEY_ACCESS_TOKEN, res.data.accessToken);
        toast.success("Login successful");
        navigate("/");
      } else {
        toast.error(res.error.data.message);
      }
    } catch (error) {
      console.log("🚀 ~ error:", error);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="max-w-sm p-6 rounded-lg shadow-sm shadow-gray-400 md:w-96">
        <h2 className="mb-6 text-3xl font-semibold text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-sm text-white capitalize rounded-md btn btn-primary md:text-base"
            onClick={handleSubmit}
          >
            Login
          </button>
          <p className="flex justify-center mt-4">
            Don't have an account?
            <Link to="/signup" className="ml-1 underline">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
