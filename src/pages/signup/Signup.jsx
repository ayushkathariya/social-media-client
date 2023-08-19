import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { axiosClient } from "../../utils/axiosClient";
import { KEY_ACCESS_TOKEN, setItem } from "../../utils/localStorageManager";
import { useDispatch } from "react-redux";
import { showToast } from "../../redux/slices/appConfigSlice";
import { TOAST_SUCCESS } from "../../App";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axiosClient.post("/auth/signup", {
        name,
        email,
        password,
      });
      dispatch(
        showToast({
          type: TOAST_SUCCESS,
          message: "Signup successful",
        })
      );
      setItem(KEY_ACCESS_TOKEN, response.result.accessToken);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="max-w-sm p-6 rounded-lg shadow-sm shadow-gray-400 md:w-96">
        <h2 className="mb-6 text-3xl font-semibold text-center">Signup</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-600"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
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
            onSubmit={handleSubmit}
          >
            Create Account
          </button>
          <p className="flex justify-center mt-4">
            Already have an account?
            <Link to="/login" className="underline ml-1">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
