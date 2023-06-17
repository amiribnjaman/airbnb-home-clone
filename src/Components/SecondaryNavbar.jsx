import React from 'react'

export default function SecondaryNavbar({ showBtn, showSecondaryNav }) {
    return (
        <div>

            {showSecondaryNav === true ? <nav className='border-b fixed transition-opacity top-0 left-0 w-full z-30 mx-auto bg-white border-gray-200 dark:bg-gray-900'>
                <div className='w-[90%] mx-auto'>
                    <div class="flex items-center justify-between py-4">
                        <div className='flex'>
                            <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-language-select">
                                <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-2 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                    <li className='cursor-pointer px-3 py-2 hover:bg-gray-100 rounded-full'>
                                        <a href="#" class="bg-white text-black block pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 mt-1 md:p-0 md:hover:bg-transparent   dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 hover:bg-gray-100 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                            Photos
                                        </a>
                                    </li>
                                    <li className='cursor-pointer px-3 py-2 hover:bg-gray-100 rounded-full'>
                                        <a href="#" class="bg-white text-black block pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 mt-1 md:p-0 md:hover:bg-transparent   dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 hover:bg-gray-100 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                            Amenities
                                        </a>
                                    </li>
                                    <li className='cursor-pointer px-3 py-2 hover:bg-gray-100 rounded-full'>
                                        <a href="#" class="bg-white text-black block pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 mt-1 md:p-0 md:hover:bg-transparent   dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 hover:bg-gray-100 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                            Reviews
                                        </a>
                                    </li>
                                    <li className='cursor-pointer px-3 py-2 hover:bg-gray-100 rounded-full'>
                                        <a href="#" class="bg-white text-black block pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 mt-1 md:p-0 md:hover:bg-transparent   dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 hover:bg-gray-100 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                            Location
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>


                        {/* button */}
                        {showBtn === true ?
                            <div className='ml-auto flex'>
                                <div>
                                    <h4 className='font-semibold text-lg'>$37 <span className='font-normal text-[12px]'>night</span></h4>
                                    <h5>
                                        <svg xmlns="http://www.w3.org/2000/svg" height={11} viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" /></svg>
                                        <span className='ml-1 font-semibold'>4.87 &#8226;</span><span className='text-[13px] ml-1'>171 reviews</span>
                                    </h5>
                                </div>
                                <button className='w-[366px] mr-[17px] bg-gradient-to-r bg-red-600 rounded-md text-white py-2 font-semibold'>Check Availability</button>
                            </div> : ''
                        }


                        <div>

                        </div>
                    </div>
                </div>
            </nav> : ''}

        </div>
    )
}
