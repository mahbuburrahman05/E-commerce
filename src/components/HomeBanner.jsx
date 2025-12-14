import React from 'react'
import redmi from '../assets/redmi.png'

const HomeBanner = () => {
    return (
        <div className='max-w-[1220px] mx-auto'>
            <div className="flex gap-3">
                {/* ---------------- LEFT BANNER ---------------- */}
                <div className="flex max-h-[336px] w-1/2 bg-[#F2F4F5] rounded items-center">
                    <div className='w-1/2 p-11'>
                        <h4 className='text-white bg-[#2DA5F3] rounded p-[8px] inline'>INTRODUCING</h4>
                        <h2 className='mt-3 text-[28px] font-semibold'>New Apple Homepod Mini</h2>
                        <p>Jam-packed with innovation, HomePod mini delivers unexpectedly.</p>
                        <div className="mx-auto">
                            <button className="mt-6 bg-[#FF8A35] hover:bg-[#ff7b1b] cursor-pointer px-6 py-3 text-white font-semibold rounded-lg transition">
                                SHOP NOW →
                            </button></div>
                    </div>
                    <div className='w-1/2 py-12 px-11'>
                        <img src="https://www.apple.com/v/homepod-mini/j/images/overview/hero_homepod_white__fbci8wwv3oi2_large.png" alt="homepod" />
                    </div>
                </div>
                <div className=' flex max-h-[336px] relative bg-black rounded w-1/2'>
                    {/* ---------------- RIGHT BANNER ---------------- */}
                    <div className='w-1/2 p-11   text-white'>
                        <h4 className=' bg-[#EFD33D] text-black rounded p-[8px] inline'>INTRODUCING NOW</h4>
                        <h2 className='mt-3 text-[24px]  font-semibold'>Xiaomi Mi 11 Ultra
                            12GB+256GB</h2>
                        <p className='text-[#ADB7BC]'>*Data provided by internal laboratories. Industry measurment.</p>
                        <div className="mx-auto">
                            <button className="mt-6 bg-[#FF8A35] hover:bg-[#ff7b1b] cursor-pointer px-6 py-3 text-white font-semibold rounded-lg transition">
                                SHOP NOW →
                            </button></div>
                    </div>
                    <div className='w-1/2 relative  py-3 mt-3 mb-[-12px] px-11'>
                        <img className='h-full' src={redmi} alt="homepod" />
                        <div className="absolute top-7 right-8 w-20 h-20 bg-[#2DA5F3] text-white rounded-full flex items-center justify-center text-lg font-bold shadow-lg">
                            $599
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HomeBanner