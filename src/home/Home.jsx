import HomeFooter from "./HomeFooter";
import HomeLayout from "./HomeLayout";
import HomeNav from "./HomeNav";

function Home() {
  return (
    <div className="w-[95%] flex flex-col gap-4 mx-auto">
      <HomeNav />
      <HomeLayout />
      <HomeFooter />
    </div>
  );
}

export default Home;
