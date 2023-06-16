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
        <div className='md:w-[90%] mx-auto'>
            <hr className='mt-8 mb-10' />
            <h4 className='text-md font-semibold mb-8'>4.87 171 reviews</h4>

            {/* Reviews top section */}
            <div className='grid grid-cols-2 gap-x-28 gap-y-2 mb-8'>
                <div>
                    <div className='flex justify-between items-center'>
                        <h6>Cleanliness</h6>
                        <div class="w-[40%] bg-gray-200 rounded-full h-1 dark:bg-gray-700">
                            <div class="bg-black h-1 rounded-full" style={{ width: "90%" }}></div>
                        </div>
                    </div>
                    <div className='flex justify-between items-center'>
                        <h6>Cleanliness</h6>
                        <div class="w-[40%] bg-gray-200 rounded-full h-1 dark:bg-gray-700">
                            <div class="bg-black h-1 rounded-full" style={{ width: "90%" }}></div>
                        </div>
                    </div>
                    <div className='flex justify-between items-center'>
                        <h6>Cleanliness</h6>
                        <div class="w-[40%] bg-gray-200 rounded-full h-1 dark:bg-gray-700">
                            <div class="bg-black h-1 rounded-full" style={{ width: "90%" }}></div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='flex justify-between items-center'>
                        <h6>Cleanliness</h6>
                        <div class="w-[40%] bg-gray-200 rounded-full h-1 dark:bg-gray-700">
                            <div class="bg-black h-1 rounded-full" style={{ width: "90%" }}></div>
                        </div>
                    </div>
                    <div className='flex justify-between items-center'>
                        <h6>Cleanliness</h6>
                        <div class="w-[40%] bg-gray-200 rounded-full h-1 dark:bg-gray-700">
                            <div class="bg-black h-1 rounded-full" style={{ width: "90%" }}></div>
                        </div>
                    </div>
                    <div className='flex justify-between items-center'>
                        <h6>Cleanliness</h6>
                        <div class="w-[40%] bg-gray-200 rounded-full h-1 dark:bg-gray-700">
                            <div class="bg-black h-1 rounded-full" style={{ width: "90%" }}></div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Reviews main section */}
            <div className='flex'>
                <div className='gap-x-28 gap-y-10 grid grid-cols-2'>
                    {
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
