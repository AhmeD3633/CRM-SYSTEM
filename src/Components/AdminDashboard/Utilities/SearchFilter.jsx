import { SlArrowDown } from "react-icons/sl";

const SearchFilter = ({ setSearchId, setSortOrder, title }) => {
  const handleIdSearchChange = (e) => {
    setSearchId(e.target.value);
  };

  const handleSortOrderChange = (e) => {
    setSortOrder(e.target.value);
  };

  return (
    <div className="bg-[#292929] text-white p-4 rounded-lg  w-full">
      <h1 className="font-bold text-[24px] mb-5 text-right">{title}</h1>
      <div className="flex flex-col gap-4 md:flex-row md:items-center">
        {/* Sort Dropdown */}
        <div className="relative w-full md:w-1/3 lg:w-1/4">
          <select
            onChange={handleSortOrderChange}
            className="w-full h-12 pl-4 pr-10 text-center text-white bg-black rounded-lg appearance-none"
          >
            <option value="">تصنيف</option>
            <option value="asc">من الالف الي الياء</option>
            <option value="desc">من الياء الي الالف</option>
          </select>
          {/* Custom Arrow Icon */}
          <div className="absolute text-white transform -translate-y-1/2 pointer-events-none left-3 top-1/2">
            <SlArrowDown />
          </div>
        </div>
        {/* Search by ID */}
        <div className="relative w-full md:w-2/3 lg:w-3/4">
          <input
            type="text"
            placeholder="ابحث عن طريق الرمز التعريفي"
            className="w-full h-12 pl-10 pr-4 text-right text-white bg-black rounded-lg shadow-md"
            onChange={handleIdSearchChange}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
