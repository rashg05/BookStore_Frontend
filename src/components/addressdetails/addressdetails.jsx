import React from 'react'
import { Box, Button, TextField } from '@mui/material'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useState } from 'react';

function Addressdetails(props) {
    const [orderView, setOrderView] = useState(true)

    const openOrder = () => {
        setOrderView(false)
        props.listenToAddressDetails()
    }

    return (
        <Box style={{
            display: 'flex',
            flexDirection: 'column',
            border: '1px solid #DCDCDC',
            width: '60vw',
            height: '88vh',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '10px',
        }}>
            <Box style={{
                // border: '1px solid pink',
                width: '95%',
                height: '50px',
                display: 'flex',
                alignItems: 'center'
            }}>
                <h3 style={{
                    font: 'normal normal medium 18px/24px Roboto',
                    color: '#333232'
                }}>
                    Customer Details
                </h3>
                <Button
                    style={{
                        background: '#FFFFFF 0% 0% no-repeat padding-box',
                        color: '#A03037',
                        border: '1px solid #A03037',
                        borderRadius: '2px',
                        width: '180px',
                        height: '40px',
                        fontSize: '12px',
                        position: 'relative',
                        left: '440px'
                    }}>
                    Add New Address
                </Button>
            </Box>

            <Box style={{
                // border: '1px solid brown',
                width: '95%',
                height: '70px',
                display: 'flex'
            }}>
                <Box style={{
                    width: '38%',
                    height: '60px',
                    // border: '1px solid black',
                    display: 'flex',
                    flexDirection: 'column',

                }}>
                    <h3 style={{
                        font: 'normal normal normal 13px/16px Roboto',
                        letterSpacing: '0px',
                        color: '#0A0102',
                        position: 'relative',
                        bottom: '10px'

                    }}>Full Name
                    </h3>
                    <TextField style={{
                        width: '280px',
                        background: '#FFFFFF 0% 0% no-repeat padding-box',
                        border: '1px solid #DCDCDC',
                        position: 'relative',
                        bottom: '25px'
                    }}
                        size="small"
                    />
                </Box>
                <Box style={{
                    width: '38%',
                    height: '60px',
                    // border: '1px solid black',
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <h3 style={{

                        font: 'normal normal normal 13px/16px Roboto',
                        letterSpacing: '0px',
                        color: '#0A0102',
                        position: 'relative',
                        bottom: '10px'
                    }}>Mobile Number
                    </h3>
                    <TextField style={{
                        width: '280px',
                        background: '#FFFFFF 0% 0% no-repeat padding-box',
                        border: '1px solid #DCDCDC',
                        position: 'relative',
                        bottom: '25px'
                    }}
                        size="small"
                    />
                </Box>

            </Box>

            <Box style={{
                // border: '1px solid orange',
                width: '95%',
                height: '312px',
                display: 'flex',
                flexDirection: 'column',
            }}>
                <Box style={{
                    width: '76%',
                    height: '242px',
                    // border: '1px solid red'
                }}>
                    <h3 style={{
                        font: 'normal normal normal 13px/16px Roboto',
                        letterSpacing: '0px',
                        color: '#0A0102',
                    }}>
                        Address
                    </h3>
                    <TextField
                        id="outlined-multiline-static"
                        multiline
                        rows={6}
                        defaultValue="Bridgelabz Solutions LLP, No. 42, 14th Main, 15th Cross, Sector 4, Opp to BDA complex, near Kumarakom restaurent, HSR Layout, Bangalore"
                        style={{
                            width: '98%',
                            color: '#0A0102'
                        }}
                    />
                </Box>

                <Box style={{
                    // border: '1px solid blue',
                    width: '100%',
                    height: '70px',
                    display: 'flex',

                }}>
                    <Box style={{
                        width: '38%',
                        height: '60px',
                        // border: '1px solid black',
                        display: 'flex',
                        flexDirection: 'column',

                    }}>
                        <h3 style={{
                            font: 'normal normal normal 13px/16px Roboto',
                            letterSpacing: '0px',
                            color: '#0A0102',
                            position: 'relative',
                            bottom: '10px'

                        }}>city/town
                        </h3>
                        <TextField style={{
                            width: '280px',
                            background: '#FFFFFF 0% 0% no-repeat padding-box',
                            border: '1px solid #DCDCDC',
                            position: 'relative',
                            bottom: '25px'
                        }}
                            size="small"
                        />
                    </Box>
                    <Box style={{
                        width: '38%',
                        height: '60px',
                        // border: '1px solid black',
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        <h3 style={{

                            font: 'normal normal normal 13px/16px Roboto',
                            letterSpacing: '0px',
                            color: '#0A0102',
                            position: 'relative',
                            bottom: '10px'
                        }}>State
                        </h3>
                        <TextField style={{
                            width: '280px',
                            background: '#FFFFFF 0% 0% no-repeat padding-box',
                            border: '1px solid #DCDCDC',
                            position: 'relative',
                            bottom: '25px'
                        }}
                            size="small"
                        />
                    </Box>

                </Box>

            </Box>

            <Box style={{
                // border: '1px solid green',
                width: '95%',
                height: '60px',
                display: 'flex',
                alignItems: 'center'
            }}>
                <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label"
                        style={{
                            color: '#0A0102'
                        }}>Type</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            width: '450px'
                        }}
                    >
                        <FormControlLabel value="female" control={<Radio />} label="Home" />
                        <FormControlLabel value="male" control={<Radio />} label="Work" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>
                </FormControl>
            </Box>
            {
                orderView
                    ? <Box style={{
                        // border: '1px solid pink',
                        width: '95%',
                        height: '35px',
                        display: 'flex',
                        alignItems: 'center',
                        paddingBottom: '20px'
                    }}>
                        <Button
                            variant="contained"
                            style={{
                                width: '151px',
                                height: '30px',
                                background: '#3371B5 0% 0% no-repeat padding-box',
                                borderRadius: '2px',
                                position: 'relative',
                                left: '620px',
                                color: '#FFFFFF'
                            }}
                            onClick={openOrder}>
                            CONTINUE
                        </Button>
                    </Box>
                    : null
            }
        </Box>

    )
}

export default Addressdetails