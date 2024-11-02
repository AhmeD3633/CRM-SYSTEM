import { useState } from "react";
import logo from "../assets/Images/image 1.png";
import { LuHome } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";
import { FaRegNoteSticky } from "react-icons/fa6";
import { IoTimeOutline } from "react-icons/io5";
import { LiaFileContractSolid } from "react-icons/lia";
import { CiChat1 } from "react-icons/ci";
import { PiSignOut } from "react-icons/pi";

const SideBar = () => {
  const links = [
    { title: "لوحة التحكم", icon: LuHome },
    { title: "العملاء", icon: FaRegUser },
    { title: "الملاحظات", icon: FaRegNoteSticky },
    { title: "المواعيد", icon: IoTimeOutline },
    { title: "العقود", icon: LiaFileContractSolid },
    { title: "المحادثات", icon: CiChat1 },
  ];

  const [activeLink, setActiveLink] = useState("لوحة التحكم");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="absolute right-0 flex flex-col justify-between w-64 h-screen border-e">
      <div className="flex flex-col items-end justify-center w-full px-4 py-6 space-y-5">
        <span className="grid text-xs text-gray-600 rounded-lg place-content-center">
          <img src={logo} />
        </span>

        <div className="flex flex-col items-end w-full space-y-2">
          {links.map((link, i) => (
            <ul className="w-full space-y-1 text-right">
              <li key={i}>
                <a
                  href="#"
                  className={`flex items-center justify-end gap-2 rounded-lg px-4 py-3 text-sm text-gray-700 font-semibold
                    ${
                      activeLink === link.title
                        ? "bg-[#BFF6E4] text-[#016643]"
                        : ""
                    }`}
                  onClick={() => handleLinkClick(link.title)}
                >
                  {link.title}
                  <link.icon className="ml-2 text-xl" />
                </a>
              </li>
            </ul>
          ))}
        </div>
      </div>

      {/* PROFILE_HERE */}
      <div className="sticky inset-x-0 bottom-0 flex items-center justify-between border-t border-gray-100">
        <a
          href="#"
          className="flex items-center gap-2 p-4 bg-white hover:bg-gray-50"
        >
          <img
            alt=""
            src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            className="object-cover rounded-full size-10"
          />

          <div className="">
            <p className="text-xs">
              <strong className="block font-medium">Eric Frusciante</strong>

              <span> eric@frusciante.com </span>
            </p>
          </div>
        </a>
        <span className="p-4 text-2xl text-red-400 cursor-pointer hover:text-red-700">
          <PiSignOut />
        </span>
      </div>
    </div>
  );
};

export default SideBar;
