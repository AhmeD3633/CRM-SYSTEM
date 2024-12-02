import { useState } from "react";

function StatuesModal() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-center justify-center">
      {/* Button to open the modal */}
      <button
        onClick={toggleModal}
        className="px-2 py-1 bg-[#0d3d2c] text-emerald-400 font-bold rounded-md hover:bg-emerald-400 hover:text-gray-900 transition duration-200"
      >
        عرض الحالة
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center overflow-y-auto bg-black bg-opacity-50">
          <div className="w-full p-4 max-h-[90vh] overflow-y-auto bg-[#292929] rounded-lg shadow-lg md:w-1/2 lg:w-1/3">
            <h2 className="mb-1 text-lg font-bold text-right text-white">
              حالة مشروع العميل{" "}
            </h2>
            <h3 className="mb-1 font-medium text-right text-gray-400 text-md">
              تعديل حالة مشروع العميل في الوقت الحالي{" "}
            </h3>

            <form className="space-y-2">
              {/* Client Name */}
              <div>
                <label className="block mb-1 text-sm font-medium text-right text-white border-gray-500">
                  ادارة الحساب
                </label>
                <select
                  className="w-full text-right text-white border-gray-500 rounded-md input input-bordered"
                  style={{ backgroundColor: "#292929" }}
                >
                  <option value="مكتمل">مكتمل</option>
                  <option value="قيد التنفيذ">قيد التنفيذ</option>
                  <option value="لم يتم البدء" default>
                    لم يتم البدء
                  </option>
                </select>
              </div>
              {/* Description */}
              <div>
                <label className="block mb-1 text-sm font-medium text-right text-white border-gray-500">
                  الوصف
                </label>
                <textarea
                  className="w-full text-right text-white border-gray-500 textarea textarea-bordered"
                  rows="2"
                  placeholder=" ...على سبيل المثال"
                ></textarea>
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium text-right text-white border-gray-500">
                  التصميم
                </label>
                <select
                  className="w-full text-right text-white border-gray-500 rounded-md input input-bordered"
                  style={{ backgroundColor: "#292929" }}
                >
                  <option value="مكتمل">مكتمل</option>
                  <option value="قيد التنفيذ">قيد التنفيذ</option>
                  <option value="لم يتم البدء" default>
                    لم يتم البدء
                  </option>
                </select>
              </div>
              {/* Description */}
              <div>
                <label className="block mb-1 text-sm font-medium text-right text-white border-gray-500">
                  الوصف
                </label>
                <textarea
                  className="w-full text-right text-white border-gray-500 textarea textarea-bordered"
                  rows="2"
                  placeholder=" ...على سبيل المثال"
                ></textarea>
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium text-right text-white">
                  البرمجة{" "}
                </label>
                <select
                  className="w-full text-right text-white border-gray-500 rounded-md input input-bordered"
                  style={{ backgroundColor: "#292929" }}
                >
                  <option value="مكتمل">مكتمل</option>
                  <option value="قيد التنفيذ">قيد التنفيذ</option>
                  <option value="لم يتم البدء" default>
                    لم يتم البدء
                  </option>
                </select>
              </div>
              {/* Description */}
              <div>
                <label className="block mb-1 text-sm font-medium text-right text-white border-gray-500">
                  الوصف
                </label>
                <textarea
                  className="w-full text-right text-white border-gray-500 textarea textarea-bordered"
                  rows="2"
                  placeholder=" ...على سبيل المثال"
                ></textarea>
              </div>

              {/* Actions */}
              <div className="flex justify-between mt-1">
                <button
                  type="button"
                  onClick={toggleModal}
                  className="w-1/2 text-white btn btn-ghost"
                >
                  إلغاء
                </button>
                <button
                  type="submit"
                  className="w-1/2 text-white bg-green-700 btn"
                >
                  تأكيد
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default StatuesModal;
