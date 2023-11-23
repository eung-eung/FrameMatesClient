import React from 'react'
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
export default function PaymentMethod() {
    return (
        <div className='method'>
            <AccountBalanceWalletOutlinedIcon />
            <h2 className='title-banking'>Banking with QR</h2>
            <CheckCircleOutlineOutlinedIcon sx={{ color: "green", position: "absolute", right: 0 }} />
        </div>
    )
}
