import { useEffect, useState } from 'react'
import "../../styles/SignUpPage.css"
import { Link } from 'react-router-dom'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import CircularProgress from '@mui/material/CircularProgress';
import AppleIcon from '@mui/icons-material/Apple';
export default function SignUpForm({ prop }) {
    const [page, setPage] = useState('signup')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (prop === 'login') {
            setPage("login")
            setTimeout(() => setLoading(false), 1000)
        } else {
            setPage("signup")
            setTimeout(() => setLoading(false), 1000)
        }
    }, [])

    // SIGN UP SUBMIT
    const handleSignUp = e => {
        e.preventDefault()

    }

    // LOG IN SUBMIT
    const handleLogin = e => {
        e.preventDefault()
    }

    return (
        <>

            <div className='form-container' style={page === 'login' ? { flexFlow: 'row-reverse' } : { flexFlow: 'row' }}>
                {loading ? <CircularProgress
                    sx={{ position: "absolute", left: "50%", top: "50%", transform: "translate(50%,50%)" }}
                />
                    :
                    <>
                        {page === 'login' ?
                            <>
                                <img className='logo'
                                    src='/images/logo.png'
                                />
                                <img
                                    style={{ marginLeft: "30px" }}
                                    className='form-image'
                                    src='/images/signInForm.png' />
                            </>
                            : <img
                                className='form-image'
                                src='/images/signUpForm.png' />}

                        <form id='sign-up-form'>

                            <h3 className='title'>
                                {page === 'login' ? 'Welcome Back' : 'Create new account'}

                            </h3>
                            {/* name */}
                            {
                                page === 'login' ? '' :
                                    <div className='form-item'>
                                        <label for="name">Name</label>
                                        <input type='text' name='name' id='name' placeholder='Your name' />
                                    </div>
                            }

                            {/* mail */}
                            <div className='form-item'>
                                <label for="name">Email</label>
                                <input type='email' name='email' id='email' placeholder='Your email' />
                            </div>
                            {/* password */}
                            <div className='form-item'>
                                <label for="name">Password</label>
                                {page === 'login' ?
                                    <input type='password' name='password' id='password' placeholder='Password' />
                                    :
                                    <input type='password' name='password' id='password' placeholder='More than 8 letters' />
                                }

                            </div>
                            {/* AGRRE  TERM */}
                            <div className='form-item form-agree'>
                                <input id='agree' type='checkbox' />
                                <label for="agree">{page === 'login' ? 'Remember me' : 'I agree all terms and Privacy Policy'}</label>
                            </div>
                            {/* SIGN UP */}
                            {
                                page === 'login'
                                    ? <>
                                        <button onClick={handleLogin} className='form-button'>Sign in</button>
                                        <div className='other-title'>Or <strong>signin</strong>  with</div>
                                    </>
                                    :
                                    <>
                                        <button onClick={handleSignUp} className='form-button'>Sign up</button>
                                        <div className='other-title'>Or <strong>signup</strong>  with</div>
                                    </>
                            }


                            <div className='other-sign-up'>
                                <div className='sign-up-option'>
                                    <FacebookOutlinedIcon sx={{ color: "#0084ff" }} />
                                </div>
                                <div className='sign-up-option'>
                                    <img src='/images/flat-color-icons_google.png' />
                                </div>
                                <div className='sign-up-option'>
                                    <AppleIcon />
                                </div>
                            </div>
                            <div className='log-in'>
                                {page === 'login' ?
                                    <> Never use? <span className='go-login'>
                                        <Link to="/signup" >Signup</Link>
                                    </span></>
                                    :
                                    <> Already have an account? <span className='go-login'>
                                        <Link to="/login">Signin</Link>
                                    </span></>}

                            </div>
                        </form>
                    </>
                }

            </div>


        </>
    )
}
