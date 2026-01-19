import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import playstation from "../assets/playstation.png";
import pixelphone from "../assets/pixelphone.png";
import airpods from "../assets/airpods.png"; 
import { FiInbox } from "react-icons/fi";
import { CiTrophy, CiCreditCard1, CiHeadphones } from "react-icons/ci";
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
        <div className="max-w-[1220px] mx-auto px-4 sm:px-6 lg:px-10">

            {/* HERO + SIDE CARDS */}
            <div className="flex flex-col lg:flex-row gap-6 my-10">

                {/* HERO SLIDER */}
                <div className="w-full lg:w-2/3 bg-[#F2F4F5]">
                    <Slider {...settings} className="custom-dots">

                        {[1,2,3].map((_, idx) => (
                            <div key={idx} className="relative p-4 sm:p-6">
                                <div className="absolute top-5 right-5 sm:top-7 sm:right-8 w-16 h-16 sm:w-20 sm:h-20 bg-[#2484C2] text-white rounded-full flex items-center justify-center text-lg font-bold shadow-lg">
                                    $299
                                </div>

                                <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
                                    {/* Left Text */}
                                    <div className="w-full md:w-1/2">
                                        <h5 className="flex items-center text-[14px] text-[#2484C2] font-semibold mb-2">
                                            <div className="w-6 h-0.5 bg-[#2484C2] mr-2"></div>
                                            THE BEST PLACE TO PLAY
                                        </h5>
                                        <h2 className="text-2xl sm:text-3xl md:text-[38px] font-semibold text-[#191C1F]">Xbox Consoles</h2>
                                        <p className="text-gray-700 text-sm sm:text-[18px] mt-2 mb-4 sm:mb-9">Save up to 50% on select Xbox games. Get 3 months of PC Game Pass for $2 USD.</p>
                                        <Link to="/shop" className="inline-block px-6 py-2 sm:py-3 mt-2 sm:mt-6 rounded-md bg-[#FA8232] text-white font-semibold">Shop Now →</Link>
                                    </div>

                                    {/* Right Image */}
                                    <div className="w-full md:w-1/2 flex justify-center items-center mt-4 md:mt-0">
                                        <img src={playstation} alt="Playstation" className="w-full max-w-[368px] h-auto object-contain"/>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </Slider>
                </div>

                {/* SIDE CARDS */}
                <div className="w-full lg:w-1/3 flex flex-col gap-4">

                    {/* Top Card */}
                    <div className="flex flex-col sm:flex-row bg-[#191C1F] rounded-md relative overflow-hidden">
                        <div className="w-full sm:w-1/2 p-4 sm:pt-10 sm:pl-6 text-white">
                            <h6 className="text-[#EBC80C]">Summer Sales</h6>
                            <h1 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">New Google Pixel 6 Pro</h1>
                            <Link to="/shop" className="inline-block px-4 py-2 mt-2 sm:mt-6 rounded-md bg-[#FA8232]">Shop Now →</Link>
                        </div>
                        <div className="w-full sm:w-1/2 flex justify-center items-center relative">
                            <img src={pixelphone} alt="Pixel" className="w-full max-w-[180px] sm:max-w-none object-contain absolute sm:static top-4 sm:top-auto"/>
                        </div>
                    </div>

                    {/* Bottom Card */}
                    <div className="flex flex-col sm:flex-row bg-[#F2F4F5] rounded-md overflow-hidden">
                        <div className="w-full sm:w-1/2 flex justify-center items-center">
                            <img src={airpods} alt="Airpods" className="w-32 sm:w-full object-contain"/>
                        </div>
                        <div className="w-full sm:w-1/2 p-4 sm:pt-10 sm:pl-6">
                            <h1 className="text-xl sm:text-2xl font-semibold">Xiaomi FlipBuds Pro</h1>
                            <h6 className="text-[#2484C2] text-base sm:text-[18px] mb-4">$299 USD</h6>
                            <Link to="/shop" className="inline-block px-4 py-2 mt-2 sm:mt-6 rounded-md bg-[#FA8232] text-white">Shop Now →</Link>
                        </div>
                    </div>
                </div>

            </div>

            {/* FEATURES ROW */}
            <div className="flex flex-wrap justify-around gap-4 border border-gray-300 p-4 sm:p-6 mb-2 rounded-md">
                <div className="flex items-center gap-2 sm:gap-4">
                    <FiInbox size={40} />
                    <div>
                        <h3 className="text-sm font-semibold">Fastest Delivery</h3>
                        <h6 className="text-xs">Delivery in 24/H</h6>
                    </div>
                </div>
                <div className="flex items-center gap-2 sm:gap-4">
                    <CiTrophy size={40} />
                    <div>
                        <h3 className="text-sm font-semibold">24 Hours Return</h3>
                        <h6 className="text-xs">100% money-back guarantee</h6>
                    </div>
                </div>
                <div className="flex items-center gap-2 sm:gap-4">
                    <CiCreditCard1 size={40} />
                    <div>
                        <h3 className="text-sm font-semibold">Secure Payment</h3>
                        <h6 className="text-xs">Your money is safe</h6>
                    </div>
                </div>
                <div className="flex items-center gap-2 sm:gap-4">
                    <CiHeadphones size={40} />
                    <div>
                        <h3 className="text-sm font-semibold">Support 24/7</h3>
                        <h6 className="text-xs">Live contact/message</h6>
                    </div>
                </div>
            </div>

        </div>
    );
}
