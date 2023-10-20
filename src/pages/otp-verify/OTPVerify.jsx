import React, { useState } from "react";
import { useUserVerifyMutation } from "../../redux/features/auth";
import toast from "react-hot-toast";
import { useNavigate, useLocation } from "react-router-dom";

function OTPVerification() {
  const [otp, setOtp] = useState([null, null, null, null, null, null]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const email = queryParams.get("email");
  const [verifyApi] = useUserVerifyMutation();
  const navigate = useNavigate();

  const handleOtpChange = (e, index) => {
    const updatedOtp = [...otp];
    const inputValue = parseInt(e.target.value);
    updatedOtp[index] = isNaN(inputValue) ? null : inputValue;
    setOtp(updatedOtp);

    if (e.target.nextSibling && !isNaN(inputValue)) {
      e.target.nextSibling.focus();
    }
  };

  const handleSubmit = async () => {
    try {
      const res = await verifyApi({ otp: otp.join(""), email });
      console.log("🚀 ~ res:", res);
      if (res.data) {
        toast.success(res.data.message);
        navigate(`/login`);
      } else {
        toast.error(res.error.data.message);
      }
    } catch (error) {
      console.log("🚀 ~ error:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full px-4 md:max-w-md">
        <h2 className="mb-4 text-2xl font-semibold">Enter 6-Digit OTP</h2>
        <div className="flex flex-wrap gap-2">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              value={digit !== null ? digit : ""}
              onChange={(e) => handleOtpChange(e, index)}
              className="w-12 md:w-12 h-12 p-3 text-xl text-center border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              maxLength="1"
              pattern="\d*"
              required
            />
          ))}
        </div>
        <p className="mt-4 text-gray-600">
          We've sent an OTP to your email address.
        </p>
        <button onClick={handleSubmit} className="mt-2 btn">
          Verify OTP
        </button>
      </div>
    </div>
  );
}

export default OTPVerification;
