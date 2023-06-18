import React, { useState } from 'react'
import Logo from '../Assets/Images/logo1.png'

export default function PrimaryNavbar() {
    const [showDropdown, setShowDropdown] = useState(false)

    // Manuel time set for skeleto
    const [showData, setShowData] = useState(false)
    setTimeout(() => {
        setShowData(true)
    }, 3500);


    return (
        <div>

            <nav class="w-[88%] mx-auto bg-white border-gray-200 dark:bg-gray-900">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-1">
                    <div className='md:w-[35%] -ml-2'>
                        {showData === true ? <a href="" class="flex items-center ">
                            <img src={Logo} className="w-[120px] h-[70px] text-[#FF385C]" alt="Airbnb logo" />
                        </a> : <div role="status" class="max-w-sm animate-pulse flex items-center pt-3">
                            <div class="w-[150px] h-[40px] bg-gray-200 dark:bg-gray-700 mb-4"></div>

                        </div>}


                    </div>

                    <div className='md:w-[62%] flex flex-wrap items-center justify-between'>
                        {/*---------- Search Box-------*/}
                        {showData === true ? <div className='hidden md:block '>
                            <form>
                                <div class="relative">
                                    <input type="email" id="email" class="block w-[285px] pl-6 leading-6 rounded-full text-md text-black border-1 border-gray-300 font-normal shadow-md py-2.5 bg-gray-50 focus:ring-0 focus:border-none focus:shadow-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Start your search" required />
                                    <button type="submit" class="flex items-center justify-center text-white w-8 h-8 rounded-full absolute text-center right-2 bottom-2 bg-[#FF385C] hover:bg-red-600 focus:outline-none focus:ring-0 font-medium text-sm dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        <svg className='' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" fill="currentColor"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
                                    </button>
                                </div>
                            </form>
                        </div> : <div role="status" class="max-w-sm animate-pulse flex items-center pt-3">
                            <div class="w-[300px] h-[35px] bg-gray-200 dark:bg-gray-700 mb-4"></div>

                        </div>}


                        {/* Menu right sight */}
                        {showData === true ? <div className='flex'>


                            {/* Menu button */}
                            <div class="flex items-center md:order-2 relative">
                                <button onClick={() => setShowDropdown(!showDropdown)} type="button" data-dropdown-toggle="dropdown-menu" class="inline-flex border ml-2 items-center font-medium justify-center px-3 py-2 rounded-full text-sm text-gray-900 dark:text-white cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">

                                    <div className='space-x-4 flex items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" height={15} width={15} viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
                                        <div className='p-1 bg-gray-500 text-white rounded-full'>
                                            <svg className='p-[1px]' xmlns="http://www.w3.org/2000/svg" height={21} width={21} viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" fill="currentColor" /></svg>
                                        </div>
                                    </div>
                                </button>

                                {/*------------- Drop down menu or Sub menu-----------------*/}
                                <div class={`z-50 w-[180px] ${showDropdown === true ? 'absolute top-[35px] right-[-10px]' : 'hidden'} border my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700`} id="">
                                    <ul class="py-2 font-medium" role="none">
                                        <li>
                                            <a href="#" class="block px-4 py-2 text-sm text-black hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                                                <div class="inline-flex items-center">
                                                    Sign up
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" class="block px-4 py-2 text-sm text-black hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                                                <div class="inline-flex items-center">
                                                    Log in
                                                </div>
                                            </a>
                                        </li>
                                        <hr className='my-4' />
                                        <li>
                                            <a href="#" class="block px-4 py-2 text-sm text-black hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                                                <div class="inline-flex items-center">
                                                    Airbnb your home
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" class="block px-4 py-2 text-sm text-black hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                                                <div class="inline-flex items-center">
                                                    Help
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                {/*---------- Humberger icon for mobile menu-------------*/}
                                {/* <button data-collapse-toggle="mobile-menu-language-select" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-language-select" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" fill="currentColor" aria-hidden="true" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button> */}
                            </div>
                            <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-language-select">
                                <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-2 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                    <li className='hidden md:block px-3 py-2 hover:bg-gray-100 rounded-full cursor-pointer'>
                                        <a href="#" class="block font-semibold py-2 pl-3 pr-4 text-white bg-black rounded md:bg-transparent text-[14px] hover:bg-gray-100 md:text-black md:p-0 md:dark:text-blue-500" aria-current="page">Airbnb your home</a>
                                    </li>
                                    <li className='hidden md:block cursor-pointer px-3 py-2 hover:bg-gray-100 rounded-full'>
                                        <a href="#" class="bg-white text-black block pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 mt-1 md:p-0 md:hover:bg-transparent   dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 hover:bg-gray-100 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" fill="currentColor" viewBox="0 0 512 512"><path d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z" /></svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div> : <div role="status" class="max-w-sm animate-pulse flex items-center pt-3">
                            <div class="w-[300px] h-[35px] bg-gray-200 dark:bg-gray-700 mb-4"></div>

                        </div>}
                    </div>
                </div>
            </nav>

        </div>
    )
}
