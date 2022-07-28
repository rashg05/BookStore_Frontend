import React from 'react'
import { Box, TextField } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import './login.css';
import { signIn } from '../../services/userservice'
import { useNavigate } from "react-router-dom";

const emailRegex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

function Login(props) {

    let navigate = useNavigate()

    const [regexObj, setRegexObj] = React.useState({
        emailBorder: false, passwordBorder: false,
        emailHelper: "", passwordHelper: ""
    })
    const [logInObj, setLogInObj] = React.useState({ email: "", password: "" })

    const takeEmail = (event) => {
        setLogInObj(prevState => ({ ...prevState, email: event.target.value }))
    }
    const takePassword = (event) => {
        setLogInObj(prevState => ({ ...prevState, password: event.target.value }))
    }

    const submit = () => {
        let emailTest = emailRegex.test(logInObj.email)
        let passwordTest = passwordRegex.test(logInObj.password)

        if (emailTest === true) {
            setRegexObj(prevState => ({ ...prevState, emailBorder: false, emailHelper: "" }))
        } else if (emailTest === false) {
            setRegexObj((prevState) => ({ ...prevState, emailBorder: true, emailHelper: "Enter Correct email" }))
        }

        if (passwordTest === true) {
            setRegexObj(prevState => ({ ...prevState, passwordBorder: false, passwordHelper: "" }))
        } else if (passwordTest === false) {
            setRegexObj((prevState) => ({ ...prevState, passwordBorder: true, passwordHelper: "Enter Correct password" }))
        }

        if (emailTest === true && passwordTest === true) {
            signIn(logInObj)
                .then((resp) => {
                    console.log(resp);
                    localStorage.setItem('token', resp.data.data);
                    navigate('/Home')
                })
                .catch((error) => { console.log(error) })

        }
    }

    const click = () => {
        props.listenToLoginPage()
    }
    return (
        <Box className='loginContainer'>
            <Box className='pageSwitch'>
                <IconButton
                    style={{
                        width: '72px',
                        height: '33px',
                        textAlign: 'left',
                        font: 'normal normal medium 25px/33px Roboto',
                        letterSpacing: '0px',
                        color: '#0A0102',
                        textTransform: 'uppercase',
                        opacity: '1',
                    }}>
                    Login
                </IconButton>
                <IconButton style={{
                    color: '#878787',
                    width: '89px',
                    height: '33px',
                    textAlign: 'left',
                    font: 'normal normal medium 25px/33px Roboto',
                    letterSpacing: '0px',
                    textTransform: 'uppercase',
                    opacity: '1'
                }} onClick={() => click()}
                >
                    Signup
                </IconButton>
            </Box>
            <Box className='textEmail'>
                <h3 style={{
                    width: '36px',
                    height: '13px',
                    font: 'normal normal normal 10px/13px Roboto',
                    letterSpacing: '0px',
                    color: '#0A0102',
                    textTransform: 'capitalize',
                    opacity: '1'
                }}>Email Id
                </h3>
                <TextField style={{
                    width: '252px',
                    background: '#FFFFFF 0% 0% no-repeat padding-box',
                    border: '1px solid #E2E2E2',
                    borderRadius: '2px',
                    opacity: '1'
                }}
                    size="small"
                    onChange={takeEmail}
                    error={regexObj.emailBorder}
                    helperText={regexObj.emailHelper}
                />
            </Box>
            <Box className='textPassword'>
                <h3 style={{
                    width: '44px',
                    height: '13px',
                    textAlign: 'left',
                    font: 'normal normal normal 10px/13px Roboto',
                    letterSpacing: '0px',
                    color: '#0A0102',
                    textTransform: 'capitalize',
                    opacity: '1'
                }}>Password</h3>
                <TextField style={{
                    width: '252px',
                    height: '35px',
                    background: '#FFFFFF 0% 0% no-repeat padding-box',
                    border: '1px solid #E2E2E2',
                    borderRadius: '2px',
                    opacity: '1'
                }}
                    size="small"
                    onChange={takePassword}
                    error={regexObj.passwordBorder}
                    helperText={regexObj.passwordHelper}
                />
                <Link style={{
                    textDecoration: 'none',
                    width: '81px',
                    height: '13px',
                    position: 'relative',
                    left: '180px',
                    top: '5px',
                    font: 'normal normal normal 10px/13px Roboto',
                    letterSpacing: '0px',
                    color: '#9D9D9D',
                    opacity: '1'
                }}
                    href='#'>Forget Password?
                </Link>
            </Box>
            <Box className='loginButton'>
                <Button variant="contained"
                    style={{
                        width: '252px',
                        height: '37px',
                        background: '#A03037 0% 0% no-repeat padding-box',
                        borderRadius: '3px',
                        opacity: '1',
                        marginTop: '30px'
                    }}
                    onClick={submit}
                >
                    <h3 style={{
                        width: '37px',
                        height: '20px',
                        position: 'relative',
                        right: '7px',
                        font: 'normal normal normal 15px/20px Roboto',
                        letterSpacing: '0px',
                        color: '#FFFFFF',
                        opacity: '1'
                    }}>
                        Login
                    </h3>
                </Button>
                <h2 style={{
                    width: '22px',
                    height: '18px',
                    font: 'normal normal bold 14px/18px Meiryo UI',
                    letterSpacing: '0px',
                    color: '#343434',
                    textTransform: 'uppercase',
                    opacity: '1'
                }}>Or</h2>
            </Box>
            <Box className='otherLogin'>
                <Button variant="contained"
                    style={{
                        width: '126px',
                        height: '37px',
                        background: '#4266B2 0% 0% no-repeat padding-box',
                        borderRadius: '3px',
                        opacity: '1'
                    }}
                >
                    <h3 style={{
                        width: '46px',
                        height: '16px',
                        position: 'relative',
                        right: '7px',
                        font: 'normal normal normal 12px/16px Roboto',
                        letterSpacing: '0px',
                        color: '#FFFFFF',
                        opacity: '1'
                    }}>Facebook</h3>
                </Button>
                <Button variant="outlined"
                    style={{
                        width: '119px',
                        height: '37px',
                        background: '#F5F5F5 0% 0% no-repeat padding-box',
                        border: '1px solid #E4E4E4',
                        borderRadius: '3px',
                        opacity: '1'
                    }}>
                    <h3 style={{
                        width: '38px',
                        height: '16px',
                        position: 'relative',
                        right: '7px',
                        font: 'normal normal normal 12px/16px Roboto',
                        letterSpacing: '0px',
                        color: '#0A0102',
                        opacity: '1'
                    }}>Google</h3>
                </Button>
            </Box>
        </Box>
    )
}

export default Login