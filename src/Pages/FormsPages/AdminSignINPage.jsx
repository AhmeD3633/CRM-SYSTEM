import React, { useState } from "react";
import img2 from "../../assets/Media/signINimg.png";
import logo from "../../assets/Media/top.png";
import { Link } from "react-router-dom";
import axios from "axios";

function Sign() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();
    let res = await axios.post(" ", {
      // Api
      email: email,
      password: password,
    });
    if (res.status === 200) {
      window.localStorage.setItem("email", email);
      window.location.pathname = "/AdminDashboard";
    }
  }

  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      {/* Background */}
      <div className="absolute inset-0 bg-[url('/src/assets/Media/bg.png')] bg-no-repeat bg-cover backdrop-blur-xl"></div>

      {/* Content */}
      <div className="relative w-full sm:w-[90%] md:w-[80%] h-[90vh] shadow-2xl overflow-hidden rounded-xl flex flex-col md:flex-row items-center justify-around p-4 sm:p-6 lg:p-8 backdrop-blur-xl">
        {/* Left Side */}
        <div className="hidden lg:block lg:w-1/2 h-full">
          <img
            src={img2}
            className="object-contain w-full h-full"
            alt="Sign In Illustration"
          />
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-1/2 h-full flex flex-col items-center sm:items-start lg:items-end px-4 sm:px-6 lg:px-12">
          <div className="h-auto mb-4">
            <Link to="/">
              <img src={logo} alt="Logo" className="w-24 sm:w-32 lg:w-40" />
            </Link>
          </div>
          <div className="flex-grow flex flex-col items-end justify-center w-full">
            <div className="mb-8 text-right">
              <h1 className="text-[32px] text-white font-bold">تسجيل الدخول</h1>
              <p className="text-[18px] text-[#969696]">تسجيل الدخول كمسؤول</p>
            </div>
            <form
              action="#"
              method="get"
              onSubmit={submit}
              className="flex flex-col items-center w-full"
            >
              <div className="w-full mb-4">
                <label className="block text-[#969696] text-sm font-bold mb-2 text-right">
                  البريد الإلكتروني
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  value={email}
                  id="email"
                  type="email"
                  placeholder="البريد الالكتروني"
                  className="text-right  rounded-md w-full py-3 px-6 text-[white] focus:outline-none focus:ring-1 focus:ring-[#0A8F0A] bg-[#292929]"
                />
              </div>

              <div className="w-full mb-4">
                <label className="block text-[#969696] text-sm font-bold mb-2 text-right">
                  رمز المرور
                </label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  id="password"
                  type="password"
                  placeholder="كلمه المرور"
                  className="text-right  rounded-md w-full py-3 px-6 text-[white] focus:outline-none focus:ring-1 focus:ring-[#0A8F0A] bg-[#292929]"
                />
              </div>

              <button
                className="bg-[#0A8F0A] hover:bg-[#0F430F] transition duration-300 p-[10px] w-full rounded-[5px] font-bold mb-[20px] mt-[20px]"
                type="submit"
              >
                تسجيل الدخول
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sign;
