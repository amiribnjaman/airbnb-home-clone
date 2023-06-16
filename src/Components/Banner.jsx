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
                        <ul className='flex gap-4 mb-3 font-semibold text-[13px]'>
                            <li>4.87</li>
                            <li className='underline'>171 reviews</li>
                            <li>Superhost</li>
                            <li>
                                <a href="" className='underline'>Valencia</a>
                                ,
                                <a href="" className='underline'> Spain</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className='flex gap-4 mb-3 font-semibold text-[13px]'>
                            <li className='underline'>Share</li>
                            <li className='underline'>Save</li>
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
