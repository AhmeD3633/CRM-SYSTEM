import img4 from "../../../assets/Media/Mask group.png";
import img5 from "../../../assets/Media/Group.png";
import img3 from "../../../assets/Media/Clip path group.png";
import img1 from "../../../assets/Media/Vector-1.png";
import img2 from "../../../assets/Media/Vector.png";

function HomeFooter() {
  const imgList = [img1, img2, img3, img4, img5];
  return (
    <div className="bg-[#1affb306] rounded-[10px] py-3 px-6 md:px-20 md:h-[12vh] gap-5 md:gap-7 w-full flex flex-col md:flex-row justify-around md:justify-between items-center flex-wrap">
      {imgList.map((item, index) => {
        return (
          <a href="#" key={index}>
            <img
              src={item}
              className="w-[60px] h-[18px] md:w-[90px] md:h-[30px] object-contain"
              alt={`img-${index}`}
            />
          </a>
        );
      })}
    </div>
  );
}

export default HomeFooter;
