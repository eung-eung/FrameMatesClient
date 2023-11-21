import React, { useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import "../../../styles/HomePage.css";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import UseToken from "../../../utils/UseToken";
import { Link } from "react-router-dom";
export default function Header() {
    const [value, setValue] = React.useState("");
    const { getToken } = UseToken();
    useEffect(() => {console.log(getToken())},[])
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleHref = (e) => {
        window.location.href = "#about";
    };
    return (
        <div className="header">
            <div className="left-header">
                <Link to="/" style={{ textDecoration: "none" }}><img src="/images/LOGOHeader.png" /></Link>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    textColor="#000000"
                    indicatorColor="primary"
                    aria-label="secondary tabs example"
                >
                    <Tab
                        sx={{ fontWeight: 600, textTransform: "capitalize" }}
                        value="one"
                        onClick={handleHref}
                        label="About us"
                    />
                    <Tab
                        sx={{ fontWeight: 600, textTransform: "capitalize" }}
                        value="two"
                        label="App"
                    />
                    <Tab
                        sx={{ fontWeight: 600, textTransform: "capitalize" }}
                        value="three"
                        label="Studio"
                    />
                </Tabs>
            </div>

            <div className="right-header">
                {getToken() !== null ? (
                    <>
                        <LocalMallOutlinedIcon
                            sx={{ fontSize: "30px", marginRight: "30px" }}
                        />
                        <AccountCircleIcon sx={{ fontSize: "30px" }} />
                    </>
                ) : (
                    <>
                        <div id="login-btn">
                            
                            <Link
                                to="/login"
                                style={{
                                    textDecoration: "none",
                                    color: "#000000",
                                }}
                            >
                                Log in
                            </Link>
                        </div>
                        <div id="signup-btn"><Link
                                to="/signup"
                                style={{
                                    textDecoration: "none",
                                    color: "#fff",
                                }}
                            >
                                Sign up
                            </Link></div>
                    </>
                )}
            </div>
        </div>
    );
}
