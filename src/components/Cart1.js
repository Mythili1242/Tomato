import React from 'react'
import Cart from './Cart'
import { useNavigate } from 'react-router-dom'
function Cart1() {
    const navigate=useNavigate()
  return (
    <>
    {localStorage.getItem("token")?<Cart/>:
    <div className="head container">

   
    <img src={require("./tomato.png")} style={{width:"190px",height:"160px",marginTop:"-50px"}} onClick={()=>{navigate("/")}} />
   

     <ul className="list">
       <li><a href="/login">Login</a></li>
       <li><a href="/signup">SignUp</a></li>
     </ul>
     </div>
   }

    
    <marquee style={{color:"red",fontSize:"30px",paddingTop:"180px"}} direction="right">Please Login to view your cart</marquee>
    
    </>
  )
}

export default Cart1
