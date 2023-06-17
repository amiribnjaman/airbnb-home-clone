import React from 'react'
import MainSectionLeft from './MainSectionLeft'

export default function MainSection() {
    return (
        <section className='w-[88%] mx-auto my-12 md:flex md:justify-between md:gap-x-10 relative'>
            {/* Main section left */}
            <div className='md:w-[58%]'>
                {/* Main section left component. this component holds others component */}
                <MainSectionLeft />
            </div>

            {/* Main section right */}
            <div className='md:w-[32%] top-28 right-0 sticky my-10 md:my-0 md:h-[275px]'>
                {/* Availability card */}
                <div class="border px-6 py-4 bg-white shadow-lg rounded-md dark:bg-gray-800 dark:border-gray-700">
                    <div className='flex justify-between'>
                        <h4 className='font-bold text-[20px]'>$37 <span className='font-normal text-[12px]'>night</span></h4>
                        <div className='flex items-center gap-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" height={11} viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" /></svg>
                            <span className='ml-1 font-semibold '>4.87 </span> <span className='text-[8px]'>&#8226;</span><span className='text-[13px] ml-1'>171 reviews</span>
                        </div>
                    </div>

                    {/* Short table */}
                    <div class="relative overflow-x-auto">
                        <div class="border-[#5c5757] w-full text-sm text-left text-black dark:text-gray-400 border my-4 rounded-lg">
                            <div className='flex border-b border-[#B0B0B0] px-4 text-left'>
                                <div className='w-1/2 border-r py-4 border-[#B0B0B0]'>
                                    <h6 className='font-bold text-[12px]'>CHECK-IN</h6>
                                    <p className='font-semibold text-[12px]'>11/12/2020</p>
                                </div>
                                <div className='pl-2 w-1/2 py-4'>
                                    <h6 className='font-bold text-[12px]'>CHECK OUT</h6>
                                    <p className='font-semibold text-[12px] text-[#717171]'>Add Dates</p>
                                </div>
                            </div>
                            <div className='px-2 py-4 flex justify-between'>
                                <div>
                                    <h6 className='font-bold text-[12px]'>GUESTS</h6>
                                    <p className='text-[12px] font-bold'>1 Guest</p>
                                </div>
                                <span className='text-[14px]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '20px', width: '20px', fill: 'currentcolor' }}><path fill="currentColor" d="M28 12 16.7 23.3a1 1 0 0 1-1.4 0L4 12"></path></svg>
                                </span>
                            </div>
                        </div>
                    </div>


                    {/* button */}
                    <div className='mt-4'>
                        <button className='w-full bg-gradient-to-r bg-red-600 rounded-md text-white py-2 font-semibold'>Check Availability</button>
                    </div>
                </div>

                <div className='text-center mt-4'>
                    <a href="" className='underline font-semibold text-[11px] '>Report this listing</a>
                </div>
            </div>
        </section>
    )
}
