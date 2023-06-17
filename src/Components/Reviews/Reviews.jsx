import React, { useEffect, useState } from 'react'
import ReviewSingleCard from './ReviewSingleCard'

export default function Reviews() {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('comments.json')
            .then(data => data.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className='w-[90%] mx-auto'>
            <hr className='mt-8 mb-10' />
            <h4 className='text-[22px] font-semibold mb-8 flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" /></svg>
                <span>4.87 &#8226; 171 reviews</span></h4>

            {/* Reviews top section */}
            <div className='grid md:grid-cols-2 gap-x-28 gap-y-2 mb-8'>
                <div className='flex flex-col gap-y-2'>
                    <div className='flex justify-between items-center'>
                        <h6>Cleanliness</h6>
                        <div class="w-[40%] flex gap-1 items-center bg-gray-200 rounded-full h-1 dark:bg-gray-700">
                            <div class="bg-black h-1 rounded-full" style={{ width: "99%" }}></div>
                        </div>
                    </div>
                    <div className='flex justify-between items-center'>
                        <h6>Comunicatoin</h6>
                        <div class="w-[40%] flex gap-1 items-center bg-gray-200 rounded-full h-1 dark:bg-gray-700">
                            <div class="bg-black h-1 rounded-full" style={{ width: "100%" }}></div> 
                        </div>
                    </div>
                    <div className='flex justify-between items-center'>
                        <h6>Check-in</h6>
                        <div class="w-[40%]  flex gap-1 items-center bg-gray-200 rounded-full h-1 dark:bg-gray-700">
                            <div class="bg-black h-1 rounded-full" style={{ width: "100%" }}></div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col gap-y-2'>
                    <div className='flex justify-between items-center'>
                        <h6>Accuracy</h6>
                        <div class="w-[40%]  flex gap-1 items-center bg-gray-200 rounded-full h-1 dark:bg-gray-700">
                            <div class="bg-black h-1 rounded-full" style={{ width: "99%" }}></div> 
                        </div>
                    </div>
                    <div className='flex justify-between items-center'>
                        <h6>Location</h6>
                        <div class="w-[40%]  flex gap-1 items-center bg-gray-200 rounded-full h-1 dark:bg-gray-700">
                            <div class="bg-black h-1 rounded-full" style={{ width: "95%" }}></div> 
                        </div>
                    </div>
                    <div className='flex justify-between items-center'>
                        <h6>Value</h6>
                        <div class="w-[40%] flex gap-1 items-center bg-gray-200 rounded-full h-1 dark:bg-gray-700">
                            <div class="bg-black h-1 rounded-full" style={{ width: "99%" }}></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Reviews main section */}
            <div className='flex'>
                <div className='gap-x-28 gap-y-10 grid md:grid-cols-2'>
                    {
                        // Maping reviews and show through ReviewSingleCard
                        reviews.map(review => <ReviewSingleCard review={review} />)
                    }
                </div>
            </div>

            <div className='mt-24'>
                <button className='py-2 rounded-lg font-semibold px-4 border border-1 border-black'>Show all 171 reviews</button>
            </div>
        </div>
    )
}
