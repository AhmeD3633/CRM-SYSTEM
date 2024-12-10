import logo from "../../../assets/Media/logo.png";
import { MdAdminPanelSettings } from "react-icons/md";
import { FaUserTie } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function HomeNav() {
  const navigate = useNavigate();
  return (
    <div>
      <nav className="flex justify-between items-center py-4 px-6 md:px-12 w-full">
        {/* Left Side Buttons */}
        <div className="flex gap-3 md:gap-6">
          <button
            onClick={() => document.getElementById("my_modal_2").showModal()}
            className="rounded-3xl text-sm sm:text-base shadow-sm text-white py-2 px-4 hover:bg-[#0A8F0A] duration-300 hover:border-[#0A8F0A] w-fit"
          >
            تسجيل الدخول
          </button>
          <button
            onClick={() => navigate("/register")}
            className="rounded-3xl text-sm sm:text-base text-white bg-[#0A8F0A] hover:bg-[#0F430F] duration-300 shadow-sm py-2 px-4 w-fit"
          >
            مستخدم جديد
          </button>
        </div>

        {/* Logo */}
        <div className="w-[90px] sm:w-[110px] md:w-[130px]">
          <img src={logo} alt="ZBOOMA-logo" />
        </div>
      </nav>

      {/* Modal for login choices */}
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box w-[300px] sm:w-[350px] flex justify-around items-center bg-[#292929]">
          <button
            onClick={() => navigate("/user")}
            className="flex gap-3 rounded-3xl text-xs sm:text-sm text-white py-2 px-4 hover:bg-[#0A8F0A] duration-300 w-fit"
          >
            <FaUserTie className="text-xl sm:text-2xl" />
            <span>مستخدم</span>
          </button>
          <button
            onClick={() => navigate("/sign")}
            className="flex gap-3 rounded-3xl bg-[#0A8F0A] text-xs sm:text-sm text-white py-2 px-4 hover:bg-[#0F430F] duration-300 w-fit"
          >
            <MdAdminPanelSettings className="text-xl sm:text-2xl" />
            <span>مسئول</span>
          </button>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}

export default HomeNav;
