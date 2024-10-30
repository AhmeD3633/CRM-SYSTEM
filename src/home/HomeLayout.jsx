import { FaLongArrowAltLeft } from "react-icons/fa";
import bgImg from "../assets/Media/bg.png";
import charts from "../assets/Media/test.png";
import stars from "../assets/Media/Frame 2095584759.png";

function HomeLayout() {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${bgImg})` }}
        className={`h-[65vh] md:h-[70vh]  w-full px-10 bg-center rounded-md bg-cover flex items-center  bg-no-repeat relative capitalize overflow-hidden`}
      >
        <div className=" w-full  flex justify-around">
          <div>
            <img src={charts} className="h-[55vh] w-[50vw] hidden md:block" alt="00....." />
          </div>
          <div className="text-center md:text-right flex flex-col items-center md:items-end gap-5">
            <h1 className="text-4xl">
              قم بتحسين عملك <br />
              بكفاءة باستخدام اقوي <br />
              <bdi>CRM</bdi> نظام 
            </h1>
            <p className="text-gray-400 text-[14px]">
              يساعد ZBOOMA CRM الشركات على تطوير الأعمال <br />
              باستخدام التكنولوجيا والميزات التي تجعل الأمر أسهل<br></br>{" "}
              للمستخدمين.
            </p>
            <div className="flex gap-3 ">
              <a
                href=""
                className="rounded-3xl bg-white text-[14px] shadow-sm py-2 px-4"
              >
                {" "}
                 تجربة مجانية
              </a>
              <a
                href=""
                className="rounded-3xl w-[120px] line-clamp-1 flex items-center gap-2 bg-[#00FFA9] shadow-sm py-2 px-4"
              >
                <FaLongArrowAltLeft /> <span>جرب الان</span>
              </a>
            </div>
            <div className="">
                <img src={stars} alt="..." />
                <p className="text-gray-400 text-[14px]">من 500 تقييم</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeLayout;
