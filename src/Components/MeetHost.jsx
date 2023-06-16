import React from 'react'

export default function MeetHost() {
    return (
        <div>
            {/* Heading */}
            <h3 className='text-lg font-semibold mb-8 mt-2'>Meet our host</h3>

            <div className='bg-gray-100 rounded-md px- py-12'>
                <div className='w-7/12 mx-auto'>
                    {/* Host card */}
                    <div class=" flex justify-center items-center gap-10 pl-8 py-10 bg-white shadow-md rounded-lg dark:bg-gray-800 dark:border-gray-700">
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
                </div>
            </div>

        </div>
    )
}
