import {
    BrowserRouter as Router,
    Routes,
    Route
  } from 'react-router-dom';
import Lander from "../pages/lander/lander";
import Home from "../pages/home/home";
import Mycart from '../pages/mycart/mycart';
import Wishlistpage from '../pages/wishlistpage/wishlistpage';
import Orderplaced from '../pages/orderplaced/orderplaced';

function RouterOne() {
    return (
        <>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Lander />} />
                    <Route path="/Home" element={<Home />} />
                    <Route path="/mycart" element={<Mycart />} />
                    <Route path="/wishlist" element={<Wishlistpage />} />
                    <Route path="/orderplaced" element={<Orderplaced />} />
                </Routes>
            </Router>
        </>
    )
}

export default RouterOne