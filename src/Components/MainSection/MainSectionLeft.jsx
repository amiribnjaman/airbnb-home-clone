import React from 'react'
import RentalServiceCard from './RentalServiceCard'
import MeetHost from './MeetHost'
import AboutPlace from './AboutPlace'
import Sleep from './Sleep'
import PlaceOffer from './PlaceOffer'
import CheckoutDate from './CheckoutDate'
import RentalUnit from './RentalUnit'

export default function MainSectionLeft() {
    return (
        <section>
            {/* Rental unit component */}
            <RentalUnit />

            {/* Meet Host component */}
            <MeetHost />

            {/* About place component */}
            <AboutPlace />

            {/* Sleep component */}
            <hr className='mb-10' />
            <Sleep />
            <hr className='my-10' />

            {/* Place offers component */}
            <PlaceOffer />

            {/* Checkout date component */}
            <CheckoutDate />
        </section>
    )
}
