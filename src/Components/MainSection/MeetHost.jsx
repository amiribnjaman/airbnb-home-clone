import React from 'react'

export default function MeetHost() {
    return (
        <div>
            {/* Heading */}
            <h3 className='text-lg font-semibold mb-8 mt-2'>Meet our host</h3>

            <div className='bg-gray-100 rounded-lg px- py-12'>
                <div className='md:w-7/12 mx-auto'>
                    {/* Host card */}
                    <div class="w-[95%] mx-auto md:w-full flex justify-center items-center gap-10 md:pl-8 py-10 bg-white shadow-md rounded-3xl dark:bg-gray-800 dark:border-gray-700">
                        <div className='text-center flex flex-col items-center'>
                            <img src="" className='w-14 h-14 rounded-full' alt="" />
                            <h5 className='font-semibold text-3xl'>Sagraria</h5>
                            <h6 className='text-[14px]'>Superhost</h6>
                        </div>
                        <div>
                            <div>
                                <h4 className='font-bold text-xl'>316</h4>
                                <p className='font-semibold text-[11px]'>Reviews</p>
                            </div>
                            <hr className='my-2'/>
                            <div>
                                <h4 className='font-bold text-xl'>4.86</h4>
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
                        <ul className='text-[13px] gap-y-2 flex flex-col font-semibold'>
                            <li>Born in 60s</li>
                            <li>My work: coach</li>
                            <li>Fun facts: no one believes my age</li>
                            <li>For guest, I always: Help them enjoy Valencia</li>
                            <li>What makes my home unique: Good energy and felling at home</li>
                        </ul>
                        <p className='mt-5 font-semibold text-[13px] mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, velit inventore magnam sunt cupiditate repellendus a repudiandae fugit sed blanditiis?</p>
                        <a href="" className='underline font-semibold'>Show more</a>

                        <div className='mt-6'>
                        <button className='bg-black py-2 px-3 text-sm rounded text-white '>Message Host</button>
                        </div>
                        <hr className='my-6' />
                        <p className='text-[12px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem consectetur accusamus nam id sunt eveniet, perferendis omnis dignissimos asperiores praesentium.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
