import { useState, useEffect } from "react";
import ChatModal from "./ChatModal";

const initialData = [
  {
    id: "#101",
    createdAt: "2024-09-15T10:00:00Z",
    name: "أحمد إبراهيم",
    website: "site1.com",
    email: "ahmed@site1.com",
  },
  {
    id: "#102",
    createdAt: "2024-10-12T10:00:00Z",
    name: "سارة حسين",
    website: "site2.com",
    email: "sara@site2.com",
  },
  {
    id: "#103",
    createdAt: "2024-08-25T10:00:00Z",
    name: "خالد سمير",
    website: "site3.com",
    email: "khaled@site3.com",
  },
  {
    id: "#105",
    createdAt: "2024-11-05T10:00:00Z",
    name: "ليلى محمود",
    website: "site4.com",
    email: "laila@site4.com",
  },
  {
    id: "#104",
    createdAt: "2024-07-30T10:00:00Z",
    name: "يوسف علي",
    website: "site5.com",
    email: "yousef@site5.com",
  },
];

function AdminTableChat({ searchId, sortOrder }) {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    if (searchId) {
      setData(
        initialData.filter((item) => item.id.toString().includes(searchId))
      );
    } else {
      setData(initialData);
    }
  }, [searchId]);

  // Sort data
  if (sortOrder === "asc") {
    data.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortOrder === "desc") {
    data.sort((a, b) => b.name.localeCompare(a.name));
  }

  return (
    <div className="w-full mx-auto bg-[#292929] text-white p-4 h-full">
      <div className="w-full mx-auto md:bg-black rounded-lg shadow-md">
        {/* Table layout for large screens */}
        <div className="overflow-auto rounded-lg h-[75vh] hidden md:block">
          <table className="w-full text-sm border-collapse">
            <thead className="sticky top-0 bg-[#333] shadow-md">
              <tr>
                <th className="p-4 text-center text-gray-300 border-b border-gray-500">
                  أرسل رسالة
                </th>
                <th className="p-4 text-center text-gray-300 border-b border-gray-500">
                  تاريخ الإنشاء
                </th>
                <th className="p-4 text-center text-gray-300 border-b border-gray-500">
                  الموقع الإلكتروني
                </th>
                <th className="p-4 text-center text-gray-300 border-b border-gray-500">
                  البريد الإلكتروني
                </th>
                <th className="p-4 text-center text-gray-300 border-b border-gray-500">
                  العميل
                </th>
                <th className="p-4 text-center text-gray-300 border-b border-gray-500">
                  الرمز التعريفي
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr
                  className="border-b border-gray-500 hover:bg-[#444]"
                  key={item.id}
                >
                  <td className="p-4 text-center">
                    <ChatModal />
                  </td>
                  <td className="p-4 text-center">{item.createdAt}</td>
                  <td className="p-4 text-center">{item.website}</td>
                  <td className="p-4 text-center">{item.email}</td>
                  <td className="p-4 text-center">{item.name}</td>
                  <td className="p-4 text-center">{item.id}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Card layout for mobile */}
        <div className="md:hidden" dir="rtl">
          {data.map((item) => (
            <div
              key={item.id}
              className="p-4 mb-4 bg-[#333] rounded-lg shadow-md"
            >
              <div className="flex justify-between">
                <span className="font-bold">الرمز التعريفي:</span>
                <span>{item.id}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold">العميل:</span>
                <span>{item.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold">البريد الإلكتروني:</span>
                <span>{item.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold">الموقع الإلكتروني:</span>
                <span>{item.website}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold">تاريخ الإنشاء:</span>
                <span>{item.createdAt}</span>
              </div>
              <div className="flex justify-center mt-4">
                <ChatModal />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminTableChat;
