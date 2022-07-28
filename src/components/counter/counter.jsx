import React from 'react'
import { Box } from '@mui/material'
import { makeStyles } from '@mui/styles';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const UseStyle = makeStyles({
    countBox: {
        height: '30px',
        width: '100px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    countValueBox: {
        height: '22px',
        width: '30px',
        border: '1px solid grey',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

function Counter() {
    const classes = UseStyle()

    const [count, setCount] = React.useState(1)

    const increment = () => {
        setCount(prevcount => prevcount + 1)
    }

    const decrement = () => {
        if (count <= 0) {
            return;
        } else {
            setCount(prevcount => prevcount - 1)
        }
    }

    return (
        <Box>
            <Box className={classes.countBox}>
                <RemoveCircleOutlineIcon style={{
                    color: '#DBDBDB'
                }}
                    onClick={decrement} />
                <Box className={classes.countValueBox}>
                    {count}
                </Box>
                <AddCircleOutlineIcon style={{
                    color: '#DBDBDB'
                }}
                    onClick={increment} />
            </Box>

        </Box>
    )
}

export default Counter

//     < Box style = {{
//     display: 'flex',
//         // border: '1px solid red',
//         width: '100%',
//             height: '60px',
//                                 }}>
//     <Box style={{
//         width: '35%',
//         height: '40px',
//         display: 'flex',
//         alignItems: 'center',
//         // border: '1px solid orange',
//         position: 'relative',
//         top: '7px',
//         left: '120px',

//     }}>
//         <Button>
//             <RemoveCircleOutlineIcon style={{
//                 color: '#DBDBDB',
//             }} />
//         </Button>
//         <Box style={{
//             border: '1px solid #DBDBDB',
//             width: '41px',
//             height: '24px',
//             display: 'flex',
//             background: '#FFFFFF 0% 0% no-repeat padding-box',
//             justifyContent: 'center',
//         }}>
//             1
//         </Box>
//         <Button>
//             <AddCircleOutlineIcon style={{
//                 color: '#DBDBDB',
//             }} />
//         </Button>
//         <Button
//             style={{
//                 width: '45px',
//                 height: '15px',
//                 color: '#0A0102',
//             }}>
//             Remove
//         </Button>
//     </Box>
// </Box >