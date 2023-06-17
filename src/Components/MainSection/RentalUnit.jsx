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
                <RentalServiceCard svgImg={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{display: 'block', height: '24px', width: '24px', fill: 'currentcolor'}}><path d="M26 4a2 2 0 0 1 2 1.85v7.99l1.85 5.54a3 3 0 0 1 .11.46l.03.24.01.24V30h-2v-2H4v2H2v-9.68a3 3 0 0 1 .09-.71l.06-.23L4 13.84V6a2 2 0 0 1 1.7-1.98l.15-.01L6 4zm2 18H4v4h24zm-1.39-6H5.4l-1.34 4h23.9zM26 6H6v8h2v-4a2 2 0 0 1 1.85-2H22a2 2 0 0 1 2 1.85V14h2zm-11 4h-5v4h5zm7 0h-5v4h5z"></path></svg>} text={'I double bed'} />
                <RentalServiceCard svgImg={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{display: 'block', height: '24px', width: '24px', fill: 'currentcolor'}}><path d="M7 1a3 3 0 0 0-3 2.82V31h2V4a1 1 0 0 1 .88-1H18a1 1 0 0 1 1 .88V5h-5a1 1 0 0 0-1 .88V9h-3v2h19V9h-2V6a1 1 0 0 0-.88-1H21V4a3 3 0 0 0-2.82-3H7zm13 28a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm5 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-10 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm5-4a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm5 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-10 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm5-4a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm5 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-10 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm5-4a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm5 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-10 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm5-4a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-5 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm10 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM15 7h10v2H15V7z"></path></svg>} text={'Shared Bathroom'} />
                <RentalServiceCard svgImg={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{display: 'block', height: '24px', width: '24px', fill: 'currentcolor'}}><path d="m17.98 1.57.14.14 13.59 13.58-1.42 1.42L29 15.4V28a2 2 0 0 1-1.85 2H5a2 2 0 0 1-2-1.85V15.4l-1.3 1.3-1.4-1.42L13.87 1.71a3 3 0 0 1 4.1-.14zM11 17.93a2 2 0 0 0-1 3.73v2.35A6 6 0 0 0 5.32 28h11.36A6 6 0 0 0 12 24.01v-2.35a2 2 0 0 0-1-3.73zm10 0a2 2 0 0 0-1 3.73v2.35c-.95.16-1.84.55-2.6 1.12.63.84 1.1 1.82 1.37 2.87h7.91A6 6 0 0 0 22 24.01v-2.35a2 2 0 0 0-1-3.73zm-4.94-15.1h-.12a1 1 0 0 0-.55.2l-.1.1L5 13.4v11.23a8.02 8.02 0 0 1 2.96-2.11 4 4 0 1 1 6.08 0A8 8 0 0 1 16 23.68c.6-.47 1.25-.86 1.96-1.15a4 4 0 1 1 6.08 0 8.02 8.02 0 0 1 2.96 2.1V13.43L16.7 3.12a1 1 0 0 0-.64-.29z"></path></svg>} text={'Host and other guest may be here'} />
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
