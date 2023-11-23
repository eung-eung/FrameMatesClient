import React, { useEffect } from 'react'
import UseHttpClient from '../../utils/httpClient';
import { useNavigate } from 'react-router-dom';

export default function OrderSummary({ handleBooking, step, handleCancel, cancel }) {
    const {post} = UseHttpClient();
    const nav = useNavigate();
    
    useEffect(() => {
        if(step === 3){
            const slot = localStorage.getItem('slot') ? JSON.parse(localStorage.getItem('slot')) : null;
            const studio = localStorage.getItem('studio') ? JSON.parse(localStorage.getItem('studio')) : null;
            if(!slot || !studio) nav('/studio');
            const data = {
                studioId: studio.studioId,
                orderDetails: [
                    {
                        slotBookingId: slot.slotId,
                        discount: 0,
                    }
                ]
            }
            // console.log(data);
            post("/orders", data).then(res => res.data).then(data => {
                setTimeout(() => {
                    nav("/")
                }, 3000)
            })

            // })
        }
    }, [step])
    return (
        <>
            {(step != 3 && !cancel) &&
                <div style={{ width: "30%" }}>
                    <div className='order-summary-container'>
                        {step === 1 && <>
                            <h3 className='title'>Order summary</h3>
                            <div className='order-middle'>
                                <img src='/images/Frame74.png' />
                                <p className='order-studio'>Artium</p>
                                <p className='order-slogan'>Vintage</p>
                                <div className='studio-review'>
                                    <span className='review-total'>4.2</span>
                                    <span className='review-p'>Very good 54 reviews</span>
                                </div>
                                <p className='review-p'>Your booking is protected by Framemates</p>
                            </div>
                            <div className='order-details'>
                                <h2 style={{ fontSize: "16px", fontWeight: 500 }}>Price Details</h2>
                                <div className='order-details-item'>
                                    <span className='od-dt-item-name'>Booking price</span>
                                    <span className='od-dt-item-value'>$400</span>
                                </div>

                                <div className='order-details-item'>
                                    <span className='od-dt-item-name'>Discount</span>
                                    <span className='od-dt-item-value'>$0</span>
                                </div>

                                <div className='order-details-item'>
                                    <span className='od-dt-item-name'>Taxes</span>
                                    <span className='od-dt-item-value'>$0</span>
                                </div>


                                <div className='order-details-item'>
                                    <span className='od-dt-item-name'>Services Fee</span>
                                    <span className='od-dt-item-value'>$0</span>
                                </div>
                            </div>
                            <div className='order-total'>
                                <span className='order-total-name'>Total</span>
                                <span className='order-total-value'>$400</span>
                            </div>
                        </>}
                        {step === 2 && <img className='qr-bank' src='/images/qr.jpg' />}
                    </div>
                    <div className='booking-btns'>
                        <button className='book-btn' onClick={handleBooking}>Book</button>
                        <button className='cancel-btn' onClick={handleCancel}>Cancel</button>
                    </div>

                </div>
            }
            {step === 3 && <div className='notify-box'>
                <img src='https://i.gifer.com/7efs.gif' />
                <div className='notify'>Payment Sucessfull</div>
            </div>

            }
            {cancel && <div className='notify-box'>
                <img src='https://assets.materialup.com/uploads/4491890e-ab53-4c68-b209-a08e683f9590/preview.gif' />
                <div className='notify'>Sorry, Payment failed</div>
                <span>Unfortunately, your order cannot be completed</span>
            </div>

            }
        </>

    )
}
