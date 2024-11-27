import HomeFooter from "../../Components/AdminDashboard/home/HomeFooter";
import HomeLayout from "../../Components/AdminDashboard/home/HomeLayout";
import HomeNav from "../../Components/AdminDashboard/home/HomeNav";

function Home() {
  return (
    <div className="w-full md:w-[95%] mx-auto flex flex-col gap-6 md:gap-8">
      <HomeNav />
      <HomeLayout />
      <HomeFooter />
    </div>
  );
}

export default Home;
