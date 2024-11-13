import React from 'react';
import { FaSearch } from 'react-icons/fa';
import Select from "react-select";

const SearchAndSort = ({ searchTerm, setSearchTerm, sortOrder, setSortOrder }) => {
  const options = [
    { value: "", label: "Filter by option" },
    { value: "AtoZ", label: "A to Z" },
    { value: "ZtoA", label: "Z to A" },
    { value: "time", label: "Date range" }
  ];

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      borderColor: state.isFocused ? 'gray' : 'black',
      boxShadow: state.isFocused ? '0 0 0 1px blue' : 'none',
      '&:hover': { borderColor: state.isFocused ? 'gray' : 'black' },
      backgroundColor: 'black',
      border: '2px solid black',
      borderRadius: '8px',
      padding: '5px'
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? 'gray' : state.isFocused ? 'lightgray' : 'black',
      color: 'white',
      padding: 10
    }),
    menu: (provided) => ({
      ...provided,
      borderRadius: '8px',
      backgroundColor: 'black',
      marginTop: '4px'
    }),
    placeholder: (provided) => ({
      ...provided,
      color: 'gray',
      fontSize: 'bold'
    })
  };

  return (
    <div className="flex mt-10">
      <div className="relative w-3/4 mb-5">
        <FaSearch className="absolute left-3 top-4 text-gray-500" />
        <input
          type="text"
          placeholder="البحث من خلال ال ID"
          className="w-full px-[15px] py-[13px] text-white bg-black rounded-lg shadow-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="w-1/4 mb-5 text-center pr-9">
        <Select
          options={options}
          styles={customStyles}
          onChange={(selectedOption) => setSortOrder(selectedOption.value)}
          placeholder="Filter by data range"
        />
      </div>
    </div>
  );
};

export default SearchAndSort;