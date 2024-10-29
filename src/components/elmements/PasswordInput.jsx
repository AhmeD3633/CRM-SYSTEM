import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

function PasswordInput() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="relative w-full max-w-xl">
      <div
        onClick={togglePasswordVisibility}
        className="absolute left-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
      >
        {passwordVisible ? <FaRegEyeSlash size={20} /> : <FaRegEye size={20} />}
      </div>
      <input
        type={passwordVisible ? "text" : "password"}
        className="mt-1 w-full h-12 rounded-md border border-gray-300 bg-white text-sm text-gray-700 shadow-sm text-right p-3"
      />
    </div>
  );
}

export default PasswordInput;
