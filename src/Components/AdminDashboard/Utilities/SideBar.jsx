import React, { useState } from "react";
import logo1 from "../../../assets/Media/logo (2).png";
import { LuHome } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";
import { FaRegNoteSticky } from "react-icons/fa6";
import { IoTimeOutline } from "react-icons/io5";
import { CiChat1 } from "react-icons/ci";
import { PiSignOut } from "react-icons/pi";
import { FiMenu } from "react-icons/fi"; // Menu icon for mobile
import { MdOutlinePendingActions } from "react-icons/md";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false); // Sidebar open/close state
  const [activeLink, setActiveLink] = useState("لوحة التحكم");

  const links = [
    { title: "لوحة التحكم", to: "/admindashboard", icon: LuHome },
    { title: "العملاء", to: "/customers", icon: FaRegUser },
    { title: "الملاحظات", to: "/tickets", icon: FaRegNoteSticky },
    { title: "المواعيد", to: "/appointments", icon: IoTimeOutline },
    { title: "المحادثات", to: "/chat", icon: CiChat1 },
    { title: "تأكيد العملاء", to: "/confirmClients", icon: MdOutlinePendingActions },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="md:hidden fixed z-50 p-2 text-white bg-[#00c853] rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FiMenu size={24} />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed flex md:relative md:flex w-80 h-screen flex-col justify-between right-0 bg-[#292929] border-l border-[#00c853] transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:translate-x-0 z-40`}
      >
        <div className="flex flex-col items-end justify-center w-full px-4 py-6 space-y-5">
          {/* Logo */}
          <span className="grid text-xs text-gray-600 rounded-lg place-content-center">
            <img src={logo1} alt="Logo" />
          </span>

          {/* Links */}
          <div className="flex flex-col items-end w-full space-y-2">
            {links.map((link, i) => (
              <ul key={i} className="w-full space-y-1 text-right">
                <li>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `flex items-center justify-end gap-2 rounded-lg px-4 py-3 text-sm font-semibold ${
                        isActive ? "bg-[#00c853] text-[#016643]" : "text-white"
                      }`
                    }
                  >
                    {link.title}
                    <link.icon className="ml-2 text-xl" />
                  </NavLink>
                </li>
              </ul>
            ))}
          </div>
        </div>

        {/* Profile and Logout */}
        <div className="sticky inset-x-0 bottom-0 border-t border-[#00c853] flex items-center justify-between p-4">
          <a
            href="#"
            className="flex items-center gap-2 bg-[#292929] hover:bg-[#333] text-white"
          >
            <img
              alt="Profile"
              src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              className="object-cover w-10 h-10 rounded-full"
            />
            <div className="text-xs">
              <strong className="block font-medium">Eric Frusciante</strong>
              <span> eric@frusciante.com </span>
            </div>
          </a>
          <span className="text-2xl text-red-400 cursor-pointer hover:text-red-700">
            <PiSignOut />
          </span>
        </div>
      </div>

      {/* Overlay for mobile when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black opacity-50 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default SideBar;
