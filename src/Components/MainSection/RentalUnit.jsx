import React from 'react'
import RentalServiceCard from './RentalServiceCard'
import HostImg from '../../Assets/Images/host.png'

export default function RentalUnit() {
    return (
        <div>
            {/* Heading with image */}
            <div className='flex justify-between gap-x-10'>
                <h2 className='font-semibold text-[22px]'>Room in a rental unit hosted by Sagrario</h2>
                <div>
                    <img className='w-10 h-10 rounded-full' src={HostImg} alt="" />
                </div>
            </div>

            {/* Rental services */}
            <div className='md:flex gap-y-4 md:gap-y-0 justify-between md:gap-x-4 mt-4'>
                {/* Rental servicel single card */}
                <RentalServiceCard svgImg={''} text={'I double bed'} />
                <RentalServiceCard svgImg={''} text={'Shared Bathroom'} />
                <RentalServiceCard svgImg={''} text={'Host and other guest may be here'} />
            </div>

            <hr className='mt-6 mb-4' />

            {/* Rental Short description */}
            <div className='mt-7 gap-y-5 grid grid-flow-row'>
                <div className='flex gap-4'>
                    <img className='w-10 h-10 rounded-full' src="" alt="" />
                    <div>
                        <h5 className='text-md font-semibold'>Room in rental unit</h5>
                        <p className='text-[13px] text-[#717375] font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, itaque.</p>
                    </div>
                </div>
                <div className='flex gap-4'>
                    <img className='w-10 h-10 rounded-full' src="" alt="" />
                    <div>
                        <h5 className='text-md font-semibold'>Room in rental unit</h5>
                        <p className='text-[13px] text-[#717375] font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, itaque.</p>
                    </div>
                </div>
                <div className='flex gap-4'>
                    <img className='w-10 h-10 rounded-full' src="" alt="" />
                    <div>
                        <h5 className='text-md font-semibold'>Room in rental unit</h5>
                        <p className='text-[13px] text-[#717375] font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, itaque.</p>
                    </div>
                </div>
            </div>

            <hr className='my-6' />
            <p>Some text has been automatically translated <a className='underline font-semibold' href="">Show original language</a></p>
            <hr className='my-6' />
        </div>
    )
}
