import React, { useEffect, useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import BrushOutlinedIcon from "@mui/icons-material/BrushOutlined";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import EventBusyIcon from "@mui/icons-material/EventBusy";
import PaymentMethod from "./PaymentMethod";
import { useNavigate } from "react-router-dom";
import UseHttpClient from "../../utils/httpClient";
import useCurrencyFormatter from "../../utils/useCurrencyFormatter";
export default function CheckoutBooking({ step, setStep, cancel }) {
    const [slot, setSlot] = useState("");
    const [slots, setSlots] = useState([]);
    const [time, setTime] = useState("");
    const navigate = useNavigate();
    const { get } = UseHttpClient();
    const slotPrice = useState(0);
    const currencyFormatter = useCurrencyFormatter();
    const [studio, setStudio] = useState(
        localStorage.getItem("studio")
            ? JSON.parse(localStorage.getItem("studio"))
            : null
    );
    if (!studio) {
        navigate("/studio");
    }

    const handleChange = (event) => {
        setSlot(event.target.value);
        console.log(event)
        localStorage.setItem("slot", JSON.stringify(event.target.value));
    };
    const handleChangeTime = (value) => {
        const timeFromInput = value.format("YYYY-MM-DD");
        setTime(timeFromInput);
        console.log(timeFromInput);
        get(`/slot-bookings/1?date=${timeFromInput}`)
            .then((res) => res.data)
            .then((data) => {
                setSlots(data);
            });
    };

    return (
        <div>
            {step !== 3 && !cancel && <h2>Check out</h2>}
            {!cancel && (
                <div className="step-by-step">
                    {/* step 1 */}
                    <div className="step-item">
                        {step >= 1 ? (
                            <CheckCircleIcon className="holder-step" />
                        ) : (
                            <span
                                style={{
                                    color: "#ddd",
                                    border: "1px solid #ddd",
                                }}
                                className="holder-step"
                            >
                                1
                            </span>
                        )}
                        {step !== 1 ? (
                            <span style={{ color: "#ddd" }}>Information</span>
                        ) : (
                            <span> Information</span>
                        )}
                    </div>

                    {/* step 2 */}
                    <div className="step-item">
                        {step >= 2 ? (
                            <CheckCircleIcon className="holder-step" />
                        ) : (
                            <span
                                style={{
                                    color: "#ddd",
                                    border: "1px solid #ddd",
                                }}
                                className="holder-step"
                            >
                                2
                            </span>
                        )}
                        {step !== 2 ? (
                            <span style={{ color: "#ddd" }}>
                                Payment method
                            </span>
                        ) : (
                            <span> Payment method</span>
                        )}
                    </div>

                    {/* step 3 */}
                    <div className="step-item">
                        {step >= 3 ? (
                            <CheckCircleIcon className="holder-step" />
                        ) : (
                            <span
                                style={{
                                    color: "#ddd",
                                    border: "1px solid #ddd",
                                }}
                                className="holder-step"
                            >
                                3
                            </span>
                        )}
                        {step !== 3 ? (
                            <span style={{ color: "#ddd" }}>Complete</span>
                        ) : (
                            <span>Complete</span>
                        )}
                    </div>
                </div>
            )}

            {step === 1 && !cancel && (
                <>
                    <div className="booking-studio">
                        <div className="booking-studio-header">
                            <p>artitum studio</p>
                            <p className="price">{!slot.price ? currencyFormatter.format(0) : currencyFormatter.format(slot.price)}</p>
                        </div>
                        <div className="body">
                            <p className="sub-title">
                                Get professional photography in vintage style
                            </p>
                            <div className="studio-description">
                                <div className="studio-description-image">
                                    <img src="/images/Frame74.png" />
                                </div>
                                <div className="studio-description-item">
                                    <p className="studio-description-item-name">
                                        Artium Studio
                                    </p>
                                    <p className="studio-description-item-slogan">
                                        Vintage
                                    </p>
                                </div>
                                <div className="studio-description-category">
                                    <div>
                                        <CameraAltOutlinedIcon />
                                    </div>
                                    <div>
                                        <BrushOutlinedIcon />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="datepicker-studio">
                            <div className="date-picker-box">
                                <LocalizationProvider
                                    dateAdapter={AdapterDayjs}
                                >
                                    <DatePicker
                                        onChange={handleChangeTime}
                                        label="Pick a date"
                                    />
                                </LocalizationProvider>
                            </div>
                            <div className="time-selects">
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">
                                        Slot
                                    </InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={slot}
                                        label="Slot"
                                        onChange={handleChange}
                                    >
                                        {slots.map((slot) => (
                                            <MenuItem value={slot}>
                                                <div className="option-times">
                                                    <div className="option-times">
                                                        <QueryBuilderIcon />
                                                        Start: {slot.startTime}
                                                    </div>
                                                    <div className="option-times">
                                                        <EventBusyIcon />
                                                        End: {slot.endTime}
                                                    </div>
                                                </div>
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </div>
                        </div>
                    </div>
                </>
            )}
            {step === 2 && !cancel && <PaymentMethod />}
        </div>
    );
}
