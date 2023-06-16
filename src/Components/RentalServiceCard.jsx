import React from 'react'

export default function RentalServiceCard({ svgImg, text }) {
  return (
    <div className='shadow rounded-md px-5 py-4 w-1/3'>
      {svgImg}
      <h6 className='font-semibold text-[13px]'>{text}</h6>
    </div>
  )
}
