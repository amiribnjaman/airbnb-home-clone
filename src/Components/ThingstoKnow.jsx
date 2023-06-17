import React from 'react'

export default function ThingstoKnow() {
    return (
        <div className='w-[90%] mx-auto'>
            <hr className='mt-8 mb-10' />
            <div class="">

                <h3 className='text-[22px] font-semibold'>Things to know</h3>
                <div className='md:flex md:justify-between'>
                    <div className='md:w-1/3'>
                        <ul class="text-black dark:text-gray-400 font-normal gap-y-2 flex flex-col mt-4">
                            <li class=" mt-1 text-[16] font-[600]">House rules
                            </li>
                            <li className='mt-1 text-[16] font-[400]'>Check-in after 2:00 PM
                            </li>
                            <li className='mt-1 text-[16] font-[400]'>Checkout before 11:00 AM
                            </li>
                            <li className='mt-1 text-[16] font-[400]'> guests maximum
                            </li>
                            <li>
                                <a href="" className='mt-1 text-[16] font-[400] underline'>
                                    Show more
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className='md:w-1/3'>
                        <ul class="text-black dark:text-gray-400 font-normal gap-y-2 flex flex-col mt-4">
                            <li class=" mt-1 text-[16] font-[600]">Safety & property
                            </li>
                            <li className='mt-1 text-[16] font-[400]'>Security camera/recording device
                            </li>
                            <li className='mt-1 text-[16] font-[400]'>Carbon monoxide alarm
                            </li>
                            <li className='mt-1 text-[16] font-[400]'> Smoke alarm
                            </li>
                            <li>
                                <a href="" className='mt-1 text-[16] font-[400] underline'>
                                    Show more
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className='md:w-1/3'>
                        <ul class="text-black dark:text-gray-400 font-normal gap-y-2 flex flex-col mt-4">
                            <li class=" mt-1 text-[16] font-[600]">Cancellation policy
                            </li>
                            <li className='mt-1 text-[16] font-[400]'>Add your trip dates to get the cancellation details for this stay.


                            </li>
                            <li>
                                <a href="" className='mt-1 text-[16] font-[400] underline'>
                                    Add dates
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}
