
import React from 'react'

export default function ReviewSingleCard({ review }) {
    const { id, name, image, comment, rating, date } = review

    let newComment;
    if (comment.length > 150) {
        newComment = comment.substr(0, 150) + '...'
    }

    return (
        <div className=''>
            <div className='flex gap-2'>
                <img className='shadow w-10 h-10 bg-gray-300 rounded-full' src={image} alt="" />
                <div>
                    <h5 className='font-semibold'>{name}</h5>
                    <h6 className='text-[13px]'>{date}</h6>
                </div>
            </div>
            <div className='mt-4'>
                <p className='font-semibold text-[14px]'>
                    {newComment?.length > 0 ? <>
                        {newComment} <div>
                            <button className='mt-3 underline'>Show more > </button>
                        </div>
                    </> : comment}
                </p>

            </div>

        </div>
    )
}
