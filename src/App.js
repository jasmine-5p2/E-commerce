import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter,Route,Routes} from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import Login from "./Pages/User/Login";
import Register from "./Pages/User/Register";
import Profile from "./Pages/User/Profile";
import MensClothing from "./Pages/Mens/Clothing";
import MensFootwear from "./Pages/Mens/Footwear";
import MensAccessories from "./Pages/Mens/Accessories";
import WomensClothing from "./Pages/Womens/Clothing";
import WomensFootwear from "./Pages/Womens/Footwear";
import WomensAccessories from "./Pages/Womens/Accessories";
import SportsFootwear from "./Pages/Footwear/Sports";
import CasualFootwear from "./Pages/Footwear/Casual";
import FormalFootwear from "./Pages/Footwear/Formal";
import { createContext, useEffect,useState } from "react";
import Analog from './Pages/Watches/Analog';
import Digital from './Pages/Watches/Digital';
import Smart from './Pages/Watches/Smart';
import axios from 'axios';
import Footer from "./Components/Footer";
const MyContext = createContext();

function App() {
  const[countryList,setCountryList] = useState([]);
  const[selectedCountry,setselectedCountry] = useState('');
  useEffect(()=>{getCountry("https://countriesnow.space/api/v0.1/countries/");

  },[])
 const getCountry = async (url) => {
  try {
    const res = await axios.get(url);
    setCountryList(res.data.data);
    console.log(res.data.data);
  } catch (error) {
    console.error("Error fetching country list:", error);
  }
};

  const values={
    countryList,
  setselectedCountry,
  selectedCountry
    

  };
  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        <Header/>
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/user/login" element={<Login />} />
          <Route path="/user/register" element={<Register />} />
          <Route path="/user/profile" element={<Profile />} />
          <Route path="/mens/clothing" element={<MensClothing />} />
          <Route path="/watches/analog" element={<Analog />} />
          <Route path="/watches/digital" element={<Digital />} />
          <Route path="/watches/smart" element={<Smart />} />
          <Route path="/mens/footwear" element={<MensFootwear />} />
          <Route path="/mens/accessories" element={<MensAccessories />} />
          <Route path="/womens/clothing" element={<WomensClothing />} />
          <Route path="/womens/footwear" element={<WomensFootwear />} />
          <Route path="/womens/accessories" element={<WomensAccessories />} />
          <Route path="/footwear/sports" element={<SportsFootwear />} />
          <Route path="/footwear/casual" element={<CasualFootwear />} />
          <Route path="/footwear/formal" element={<FormalFootwear />} />
        </Routes>
        {/* Add Footer below all content */}
        <Footer />
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export {MyContext}
