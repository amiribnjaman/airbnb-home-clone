import React from 'react'

export default function SecondaryNavbar({ showBtn, showSecondaryNav }) {
    return (
        <div>

            {showSecondaryNav === true ? <nav className='border-b fixed transition-opacity top-0 left-0 w-full z-30 mx-auto bg-gray-100 border-gray-200 dark:bg-gray-900'>
                <div className='w-[90%] mx-auto'>
                    <div class="flex items-center justify-between py-4">
                        <div className='flex'>
                            <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-language-select">
                                <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-2 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                    <li className='px-3 py-2 hover:bg-gray-100 rounded-full cursor-pointer'>
                                        <a href="#" class="block py-2 pl-3 pr-4 text-white bg-black rounded md:bg-transparent font-normal hover:bg-gray-100 md:text-black md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
                                    </li>
                                    <li className='cursor-pointer px-3 py-2 hover:bg-gray-100 rounded-full'>
                                        <a href="#" class="bg-white text-black block pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 mt-1 md:p-0 md:hover:bg-transparent   dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 hover:bg-gray-100 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                            About
                                        </a>
                                    </li>
                                    <li className='cursor-pointer px-3 py-2 hover:bg-gray-100 rounded-full'>
                                        <a href="#" class="bg-white text-black block pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 mt-1 md:p-0 md:hover:bg-transparent   dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 hover:bg-gray-100 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                            Contact
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>


                        {/* button */}
                        {showBtn === true ?
                            <div className='ml-auto flex'>
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
