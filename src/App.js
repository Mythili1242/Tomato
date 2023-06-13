import Home from "./components/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import Coupons from "./components/Coupons";
import Confetti from "./components/Confetti";
import { createContext, useEffect } from "react";
import Cart1 from "./components/Cart1";
import Admin from "./components/Admin";
import createPersistedState from 'use-persisted-state';
import Admin1 from "./components/Admin1";



import { useState } from "react";
export const userContext=createContext();

function App() {

// const [cartitems,setCartitems]=useState([]);
const useCounterState = createPersistedState('cartitems');         // npm i use-persisted-state
const [cartitems,setCartitems]=useCounterState([]);
useEffect(()=>{
  async function refresh(){
    
await fetch("http://localhost:9000/rest/refresh",{
  method:"POST",
  credentials:"include",
  headers:{
    "content-type":"application/JSON"
  }
})
.then(res=>res.json())
.then(a=>{console.log(a);if(a.accesstoken){localStorage.setItem("token",JSON.stringify(a))}})
console.log(localStorage.getItem("token"))
  }
  refresh()
})

  return (
    <div >
    
    <userContext.Provider value={[cartitems,setCartitems]} >
      <Router>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/coupon" element={<Coupons />} />
        <Route path="/confetti" element={<Confetti />}/>
       <Route path="/cart1" element={<Cart1 />} />
       <Route path="/admin" element={<Admin />} />
       <Route path="/admin1" element={<Admin1 />} />

        </Routes>
      </Router>
      </userContext.Provider>
    </div>
  );
}

export default App;
