import React from 'react'

export default function Footer() {
    return (
        <div className='bg-[#F5F5F5] mt-[-32px]'>
            <hr className='mt-8 mb-12'/>
            <footer class="static bottom-0 dark:bg-gray-900">
                <div class="w-[90%] items-center mx-auto max-w-screen-xl">
                    {/*---------------- Footer Top Section-----------------*/}
                    <div class="md:flex md:gap-x-40">
                        <div className=''>
                            <h2 class="mb-3 text-md font-bold text-black  dark:text-white">Privacy and Terms</h2>
                            <ul class="text-black dark:text-gray-400 font-normal md:mt-8 mt-4">
                                <li class="">
                                    <a href='/privacy/policy' class="hover:underline ">Privacy policy</a>
                                </li>
                                <li className='mt-1'>
                                    <a href='/terms/condition' class="hover:underline">Terms and condition</a>
                                </li>
                                <li className='mt-1'>
                                    <a href='/faq' class="hover:underline">FAQ</a>
                                </li>
                            </ul>
                        </div>
                        <div className=''>
                            <h2 class="md:mb-9 mb-3 text-md font-bold text-black  dark:text-white">Privacy and Terms</h2>
                            <ul class="text-black dark:text-gray-400 font-normal md:mt-8 mt-4">
                                <li class="">
                                    <a href='/privacy/policy' class="hover:underline ">Privacy policy</a>
                                </li>
                                <li className='mt-1'>
                                    <a href='/terms/condition' class="hover:underline">Terms and condition</a>
                                </li>
                                <li className='mt-1'>
                                    <a href='/faq' class="hover:underline">FAQ</a>
                                </li>
                            </ul>
                        </div>
                        <div className=''>
                            <h2 class="md:mb-9 mb-3 text-md font-bold text-black  dark:text-white">Support</h2>
                            <ul class="text-black dark:text-gray-400 font-normal md:mt-8 mt-4">
                                <li class="">
                                    <a href='/affiliate' class="hover:underline ">Affaliate a</a>
                                </li>
                                <li className='mt-1'>
                                    <a href='/contact/us' class="hover:underline">Contact us</a>
                                </li>
                                <li className='mt-1'>
                                    <a href='/advertisement' class="hover:underline">Advertise us</a>
                                </li>
                            </ul>
                        </div>
                        <div className=''>
                            <h2 class="md:mb-9 mb-3 text-md font-bold text-black  dark:text-white">Support</h2>
                            <ul class="text-black dark:text-gray-400 font-normal md:mt-8 mt-4">
                                <li class="">
                                    <a href='/affiliate' class="hover:underline ">Affaliate a</a>
                                </li>
                                <li className='mt-1'>
                                    <a href='/contact/us' class="hover:underline">Contact us</a>
                                </li>
                                <li className='mt-1'>
                                    <a href='/advertisement' class="hover:underline">Advertise us</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <hr class="mt-7 mb-2 border-gray-200 sm:mx-auto dark:border-gray-700" />

                    {/*------------Footer Bottom section --------------*/}
                    <div class="text-center md:flex sm:items-center sm:justify-between pb-2">

                        {/* Footer bottom left */}
                        <div className='flex items-center justify-center'>
                            <span class="text-sm text-black sm:text-center dark:text-gray-400">&copy; 2023 Airbng, Inc. </span>
                            <div className=''>
                                <ul class="ml-2 mt-0 md:ml-0 flex space-x-2 md:space-x-4 text-black dark:text-gray-400 font-normal">
                                    <li class=" text-sm">
                                        <a href='/terms/condition' class="hover:underline ">Terms</a>
                                    </li>
                                    <li className='text-sm'>
                                        <a href='/affiliate' class="hover:underline">Cokie policy</a>
                                    </li>
                                    <li className='text-sm'>
                                        <a href='/faq' class="hover:underline">FAQ</a>
                                    </li>
                                    <li className='text-sm'>
                                        <a href='/privacy/policy' class="hover:underline">Privacy</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Footer bottom right */}
                        <div className='flex items-center justify-center'>
                            <ul class="mt-2 md:mt-0 ml-0 flex space-x-2 md:space-x-4 text-black dark:text-gray-400 font-normal">
                                <li class=" text-sm">
                                    <a href='/terms/condition' class="hover:underline ">English (US)</a>
                                </li>
                                <li className='text-sm'>
                                    <a href='/affiliate' class="hover:underline">USD</a>
                                </li>
                                <li className='text-sm'>
                                    <a href="">
                                        <svg class="w-5 h-5 text-gray-300 hover:text-gray-400 " fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                                    </a>
                                </li>
                                <li className='text-sm'>
                                    <a href="">
                                        <svg class="w-5 h-5 text-gray-300 hover:text-gray-400" xmlns="http://www.w3.org/2000/svg" height="1em" fill="currentColor" viewBox="0 0 576 512"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" /></svg>
                                    </a>
                                </li>
                                <li className='text-sm'>
                                    <a href="">
                                        <svg class="w-5 h-5 text-gray-300 hover:text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="1em" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" /></svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
