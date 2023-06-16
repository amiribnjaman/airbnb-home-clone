import React from 'react'
import MainSectionLeft from './Components/MainSectionLeft'

export default function MainSection() {
    return (
        <div className='w-[90%] mx-auto mt-8 mb-10'>
            {/* Main section left */}
            <div className='w-[55%]'>
                <MainSectionLeft />
            </div>
        </div>
    )
}
