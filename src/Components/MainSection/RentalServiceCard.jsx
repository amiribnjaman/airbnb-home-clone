import React from 'react'

export default function RentalServiceCard({ svgImg, text }) {
  return (
    <div className='shadow rounded-md px-4 py-6 md:w-1/3 border flex items-center gap-x-2'>
      {svgImg}
      <h6 className='font-bold text-[14px]'>{text}</h6>
    </div>
  )
}
