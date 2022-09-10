// import React from 'react'
// import { Box } from '@mui/material'
// import { makeStyles } from '@mui/styles';
// import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
// import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
// import { updateCart } from '../../services/cartservice';

// const UseStyle = makeStyles({
//     countBox: {
//         height: '30px',
//         width: '100px',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'space-evenly'
//     },
//     countValueBox: {
//         height: '22px',
//         width: '30px',
//         border: '1px solid grey',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center'
//     }
// })

// function Counter(props) {
//     const classes = UseStyle()
//     const [count, setCount] = React.useState(1);

//     const increment = () => {
//         const data = { increase: true }
//         updateCart(props.bookSelected._id)
//             .then((resp) => { console.log(resp); })
//             .catch((err) => { console.log(err); })
//             console.log('updateQuantity');
//         // setCount(prevcount => prevcount + 1)
//     }
//     const decrement = () => {
//         if (count <= 0) {
//             return;
//         } else {
//             let data = { increase: false }
//             updateCart()
//                 .then((resp) => { console.log(resp); })
//                 .catch((err) => { console.log(err); })
//             // setCount(prevcount => prevcount - 1)
//         }
//     }

//     // const [count, setCount] = React.useState(0)

//     // const increment = () => {
//     //     let data = { increase: true }
//     //     updateCart(props.bookSelected, data)
//     //         .then((resp) => { console.log(resp); })
//     //         .catch((err) => { console.log(err); })
//     //     // setCount(prevcount => prevcount + 1)
//     // }

//     // const decrement = () => {
//     //     if (count <= 0) {
//     //         return;
//     //     } else {
//     //         let data = { increase: false }
//     //         updateCart(props.bookSelected, data)
//     //             .then((resp) => { console.log(resp); })
//     //             .catch((err) => { console.log(err); })
//     //         // setCount(prevcount => prevcount - 1)
//     //     }
//     // }


//     return (
//         <Box>
//             <Box className={classes.countBox}>

//                 <RemoveCircleOutlineIcon style={{
//                     color: '#DBDBDB'
//                 }}
//                     onClick={decrement} />
//                 <Box className={classes.countValueBox}>
//                     {/* {count} */}
//                     {props.bookSelected.quantity}
//                 </Box>
//                 <AddCircleOutlineIcon style={{
//                     color: '#DBDBDB'
//                 }}
//                     onClick={increment} />
//             </Box>

//         </Box>
//     )
// }

// export default Counter

// // const incrementButton = () => {
// //     let data =
// //     {
// //         increase: true,

// //     }

// //     updateCart(data, cartId)
// //         .then((resp) => {
// //             console.log(resp);
// //             console.log(data);
// //             getBooksList()
// //         })
// //         .catch((err) => { console.log(err); })
// //     // setCountBag(prevcount => prevcount + 1)
// // }
// // const decrementButton = () => {
// //     if (countBag <= 0) {
// //         return;
// //     } else {
// //         let data = { increase: false }
// //         updateCart(data, cartId)
// //             .then((resp) => {
// //                 console.log(resp);
// //                 console.log(data);
// //                 getBooksList()
// //             })
// //             .catch((err) => { console.log(err); })

// //         // setCountBag(prevcount => prevcount - 1)
// //     }
// // }