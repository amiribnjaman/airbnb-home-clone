import React from 'react'

export default function ThingstoKnow() {
    return (
        <div className='w-[90%] mx-auto'>
            <hr  className='mt-8 mb-10'/>
            <div class="">
                
            <h3 className='text-lg font-semibold'>Things to know</h3>
            <div className='md:flex md:gap-x-40'>
            <div className=''>
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
                
            </div>
        </div>
    )
}
