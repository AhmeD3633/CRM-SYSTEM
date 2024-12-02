import React, { useState, useEffect } from 'react';
import { FaCheck, FaTrashAlt } from 'react-icons/fa';
import SearchFilter from '../Utilities/SearchFilter';

const ConfirmClientTable = ({ searchId, sortOrder }) => {
    const initialData = [
        { id: "1", name: "محمد علي", email: "mohamed1@example.com" },
        { id: "2", name: "أحمد حسن", email: "ahmed@example.com" },
        { id: "3", name: "سارة إبراهيم", email: "sara@example.com" },
        { id: "4", name: "تسنيم العجمي", email: "tasnim@example.com" },
        { id: "5", name: "يوسف عبد الرحمن", email: "youssef@example.com" },
        { id: "6", name: "خالد محمود", email: "khaled@example.com" },
        { id: "7", name: "منى مصطفى", email: "mona@example.com" },
        { id: "8", name: "فاطمة الزهراء", email: "fatma@example.com" },
        { id: "9", name: "عبد الله أحمد", email: "abdallah@example.com" },
        { id: "10", name: "لينا سعيد", email: "lina@example.com" },
        { id: "11", name: "عمر محمد", email: "omar@example.com" },
        { id: "12", name: "حنين عادل", email: "hanin@example.com" },
    ];

    const [data, setData] = useState(initialData);

    useEffect(() => {
        if (searchId) {
          setData(
            initialData.filter((item) => item.id.toString().includes(searchId))
          );
        } else {
          setData(initialData);
        }
      }, [searchId, initialData]);
    
      if (sortOrder === "asc") {
        data.sort((a, b) => a.name.localeCompare(b.name));
      } else if (sortOrder === "desc") {
        data.sort((a, b) => b.name.localeCompare(a.name));
      }

    const handleConfirm = (id) => {
        alert(`Client with ID ${id} confirmed!`);
    };

    const handleDelete = (id) => {
        setData(data.filter((customer) => customer.id !== id));
        alert(`Client with ID ${id} deleted!`);
    };

    return (
        <div className="w-full mx-auto bg-[#292929] text-white p-4 h-full">
            <div className="w-full mx-auto md:bg-black rounded-lg shadow-md mt-4">
                {/* Table for large screens */}
                <div className="overflow-auto rounded-lg h-[75vh] hidden md:block">
                    <table className="w-full text-sm border-collapse" dir="rtl">
                        <thead className="sticky top-0 bg-[#333] shadow-md">
                            <tr>
                                <th className="p-4 text-center text-gray-300 border-b border-gray-500">
                                    الرمز التعريفي
                                </th>
                                <th className="p-4 text-center text-gray-300 border-b border-gray-500">
                                    العميل
                                </th>
                                <th className="p-4 text-center text-gray-300 border-b border-gray-500">
                                    البريد الإلكتروني
                                </th>
                                <th className="p-4 text-center border-b text-gray-300 border-gray-500">
                                    الإجراء
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.length > 0 ? (
                                data.map((customer) => (
                                    <tr
                                        key={customer.id}
                                        className="border-b border-gray-500 [transition:300ms] hover:bg-[#333]"
                                    >
                                        <td className="p-4 text-center border-gray-500">
                                            #{customer.id}
                                        </td>
                                        <td className="p-4 text-center border-gray-500">
                                            {customer.name}
                                        </td>
                                        <td className="p-4 text-center border-gray-500">
                                            {customer.email}
                                        </td>
                                        <td className="flex justify-center px-4 py-3 gap-6 border-gray-500">
                                            <button
                                                onClick={() => handleConfirm(customer.id)}
                                                className="text-green-500 hover:text-green-700 mr-2"
                                                title="Confirm"
                                            >
                                                <FaCheck />
                                            </button>
                                            <button
                                                onClick={() => handleDelete(customer.id)}
                                                className="text-red-500 hover:text-red-700"
                                                title="Delete"
                                            >
                                                <FaTrashAlt />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4" className="py-4 text-center">
                                        لا توجد نتائج
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Card layout for mobile */}
                <div className="lg:hidden" dir="rtl">
                    {data.length > 0 ? (
                        data.map((customer) => (
                            <div
                                key={customer.id}
                                className="p-4 mb-4 bg-[rgb(41,41,41)] rounded-lg shadow-md"
                            >
                                <div className="flex justify-between ">
                                    <span className="font-bold">الرمز التعريفي:</span>
                                    <span>{customer.id}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-bold">العميل:</span>
                                    <span>{customer.name}</span>
                                </div>
                                <div className="flex flex-wrap justify-between">
                                    <span className="font-bold">البريد الإلكتروني:</span>
                                    <span>{customer.email}</span>
                                </div>
                                <div className="flex justify-around mt-2">
                                    <button
                                        onClick={() => handleConfirm(customer.id)}
                                        className="text-green-500 hover:text-green-700"
                                        title="Confirm"
                                    >
                                        <FaCheck />
                                    </button>
                                    <button
                                        onClick={() => handleDelete(customer.id)}
                                        className="text-red-500 hover:text-red-700"
                                        title="Delete"
                                    >
                                        <FaTrashAlt />
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="p-4 bg-gray-800 rounded-lg">
                            <p className="text-center">لا توجد نتائج</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
export default ConfirmClientTable;
