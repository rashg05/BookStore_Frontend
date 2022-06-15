import React from 'react'
import './signup.css'
import { Box, TextField } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import { signUp } from '../../services/userservice';
import { useHistory } from 'react-router-dom';

const fullNameRegex = /^[A-Z]{1}[a-z]{2,}$/;
const emailIdRegex = /^[0-9a-zA-Z]+([._+-][0-9a-zA-Z]+)*@[0-9A-Za-z]+.[a-zA-Z]{1,3}([.][A-Za-z]{1})*$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
const phoneNumberRegex = /^[6-9]{1}[0-9]{9}$/;

function Signup(props) {

    let history = useHistory()

    const [signUpObj, setSignUpObj] = React.useState({
        fullName: '', email: '', password: '', phone: ''
    })

    const [signupRegex, setsignUpRegex] = React.useState({
        fullNameBorder: false, fullNameHelper: '',
        emailBorder: false, emailHelper: '',
        passwordBorder: false, passwordHelper: '',
        phoneBorder: false, phoneHelper: ''
    })

    const takeFullName = (event) => {
        setSignUpObj(prevState => ({ ...prevState, fullName: event.target.value }))
    }
    const takeUserName = (event) => {
        setSignUpObj(prevState => ({ ...prevState, email: event.target.value }))
    }
    const takePassword = (event) => {
        setSignUpObj(prevState => ({ ...prevState, password: event.target.value }))
    }
    const takePhone = (event) => {
        setSignUpObj(prevState => ({ ...prevState, phone: event.target.value }))
    }

    const submit = () => {
        let fullNameTest = fullNameRegex.test(signUpObj.fullName)
        let userNameTest = emailIdRegex.test(signUpObj.email)
        let passwordTest = passwordRegex.test(signUpObj.password)
        let phoneTest = phoneNumberRegex.test(signUpObj.phone)

        if (fullNameTest === true) {
            setsignUpRegex(prevState => ({ 
                ...prevState, 
                fullNameBorder: false, 
                fUllNameHelper: "" }))
        } else if (fullNameTest === false) {
            setsignUpRegex((prevState) => ({ 
                ...prevState, 
                fullNameBorder: true, 
                fullNameHelper: "Enter Correct Full Name" }))
        }

        if (userNameTest === true) {
            setsignUpRegex(prevState => ({ 
                ...prevState, 
                emailBorder: false, 
                emailHelper: "" }))
        } else if (userNameTest === false) {
            setsignUpRegex((prevState) => ({ 
                ...prevState, 
                emailBorder: true, 
                emailHelper: "Enter Correct e-mail Id" }))
        }

        if (passwordTest === true) {
            setsignUpRegex(prevState => ({ 
                ...prevState, 
                passwordBorder: false, 
                passwordHelper: "" }))
        } else if (passwordTest === false) {
            setsignUpRegex((prevState) => ({ 
                ...prevState, 
                passwordBorder: true, 
                passwordHelper: "Enter Correct password" }))
        }
        if (phoneTest === true) {
            setsignUpRegex(prevState => ({ 
                ...prevState, 
                phoneBorder: false, 
                phoneHelper: "" }))
        } else if (phoneTest === false) {
            setsignUpRegex((prevState) => ({ 
                ...prevState, 
                phoneBorder: true, 
                phoneHelper: "Enter Correct mobile number" }))
        }

        if (fullNameTest === true && 
            userNameTest === true && 
            passwordTest === true && 
            phoneTest === true) {
            signUp(signUpObj)
                .then((resp) => {
                    console.log(resp);
                    history.push('/')
                })
                .catch((error) => { console.log(error) })
        }

    }

    const clickSignup = () => {
        props.listenToSignUpPage()
    }
    return (
        <Box className='signupContainer'>
            <Box className='pageSwitch'>
                <IconButton style={{
                    color: '#878787',
                    width: '72px',
                    height: '33px',
                    textAlign: 'left',
                    font: 'normal normal medium 25px/33px Roboto',
                    letterSpacing: '0px',
                    textTransform: 'uppercase',
                    opacity: '1'
                }}
                    onClick={() => clickSignup()}
                >
                    login
                </IconButton>
                <IconButton style={{
                    width: '89px',
                    height: '33px',
                    textAlign: 'left',
                    font: 'normal normal medium 25px/33px Roboto',
                    letterSpacing: '0px',
                    color: '#0A0102',
                    textTransform: 'uppercase',
                    opacity: '1',
                }}
                >
                    signup
                </IconButton>
            </Box>
            <Box className='textFullName'>
                <h3 style={{
                    width: '45px',
                    height: '13px',
                    font: 'normal normal normal 10px/13px Roboto',
                    letterSpacing: '0px',
                    color: '#0A0102',
                    textTransform: 'capitalize',
                    opacity: '1',
                    position: 'relative',
                    bottom: '10px'
                }}>
                    full name
                </h3>

                <TextField style={{
                    width: '252px',
                    background: '#FFFFFF 0% 0% no-repeat padding-box',
                    border: '1px solid #E2E2E2',
                    borderRadius: '2px',
                    opacity: '1',
                    position: 'relative',
                    bottom: '20px'
                }}
                    onChange={takeFullName}
                    size="small"
                    error={signupRegex.fullNameBorder} 
                    helperText={signupRegex.fullNameHelper} 
                />
            </Box>
            <Box className='textEmailId'>
                <h3 style={{
                    width: '36px',
                    height: '13px',
                    font: 'normal normal normal 10px/13px Roboto',
                    letterSpacing: '0px',
                    color: '#0A0102',
                    textTransform: 'capitalize',
                    opacity: '1',
                    position: 'relative',
                    bottom: '10px'
                }}>
                    email id
                </h3>
                <TextField style={{
                    width: '252px',
                    background: '#FFFFFF 0% 0% no-repeat padding-box',
                    border: '1px solid #E2E2E2',
                    borderRadius: '2px',
                    opacity: '1',
                    position: 'relative',
                    bottom: '20px'
                }}
                    onChange={takeUserName}
                    size="small"
                    error={signupRegex.emailBorder}
                    helperText={signupRegex.emailHelper}
                />
            </Box>
            <Box className='textPasswordd'>
                <h3 style={{
                    width: '44px',
                    height: '13px',
                    font: 'normal normal normal 10px/13px Roboto',
                    letterSpacing: '0px',
                    color: '#0A0102',
                    textTransform: 'capitalize',
                    opacity: '1',
                    position: 'relative',
                    bottom: '10px'
                }}>
                    password
                </h3>
                <TextField style={{
                    width: '252px',
                    background: '#FFFFFF 0% 0% no-repeat padding-box',
                    border: '1px solid #E2E2E2',
                    borderRadius: '2px',
                    opacity: '1',
                    position: 'relative',
                    bottom: '20px'
                }}
                    onChange={takePassword}
                    size="small"
                    error={signupRegex.passwordBorder}
                    helperText={signupRegex.passwordHelper}
                />
            </Box>
            <Box className='textMobile'>
                <h3 style={{
                    width: '68px',
                    height: '13px',
                    font: 'normal normal normal 10px/13px Roboto',
                    letterSpacing: '0px',
                    color: '#0A0102',
                    textTransform: 'capitalize',
                    opacity: '1',
                    position: 'relative',
                    bottom: '10px'
                }}>
                    mobile number
                </h3>
                <TextField style={{
                    width: '252px',
                    background: '#FFFFFF 0% 0% no-repeat padding-box',
                    border: '1px solid #E2E2E2',
                    borderRadius: '2px',
                    opacity: '1',
                    position: 'relative',
                    bottom: '20px'
                }}
                    onChange={takePhone}
                    size="small"
                    error={signupRegex.phoneBorder}
                    helperText={signupRegex.phoneHelper}
                />
            </Box>
            <Box className='signUpButton'>
                <Button variant="contained" style={{
                    width: '252px',
                    height: '37px',
                    background: '#A03037 0% 0% no-repeat padding-box',
                    borderRadius: '3px',
                    opacity: '1',
                    marginTop: '10px'
                }}
                    onClick={submit}
                >
                    <h3 style={{
                        width: '22px',
                        height: '18px',
                        position: 'relative',
                        right: '17px',
                        font: 'normal normal bold 14px/18px Meiryo UI',
                        letterSpacing: '0px',
                        color: '#FFFFFF',
                        textTransform: 'uppercase',
                        opacity: '1'
                    }}>
                        Signup
                    </h3>
                </Button>
            </Box>
        </Box>
    )
}

export default Signup
