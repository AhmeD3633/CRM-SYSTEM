import { useState } from "react";

const TicketsModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={handleOpen}
        className="px-10 py-2 bg-[#0d3d2c] text-emerald-400 font-bold rounded-md hover:bg-emerald-400 hover:text-gray-900 transition duration-200"
      >
        أرسل ملاحظة{" "}
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center overflow-y-auto bg-black bg-opacity-50">
          <div className="w-full p-4 max-h-[90vh] overflow-y-auto bg-[#292929] rounded-lg shadow-lg md:w-1/2 lg:w-1/3">
            <h2 className="mb-4 text-lg font-bold text-right text-emerald-400">
              ملاحظة جديدة
            </h2>
            <div className="flex flex-col">
              {/* Note Title */}
              <label className="block mb-2 text-sm font-medium text-right text-gray-300">
                عنوان ملاحظتك
              </label>
              <input
                type="text"
                placeholder="عنوان"
                className="w-full p-3 mb-4 bg-[#292929] text-white border border-emerald-500 rounded-lg text-right focus:ring-2 focus:ring-emerald-400 focus:outline-none"
              />

              {/* Note Description */}
              <label className="block mb-2 text-sm font-medium text-right text-gray-300">
                وصف ملاحظتك
              </label>
              <textarea
                placeholder="...اكتب ملاحظتك هنا"
                className="w-full p-3 bg-[#292929] text-white border border-emerald-500 rounded-lg text-right focus:ring-2 focus:ring-emerald-400 focus:outline-none"
                rows={4}
              ></textarea>

              {/* Actions */}
              <div className="flex justify-between mt-6 space-x-3">
                <button
                  onClick={handleClose}
                  className="w-1/2 px-4 py-2 text-white transition-colors duration-200 bg-gray-600 rounded-lg hover:bg-gray-500"
                >
                  إغلاق
                </button>
                <button className="w-1/2 px-4 py-2 text-white transition-colors duration-200 rounded-lg bg-emerald-500 hover:bg-emerald-400">
                  إرسال
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TicketsModal;
