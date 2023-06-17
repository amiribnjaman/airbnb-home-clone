import React from 'react'

export default function RentalServiceCard({ svgImg, text }) {
  return (
    <div className='shadow rounded-md px-5 py-4 md:w-1/3 flex items-center gap-x-2'>
      {svgImg}
      <h6 className='font-semibold text-[13px]'>{text}</h6>
    </div>
  )
}
