import React, { useState } from 'react'

export default function SecondaryNavbar({ showBtn, showSecondaryNav }) {
    const [showSubMenu, setShowSubMenu] = useState(false)

    return (
        <div>

            {showSecondaryNav === true ? <nav className='border-b fixed transition-opacity top-0 left-0 w-full z-30 mx-auto bg-white border-gray-200 dark:bg-gray-900'>
                <div className='md:w-[88%] mx-auto relative'>
                    <div class="flex items-center justify-between">
                        <div className='flex'>
                            <div class="items-center justify-between w-full flex md:w-auto md:order-1" id="mobile-menu-language-select">
                                <ul class="md:flex hidden gap-x-2 md:gap-x-5 font-medium p-4 md:p-0 border border-gray-100 rounded-lg bg-gray-50 flex-row md:space-x-2 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                    <li className='font-bold text-[14px] cursor-pointer py-7 hover:border-b-4 border-black '>
                                        <a href="#" class="text-black block pl-3 pr-4 text-gray-900 rounded mt-1 md:p-0 md:hover:bg-transparent   dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 hover:bg-gray-100 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                            Photos
                                        </a>
                                    </li>
                                    <li className='font-bold text-[14px] cursor-pointer py-7 hover:border-b-4 border-black'>
                                        <a href="#" class=" text-black block pl-3 pr-4 text-gray-900 rounded mt-1 md:p-0 md:hover:bg-transparent   dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 hover:bg-gray-100 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                            Amenities
                                        </a>
                                    </li>
                                    <li className='font-bold text-[14px] cursor-pointer py-7 hover:border-b-4 border-black'>
                                        <a href="#" class=" text-black block pl-3 pr-4 text-gray-900 rounded mt-1 md:p-0 md:hover:bg-transparent   dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 hover:bg-gray-100 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                            Reviews
                                        </a>
                                    </li>
                                    <li className='font-bold text-[14px] cursor-pointer py-7 hover:border-b-4 border-black'>
                                        <a href="#" class=" text-black block pl-3 pr-4 text-gray-900 rounded mt-1 md:p-0 md:hover:bg-transparent   dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 hover:bg-gray-100 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                            Location
                                        </a>
                                    </li>
                                </ul>


                                {/* Menu for mobile devices */}
                                <ul className='flex gap-y-2 md:hidden gap-x-2 md:gap-x-5 font-medium p-4 md:p-0 border border-gray-100 rounded-lg flex-row'>
                                    <li>
                                        <button onClick={() => setShowSubMenu(!showSubMenu)}>
                                            {/* Humberger icon */}
                                            <svg xmlns="http://www.w3.org/2000/svg" height={25} width={25} viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
                                        </button>
                                    </li>
                                </ul>

                                {/* Secondary dropdown menu*/}
                                <ul class={`${showSubMenu === true ? 'absolute top-[60px] left-[10px]' : 'hidden'} rounded font-medium md:p-0 border border-gray-100 bg-gray-50 rounded-lg z-30 w-[150px] flex-row  md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700`}>
                                    <li className='font-bold text-[14px] cursor-pointer pb-2 hover:border-b-4 border-black '>
                                        <a href="#" class="text-black block pl-3 pr-4 text-gray-900 rounded mt-1 md:p-0 md:hover:bg-transparent   dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 hover:bg-gray-100 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                            Photos
                                        </a>
                                    </li>
                                    <li className='font-bold text-[14px] cursor-pointer pb-2 hover:border-b-4 border-black'>
                                        <a href="#" class=" text-black block pl-3 pr-4 text-gray-900 rounded mt-1 md:p-0 md:hover:bg-transparent   dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 hover:bg-gray-100 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                            Amenities
                                        </a>
                                    </li>
                                    <li className='font-bold text-[14px] cursor-pointer pb-2 hover:border-b-4 border-black'>
                                        <a href="#" class=" text-black block pl-3 pr-4 text-gray-900 rounded mt-1 md:p-0 md:hover:bg-transparent   dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 hover:bg-gray-100 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                            Reviews
                                        </a>
                                    </li>
                                    <li className='font-bold text-[14px] cursor-pointer pb-2 hover:border-b-4 border-black'>
                                        <a href="#" class=" text-black block pl-3 pr-4 text-gray-900 rounded mt-1 md:p-0 md:hover:bg-transparent   dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 hover:bg-gray-100 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                            Location
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>



                        {/* button */}
                        {showBtn === true ?
                            <div className='ml-auto flex gap-x-3 '>
                                <div className='md:block hidden'>
                                    <h4 className='font-semibold text-[14px] -mb-1'>$37 <span className='font-normal text-[11px]'>night</span></h4>
                                    <h5 className='flex items-center -mt-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" height={8} viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" /></svg>
                                        <span className='ml-1 font-semibold text-[14px]'>4.87</span><span className='text-[11px] text-[#777] ml-1'>171 reviews</span>
                                    </h5>
                                </div>
                                <button className='px-10 mr-[17px] bg-gradient-to-r bg-red-600 rounded-md text-white py-2 font-semibold'>Check Availability</button>
                            </div> : ''
                        }
                    </div>
                </div>
            </nav> : ''}

        </div>
    )
}
