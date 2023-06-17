import React from 'react'

export default function ExploreOtherOptions() {
    return (
        <>
            <div className='mt-6 bg-[#F5F5F5] pb-4'>
                <hr className='mb-14 ' />
                <div className='w-[90%] mx-auto'>

                    {/* Top heading and option */}
                    <h2 class=" text-[22px] font-semibold text-black  dark:text-white mt-6 mb-2">Explore others option in and around Valencia</h2>

                    <div class="md:flex mt-1 md:justify-between">
                        <div className='md:w-1/4'>
                            <ul class="text-[#717171] dark:text-gray-400 font-normal  gap-y-2 flex flex-col mt-4">
                                <li class=" mt-1 text-[16] font-[400]">Denia
                                </li>
                                <li className='mt-1 text-[16] font-[400]'>Ibiza
                                </li>
                                <li className='mt-1 text-[16] font-[400]'>Tragona
                                </li>
                            </ul>
                        </div>

                        <div className='md:w-1/4'>
                            <ul class="text-[#717171] dark:text-gray-400 font-normal  gap-y-2 flex flex-col mt-4">
                                <li class=" mt-1 text-[16] font-[400]">Calp
                                </li>
                                <li className='mt-1 text-[16] font-[400]'>Torreveaza
                                </li>
                                <li className='mt-1 text-[16] font-[400]'>Palma
                                </li>
                            </ul>
                        </div>
                        <div className='md:w-1/4'>
                            <ul class="text-[#717171] dark:text-gray-400 font-normal  gap-y-2 flex flex-col mt-4">
                                <li class=" mt-1 text-[16] font-[400]">Benidrom
                                </li>
                                <li className='mt-1 text-[16] font-[400]'>Formentera
                                </li>
                                <li className='mt-1 text-[16] font-[400]'>Sitges
                                </li>
                            </ul>
                        </div>
                        <div className='md:w-1/4'>
                            <ul class="text-[#717171] dark:text-gray-400 font-normal  gap-y-2 flex flex-col mt-4">
                                <li class=" mt-1 text-[16] font-[400]">Alicante</li>
                                <li className='mt-1 text-[16] font-[400]'>Salou
                                </li>
                                <li className='mt-1 text-[16] font-[400]'>Majorca
                                </li>
                            </ul>
                        </div>
                    </div>


                    {/* Middle heading and option */}
                    <h2 class="mt-12 text-[18px] font-[400] text-black  dark:text-white mb-2">Others types of stays on Airbnb</h2>

                    <div class="md:flex md:justify-between">
                        <div className='md:w-1/4'>
                            <ul class="text-[#717171] dark:text-gray-400 font-normal mt-4">
                                <li className='mt-1 text-[16] font-[400]'>Valencia vacation rentals
                                </li>
                                <li className='mt-1 text-[16] font-[400]'>Luxury rentals in Spain
                                </li>
                            </ul>
                        </div>

                        <div className='md:w-1/4'>
                            <ul class="text-[#717171] dark:text-gray-400 font-normal mt-4">
                                <li className='mt-1 text-[16] font-[400]'>TorreveazaValencia monthly stays</li>
                            </ul>
                        </div>
                        <div className='md:w-1/4'>
                            <ul class="text-[#717171] dark:text-gray-400 font-normal  mt-4">
                                <li className='mt-1 text-[16] font-[400]'>Apartment rentals in Valencia</li>
                            </ul>
                        </div>
                        <div className='md:w-1/4'>
                            <ul class="text-[#717171] dark:text-gray-400 font-normal mt-4">
                                <li className='mt-1 text-[16] font-[400]'>Apartment rentals in Spain</li>
                            </ul>
                        </div>
                    </div>


                    {/* Footer section */}
                    <div className='my-10'>
                        <ul className='flex gap-6 text-[14px] text-black'>
                            <li> <a href="" className='hover:underline font-[14px]'>Airbnb</a> </li>
                            <li className=''>&#8250;</li>
                            <li> <a href="" className='hover:underline font-[14px]'>Spain</a> </li>
                            <li>&#8250;</li>
                            <li> <a href="" className='hover:underline font-[14px]'>Valencian Community</a> </li>
                            <li>&#8250;</li>
                            <li> <a href="" className='hover:underline font-[14px]'>Valencia Region</a> </li>
                            <li>&#8250;</li>
                            <li> <a href="" className='hover:underline font-[14px]'>Valencia</a> </li>
                        </ul>

                    </div>
                </div>
            </div>
        </>
    )
}
