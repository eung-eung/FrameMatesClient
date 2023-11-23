import { Link } from "@mui/material";
import React from "react";
import fileDownload from "js-file-download";
import axios from "axios";
export default function AppFramemates() {
    const handleDownload = () => {
        console.log(1)
        fetch(
            "https://firebasestorage.googleapis.com/v0/b/framemates-363d4.appspot.com/o/apks%2Fapp-release.txt?alt=media&token=4e5352dc-cee2-4597-933e-834ddac25f36",
            {
                method: "GET",
                // headers: {
                //     "Access-Control-Allow-Origin": "*",
                //     "Access-Control-Allow-Methods":
                //         "GET, POST, PUT, DELETE, PATCH, OPTIONS",
                //     "Access-Control-Allow-Headers":
                //         "X-Requested-With, Content-Type, Authorization",
                // },
            }
        )
            .then((res) => res.blob())
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
