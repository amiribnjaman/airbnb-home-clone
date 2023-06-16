import React from 'react'
import Banner1 from '../Assets/Images/banner1.png'
import Banner2 from '../Assets/Images/banner2.png'
import Banner3 from '../Assets/Images/banner3.png'

export default function Banner() {
    return (
        <>
            <hr className='py-2' />
            <div className='w-[90%] mx-auto'>
                {/* Header */}
                <h1 className='text-2xl mb-1 font-semibold'>Enjoy historic Valencia and close to the beach.</h1>
                <div className='flex justify-between'>
                    <div>
                        <ul className='flex gap-2 mb-3 font-semibold text-[13px]'>
                            <li className='flex items-center gap-x-1'><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                                <span>4.87</span></li>
                                
                            <li>&#8226;</li>
                            <li className='underline'>171 reviews</li>
                            <li>&#8226;</li>
                            <li>Superhost</li>
                            <li>&#8226;</li>
                            <li>
                                <a href="" className='underline'>Valencia</a>
                                ,
                                <a href="" className='underline'> Spain</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className='flex gap-4 mb-3 font-semibold text-[13px]'>
                            <li className='underline flex items-center gap-x-1 cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M246.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 109.3V320c0 17.7 14.3 32 32 32s32-14.3 32-32V109.3l73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 53 43 96 96 96H352c53 0 96-43 96-96V352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V352z"/></svg> 
                            <span>Share</span> </li>
                            <li className='underline flex items-center gap-x-1 cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"/></svg>
                            <span>Save</span></li>
                        </ul>
                    </div>
                </div>
                {/* Banners */}
                <div>
                    <div className='grid grid-row-2 grid-flow-col gap-x-4'>
                        <div className='row-span-2 col-span-2'>
                            <img className='rounded-s-xl' src={Banner1} alt="" />
                        </div>
                        <div className="col-span-1">
                            <img src={Banner2} height={50} alt="" />
                        </div>
                        <div className='col-span-1'>
                            <img src={Banner3} height={100} alt="" />
                        </div>
                        <div className='col-span-1'>
                            <img src={Banner3} alt="" />
                        </div>
                        <div className='col-span-1'>
                            <img className='' src={Banner3} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
