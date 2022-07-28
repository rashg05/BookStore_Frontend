import React from 'react'
import ladypic from '../../assests/ladypic.png'
import Box from '@mui/material/Box';
import './imagebox.css'

function Imagebox() {
    return (
        <Box className='bookstoreImage'>
            <Box>
                <img 
                src={ladypic} 
                alt='lady pic'
                style={{
                    position: 'relative',
                    top: '45px',
                    right: '135px',
                    width: '245px',
                    height: '245px',
                }} />
            </Box>
            <Box style={{
                position: 'relative',
                top: '53px',
                right: '135px',
                width: '229px',
                height: '24px',
                font: 'normal normal medium 18px/24px Roboto',
                letterSpacing: '0px',
                color: '#0A0102',
                textTransform: 'uppercase',
                opacity: '1'
            }}>
                <h3>online book shopping</h3>
            </Box>

        </Box>
    )
}

export default Imagebox