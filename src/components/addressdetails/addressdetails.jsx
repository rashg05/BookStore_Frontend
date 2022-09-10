import React from 'react'
import { Box, Button, TextField } from '@mui/material'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { addCustomer } from '../../services/customerservice';

const UseStyle = makeStyles({
    addresBoxOne: {
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid #DCDCDC',
        width: '60vw',
        height: '88vh',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '10px',
    },
    cartText: {
        // border: '1px solid pink',
        width: '95%',
        height: '50px',
        display: 'flex',
        alignItems: 'center',
        font: 'normal normal medium 18px/24px Roboto',
        color: '#333232',
    },
    textFieldBoxOne: {
        // border: '1px solid brown',
        width: '95%',
        height: '70px',
        display: 'flex'
    },
    namephoneBox: {
        width: '38%',
        height: '60px',
        // border: '1px solid black',
        display: 'flex',
        flexDirection: 'column',
    },
    namephoneLabel: {
        font: 'normal normal normal 13px/16px Roboto',
        letterSpacing: '0px',
        color: '#0A0102',
        position: 'relative',
        bottom: '10px'
    },
    TextFieldBox: {
        width: '280px',
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        border: '1px solid #DCDCDC',
        position: 'relative',
        bottom: '25px'
    },
    textFieldBoxTwo: {
        // border: '1px solid orange',
        width: '95%',
        height: '312px',
        display: 'flex',
        flexDirection: 'column',
    },
    addresBox: {
        width: '76%',
        height: '242px',
        // border: '1px solid red'
    },
    addresLabel: {
        font: 'normal normal normal 13px/16px Roboto',
        letterSpacing: '0px',
        color: '#0A0102',
    },
    addressFieldBox: {
        width: '98%',
        color: '#0A0102'
    }

})

// const nameRegex = /^[a-zA-Z]{2,40}( [a-zA-Z]{2,40})+$/;
// const mobNumRegex = /((\+*)((0[ -]*)*|((91 )*))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}/;
// const addressRegex = /\w+(\s\w+){2,}/;
// const cityRegex = /^[A-Z][A-Z a-z]{3,}$/;

function Addressdetails(props) {
    const classes = UseStyle()

    const [orderView, setOrderView] = useState(true)
    const [addDetails, setAddDetails] = React.useState({
        fullName: '',
        mobileNum: '',
        fullAddress: '',
        city: '',
        state: '',
        adressType: '',
    })

    const takeName = (event) => {
        setAddDetails({ ...addDetails, fullName: event.target.value })
    }

    function takeMobNum(event) {
        setAddDetails({ ...addDetails, mobileNum: event.target.value })
    }

    function takeAddress(event) {
        setAddDetails({ ...addDetails, fullAddress: event.target.value })
    }

    function takeCity(event) {
        setAddDetails({ ...addDetails, city: event.target.value })
    }

    function takeState(event) {
        setAddDetails({ ...addDetails, state: event.target.value })
    }

    const handleChange = (event) => {
        console.log(event.target.value)
        setAddDetails({ ...addDetails, addressType: event.target.value })
    }

    const openOrder = () => {
        addCustomer(addDetails)
            .then((res) => {
                console.log(res);
            })
            .catch((error) => {
                console.log(error);
            })
        setOrderView(false)
        props.listenToAddressDetails()
    }

    return (
        <Box className={classes.addresBoxOne}>
            <span className={classes.cartText}>
                <h3>
                    Customer Details
                </h3>
                <Button
                    sx={{
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
            </span>


            <Box className={classes.textFieldBoxOne}>
                <Box className={classes.namephoneBox}>
                    <h3 className={classes.namephoneLabel}>
                        Full Name
                    </h3>
                    <TextField
                        className={classes.TextFieldBox}
                        size="small"
                        onChange={takeName}
                    />
                </Box>
                <Box className={classes.namephoneBox}>
                    <h3 className={classes.namephoneLabel}>
                        Mobile Number
                    </h3>
                    <TextField
                        className={classes.TextFieldBox}
                        size="small"
                        onChange={takeMobNum}
                    />
                </Box>
            </Box>

            <Box className={classes.textFieldBoxTwo}>
                <Box className={classes.addresBox}>
                    <h3 className={classes.addresLabel}>
                        Address
                    </h3>
                    <TextField
                        className={classes.addressFieldBox}
                        id="outlined-multiline-static"
                        multiline
                        rows={6}
                        onChange={takeAddress}
                    // defaultValue="Bridgelabz Solutions LLP, No. 42, 14th Main, 15th Cross, Sector 4, Opp to BDA complex, near Kumarakom restaurent, HSR Layout, Bangalore"
                    />
                </Box>

                <Box className={classes.textFieldBoxOne}>
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
                            onChange={takeCity}
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
                            onChange={takeState}
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
                        onChange={handleChange}
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            width: '450px'
                        }}
                    >
                        <FormControlLabel value="home" control={<Radio />} label="Home" />
                        <FormControlLabel value="work" control={<Radio />} label="Work" />
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