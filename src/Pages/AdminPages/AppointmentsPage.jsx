import CreateAppointment from "../../Components/AdminDashboard/Appointments/CreateAppointment";
import AppointmentsTable from "../../Components/AdminDashboard/Appointments/AppointmentsTable";
import SideBar from "../../Components/AdminDashboard/Utilities/SideBar";

const AppointmentsPage = () => {
  const clientTime = [
    {
      sender: "أحمد محمد",
      title: "استشارة حول تطوير الموقع",
      appointment: "الأحد : 12/11/2024",
    },
    {
      sender: "ليلى سعيد",
      title: "مشروع تسويق إلكتروني",
      appointment: "الإثنين : 13/11/2024",
    },
    {
      sender: "كريم علي",
      title: "جلسة تصميم جرافيكي",
      appointment: "الثلاثاء : 14/11/2024",
    },
    {
      sender: "نورا حسن",
      title: "نقاش حول محتوى السوشيال ميديا",
      appointment: "الأربعاء : 15/11/2024",
    },
    {
      sender: "ياسر إبراهيم",
      title: "تحليل بيانات المستخدم",
      appointment: "الخميس : 16/11/2024",
    },
    {
      sender: "منى خليل",
      title: "استعراض خطة التسويق",
      appointment: "الجمعة : 17/11/2024",
    },
    {
      sender: "منى خليل",
      title: "استعراض خطة التسويق",
      appointment: "الجمعة : 17/11/2024",
    },
    {
      sender: "منى خليل",
      title: "استعراض خطة التسويق",
      appointment: "الجمعة : 17/11/2024",
    },
    {
      sender: "منى خليل",
      title: "استعراض خطة التسويق",
      appointment: "الجمعة : 17/11/2024",
    },
  ];

  return (
    <div className="flex w-full h-screen ">
      <div className="flex flex-col justify-around items-center w-full bg-[#292929] overflow-auto">
        <CreateAppointment />
        <AppointmentsTable clientTime={clientTime} />
      </div>
      <SideBar />
    </div>
  );
};

export default AppointmentsPage;
