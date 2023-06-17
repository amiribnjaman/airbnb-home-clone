import React from 'react'

export default function Footer() {
    return (
        <div className='bg-[#F5F5F5] mt-[-32px]'>
            <hr className='my-8' />
            <footer class="static bottom-0 dark:bg-gray-900">
                <div class="w-[90%] items-center mx-auto max-w-screen-xl">
                    {/*---------------- Footer Top Section-----------------*/}
                    <div className='md:flex md:justify-between'>
                        <div className=''>
                            <ul class="text-black dark:text-gray-400 font-normal flex flex-col gap-1">
                                <li class=" mt-1 text-[16px] font-[600] mb-4"> Support
                                </li>
                                <li class=" mt-1 text-[14px] font-[500]"> <a href="" className='hover:underline'>Help center</a>
                                </li>
                                <li class=" mt-1 text-[14px] font-[500]"> <a href="" className='hover:underline'>AirCover</a>
                                </li>
                                <li class=" mt-1 text-[14px] font-[500]"> <a href="" className='hover:underline'>Supporting people with disabilities</a>
                                </li>
                                <li class=" mt-1 text-[14px] font-[500]"> <a href="" className='hover:underline'>Cancellation options</a>
                                </li>
                                <li class=" mt-1 text-[14px] font-[500]"> <a href="" className='hover:underline'>Our COVID-19 Response</a>
                                </li>
                                <li class=" mt-1 text-[14px] font-[500]"> <a href="" className='hover:underline'>Report a neighborhood concern</a>
                                </li>
                            </ul>
                        </div>
                        <div className=''>
                            <ul class="text-black dark:text-gray-400 font-normal flex flex-col gap-1">
                                <li class=" mt-1 text-[16px] font-[600] mb-4"> Community
                                </li>
                                <li class=" mt-1 text-[14px] font-[500]"> <a href="" className='hover:underline'>Airbnb.org: disaster relief housing</a>
                                </li>
                                <li class=" mt-1 text-[14px] font-[500]"> <a href="" className='hover:underline'>Combating discrimination</a>
                                </li>
                            </ul>
                        </div>
                        <div className=''>
                            <ul class="text-black dark:text-gray-400 font-normal flex flex-col gap-1">
                                <li class=" mt-1 text-[16px] font-[600] mb-4"> Hosting
                                </li>
                                <li class=" mt-1 text-[14px] font-[500]"> <a href="" className='hover:underline'>Airbnb your home</a>
                                </li>
                                <li class=" mt-1 text-[14px] font-[500]"> <a href="" className='hover:underline'>AirCover for Hosts</a>
                                </li>
                                <li class=" mt-1 text-[14px] font-[500]"> <a href="" className='hover:underline'>Explore hosting resources</a>
                                </li>
                                <li class=" mt-1 text-[14px] font-[500]"> <a href="" className='hover:underline'>Visit our community forum</a>
                                </li>
                                <li class=" mt-1 text-[14px] font-[500]"> <a href="" className='hover:underline'>How to host responsibly</a></li>
                                <li class=" mt-1 text-[14px] font-[500]"> <a href="" className='hover:underline'>Airbnb-friendly apartments</a>
                                </li>
                            </ul>
                        </div>
                        <div className=''>
                            <ul class="text-black dark:text-gray-400 font-normal flex flex-col gap-1">

                                <li class=" mt-1 text-[16px] font-[600] mb-4"> <a href="" className='hover:underline'>Airbnb</a>
                                </li>
                                <li class=" mt-1 text-[14px] font-[500]"> <a href="" className='hover:underline'>Newsroom</a>
                                </li>
                                <li class=" mt-1 text-[14px] font-[500]"> <a href="" className='hover:underline'>Learn about new features</a>
                                </li>
                                <li class=" mt-1 text-[14px] font-[500]"> <a href="" className='hover:underline'>Letter from our founders</a>
                                </li>
                                <li class=" mt-1 text-[14px] font-[500]"> <a href="" className='hover:underline'>Careers</a>
                                </li>
                                <li class=" mt-1 text-[14px] font-[500]"> <a href="" className='hover:underline'>Investors</a>
                                </li>
                                <li class=" mt-1 text-[14px] font-[500]"> <a href="" className='hover:underline'>Gift cards</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <hr class="mt-7 mb-2 border-gray-200 sm:mx-auto dark:border-gray-700" />

                    {/*------------Footer Bottom section --------------*/}
                    <div class="text-center md:flex sm:items-center sm:justify-between pb-3">

                        {/* Footer bottom left */}
                        <div className='md:flex items-center justify-center'>
                            <span class="text-sm text-black sm:text-center dark:text-gray-400 mr-4">&copy; 2023 Airbng, Inc. </span>
                            <div className=''>
                                <ul class="ml-2 mt-0 md:ml-0 flex items-center font-[600] space-x-2 md:space-x-4 text-black dark:text-gray-400">
                                    <li class=" text-sm">
                                        <a href='/terms/condition' class="hover:underline ">Terms</a>
                                    </li>

                                    <li className='hidden md:block text-[7px]'>&#8226;</li>
                                    <li className='text-sm'>
                                        <a href='/affiliate' class="hover:underline">Sitemap</a>
                                    </li>

                                    <li className='hidden md:block text-[7px]'>&#8226;</li>
                                    <li className='text-sm'>
                                        <a href='/faq' class="hover:underline">privacy</a>
                                    </li>

                                    <li className='hidden md:block text-[7px]'>&#8226;</li>
                                    <li className='text-sm'>
                                        <a href='/privacy/policy' class="hover:underline">Your privacy choices</a>
                                    </li>
                                    <li><svg width="26" height="12" fill="none"><rect x="0.5" y="0.5" width="25" height="11" rx="5.5" fill="#fff"></rect><path d="M14 1h7a5 5 0 010 10H11l3-10z" fill="#06F"></path><path d="M4.5 6.5l1.774 1.774a.25.25 0 00.39-.049L9.5 3.5" stroke="#06F" stroke-linecap="round"></path><path d="M16.5 3.5L19 6m0 0l2.5 2.5M19 6l2.5-2.5M19 6l-2.5 2.5" stroke="#fff" stroke-linecap="round"></path><rect x="0.5" y="0.5" width="25" height="11" rx="5.5" stroke="#06F"></rect></svg></li>
                                </ul>
                            </div>
                        </div>

                        {/* Footer bottom right */}
                        <div className='flex items-center justify-center'>
                            <ul class="mt-2 md:mt-0 ml-0 flex items-center space-x-2 md:space-x-4 text-black dark:text-gray-400 font-[600]">
                                <li class=" text-sm flex items-center gap-2">
                                    <span>                                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" fill="currentColor" viewBox="0 0 512 512"><path d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z" /></svg></span>
                                    <a href='' class="hover:underline ">

                                        English (US)</a>

                                </li>
                                <li className='text-sm'>
                                    <a href='/' class="hover:underline"> $ <span className='ml-1'>USD</span></a>
                                </li>
                                <li className='text-sm'>
                                    <a href="">
                                        <svg class="w-5 h-5 text-black " fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                                    </a>
                                </li>
                                <li className='text-sm'>
                                    <a href="">
                                        <svg class="w-5 h-5 text-black " xmlns="http://www.w3.org/2000/svg" height="1em" fill="currentColor" viewBox="0 0 576 512"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" /></svg>
                                    </a>
                                </li>
                                <li className='text-sm'>
                                    <a href="">
                                        <svg class="w-5 h-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="1em" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" /></svg>
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
