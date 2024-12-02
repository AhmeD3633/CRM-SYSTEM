import SideBar from "../../Components/AdminDashboard/Utilities/SideBar";
import Tickets from "../../Components/AdminDashboard/tickets/Tickets";
const AdminTicketsPage = () => {
  return (
    <div className="flex w-full h-screen ">
      <div className="flex flex-col  items-center w-full bg-[#292929] overflow-y-auto">
        <Tickets />
      </div>
      <SideBar />
    </div>
  );
};
export default AdminTicketsPage;
