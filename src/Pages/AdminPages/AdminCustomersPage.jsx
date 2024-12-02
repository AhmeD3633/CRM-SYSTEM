import { useState } from "react";
import SearchFilter from "../../Components/AdminDashboard/Utilities/SearchFilter";
import SideBar from "../../Components/AdminDashboard/Utilities/SideBar";
import CustomersTable from "../../Components/AdminDashboard/customers/CustomersTable";

const CustomersPage = () => {
  const [searchId, setSearchId] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  return (
    <div className="flex w-full h-screen ">
      <div className="flex flex-col justify-around  items-center w-full bg-[#292929] overflow-auto">
        <SearchFilter
          setSearchId={setSearchId}
          setSortOrder={setSortOrder}
          title="العملاء"
        />
        <CustomersTable searchId={searchId} sortOrder={sortOrder} />
      </div>
      <SideBar />
    </div>
  );
};

export default CustomersPage;
