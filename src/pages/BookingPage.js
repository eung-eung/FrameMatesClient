import React from 'react'
import "../styles/BookingPage.css"
import CheckoutBooking from '../components/bookingPageComponents/CheckoutBooking'
import OrderSummary from '../components/bookingPageComponents/OrderSummary'
import { useState } from 'react'
import Swal from 'sweetalert2'
export default function BookingPage() {
    const [step, setStep] = useState(1)
    const [cancel, setCancel] = useState(false)
    const handleBooking = () => {
        setStep(prev => prev + 1)
    }
    const handleCancel = () => {
        setCancel(true)
    }
    return (
        <div className={step === 3 || cancel === true ? 'booking-part2 container-home' : 'booking-part container-home'}>
            <CheckoutBooking cancel={cancel} step={step} setStep={setStep} />
            <OrderSummary cancel={cancel} step={step} handleBooking={handleBooking} handleCancel={handleCancel} />
        </div>
    )
}
