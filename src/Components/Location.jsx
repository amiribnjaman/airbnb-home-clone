import React from 'react'

export default function Location() {
    return (
            <div className=''>
                <hr className='my-10' />
                {/* Google map sample location */}
                <iframe className='w-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2410.08513401987!2d0.403807574920515!3d40.37961795789899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a04781e220c863%3A0xd6126ed2625ce247!2sAirbnb%20Apartamento%20Pe%C3%B1iscola%20Residencial!5e1!3m2!1sen!2sbd!4v1687012288481!5m2!1sen!2sbd" height="450" style={{border:'0'}} allowfullscreen={true} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                
                <div className='w-[90%] mx-auto'>
                    {/* Location bottom */}
                <h4 className='my-2 text-[16px] font-semibold'>Valencia, Spain</h4>
                <p className='text-[16px] font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam pariatur nihil eveniet nisi, illum ipsam laborum tempora, sequi reprehenderit, eius iusto vel? Ipsum reiciendis quisquam neque officia tenetur perferendis officiis.</p>
                <a href="" className='underline font-semibold text-sm'>show more</a>
                </div>
            </div>
    )
}
