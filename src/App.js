// import logo from './logo.svg';
import './App.css';
import Addcart from './components/addcart/addcart';
import Mycart from './pages/mycart/mycart';
import Orderplaced from './pages/orderplaced/orderplaced';
import RouterOne from './router/router';

function App() {
  return (
    <div className="App">
     <RouterOne />
     {/* <Addcart /> */}
     {/* <Mycart /> */}
     {/* <Orderplaced /> */}
    </div>
  );
}

export default App;
