import React from 'react'
import "../styles/BookingPage.css"
import CheckoutBooking from '../components/bookingPageComponents/CheckoutBooking'
import OrderSummary from '../components/bookingPageComponents/OrderSummary'
export default function BookingPage() {
    return (
        <div className='booking-part container-home'>
            <CheckoutBooking />
            <OrderSummary />
        </div>
    )
}
