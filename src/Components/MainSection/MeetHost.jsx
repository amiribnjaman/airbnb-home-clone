import React from 'react'
import HostImg from '../../Assets/Images/host.png'

export default function MeetHost() {
    return (
        <div>
            {/* Heading */}
            <h3 className='text-[22px] font-semibold mb-8 mt-2'>Meet our host</h3>

            <div className='bg-[#F0EFE9] rounded-xl px- py-12'>
                <div className='md:w-7/12 mx-auto'>
                    {/* Host card */}
                    <div class="w-[95%] mx-auto md:w-full flex justify-center items-center gap-10 md:pl-8 py-10 bg-white shadow-md rounded-3xl dark:bg-gray-800 dark:border-gray-700">
                        <div className='text-center flex flex-col items-center'>
                            <img src={HostImg} className='w-16 h-16 rounded-full' alt="" />
                            <h5 className='font-semibold text-3xl'>Sagraria</h5>
                            <h6 className='text-[14px]'>Superhost</h6>
                        </div>
                        <div>
                            <div>
                                <h4 className='font-bold text-[20px]'>316</h4>
                                <p className='font-semibold text-[11px]'>Reviews</p>
                            </div>
                            <hr className='my-2'/>
                            <div>
                                <h4 className='font-bold text-[20px] flex items-center gap-2'>4.86
                                <svg xmlns="http://www.w3.org/2000/svg" height={13} viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" /></svg>
                                </h4>
                                <p className='font-semibold text-[11px]'>Ratings</p>
                            </div>
                            <hr className='my-2' />
                            <div>
                                <h4 className='font-bold text-xl'>7</h4>
                                <p className='font-semibold text-[11px]'>Years hosting</p>
                            </div>
                        </div>
                    </div>

                    {/* Description */}
                    <div className='mt-6 px-4 md:px-0'>
                        <ul className='text-[16px] gap-y-2 flex flex-col font-semibold'>
                            <li>Born in 60s</li>
                            <li>My work: coach</li>
                            <li>Fun facts: no one believes my age</li>
                            <li>For guest, I always: Help them enjoy Valencia</li>
                            <li>What makes my home unique: Good energy and felling at home</li>
                        </ul>
                        <p className='font-semibold text-[16px] my-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, velit inventore magnam sunt cupiditate repellendus a repudiandae fugit sed blanditiis?</p>
                        <a href="" className='underline font-semibold'>Show more</a>

                        <div className='mt-6'>
                        <button className='bg-black font-semibold py-2.5 px-4 text-md rounded-md text-white '>Message Host</button>
                        </div>
                        <hr className='my-6' />
                        <p className='text-[12px] text-[#717171] font-[400]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem consectetur accusamus nam id sunt eveniet, perferendis omnis dignissimos asperiores praesentium.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
