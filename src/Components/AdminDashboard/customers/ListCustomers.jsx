import StatuesModal from "./StatuesModal";
import { FaEdit, FaTrash } from "react-icons/fa";

const initialData = [
  {
    id: "#156",
    createdAt: "2024-10-30T10:00:00Z",
    name: "John Doe",
    website: "example.com",
    email: "john@example.com",
  },
  // Additional data entries here...
];

const Table = ({ searchId, sortOrder }) => {
  let filteredData = initialData;

  // Filter by ID
  if (searchId) {
    filteredData = filteredData.filter((item) =>
      item.id.toString().includes(searchId)
    );
  }

  // Sort data
  if (sortOrder === "asc") {
    filteredData.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortOrder === "desc") {
    filteredData.sort((a, b) => b.name.localeCompare(a.name));
  }

  return (
    <div className="bg-[rgb(41,41,41)] text-white  p-4 flex-grow">
      <div className="max-w-full p-4 mx-auto overflow-x-auto bg-black rounded-lg shadow-md">
        <table className="w-full text-base border-collapse md:text-sm">
          <thead>
            <tr className="hidden md:table-row">
              <th className="p-3 text-center text-gray-300 bg-black border-b border-gray-500 min-w-[100px]">
                الإجراء
              </th>
              <th className="p-3 text-center text-gray-300 bg-black border-b border-gray-500 min-w-[100px]">
                الحالة
              </th>
              <th className="p-3 text-right text-gray-300 bg-black border-b border-gray-500 min-w-[150px]">
                تاريخ الإنشاء
              </th>
              <th className="p-3 text-right text-gray-300 bg-black border-b border-gray-500 min-w-[150px]">
                الموقع الإلكتروني
              </th>
              <th className="p-3 text-right text-gray-300 bg-black border-b border-gray-500 min-w-[150px]">
                البريد الإلكتروني
              </th>
              <th className="p-3 text-right text-gray-300 bg-black border-b border-gray-500 min-w-[150px]">
                العميل
              </th>
              <th className="p-3 text-right text-gray-300 bg-black border-b border-gray-500 min-w-[100px]">
                ID
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item) => (
              <tr
                className="block w-full border-b border-gray-500 md:table-row md:border-none"
                key={item.id}
              >
                <td
                  className="p-3 text-center md:border-none"
                  data-label="Action"
                >
                  <div className="flex justify-center gap-2">
                    <FaEdit className="text-gray-500 transition duration-200 cursor-pointer hover:text-blue-500" />
                    <FaTrash className="text-gray-500 transition duration-200 cursor-pointer hover:text-red-500" />
                  </div>
                </td>
                <td
                  className="p-3 text-center md:border-none"
                  data-label="Status"
                >
                  <StatuesModal />
                </td>

                <td
                  className="p-3 md:text-right md:border-none"
                  data-label="Created At"
                >
                  {item.createdAt}
                </td>
                <td
                  className="p-3 md:text-right md:border-none"
                  data-label="Website"
                >
                  {item.website}
                </td>
                <td
                  className="p-3 md:text-right md:border-none"
                  data-label="Email"
                >
                  {item.email}
                </td>
                <td
                  className="p-3 md:text-right md:border-none"
                  data-label="Customer"
                >
                  {item.name}
                </td>
                <td
                  className="p-3 md:text-right md:border-none"
                  data-label="ID"
                >
                  {item.id}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
