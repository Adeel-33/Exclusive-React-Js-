import Music_img from "../../assets/HeroSectionImages/Music_img.svg";
import mobile_img from "../../assets/HeroSectionImages/mobile_img.svg";
import apple_icon from "../../assets/HeroSectionImages/apple_icon.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

const HeroSection = () => {
  return (
    <>
      <Swiper
       navigation={true}
       modules={[Navigation]}
       className="w-full"
      >
        {/* FIRST BANNER */}
        <SwiperSlide>
          <div className="bg-black w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 md:py-20 max-w-[1440px] mx-auto">

            {/* TEXT */}
            <div className="flex-1 flex flex-col gap-3 text-center md:text-left">

              <div className="flex gap-4 items-center">
                <img src={apple_icon} alt="" />
                <h1 className=" text-gray-200">iPhone 14 series</h1>
                
              </div>  

              <h1 className="font-bold text-white text-4xl md:text-6xl lg:text-7xl leading-tight">
                Up To 10%
              </h1>
              <h1 className="font-bold text-white text-4xl md:text-6xl lg:text-7xl leading-tight">
                off Voucher
              </h1>

              <button className="bg-white text-black font-semibold px-6 py-3 rounded-lg text-lg md:text-xl w-fit mx-auto md:mx-0 mt-4">
                Shop Now
              </button>
            </div>

            {/* IMAGE */}
            <div className="flex-1 mt-10 md:mt-0 flex justify-center">
              <img
                src={mobile_img}
                alt=""
                className="w-60 sm:w-[300px] md:w-[380px] lg:w-[460px] object-contain"
              />
            </div>
          </div>
        </SwiperSlide>

        {/* SECOND BANNER */}
        <SwiperSlide>
          <div className="bg-black w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 md:py-20 max-w-[1440px] mx-auto">

            {/* TEXT AREA */}
            <div className="flex-1 flex flex-col gap-4 text-center md:text-left">

              <h1 className="font-bold text-white text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-tight">
                Enhance Your
              </h1>

              <h1 className="font-bold text-white text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-tight">
                Music Experience
              </h1>

              {/* TIMER */}
              <div className="flex gap-3 sm:gap-5 justify-center md:justify-start flex-wrap mt-3">

                {[
                  { num: "23", label: "Hours" },
                  { num: "05", label: "Days" },
                  { num: "33", label: "Minutes" },
                  { num: "49", label: "Seconds" },
                ].map((box, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-full w-[60px] h-[60px] sm:w-[75px] sm:h-[75px] flex flex-col items-center justify-center"
                  >
                    <h1 className="font-bold text-lg sm:text-xl">{box.num}</h1>
                    <p className="text-black/80 text-[10px] sm:text-xs">{box.label}</p>
                  </div>
                ))}

              </div>

              <button className="bg-white text-black font-semibold px-6 py-3 rounded-lg text-lg md:text-xl w-fit mx-auto md:mx-0 mt-4">
                Shop Now
              </button>
            </div>

            {/* IMAGE */}
            <div className="flex-1 mt-10 md:mt-0 flex justify-center">
              <img
                src={Music_img}
                alt=""
                className="w-[220px] sm:w-[280px] md:w-[380px] lg:w-[460px] object-contain"
              />
            </div>

          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HeroSection;
