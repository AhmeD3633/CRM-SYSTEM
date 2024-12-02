import { FaLongArrowAltLeft } from "react-icons/fa";
import bgImg from "../../../assets/Media/bg.png";
import charts from "../../../assets/Media/test.png";
import stars from "../../../assets/Media/Frame 2095584759 (1).png";

function HomeLayout() {
  return (
    <div>
      {/* Background section with overlay and responsive height */}
      <div
        style={{ backgroundImage: `url(${bgImg})` }}
        className="h-[65vh] md:h-[70vh] px-10 w-full bg-center rounded-md bg-cover flex items-center bg-no-repeat relative capitalize overflow-hidden"
      >
        <div className="flex gap-10 p-0 m-0 mx-auto">
          {/* Chart image - visible on larger screens */}
          <div className="flex-1 ">
            <img
              src={charts}
              className="h-[55vh] w-[50vw] hidden lg:block"
              alt="Chart"
            />
          </div>

          {/* Content container - text and action buttons */}
          <div className="flex flex-col items-center flex-1 gap-5 text-center lg:text-right lg:items-end">
            {/* Heading with Arabic text and inline CRM abbreviation */}
            <h1 className="text-2xl lg:text-6xl">
              قم بتحسين عملك <br />
              بكفاءة باستخدام اقوي <br />
              <bdi>CRM</bdi> نظام
            </h1>

            {/* Description paragraph */}
            <p className="text-xs text-gray-400 lg:text-xl">
              ZBOOMA CRM <br />
              يساعد الشركات على تطويير الأعمال <br />
              باستخدام التكنولوجيا والميزات التي تجعل الأمر سهلا <br />
              للمستخدمين
            </p>

            {/* Action buttons container */}
            <div className="flex gap-3">
              {/* Free trial button */}
              <a
                href="#"
                className="rounded-full w-[120px] flex items-center gap-2 bg-[#292929] text-white    px-4 h-14 hover:bg-[#0A8F0A] duration-300"
              >
                تجربة مجانية
              </a>

              {/* Try now button with arrow icon */}
              <a
                href="#"
                className="rounded-full w-[120px] flex items-center gap-2 bg-[#0A8F0A] text-white hover:bg-[#0F430F] duration-300 shadow-sm py-2 px-4 h-14"
              >
                <FaLongArrowAltLeft /> <span>جرب الان</span>
              </a>
            </div>

            {/* Stars rating with text */}
            <div className="flex flex-col items-center lg:items-end">
              <img src={stars} alt="Star rating" />
              <p className="text-gray-400 text-[14px]">من 500 تقييم</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeLayout;
