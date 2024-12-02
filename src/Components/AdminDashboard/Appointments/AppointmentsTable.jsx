import React from "react";

const Appointments = ({ clientTime = [] }) => {
  return (
    <div className="flex flex-col items-center justify-around w-full gap-5 overflow-auto">
      <div className="flex items-center justify-end w-full pr-8">
        <h1 className="text-2xl font-semibold text-white">المواعيد</h1>
      </div>

      {/* Grid container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full pr-4 pl-4 overflow-y-auto h-[75vh]">
        {clientTime.map((item, index) => (
          <div
            key={index}
            className="bg-[#0D0D0D] text-white rounded-2xl border border-[#00c853] h-[250px] flex flex-col justify-start "
          >
            {/* Header */}
            <div className="text-right font-semibold text-lg mb-2 border-b border-[#00c853] pb-2 w-full flex items-center justify-end p-3">
              موعد
            </div>

            {/* Content */}
            <div className="flex flex-col items-end justify-start p-4 text-right">
              <p className="mb-2">
                <span className="font-bold">مرسل من:</span> {item.sender}
              </p>
              <p className="mb-2">
                <span className="font-bold">العنوان:</span> {item.title} التصميم
                الجرافيكي
              </p>
              <p className="mt-4">
                <span className="font-bold">الميعاد:</span> {item.appointment}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Appointments;
