import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import "../../../styles/HomePage.css"
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
export default function Header() {
    const [value, setValue] = React.useState('');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className='header'>
            <div className='left-header'>
                <img src='/images/LOGOHeader.png' />
                <Tabs
                    value={value}
                    onChange={handleChange}
                    textColor="#000000"

                    indicatorColor="primary"
                    aria-label="secondary tabs example"
                >
                    <Tab sx={{ fontWeight: 600, textTransform: "capitalize" }} value="one" label="About us" />
                    <Tab sx={{ fontWeight: 600, textTransform: "capitalize" }} value="two" label="App" />
                    <Tab sx={{ fontWeight: 600, textTransform: "capitalize" }} value="three" label="Studio" />
                </Tabs>
            </div>

            <div className='right-header'>
                <LocalMallOutlinedIcon sx={{ fontSize: "30px", marginRight: "30px" }} />
                <AccountCircleIcon sx={{ fontSize: "30px" }} />
            </div>
        </div>
    )
}
