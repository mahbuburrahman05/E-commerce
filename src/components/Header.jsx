import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import playstation from "../assets/playstation.png";
import "../index.css";
import pixelphone from "../assets/pixelphone.png";
import airpods from "../assets/airpods.png"; 
import { FiInbox } from "react-icons/fi";
import { CiTrophy } from "react-icons/ci";
import { CiCreditCard1 } from "react-icons/ci";
import { CiHeadphones } from "react-icons/ci";
import { Link } from "react-router";





export default function Header() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
< div className="max-w-[1220px] mx-auto">
        <div className="flex  mx-auto gap-6 my-10">
            <div className="w-[64%]  bg-[#F2F4F5]">
                <Slider {...settings} className="custom-dots">

                    {/* Slide 1 */}
                    <div className="relative">
                        <div className="absolute top-7 right-8 w-20 h-20 bg-[#2484C2] text-white rounded-full 
      flex items-center justify-center text-lg font-bold shadow-lg">
                            $299
                        </div>
                        <div className="flex items-center relative justify-between gap-6">
                            {/* Left Text */}
                            <div className="w-1/2 pl-[54px]">
                                <h5 className="flex items-center text-[14px] text-[#2484C2] font-semibold"><div className="w-[25px] h-0.5  bg-[#2484C2]"></div>THE BEST PLACE TO PLAY</h5>
                                <h2 className="text-[38px] font-semibold text-[#191C1F]">Xbox Consoles</h2>
                                <p className="text-gray-700 text-[18px] mb-9 mt-2">Save up to 50% on select Xbox games. Get 3 months of PC Game Pass for $2 USD.</p>
                                <Link to="/shop" className="px-13 rounded-[5px] mt-6 text-white py-3 bg-[#FA8232]">Shop Now →</Link>
                            </div>

                            {/* Right Image */}
                            <div className="w-1/2">
                                <img src={playstation} alt="" className="mr-3 mt-10" />
                            </div>
                        </div>
                    </div>

                    {/* Slide 2 */}
                    <div className="relative">
                        <div className="absolute top-7 right-8 w-20 h-20 bg-[#2DA5F3] text-white rounded-full 
      flex items-center justify-center text-lg font-bold shadow-lg">
                            $299
                        </div>
<div className="flex items-center relative justify-between gap-6">

  {/* Left Text */}
  <div className="w-1/2 pl-[54px]">
    <h5 className="flex items-center text-[14px] text-[#2484C2] font-semibold">
      <div className="w-[25px] h-0.5 bg-[#2484C2]"></div>
      THE BEST PLACE TO PLAY
    </h5>

    <h2 className="text-[38px] font-semibold text-[#191C1F]">Xbox Consoles</h2>
    <p className="text-gray-700 text-[18px] mb-9 mt-2">
      Save up to 50% on select Xbox games. Get 3 months of PC Game Pass for $2 USD.
    </p>

    <Link to="/shop" className="px-13 cursor-pointer rounded-[5px] mt-6 text-white py-3 bg-[#FA8232]">
      Shop Now →
    </Link>
  </div>

  {/* Right Image */}
  <div className="w-1/2 flex justify-center items-center">
    <img
      src={playstation}
      alt="Playstation"
      className="w-[368px] h-[408px] object-contain"
    />
  </div>

</div>

                    </div>

                    {/* Slide 3 */}
                    <div className="relative">
                        <div className="absolute top-7 right-8 w-20 h-20 bg-[#2484C2] text-white rounded-full 
      flex items-center justify-center text-lg font-bold shadow-lg">
                            $299
                        </div>
                        <div className="flex items-center relative justify-between gap-6">
                            {/* Left Text */}
                            <div className="w-1/2 pl-[54px]">
                                <h5 className="flex ml-[3px] items-center text-[14px] text-[#2484C2] font-semibold"><div className="w-[25px] h-0.5  bg-[#2484C2]"></div>THE BEST PLACE TO PLAY</h5>
                                <h2 className="text-[38px] font-semibold text-[#191C1F]">Xbox Consoles</h2>
                                <p className="text-gray-700 text-[18px] mb-9 mt-2">Save up to 50% on select Xbox games. Get 3 months of PC Game Pass for $2 USD.</p>
                                <Link to="/shop" className="px-13 cursor-pointer rounded-[5px] mt-6 text-white py-3 bg-[#FA8232]">Shop Now →</Link>
                            </div>

                            {/* Right Image */}
                            <div className="w-1/2">
                                <img src={playstation} alt="" className="w-full h-full p-14" />
                            </div>
                        </div>
                    </div>

                </Slider>
            </div>

            <div className="w-[36%]  relative rounded-[5px]">
            <div className="flex flex-col ">
                            <div className="flex bg-[#191C1F] rounded-[5px] mb-6">
                    <div className="w-1/2 pt-[45px] pl-[35px] pb-[93px] text-white">
                        <h6 className="text-[#EBC80C] ">Summer Sales</h6>
                        <h1 className="text-[24px] mb-6 font-semibold">New Google Pixel 6 Pro</h1>
                        <Link to="/shop" className="px-6 rounded-[5px] mt-6 text-white py-3 bg-[#FA8232]">Shop Now →</Link>
                    </div>
                    <div className="w-1/2">
                        <img className="absolute top-[57px] right-0" src={pixelphone} alt="" />
                    </div>
                </div>
                <div className="bg-[#F2F4F5] flex items-center rounded-[5px]">
                    <div className="w-1/2">
                        <img className="" src={airpods} alt="" />
                    </div>
                    <div className="w-1/2 pt-[45px] pl-[35px] pb-[45px] ">
                        <h1 className="text-[24px] font-semibold">Xiaomi FlipBuds Pro</h1>
                        <h6 className="text-[#2484C2] mb-6 text-[18px]">$299 USD</h6>
                        <Link to="/shop" className="px-6 cursor-pointer  rounded-[5px] mt-9 text-white py-3 bg-[#FA8232]">Shop Now →</Link>
                    </div>
                </div>
            </div>
            </div>
        </div>
     <div className="flex mx-auto justify-around border border-gray-300 p-[18px] mb-2">
                <div className="flex items-center border-r pr-10 border-gray-300 gap-4 mr-10">
                    <div >
                        <FiInbox size={40} />
                    </div>
                    <div>
                        <h3>Fasted Delivery</h3>
                        <h6>Delivery in 24/H</h6>
                    </div>
                </div>
                <div className="flex items-center border-r pr-10 border-gray-300  gap-4 mr-10">
                    <div >
                        <CiTrophy size={40} />
                    </div>
                    <div>
                        <h3>24 Hours Return</h3>
                        <h6>100% money-back guarantee</h6>
                    </div>
                </div>
                <div className="flex items-center border-r pr-10 border-gray-300  gap-4 mr-10">
                    <div >
                        <CiCreditCard1 size={40} />
                    </div>
                    <div>
                        <h3>Secure Payment</h3>
                        <h6>Your money is safe</h6>
                    </div>
                </div>
                <div className="flex items-center  gap-4 mr-10">
                    <div >
                        <CiHeadphones size={40} />
                    </div>
                    <div>
                        <h3>FSupport 24/7</h3>
                        <h6>Live contact/message</h6>
                    </div>
                </div>
            </div>
</div>

    );
}