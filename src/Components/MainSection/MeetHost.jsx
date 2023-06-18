import React from 'react'
import HostImg from '../../Assets/Images/host.png'

export default function MeetHost() {
    return (
        <div>
            {/* Heading */}
            <h3 className='text-[22px] font-semibold mb-8 mt-2'>Meet our host</h3>

            <div className='bg-[#F0EFE9] rounded-xl px- py-12'>
                <div className='md:w-7/12 mx-auto'>
                    {/* Host card */}
                    <div class="w-[95%] mx-auto md:w-full flex justify-center items-center gap-10 md:pl-8 py-10 bg-white shadow-md rounded-3xl dark:bg-gray-800 dark:border-gray-700">
                        <div className='text-center flex flex-col items-center'>
                            <img src={HostImg} className='w-16 h-18 rounded-full' alt="" />
                            <h5 className='font-semibold text-3xl'>Sagraria</h5>
                            <h6 className='text-[14px]'>Superhost</h6>
                        </div>
                        <div>
                            <div>
                                <h4 className='font-bold text-[20px]'>316</h4>
                                <p className='font-semibold text-[11px]'>Reviews</p>
                            </div>
                            <hr className='my-2' />
                            <div>
                                <h4 className='font-bold text-[20px] flex items-center gap-2'>4.86
                                    <svg xmlns="http://www.w3.org/2000/svg" height={13} viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" /></svg>
                                </h4>
                                <p className='font-semibold text-[11px]'>Ratings</p>
                            </div>
                            <hr className='my-2' />
                            <div>
                                <h4 className='font-bold text-xl'>7</h4>
                                <p className='font-semibold text-[11px]'>Years hosting</p>
                            </div>
                        </div>
                    </div>

                    {/* Description */}
                    <div className='mt-6 px-4 md:px-0'>
                        <ul className='text-[16px] gap-y-3 flex flex-col font-semibold'>
                            <li className='flex items-center gap-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '24px', width: '24px', fill: 'currentcolor' }}><path d="M16 0c5.9 0 11 5.28 11 11 0 4.85-3.23 9.27-9.55 13.28l2.2 2.92a1.13 1.13 0 0 1-.9 1.8H17v3h-2v-3h-1.75a1.13 1.13 0 0 1-.9-1.8l2.14-2.86C8.2 20.92 5 16.46 5 11A11 11 0 0 1 16 0zm0 25.67L15 27h2zM16 2a9 9 0 0 0-9 9c0 4.6 2.72 8.43 8.3 11.5l.38.21.28.14.3-.19c5.62-3.53 8.48-7.24 8.72-11.12l.02-.27V11c0-4.64-4.21-9-9-9z"></path></svg>
                                Born in 60s</li>
                            <li className='flex items-center gap-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '24px', width: '24px', fill: 'currentcolor' }}><path d="M20 2a2 2 0 0 1 2 1.85V6h6a3 3 0 0 1 3 2.82V27a3 3 0 0 1-2.82 3H4a3 3 0 0 1-3-2.82V9a3 3 0 0 1 2.82-3H10V4a2 2 0 0 1 1.85-2H12zm8 6H4a1 1 0 0 0-1 .88V12a3 3 0 0 0 2.82 3H13v2H6a4.98 4.98 0 0 1-3-1v11a1 1 0 0 0 .88 1H28a1 1 0 0 0 1-.88V16c-.78.59-1.74.95-2.78 1h-7.17v-2H26a3 3 0 0 0 3-2.82V9a1 1 0 0 0-.88-1zm-10 4a1 1 0 0 1 1 .88V19a1 1 0 0 1-.88 1H14a1 1 0 0 1-1-.88V13a1 1 0 0 1 .88-1H14zm-1 2h-2v4h2zm3-10h-8v2h8z"></path></svg>
                                My work: coach</li>
                            <li className='flex items-center gap-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '24px', width: '24px', fill: 'currentcolor' }}><path d="M16 1a11 11 0 0 1 11 10.7v.3c0 3.7-2.03 7.14-6 10.3v7.03c0 .92-.75 1.67-1.67 1.67h-6.66c-.92 0-1.67-.75-1.67-1.67V22.3c-3.85-3.07-5.87-6.39-6-9.98V12A11 11 0 0 1 16 1zm3 26h-6v2h6v-2zm0-4h-6v2h6v-2zM16 3a9 9 0 0 0-9 8.98v.29c.1 2.9 1.8 5.7 5.17 8.4l.42.33h.4l.01-9.67a3 3 0 0 1 6 0V21h.41l.43-.34c3.36-2.7 5.05-5.48 5.15-8.36l.01-.28v-.27A9 9 0 0 0 16 3zm0 7.33-.12.01a1 1 0 0 0-.88 1V21h2v-9.67a1 1 0 0 0-1-1z"></path></svg>
                                Fun facts: no one believes my age</li>
                            <li className='flex items-center gap-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '24px', width: '24px', fill: 'currentcolor' }}><path d="M0 18v-2h1.3A15.02 15.02 0 0 1 13.27 4.25a3 3 0 1 1 5.46 0c6 1.1 10.76 5.78 11.97 11.75H32v2zM16 6A13 13 0 0 0 3.35 16h25.3A13 13 0 0 0 16 6zm0-4a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7.55 18.1a3.24 3.24 0 0 1 3.07 5.7l-.17.1-9.63 4.82a5 5 0 0 1-3.23.43l-.25-.05-7.84-2.01A2 2 0 0 1 4 27.31V22a2 2 0 0 1 1.85-2h11.26l.14.01L19 20c.92.01 1.44.7 1.57 1.59zm2.56 2.35a1.24 1.24 0 0 0-1.54-.6l-.12.04-4.37 2.19a3.89 3.89 0 0 1-3.34 1.91l-.24.01H12v-2h5a2 2 0 0 0 2-1.85V22l-3.7.02h-1.58L12.6 22l-.6-.01H6v5.15l7.83 2.01a3 3 0 0 0 1.9-.13l.2-.1 9.62-4.82c.61-.3.86-1.05.56-1.66z"></path></svg>
                                For guest, I always: Help them enjoy Valencia</li>
                            <li className='flex items-center gap-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '24px', width: '24px', fill: 'currentcolor' }}><path d="M6 23v3h3v2H6v3H4v-3H1v-2h3v-3h2zm9.04-19.29c.28-.9 1.52-.95 1.88-.12l.04.12 2.61 8.72 8.72 2.61c.86.26.94 1.4.22 1.82l-.1.06-.12.04-8.72 2.61-2.61 8.72c-.26.86-1.4.94-1.82.22l-.06-.1-.04-.12-2.61-8.72-8.72-2.61c-.87-.26-.94-1.4-.22-1.82l.1-.06.12-.04 8.72-2.61 2.61-8.72zM16 7.48l-1.81 6.04a1 1 0 0 1-.55.63l-.12.04L7.48 16l6.04 1.81a1 1 0 0 1 .57.45l.06.1.04.12L16 24.52l1.81-6.04a1 1 0 0 1 .45-.57l.1-.06.12-.04L24.52 16l-6.04-1.81a1 1 0 0 1-.57-.44l-.06-.12-.04-.11L16 7.48zM28 1v3h3v2h-3v3h-2V6h-3V4h3V1h2z"></path></svg>
                                What makes my home unique: Good energy and felling at home</li>
                        </ul>
                        <p className='font-semibold text-[16px] my-7'>Open and communicative, with donation of people and happy to welcome friends from the world at home.</p>
                        <a href="" className='underline font-semibold'>Show more</a>

                        <div className='mt-6'>
                            <button className='bg-black font-semibold py-2.5 px-4 text-md rounded-md text-white '>Message Host</button>
                        </div>
                        <hr className='my-6' />
                        <p className='text-[12px] text-[#717171] font-[400]'>To protect your payment, never transfer money or communicate outside of the Airbnb website or app.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
