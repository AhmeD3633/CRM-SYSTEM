import { useState } from "react";
import SearchFilter from "../../Components/AdminDashboard/Utilities/SearchFilter";
import SideBar from "../../Components/AdminDashboard/Utilities/SideBar";
import ConfirmClientTable from "../../Components/AdminDashboard/confirmClient/ConfirmClientTable";
const AdminConfirmClient = () => {
  const [searchId, setSearchId] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  return (
    <div className="flex w-full h-screen overflow-hidden">
      <div className="flex flex-col justify-around  items-center w-full bg-[#292929] lg:overflow-hidden overflow-auto">
        <SearchFilter
          setSearchId={setSearchId}
          setSortOrder={setSortOrder}
          title="تأكيد العملاء"
        />
        <ConfirmClientTable searchId={searchId} sortOrder={sortOrder} />
      </div>
      <SideBar />
    </div>
  );
};

export default AdminConfirmClient;
