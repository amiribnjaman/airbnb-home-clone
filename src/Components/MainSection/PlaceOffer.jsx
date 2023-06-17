import React from 'react'

export default function PlaceOffer() {
    return (
        <div>
            <h3 className='text-[22px] font-semibold mb-8 mt-2'>What this place offers</h3>
            <div>
                <div className='mt-4 md:flex gap-8'>
                    <ul className='font-semibold text-[16px] flex flex-col gap-y-5'>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Quae commodi ad aliquam magnam?</li>
                        <li>Voluptate voluptas est maiores deleniti.</li>
                        <li>Sunt fuga non deleniti in?</li>
                        <li>Minima ipsa illo sapiente earum.</li>
                    </ul>
                    <ul className='font-semibold text-[16px] flex flex-col gap-y-5'>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Quae commodi ad aliquam magnam?</li>
                        <li>Voluptate voluptas est maiores deleniti.</li>
                        <li>Sunt fuga non deleniti in?</li>
                        <li>Minima ipsa illo sapiente earum.</li>
                    </ul>
                </div>
                <div className='mt-8'>
                    <button className='text-[16px] font-semibold border-black border py-2 px-3 rounded-md'>See all 37 amenities</button>
                </div>
            </div>
        </div>
    )
}
