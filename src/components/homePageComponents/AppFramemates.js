import { Link } from "@mui/material";
import React from "react";
import fileDownload from "js-file-download";
import axios from "axios";
export default function AppFramemates() {
    const handleDownload = () => {
        axios
            .get(
                "https://github.com/thanh-dao/Framemates-studio-client/raw/thanh/app-release.apk",
                {
                    responseType: "blob",
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        "Access-Control-Allow-Methods":
                            "GET, POST, PUT, DELETE, PATCH, OPTIONS",
                        "Access-Control-Allow-Headers":
                            "X-Requested-With, Content-Type, Authorization",
                    },
                }
            )
            .then((res) => {
                fileDownload(res.data, "framemates.apk");
            });
    };
    return (
        <div className="app-part" id="app">
            <h1 className="first-title">Unleash the Art of Photography</h1>
            <h2 className="second-title">
                Get the app to explore the world of studio
            </h2>
            <div className="download-item">
                <img src="/images/GooglePlay.png" />
                <p onClick={handleDownload}>Download app</p>
            </div>

            <div className="footer">
                <div className="footer-sub">
                    <p>Subscribe for newsletter</p>
                    <input placeholder="Your email" className="subscribe" />
                </div>

                <div className="list-footer">
                    <a href="#about">About us</a>
                    <a href="#studio">Studio</a>
                    <a href="#contact">Contact</a>
                </div>
                <div className="term">
                    <p>Term and Privacy</p>
                </div>
            </div>
        </div>
    );
}
