import { RiAccountCircleFill } from "react-icons/ri";
import { IoMdMail } from "react-icons/io";
import { IoEarth } from "react-icons/io5";
import { FaRegAddressCard } from "react-icons/fa";

function Card() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {/* Website Link Card */}
      <div className="flex flex-col items-end gap-4 p-6 sm:p-8 lg:p-10 bg-black rounded-2xl">
        <div className="p-4 bg-green-600 rounded-full">
          <IoEarth className="w-6 h-6 text-black" />
        </div>
        <h4 className="text-lg lg:text-xl font-bold">رابط الموقع</h4>
        <p className="text-sm lg:text-base text-gray-300">ahmed.com</p>
      </div>

      {/* Email Card */}
      <div className="flex flex-col items-end gap-4 p-6 sm:p-8 lg:p-10 bg-black rounded-2xl">
        <div className="p-4 bg-green-600 rounded-full">
          <IoMdMail className="w-6 h-6 text-black" />
        </div>
        <h4 className="text-lg lg:text-xl font-bold">البريد الالكتروني</h4>
        <p className="text-sm lg:text-base text-gray-300">ahmed@mail.com</p>
      </div>

      {/* Name Card */}
      <div className="flex flex-col items-end gap-4 p-6 sm:p-8 lg:p-10 bg-black rounded-2xl">
        <div className="p-4 bg-green-600 rounded-full">
          <RiAccountCircleFill className="w-6 h-6 text-black" />
        </div>
        <h4 className="text-lg lg:text-xl font-bold">الاسم</h4>
        <p className="text-sm lg:text-base text-gray-300">مشاري راشد العفاسي</p>
      </div>

      {/* Address Card */}
      <div className="flex flex-col items-end gap-4 p-6 sm:p-8 lg:p-10 bg-black rounded-2xl col-span-1 sm:col-span-2 lg:col-span-3">
        <div className="p-4 bg-green-600 rounded-full">
          <FaRegAddressCard className="w-6 h-6 text-black" />
        </div>
        <h4 className="text-lg lg:text-xl font-bold">العنوان</h4>
        <p className="text-sm lg:text-base text-gray-300">
          شارع احمد الشرقي المتقاطع من شارع احمد الشرقي
        </p>
      </div>
    </div>
  );
}

export default Card;
