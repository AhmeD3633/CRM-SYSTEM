import logo from "../../../assets/Media/logo.png";
import { MdAdminPanelSettings } from "react-icons/md";
// import logo from "../../assets/Media/logo.png";
import { FaUserTie } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function HomeNav() {
  const navigate = useNavigate();
  return (
    <div>
      <nav className="flex justify-between items-center h-[12vh] py-4">
        <div className="flex gap-3">
          <button
            onClick={() => document.getElementById("my_modal_2").showModal()}
            className="rounded-3xl line-clamp-1 w-fit text-[14px] shadow-sm text-[white] py-2 px-4 hover:bg-[#0A8F0A] duration-300 hover:border-[#0A8F0A]"
          >
            {" "}
            تسجيل الدخول
          </button>
          <button
            onClick={() => navigate("/register")}
            className="rounded-3xl text-white w-fit line-clamp-2 bg-[#0A8F0A] hover:bg-[#0F430F] duration-300 shadow-sm py-2 px-4"
          >
            مستخدم جديد
          </button>
        </div>
        <div className="w-[110px] md:w-[130px]">
          <img src={logo} alt="ZBOOMA-logo" />
        </div>
      </nav>

      <dialog id="my_modal_2" className="modal">
        <div className="modal-box w-[300px] flex justify-around items-center bg-[#292929] ">
          <button
            onClick={() => navigate("/user")}
            className="flex gap-3 rounded-3xl line-clamp-1 w-fit text-[14px] shadow-sm text-[white] py-2 px-4  hover:bg-[#0A8F0A] duration-300"
          >
            <FaUserTie className="size-5" />
            <span>مستخدم</span>
          </button>
          <button
            onClick={() => navigate("/sign")}
            className="flex gap-3 rounded-3xl w-fit line-clamp-1 bg-[#0A8F0A] hover:bg-[#0F430F] duration-300 shadow-sm py-2 px-4"
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
