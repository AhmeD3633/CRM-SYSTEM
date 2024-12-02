import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DateTimePicker from "../Appointments/DateTimePicker";

const CreateAppointment = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedAppointment, setSelectedAppointment] = useState("");

  const appointmentOptions = [
    "السبت",
    "الاحد",
    "الاثنين",
    "الثلثاء",
    "الاربعاء",
    "الخميس",
    "الجمعة ",
  ];

  return (
    <div className="flex flex-col items-center justify-around w-full gap-5 2xl:pr-3">
      <div className="flex items-center justify-end w-full pt-4 pr-4 ">
        <h1 className="font-bold text-[24px] text-right text-white">
          إنشاء ميعاد
        </h1>
      </div>
      <div className="grid items-center w-full grid-cols-1 gap-6 pl-8 pr-2 md:grid-cols-2 lg:grid-cols-4">
        {/* Button */}
        <button className=" bg-[#00c853] hover:bg-[#0F430F] outline-none text-white font-semibold  rounded-md px-6 py-[11px]">
          انشئ ميعاد
        </button>
        <div className="w-full col-span-3">
          <DateTimePicker />
        </div>
      </div>
    </div>
  );
};

export default CreateAppointment;
