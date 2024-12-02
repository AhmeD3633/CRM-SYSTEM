// Import required components and icons
import Card from "../../Components/UserDashboard/Card";
import ProjectDetails from "../../Components/UserDashboard/ProjectDetails";
import YourTime from "../../Components/UserDashboard/YourTime";
import ChatModal from "../../Components/AdminDashboard/chats/ChatModal";
import TicketsModal from "../../Components/AdminDashboard/tickets/TicketsModal";
import { FaCode } from "react-icons/fa";
import { SiAffinitydesigner } from "react-icons/si";
import { MdOutlineManageAccounts } from "react-icons/md";

function UserDashboard() {
  // Data for project details
  const detail = [
    {
      title: "البرمجة",
      content: "لم يتم البدء",
      icon: <FaCode className="w-6 h-6 text-black" />,
    },
    {
      title: "التصميم",
      content: "قيد التنفيذ",
      icon: <SiAffinitydesigner className="w-6 h-6 text-black" />,
    },
    {
      title: "اداره الحساب",
      content: "مكتمل",
      icon: <MdOutlineManageAccounts className="w-6 h-6 text-black" />,
    },
  ];

  // Data for available times
  const Time = [
    { day: "الاثنين" },
    { day: "الاحد" },
    { day: "السبت" },
    { day: "الخميس" },
    { day: "الاربعاء" },
    { day: "الثلاثاء" },
  ];

  // Data for chat information
  const chat = [
    { id: 1, content: "أحمد", email: "ahmed@gmail.com" },
    { id: 2, content: "محمد", email: "mohamed@gmail.com" },
    { id: 3, content: "محمود", email: "mahmoud@gmail.com" },
    { id: 4, content: "ابراهيم", email: "ibrahim@gmail.com" },
  ];

  return (
    <div className="UserControl bg-[#292929] text-white p-5 md:p-8 lg:p-10 text-right">
      {/* Header Section */}
      <div className="flex flex-col items-end gap-4 md:flex-row md:items-center md:justify-between">
        <button className="text-[red] self-start md:self-auto ">
          تسجيل الخروج
        </button>
        <div>
          <h3 className="text-[24px] md:text-[30px] mb-3 md:mb-5">
            لوحة التحكم
          </h3>
          <p className="text-[#959595]">مرحبا مشاري راشد</p>
        </div>
      </div>

      {/* User Information Section */}
      <div className="mt-8">
        <h5 className="mb-5 text-xl">بياناتي</h5>
        <Card />
      </div>

      {/* Project Details Section */}
      <div className="mt-8">
        <h5 className="mb-5 text-xl">تفاصيل المشروع</h5>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {detail.map((detail, index) => (
            <ProjectDetails
              key={index}
              title={detail.title}
              content={detail.content}
              icon={detail.icon}
            />
          ))}
        </div>
      </div>

      {/* Chat Section */}
      <div className="mt-8">
        <h5 className="mb-5 text-xl">تحدث مع احد المسئولين</h5>
        <div className="overflow-x-auto">
          <table className="table w-full text-right">
            <thead className="hidden md:table-header-group bg-[#333] shadow-md">
              <tr>
                <th className="p-4 text-center text-gray-300 border-b border-gray-500">
                  أرسل رسالة
                </th>
                <th className="p-4 text-center text-gray-300 border-b border-gray-500">
                  أرسل ملاحظة
                </th>
                <th className="p-4 text-center text-gray-300 border-b border-gray-500">
                  البريد الإلكتروني
                </th>
                <th className="p-4 text-center text-gray-300 border-b border-gray-500">
                  المسؤل
                </th>
              </tr>
            </thead>
            <tbody className="bg-black">
              {chat.map((item) => (
                <tr
                  className="border-b border-gray-500 hover:bg-[#444] hidden md:table-row"
                  key={item.id}
                >
                  <td className="p-4 text-center">
                    <ChatModal />
                  </td>
                  <td className="p-4 text-center">
                    <TicketsModal />
                  </td>
                  <td className="p-4 text-center">{item.email}</td>
                  <td className="p-4 text-center">{item.content}</td>
                </tr>
              ))}
              {/* Responsive View for Small Screens */}
              {chat.map((item) => (
                <tr
                  key={item.id}
                  className="md:hidden bg-[#333] shadow-md mb-4 rounded-lg"
                >
                  <td className="p-4 space-y-2">
                    <div className="text-gray-300">
                      <span className="font-bold text-md">المسؤل: </span>{" "}
                      {item.content}
                    </div>
                    <div className="text-gray-300">
                      <span className="font-bold text-md ">
                        البريد الإلكتروني:{" "}
                      </span>{" "}
                      {item.email}
                    </div>
                    <div className="flex justify-between mt-3 space-y-2">
                      <button>
                        <ChatModal />
                      </button>
                      <button>
                        <TicketsModal />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Available Times Section */}
      <div className="mt-8">
        <h5 className="mb-5 text-xl">الاوقات المتاحة</h5>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {Time.map((card, index) => (
            <YourTime key={index} title={card.day} />
          ))}
        </div>
      </div>

      {/* Additional Sections */}
      <h5 className="mb-5 text-xl">الاوقات المحجوزة</h5>
      <h5 className="mb-5 text-xl">العقود</h5>
    </div>
  );
}

export default UserDashboard;
