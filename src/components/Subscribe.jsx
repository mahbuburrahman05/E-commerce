import React from 'react'

const Subscribe = () => {
  return (
    <div className='bg-[#1B6392] text-center py-[72px]'>
        <div className='max-w-[1220px] mx-auto'>
            <div className='max-w-[500px] mx-auto'>
                        <h2 className='text-white text-[32px] font-semibold'>Subscribe to our newsletter</h2>
        <p className='text-white text-[16px]'>Praesent fringilla erat a lacinia egestas. Donec vehicula tempor libero et cursus. Donec non quam urna. Quisque vitae porta ipsum.</p>
            </div>
    <div className='mt-[25px]'>
        
            <input type="text" placeholder='Enter your email address' className='p-4 relative bg-white rounded md:w-[600px] focus:outline-none'/>
            <button className='bg-[#FF8A35] ml-[-150px] mt-2 absolute cursor-pointer text-white p-2 rounded transition'>SUBSCRIBE→</button>
    </div>
        </div>
    </div>
  )
}

export default Subscribe