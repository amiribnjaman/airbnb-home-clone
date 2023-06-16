import React from 'react'
import RoomRentalUnit from './Components/RoomRentalUnit'

export default function MainSection() {
    return (
        <div className='w-[90%] mx-auto mt-8 mb-10'>
            {/* Main section left */}
            <div className='w-[55%]'>
                <RoomRentalUnit />
            </div>
        </div>
    )
}
