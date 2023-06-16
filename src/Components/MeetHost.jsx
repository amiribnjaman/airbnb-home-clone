import React from 'react'

export default function MeetHost() {
    return (
        <div>
            {/* Heading */}
            <h3 className='text-lg font-semibold mb-8 mt-2'>Meet our host</h3>

            <div className='bg-gray-100 rounded-md px- py-12'>
                <div className=' max-w-sm mx-auto'>
                    {/* Host card */}
                    <div class="max-w-sm flex gap-10 p-10 bg-white shadow-md rounded-lg dark:bg-gray-800 dark:border-gray-700">
                        <div className='text-center justify-center flex flex-col'>
                            <img src="" className='w-14 h-14 rounded-full' alt="" />
                            <h5 className='font-semibold text-2xl'>Sagraria</h5>
                            <h6 className='text-[14px]'>Superhost</h6>
                        </div>
                        <div>
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Need a help in Claim?</h5>
                            </a>
                            <a href="#" class="inline-flex items-center text-blue-600 hover:underline">
                                See our guideline
                                <svg class="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
