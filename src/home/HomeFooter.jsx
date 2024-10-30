import img4 from "../assets/Media/Mask group.png";
import img5 from "../assets/Media/Group.png";
import img3 from "../assets/Media/Clip path group.png";
import img1 from "../assets/Media/Vector-1.png";
import img2 from "../assets/Media/Vector.png";

function HomeFooter() {
  const imgList = [img1, img2, img3, img4, img5]
  return (
    <div className="bg-[#f0fffa] px-3 md:h-[12vh] gap-4 w-full flex justify-center md:justify-between items-center flex-wrap">
      {imgList.map((item,index) => {
        return(
          <a href="" key={index} >
            <img src={item} className="w-[150px] h-[40px]" alt="..." />
          </a>
        )
      })}
    </div>
  );
}

export default HomeFooter;
