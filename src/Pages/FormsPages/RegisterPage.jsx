import React from "react";
import leftSideimage from "../../assets/Media/Dashboard Login Page illustration.png";
import topLeftSideimage from "../../assets/Media/top.png";
import { Link } from "react-router-dom";
import RegisteFormComp from "../../Components/Forms/RegisterComponents/RegisterFormComp";

const RegisterPage = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      {/* Background */}
      <div className="absolute inset-0 bg-[url('/src/assets/Media/bg.png')] bg-no-repeat bg-cover backdrop-blur-xl"></div>

      {/* Content */}
      <div className="relative w-full sm:w-[90%] md:w-[80%] h-[90vh] shadow-2xl overflow-hidden rounded-xl flex flex-col md:flex-row items-center justify-around p-4 sm:p-6 lg:p-8 backdrop-blur-xl">
        {/* Left Side */}
        <div className="hidden 2xl:block 2xl:w-1/2 h-full">
          <img
            src={leftSideimage}
            className="object-contain w-full h-full"
            alt="Dashboard Login Page Illustration"
          />
        </div>

        {/* Right Side */}
        <div className="w-full 2xl:w-1/2 h-full flex flex-col items-center sm:items-start lg:items-end px-4 sm:px-6 lg:px-12">
          <div className="h-auto mb-4">
            <Link to="/">
              <img
                src={topLeftSideimage}
                alt="Logo"
                className="w-24 sm:w-32 lg:w-40"
              />
            </Link>
          </div>
          <div className="flex-grow flex flex-col items-center justify-center w-full">
            <RegisteFormComp />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
