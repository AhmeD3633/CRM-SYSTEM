import logo from "../../../assets/Media/logo.png";
import { MdAdminPanelSettings } from "react-icons/md";
import { FaUserTie } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function HomeNav() {
  const navigate = useNavigate();
  return (
    <div className="">
      <nav className="flex justify-between items-center h-[12vh] pt-4 px-4 md:px-8">
        {/* Buttons Section */}
        <div className="flex flex-row gap-3 md:gap-4">
          <button
            onClick={() => document.getElementById("my_modal_2").showModal()}
            className="rounded-3xl p-3 shadow-sm text-white hover:bg-[#0A8F0A] duration-300 hover:border-[#0A8F0A] text-[12px] md:text-[16px] w-fit md:w-auto text-center md:px-6"
          >
            تسجيل الدخول
          </button>
          <button
            onClick={() => navigate("/register")}
            className="rounded-3xl p-3 text-white w-fit md:w-auto text-[12px] md:text-[16px] line-clamp-2 bg-[#0A8F0A] hover:bg-[#0F430F] duration-300 shadow-sm text-center md:px-6"
          >
            مستخدم جديد
          </button>
        </div>


        {/* Logo Section */}
        <div className="w-[100px] md:w-[150px]">
          <img src={logo} alt="ZBOOMA-logo" className="mx-auto" />
        </div>
      </nav>

      {/* Modal Section */}
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box w-full max-w-[300px] md:max-w-[400px] flex flex-col md:flex-row justify-around items-center bg-[#292929]">
          <button
            onClick={() => navigate("/user")}
            className="flex justify-center gap-3 rounded-3xl line-clamp-1 w-full md:w-fit text-[14px] shadow-sm text-[white] py-2 px-4 hover:bg-[#0A8F0A] duration-300"
          >
            <FaUserTie className="size-5" />
            <span>مستخدم</span>
          </button>
          <button
            onClick={() => navigate("/sign")}
            className="flex justify-center gap-3 rounded-3xl w-full md:w-fit line-clamp-1 bg-[#0A8F0A] hover:bg-[#0F430F] duration-300 shadow-sm py-2 px-4"
          >
            <MdAdminPanelSettings className="size-5" />
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
