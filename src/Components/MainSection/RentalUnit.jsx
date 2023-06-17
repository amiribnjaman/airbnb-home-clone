import React from 'react'
import RentalServiceCard from './RentalServiceCard'
import HostImg from '../../Assets/Images/host.png'

export default function RentalUnit() {
    return (
        <div>
            {/* Heading with image */}
            <div className='flex justify-between gap-x-10'>
                <h2 className='font-semibold text-[22px] w-[79%] md:w-full'>Room in a rental unit hosted by Sagrario</h2>
                <div className='w-12 h-10 rounded-full'>
                    <img className='w-full h-full rounded-full' src={HostImg} alt="" />
                </div>
            </div>

            {/* Rental services */}
            <div className='md:flex gap-y-4 md:gap-y-0 justify-between md:gap-x-4 mt-6'>
                {/* Rental servicel single card */}
                <RentalServiceCard svgImg={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '24px', width: '24px', fill: 'currentcolor' }}><path d="M26 4a2 2 0 0 1 2 1.85v7.99l1.85 5.54a3 3 0 0 1 .11.46l.03.24.01.24V30h-2v-2H4v2H2v-9.68a3 3 0 0 1 .09-.71l.06-.23L4 13.84V6a2 2 0 0 1 1.7-1.98l.15-.01L6 4zm2 18H4v4h24zm-1.39-6H5.4l-1.34 4h23.9zM26 6H6v8h2v-4a2 2 0 0 1 1.85-2H22a2 2 0 0 1 2 1.85V14h2zm-11 4h-5v4h5zm7 0h-5v4h5z"></path></svg>} text={'I double bed'} />
                <RentalServiceCard svgImg={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '24px', width: '24px', fill: 'currentcolor' }}><path d="M7 1a3 3 0 0 0-3 2.82V31h2V4a1 1 0 0 1 .88-1H18a1 1 0 0 1 1 .88V5h-5a1 1 0 0 0-1 .88V9h-3v2h19V9h-2V6a1 1 0 0 0-.88-1H21V4a3 3 0 0 0-2.82-3H7zm13 28a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm5 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-10 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm5-4a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm5 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-10 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm5-4a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm5 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-10 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm5-4a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm5 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-10 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm5-4a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-5 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm10 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM15 7h10v2H15V7z"></path></svg>} text={'Shared Bathroom'} />
                <RentalServiceCard svgImg={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '35px', width: '35px', fill: 'currentcolor' }}><path d="m17.98 1.57.14.14 13.59 13.58-1.42 1.42L29 15.4V28a2 2 0 0 1-1.85 2H5a2 2 0 0 1-2-1.85V15.4l-1.3 1.3-1.4-1.42L13.87 1.71a3 3 0 0 1 4.1-.14zM11 17.93a2 2 0 0 0-1 3.73v2.35A6 6 0 0 0 5.32 28h11.36A6 6 0 0 0 12 24.01v-2.35a2 2 0 0 0-1-3.73zm10 0a2 2 0 0 0-1 3.73v2.35c-.95.16-1.84.55-2.6 1.12.63.84 1.1 1.82 1.37 2.87h7.91A6 6 0 0 0 22 24.01v-2.35a2 2 0 0 0-1-3.73zm-4.94-15.1h-.12a1 1 0 0 0-.55.2l-.1.1L5 13.4v11.23a8.02 8.02 0 0 1 2.96-2.11 4 4 0 1 1 6.08 0A8 8 0 0 1 16 23.68c.6-.47 1.25-.86 1.96-1.15a4 4 0 1 1 6.08 0 8.02 8.02 0 0 1 2.96 2.1V13.43L16.7 3.12a1 1 0 0 0-.64-.29z"></path></svg>} text={'Host and other guest may be here'} />
            </div>

            <hr className='mt-6 mb-4' />

            {/* Rental Short description */}
            <div className='mt-7 gap-y-5 grid grid-flow-row'>
                <div className='flex gap-5'>
                    <svg className='mt-1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{display: 'block', height: '24px', width: '24px', fill: 'currentcolor'}}><path d="M17 6a2 2 0 0 1 2 1.85v8.91l.24.24H24v-3h-3a1 1 0 0 1-.98-1.2l.03-.12 2-6a1 1 0 0 1 .83-.67L23 6h4a1 1 0 0 1 .9.58l.05.1 2 6a1 1 0 0 1-.83 1.31L29 14h-3v3h5a1 1 0 0 1 1 .88V30h-2v-3H20v3h-2v-3H2v3H0V19a3 3 0 0 1 1-2.24V8a2 2 0 0 1 1.85-2H3zm13 13H20v6h10zm-13-1H3a1 1 0 0 0-1 .88V25h16v-6a1 1 0 0 0-.77-.97l-.11-.02zm8 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM17 8H3v8h2v-3a2 2 0 0 1 1.85-2H13a2 2 0 0 1 2 1.85V16h2zm-4 5H7v3h6zm13.28-5h-2.56l-1.33 4h5.22z"></path></svg>
                    <div>
                        <h5 className='text-md font-bold'>Room in rental unit</h5>
                        <p className='text-[13px] text-[#717375] font-semibold'>Your own room in a home, plus access to shared spaces.</p>
                    </div>
                </div>
                <div className='flex gap-4'>
                    <svg className='mt-1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{display: 'block', height: '24px', width: '24px', fill: 'currentcolor'}}><path d="M26 2a1 1 0 0 1 .92.61l.04.12 2 7a1 1 0 0 1-.85 1.26L28 11h-3v5h6v2h-2v13h-2v-2.54a3.98 3.98 0 0 1-1.73.53L25 29H7a3.98 3.98 0 0 1-2-.54V31H3V18H1v-2h5v-4a1 1 0 0 1 .88-1h.36L6.09 8.4l1.82-.8L9.43 11H12a1 1 0 0 1 1 .88V16h10v-5h-3a1 1 0 0 1-.99-1.16l.03-.11 2-7a1 1 0 0 1 .84-.72L22 2h4zm1 16H5v7a2 2 0 0 0 1.7 1.98l.15.01L7 27h18a2 2 0 0 0 2-1.85V18zm-16-5H8v3h3v-3zm14.24-9h-2.49l-1.43 5h5.35l-1.43-5z"></path></svg>
                    <div>
                        <h5 className='text-md font-bold'>Dedicated workspace</h5>
                        <p className='text-[13px] text-[#717375] font-semibold'>A room with wifi that’s well-suited for working.</p>
                    </div>
                </div>
                <div className='flex gap-4'>
                <svg className='mt-1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{display: 'block', height: '24px', width: '24px', fill: 'currentcolor'}}><path d="M16 17a7 7 0 1 1 0 14 7 7 0 0 1 0-14zm0 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10zM25.67.33a2 2 0 0 1 2 1.85v6.54a2 2 0 0 1-.97 1.7l-.14.08-9.67 4.84a2 2 0 0 1-1.61.07l-.17-.07-9.67-4.84a2 2 0 0 1-1.1-1.62V2.33a2 2 0 0 1 1.84-2h.15zm0 2H6.33v6.39L16 13.55l9.67-4.83z"></path></svg>
                    <div>
                        <h5 className='text-md font-bold'>Sagrario is a Superhost</h5>
                        <p className='text-[13px] text-[#717375] font-semibold'>Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.</p>
                    </div>
                </div>
            </div>

            <hr className='my-6' />
            <p className='flex items-center gap-2'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" role="presentation" focusable="false" style={{display: 'block', height: '16px', width: '16px', fill: 'currentcolor'}}><path d="M9 0a1 1 0 0 1 1 .88V6h5a1 1 0 0 1 1 .88V15a1 1 0 0 1-.88 1H7a1 1 0 0 1-1-.88V10H1a1 1 0 0 1-1-.88V1a1 1 0 0 1 .88-1H9zm1.73 7-1.4.5.24.21.13.13c.12.13.23.25.3.36l.08.1.05.07.04.08H7.31v1.3h1.2l.17.53.1.26.1.3A6.3 6.3 0 0 0 10 12.61c-.5.32-1.12.61-1.87.87l-.33.11-.35.11-.44.14.72 1.15.4-.13.4-.12c1-.35 1.83-.76 2.48-1.22.57.4 1.28.77 2.12 1.08l.37.14.38.12.41.13.72-1.15-.45-.14-.26-.08-.34-.11a9.23 9.23 0 0 1-1.94-.9 6.3 6.3 0 0 0 1.07-1.7l.13-.31.11-.33.17-.52h1.2V8.45h-3.05l-.1-.23A3.7 3.7 0 0 0 11 7.3l-.12-.15-.14-.15zm1.35 2.76-.04.13-.08.22-.1.27a4.99 4.99 0 0 1-.86 1.38 4.95 4.95 0 0 1-.74-1.13l-.12-.25-.1-.27-.08-.22-.04-.13h2.16zM9 1H1v8h5V7l.01-.17H3.83L3.43 8H2l2.26-6h1.48l1.5 4H9V1zM5 3.41 4.25 5.6h1.5L5 3.41z"></path></svg>

                <span>Some text has been automatically translated</span> <a className='underline font-semibold' href="">Show original language</a></p>
            <hr className='my-6' />
        </div>
    )
}
