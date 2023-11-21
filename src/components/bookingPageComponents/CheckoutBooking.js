import React, { useState } from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import EventBusyIcon from '@mui/icons-material/EventBusy';
export default function CheckoutBooking() {
    const [step, setStep] = useState(2)
    const [slot, setSlot] = useState('');
    const [time, setTime] = useState('')
    const handleChange = (event) => {
        setSlot(event.target.value);
    };
    const handleChangeTime = (event) => {
        setTime(event.target.value);
    };

    return (
        <div>
            <h2>Check out</h2>
            <div className='step-by-step'>
                {/* step 1 */}
                <div className='step-item'>
                    {step === 1 ? <CheckCircleIcon /> : <span style={{ color: "#ddd", border: "1px solid #ddd" }} className='holder-step'>1</span>}
                    {step !== 1 ? <span style={{ color: "#ddd" }}>Information</span> : <span> Information</span>}
                </div>

                {/* step 2 */}
                <div className='step-item'>
                    {step === 2 ? <CheckCircleIcon /> : <span style={{ color: "#ddd", border: "1px solid #ddd" }} className='holder-step'>2</span>}
                    {step !== 2 ? <span style={{ color: "#ddd" }}>Payment method</span> : <span>      Payment method</span>}

                </div>

                {/* step 3 */}
                <div className='step-item'>
                    {step === 3 ? <CheckCircleIcon /> : <span style={{ color: "#ddd", border: "1px solid #ddd" }} className='holder-step'>3</span>}
                    {step !== 3 ? <span style={{ color: "#ddd" }}>Complete</span> : <span>Complete</span>}
                </div>

            </div>

            <div className='booking-studio'>
                <div className='booking-studio-header'>
                    <p>artitum studio</p>
                    <p className='price'>400$</p>
                </div>
                <div className='body'>
                    <p className='sub-title'>Get professional photography in vintage style</p>
                    <div className='studio-description'>
                        <div className='studio-description-image'>
                            <img src='/images/Frame74.png' />
                        </div>
                        <div className='studio-description-item'>
                            <p className='studio-description-item-name'>Artium Studio</p>
                            <p className='studio-description-item-slogan'>Vintage</p>
                        </div>
                        <div className='studio-description-category'>
                            <div><CameraAltOutlinedIcon /></div>
                            <div><BrushOutlinedIcon /></div>

                        </div>
                    </div>
                </div>
                <div className='datepicker-studio'>
                    <div className='date-picker-box'>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker label="Pick a date" />
                        </LocalizationProvider>
                    </div>
                    <div className='time-selects'>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Slot</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={slot}
                                label="Slot"
                                onChange={handleChange}

                            >
                                <MenuItem value={10}>
                                    <div className='option-times'>
                                        <div className='option-times'>
                                            <QueryBuilderIcon />
                                            Start: 10:00
                                        </div>
                                        <div className='option-times'>
                                            <EventBusyIcon />
                                            End: 12:00
                                        </div>

                                    </div>
                                </MenuItem>
                                <MenuItem value={20}>
                                    <div className='option-times'>
                                        <div className='option-times'>
                                            <QueryBuilderIcon />
                                            Start: 11:00
                                        </div>
                                        <div className='option-times'>
                                            <EventBusyIcon />
                                            End: 12:00
                                        </div>

                                    </div>
                                </MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </div>


            </div>
        </div>
    )
}
