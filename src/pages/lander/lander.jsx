import React from 'react'
import Login from '../../components/login/login'
import Signup from '../../components/signup/signup'
import Box from '@mui/material/Box';
import './lander.css'
import Imagebox from '../../components/imagebox/imagebox';

function Lander() {
    const [userView, setUserView] = React.useState(true)

    const listenToLoginPage = () => {
        setUserView(false)
    }
    const listenToSignUpPage = () => {
        setUserView(true)
    }

    return (
        <Box className='landerContainer'>
            <Box>
                <Imagebox style={{
                    zIndex: 5,
                }} />
            </Box>
            <Box className='loginSignupContainer'
                style={{
                    width: '389px',
                    height: '425px',
                    zIndex: 35,
                    position: 'relative',
                    top: '106px',
                    left: '20px'
                }} >
                {
                    userView ? <Login listenToLoginPage={listenToLoginPage} />
                        : <Signup listenToSignUpPage={listenToSignUpPage} />
                }
            </Box>
        </Box>
    )
}

export default Lander