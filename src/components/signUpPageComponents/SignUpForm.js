import { useEffect, useState } from "react";
import "../../styles/SignUpPage.css";
import { Link, useNavigate } from "react-router-dom";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import CircularProgress from "@mui/material/CircularProgress";
import AppleIcon from "@mui/icons-material/Apple";
import UseHttpClient from "../../utils/httpClient";
import UseToken from "../../utils/UseToken";

export default function SignUpForm({ prop }) {
    const [page, setPage] = useState("signup");
    const [loading, setLoading] = useState(true);
    const [fullName, setFullName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { post } = UseHttpClient();
    const { setToken, getToken } = UseToken();

    const nav = useNavigate();
    useEffect(() => {
        if (prop === "login") {
            setPage("login");
            setTimeout(() => setLoading(false), 500);
        } else {
            setPage("signup");
            setTimeout(() => setLoading(false), 500);
        }
    }, []);

    // SIGN UP SUBMIT
    const handleSignUp = (e) => {
        e.preventDefault();
        const data = {
            fullName,
            phone,
            email,
            password,
            avatar: "https://w7.pngwing.com/pngs/205/731/png-transparent-default-avatar-thumbnail.png",
        };
        post("/auth/customer", data).then((res) => nav("/login"));
    };

    // LOG IN SUBMIT
    const handleLogin = (e) => {
        e.preventDefault();

        const data = { credential: email, password };
        post("/auth/login", data)
            .then((res) => res.data)
            .then((data) => {
                setToken(data.accessToken);
                nav("/");
            });
    };

    return (
        <>
            <div
                className="form-container"
                style={
                    page === "login"
                        ? { flexFlow: "row-reverse" }
                        : { flexFlow: "row" }
                }
            >
                {loading ? (
                    <CircularProgress
                        sx={{
                            position: "absolute",
                            left: "50%",
                            top: "50%",
                            transform: "translate(50%,50%)",
                        }}
                    />
                ) : (
                    <>
                        {page === "login" ? (
                            <>
                                <img className="logo" src="/images/logo.png" />
                                <img
                                    style={{ marginLeft: "30px" }}
                                    className="form-image"
                                    src="/images/signInForm.png"
                                />
                            </>
                        ) : (
                            <img
                                className="form-image"
                                src="/images/signUpForm.png"
                            />
                        )}

                        <form id="sign-up-form">
                            <h3 className="title">
                                {page === "login"
                                    ? "Welcome Back"
                                    : "Create new account"}
                            </h3>
                            {/* name */}
                            {page === "login" ? (
                                ""
                            ) : (
                                <div className="form-item">
                                    <label for="name">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        onChange={(e) =>
                                            setFullName(e.target.value)
                                        }
                                        placeholder="Your name"
                                    />
                                </div>
                            )}
                            {page === "login" ? (
                                ""
                            ) : (
                                <>
                                    <div className="form-item">
                                        <label for="phone">Phone</label>

                                        <input
                                            type="tel"
                                            name="phone"
                                            id="phone"
                                            onChange={(e) =>
                                                setPhone(e.target.value)
                                            }
                                            placeholder="Your phone"
                                        />
                                    </div>
                                </>
                            )}
                            {/* mail */}
                            <div className="form-item">
                                <label for="name">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Your email"
                                />
                            </div>
                            {/* password */}
                            <div className="form-item">
                                <label for="name">Password</label>
                                {page === "login" ? (
                                    <input
                                        type="password"
                                        name="password"
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                        id="password"
                                        placeholder="Password"
                                    />
                                ) : (
                                    <input
                                        type="password"
                                        name="password"
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                        id="password"
                                        placeholder="More than 8 letters"
                                    />
                                )}
                            </div>

                            {/* AGRRE  TERM */}
                            <div className="form-item form-agree">
                                <input id="agree" type="checkbox" />
                                <label for="agree">
                                    {page === "login"
                                        ? "Remember me"
                                        : "I agree all terms and Privacy Policy"}
                                </label>
                            </div>
                            {/* SIGN UP */}
                            {page === "login" ? (
                                <>
                                    <button
                                        onClick={handleLogin}
                                        className="form-button"
                                    >
                                        Sign in
                                    </button>
                                    <div className="other-title">
                                        Or <strong>signin</strong> with
                                    </div>
                                </>
                            ) : (
                                <>
                                    <button
                                        onClick={handleSignUp}
                                        className="form-button"
                                    >
                                        Sign up
                                    </button>
                                    <div className="other-title">
                                        Or <strong>signup</strong> with
                                    </div>
                                </>
                            )}

                            <div className="other-sign-up">
                                <div className="sign-up-option">
                                    <FacebookOutlinedIcon
                                        sx={{ color: "#0084ff" }}
                                    />
                                </div>
                                <div className="sign-up-option">
                                    <img src="/images/flat-color-icons_google.png" />
                                </div>
                                <div className="sign-up-option">
                                    <AppleIcon />
                                </div>
                            </div>
                            <div className="log-in">
                                {page === "login" ? (
                                    <>
                                        {" "}
                                        Never use?{" "}
                                        <span className="go-login">
                                            <Link to="/signup">Signup</Link>
                                        </span>
                                    </>
                                ) : (
                                    <>
                                        {" "}
                                        Already have an account?{" "}
                                        <span className="go-login">
                                            <Link to="/login">Signin</Link>
                                        </span>
                                    </>
                                )}
                            </div>
                        </form>
                    </>
                )}
            </div>
        </>
    );
}
