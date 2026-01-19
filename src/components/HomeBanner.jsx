import React from 'react'
import redmi from '../assets/redmi.png'

const HomeBanner = () => {
    return (
        <div className='max-w-[1220px] mx-auto px-4 sm:px-6 lg:px-10'>
            <div className="flex flex-col lg:flex-row gap-3">

                {/* ---------------- LEFT BANNER ---------------- */}
                <div className="flex flex-col sm:flex-row bg-[#F2F4F5] rounded-md w-full lg:w-1/2 max-h-[336px] overflow-hidden">
                    <div className='w-full sm:w-1/2 p-6 sm:p-11 flex flex-col justify-center'>
                        <h4 className='text-white bg-[#2DA5F3] rounded p-2 inline text-sm sm:text-base'>INTRODUCING</h4>
                        <h2 className='mt-3 text-[22px] sm:text-[28px] font-semibold'>New Apple Homepod Mini</h2>
                        <p className='text-sm sm:text-base mt-2'>Jam-packed with innovation, HomePod mini delivers unexpectedly.</p>
                        <div className="mt-4 sm:mt-6">
                            <button className="bg-[#FF8A35] hover:bg-[#ff7b1b] cursor-pointer px-4 sm:px-6 py-2 sm:py-3 text-white font-semibold rounded-lg transition">
                                SHOP NOW →
                            </button>
                        </div>
                    </div>
                    <div className='w-full sm:w-1/2 flex justify-center items-center p-6 sm:p-11'>
                        <img className='w-full h-auto object-contain' src="https://www.apple.com/v/homepod-mini/j/images/overview/hero_homepod_white__fbci8wwv3_large.png" alt="homepod" />
                    </div>
                </div>

                {/* ---------------- RIGHT BANNER ---------------- */}
                <div className='flex flex-col sm:flex-row bg-black rounded-md w-full lg:w-1/2 overflow-hidden relative'>
                    <div className='w-full sm:w-1/2 p-6 sm:p-11 flex flex-col justify-center text-white'>
                        <h4 className='bg-[#EFD33D] text-black rounded p-2 inline text-sm sm:text-base'>INTRODUCING NOW</h4>
                        <h2 className='mt-3 text-[20px] sm:text-[24px] font-semibold'>Xiaomi Mi 11 Ultra 12GB+256GB</h2>
                        <p className='text-[#ADB7BC] text-xs sm:text-sm mt-2'>*Data provided by internal laboratories. Industry measurement.</p>
                        <div className="mt-4 sm:mt-6">
                            <button className="bg-[#FF8A35] hover:bg-[#ff7b1b] cursor-pointer px-4 sm:px-6 py-2 sm:py-3 text-white font-semibold rounded-lg transition">
                                SHOP NOW →
                            </button>
                        </div>
                    </div>
                    <div className='w-full sm:w-1/2 relative flex justify-center items-center p-4 sm:p-11 mt-2 sm:mt-0'>
                        <img className='h-auto max-h-[200px] sm:max-h-full object-contain' src={redmi} alt="Xiaomi" />
                        <div className="absolute top-4 sm:top-7 right-4 sm:right-8 w-16 sm:w-20 h-16 sm:h-20 bg-[#2DA5F3] text-white rounded-full flex items-center justify-center text-base sm:text-lg font-bold shadow-lg">
                            $599
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HomeBanner
