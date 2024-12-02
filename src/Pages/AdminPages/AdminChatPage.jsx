import { useState } from "react";
import SearchFilter from "../../Components/AdminDashboard/Utilities/SearchFilter";
import SideBar from "../../Components/AdminDashboard/Utilities/SideBar";
import AdminTableChat from "../../Components/AdminDashboard/chats/AdminTableChat";

const AdminChatPage = () => {
  const [searchId, setSearchId] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  return (
    <div className="flex w-full h-screen ">
      <div className="flex flex-col justify-around  items-center w-full bg-[#292929] overflow-auto">
        {/* Added margin-right to account for the sidebar */}
        <SearchFilter
          setSearchId={setSearchId}
          setSortOrder={setSortOrder}
          title="المحادثات"
        />
        <AdminTableChat searchId={searchId} sortOrder={sortOrder} />
      </div>
      <SideBar />
    </div>
  );
};

export default AdminChatPage;
