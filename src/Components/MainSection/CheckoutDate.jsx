import React from 'react'
import {
    DatePicker,
    useDatePickGetter,
    useDatePickReset,
} from '@bcad1591/react-date-picker';

export default function CheckoutDate() {
    const { pickedDates } = useDatePickGetter();

    const resetFunc = useDatePickReset();

    return (
        <div>
            <hr className='my-10' />
            <h3 className='text-lg font-semibold mt-2'>Select checkout date</h3>
            <p className='text-[12px] font-semibold'>Minimum stays: 5 days</p>


            {/* Date picker calender */}
            <div className='calender w-full my-6'>
                <DatePicker disablePreviousDays />
                <hr className='mt-5' />
                <div className='mt-2 font-semibold text-sm'>{pickedDates?.firstPickedDate ? `From: ${pickedDates?.firstPickedDate?.toString()}` : ''}</div>
                <div className='mt-2 font-semibold text-sm'>{pickedDates?.secondPickedDate ? `To: ${pickedDates?.secondPickedDate?.toString()}` : ''}</div>
                <button className='mt-4 underline font-semibold' type="button" onClick={resetFunc}>
                    Reset
                </button>
            </div>

        </div>
    )
}
