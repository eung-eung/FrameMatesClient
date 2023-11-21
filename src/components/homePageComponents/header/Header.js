import React, { useEffect } from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import "../../../styles/HomePage.css"
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import UseToken from "../../../utils/UseToken"
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export default function Header({ nav }) {
    const [value, setValue] = React.useState('');
    const navigate = useNavigate();
    const { getToken } = UseToken()
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    useEffect(() => {
        setValue(nav);
    }, [nav])

    const handleHref = ref => {
        window.location.href = ref
    }
    return (
        <div className='header'>
            <div className='left-header'>
                <Link to="/">
                    <img src='/images/LOGOHeader.png' />
                </Link>

                <Tabs
                    value={value}
                    onChange={handleChange}
                    textColor="#000000"

                    indicatorColor="primary"
                    aria-label="secondary tabs example"
                >
                    <Tab sx={{ fontWeight: 600, textTransform: "capitalize" }} value="#about" onClick={() => handleHref("#about")} label="About us" />
                    <Tab sx={{ fontWeight: 600, textTransform: "capitalize" }} value="#app" onClick={() => handleHref("#app")} label="App" />
                    <Tab sx={{ fontWeight: 600, textTransform: "capitalize" }} label="Studio" onClick={() => navigate("/studio")} />
                </Tabs>
            </div>

            <div className='right-header'>
                {getToken() ?
                    <>
                        <LocalMallOutlinedIcon sx={{ fontSize: "30px", marginRight: "30px" }} />
                        <AccountCircleIcon sx={{ fontSize: "30px" }} />
                    </>
                    :
                    <>
                        <div id='login-btn'>Log in</div>
                        <div id='signup-btn'>Sign up</div>
                    </>
                }

            </div>
        </div>
    )
}
