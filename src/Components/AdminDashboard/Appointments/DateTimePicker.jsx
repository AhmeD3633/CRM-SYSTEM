import React, { useState } from "react";
import Select, { components } from "react-select";
import { FaClock } from "react-icons/fa";

const timeOptions = [];

// Add 9:00 AM to 11:00 AM
for (let h = 9; h < 12; h++) {
  timeOptions.push({
    value: `${String(h).padStart(2, "0")}:00 AM`,
    label: `${String(h).padStart(2, "0")}:00 AM`,
  });
}

// Add 12:00 PM to 5:00 PM
for (let h = 12; h <= 17; h++) {
  const hour = h > 12 ? h - 12 : h;
  timeOptions.push({
    value: `${String(hour).padStart(2, "0")}:00 PM`,
    label: `${String(hour).padStart(2, "0")}:00 PM`,
  });
}

const dayOptions = [
  { value: "Saturday", label: "Saturday" },
  { value: "Sunday", label: "Sunday" },
  { value: "Monday", label: "Monday" },
  { value: "Tuesday", label: "Tuesday" },
  { value: "Wednesday", label: "Wednesday" },
  { value: "Thursday", label: "Thursday" },
  { value: "Friday", label: "Friday" },
];

const DropdownIndicator = (props) => (
  <components.DropdownIndicator {...props}>
    <FaClock style={{ color: "white" }} />
  </components.DropdownIndicator>
);

const DateTimePicker = () => {
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [day, setDay] = useState(null);

  const customStyles = {
    control: (base) => ({
      ...base,
      width: "100%",
      minHeight: "auto",
      textAlign: "center",
      backgroundColor: "#0D0D0D",
      padding: "6px 10px",
      border: "none",
      borderRadius: "8px",
      boxShadow: "none",
      "&:hover": {
        border: "none",
      },
    }),
    menu: (base) => ({
      ...base,
      width: "100%",
      backgroundColor: "#292929",
      color: "white",
    }),
    option: (base, state) => ({
      ...base,
      textAlign: "center",
      color: "white",
      backgroundColor: state.isFocused ? "#00c853" : "#292929",
      cursor: "pointer",
    }),
    singleValue: (base) => ({
      ...base,
      textAlign: "center",
      color: "white",
    }),
  };

  return (
    <div className="flex flex-col items-center justify-between w-full mx-auto space-y-4 md:flex-row md:items-center md:space-y-0 md:space-x-3">
      {/* Start Time */}
      <div className="flex-1 w-full">
        <Select
          options={timeOptions}
          value={startTime}
          onChange={setStartTime}
          placeholder="Start Time"
          styles={customStyles}
          className="p-2 text-white rounded-md "
          components={{ DropdownIndicator }}
        />
      </div>

      {/* End Time */}
      <div className="flex-1 w-full">
        <Select
          options={timeOptions}
          value={endTime}
          onChange={setEndTime}
          placeholder="End Time"
          styles={customStyles}
          className="p-2 text-white rounded-md "
          components={{ DropdownIndicator }}
        />
      </div>

      {/* Day Picker */}
      <div className="flex-1 w-full">
        <Select
          options={dayOptions}
          value={day}
          onChange={setDay}
          placeholder="Select Day"
          styles={customStyles}
          className="p-2 text-white rounded-md "
        />
      </div>
    </div>
  );
};

export default DateTimePicker;
