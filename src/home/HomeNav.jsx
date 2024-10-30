import logo from "../assets/Media/logo.png";

function HomeNav() {
  return (
    <div>
            <nav className="flex justify-between items-center h-[12vh] py-4">
        <div className="flex gap-3">
          <a href="/" className="rounded-3xl line-clamp-1 w-fit text-[14px] shadow-sm py-2 px-4">
            {" "}
            تسجيل الدخول
          </a>
          <a href="/" className="rounded-3xl w-fit line-clamp-1 bg-[#00FFA9] shadow-sm py-2 px-4">
            مستخدم جديد
          </a>
        </div>
        <div className="w-[110px] md:w-[130px]">
          <img src={logo} alt="ZBOOMA-logo" />
        </div>
      </nav>
    </div>
  )
}

export default HomeNav
