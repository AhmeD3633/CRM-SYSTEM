import logo from "../assets/images/image 1.png";

function HomeNav() {
  return (
    <div>
            <nav className="flex justify-between py-4">
        <div className="flex gap-3">
          <a href="/" className="rounded-3xl text-[14px] shadow-sm py-2 px-4">
            {" "}
            تسجيل الدخول
          </a>
          <a href="/" className="rounded-3xl bg-[#00FFA9] shadow-sm py-2 px-4">
            مستخدم جديد
          </a>
        </div>
        <div className="w-[125px]">
          <img src={logo} alt="ZBOOMA-logo" />
        </div>
      </nav>
    </div>
  )
}

export default HomeNav
