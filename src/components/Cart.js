import React from 'react'
import Card from 'react-bootstrap/Card';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import {useState} from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useContext } from 'react';
import  {userContext}  from "../App";
import { useEffect } from 'react';
import Confetti from 'react-confetti';
import phone from "./phone.png";
import upi from "./upi.png";
import cod from "./cod.png";
import net from "./netbank.png";
import gpay from "./gpay.png";

function Media(props) {
console.log(props);
const navigate=useNavigate();
const [show, setShow] = useState(false);
const [coupon,setCoupon]=useState(false)
const [name,setname]=useState();
const [address,setAddress]=useState();
const [phn,setPhn]=useState();
const [submitted,setSubmitted]=useState(false);
const [cartitems,setCartitems]=useContext(userContext);
const initialValue = 0;
console.log(cartitems)

const [couponApplied, setCouponApplied] = useState(false);

  const handleApplyCoupon = () => {
    setCouponApplied(true);
  }

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

// const conf=()=>{
//   console.log("first")
//   return (<div><Confetti /></div>)
// }
useEffect(() => {
  if (couponApplied) {
    // const timer = setTimeout(() => {
      const timer = setTimeout(() => {
      setCouponApplied(false);
    }, 8000);

    // return () => clearTimeout(timer);
  }
}, [couponApplied]);


function removeItem(cart,val,name){
  console.log(cart,val,name)
var i=cart.length;
console.log(i);
// console.log(cart[0].name)
for(let j=0;j<i;j++){
    
  if(cart[j]&&cart[j].hasOwnProperty(val)&&cart[j].name===name)
  {
 var cart1=cart.splice(j,1);
 cart=cart.slice();
 console.log(cart)
  }
}
setCartitems(cart)

}

  return (
    <>
     {/* {couponApplied && <Confetti />} */}
     {couponApplied && <Confetti />}

    <div className='container' style={{display:"flex",justifyContent:"center"}}>
   
      
    <div style={{marginLeft:"-130px"}}>
    {/* style={{display:"flex", justifyContent:"left",alignContent:"center",flexWrap:"wrap",margin:"20px"}} */}
   
 <Card style={{width:"500px",maxHeight:"350px",flexBasis:"50%",overflowY:"scroll"}}>
      <Card.Header style={{textAlign:"center",color:"red"}}>ITEM(S) ADDED</Card.Header>
      <Card.Body>
        {/* <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text> */}

<Card>
      {/* <Card.Header>Featured</Card.Header> */}
      <Card.Body>
        {/* <Card.Title>{props.data.symbol}{props.data.name}</Card.Title> */}
        {cartitems&&cartitems.map(item=>{
      return(
        <>
        <Card.Title>{item.symbol}{item.name}<span onClick={()=>{removeItem(cartitems,"name",item.name) ;console.log(cartitems)}} style={{marginLeft:"190px",fontSize:"15px",color:"red"}}>Remove</span></Card.Title>
      
        <Card.Text>
         cost:<span style={{marginLeft:"360px"}}>₹{item.val}</span>
        </Card.Text>
        <Card.Text>
          Quantity:<span style={{marginLeft:"320px"}}>{item.count}</span>
        </Card.Text>
        </>
      )
    })}
      </Card.Body>
    </Card>


    <Card style={{marginTop:"10px",}}>
     
     <Card.Body>
       <Card.Text style={{borderBottom:"1px dashed grey",paddingBottom:"10px",cursor:"pointer"}} onClick={()=>{navigate("/")}}><i className="fa fa-plus-circle" aria-hidden="true"></i>Add more items<span style={{paddingLeft:"250px"}}><i class="fa fa-arrow-right" aria-hidden="true"></i></span></Card.Text>
       <Card.Text onClick={handleShow} style={{cursor:"pointer"}}><i className="fa fa-pencil-square-o" aria-hidden="true"></i>Add Cooking instructions<span style={{paddingLeft:"180px"}}><i className="fa fa-arrow-right" aria-hidden="true"></i></span></Card.Text>
       <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title style={{color:"red"}}>Special cooking instructions </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {/* <input type='text' placeholder='Start typing...' /> */}
        <textarea placeholder="Start typing..." cols={60} rows={4}></textarea>

        <p style={{color:"red",marginTop:"20px"}}>The restaurant will try their best to follow your instructions.However,no cancellation or refund will be possible if your request is not met</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} style={{width:"470px"}}>
            Add
          </Button>
          {/* <Button variant="primary">Understood</Button> */}
        </Modal.Footer>
      </Modal>

     </Card.Body>
   </Card>


  
      
      </Card.Body>
    </Card>


    <Card style={{width:"500px",maxHeight:"250px",marginLeft:"2px",flexBasis:"50%",marginTop:"30px"}}>
      <Card.Header style={{textAlign:"center",color:"red"}}>SAVINGS CORNER</Card.Header>
      <Card.Body>
        
<Card>
      {/* <Card.Header>Featured</Card.Header> */}
      <Card.Body >
        {/* <Card.Title>{props.data.symbol}{props.data.name}</Card.Title> */}
        <Card.Text>
        Save ₹120 more on this order
        </Card.Text>
       
     
        <Card.Text style={{display:"flex"}}>
          Code:TREAT
         {!coupon ?<p style={{color:"red",marginLeft:"300px",cursor:"pointer"}} onClick={()=>{setCoupon(true);alert("coupon applied");handleApplyCoupon()}}>Apply</p>:<p style={{color:"green",marginLeft:"230px",}}>Coupon applied</p>}
        </Card.Text>
        <Card.Text style={{color:"red",borderTop:"1px dashed grey",marginTop:"-26px",paddingTop:"10px",cursor:"pointer"}} onClick={()=>{navigate("/coupons")}}>
        View all coupons
        </Card.Text>
        
      </Card.Body>
    </Card>


    {/* <Card style={{marginTop:"10px"}}>
     
     <Card.Body>
       <Card.Text style={{borderBottom:"1px dashed grey",paddingBottom:"10px"}} onClick={()=>{navigate("/")}}><i class="fa fa-plus-circle" aria-hidden="true"></i>Add more items<span style={{paddingLeft:"620px"}}><i class="fa fa-arrow-right" aria-hidden="true"></i></span></Card.Text>
       <Card.Text onClick={handleShow} ><i class="fa fa-pencil-square-o" aria-hidden="true"></i>Add Cooking instructions<span style={{paddingLeft:"550px"}}><i class="fa fa-arrow-right" aria-hidden="true"></i></span></Card.Text>
       <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title style={{color:"red"}}>Special cooking instructions </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {/* <input type='text' placeholder='Start typing...' /> */}
        {/* <textarea placeholder="Start typing..." cols={60} rows={4}></textarea>

        <p style={{color:"red",marginTop:"20px"}}>The restaurant will try their best to follow your instructions.However,no cancellation or refund will be possible if your request is not met</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} style={{width:"470px"}}>
            Add
          </Button>
          {/* <Button variant="primary">Understood</Button> */}
        {/* </Modal.Footer>
      </Modal>

     </Card.Body> */}
   {/* </Card> */}


  
      
      </Card.Body>
    </Card>


    <Card style={{ width:"500px",maxHeight:"420px",marginLeft:"2px",flexBasis:"50%",marginTop:"30px",marginBottom:"20px" }}>
    <Card.Header style={{textAlign:"center",color:"red"}}>BILL SUMMARY</Card.Header>
      <Card.Body>

      <Card>
      <Card.Body >
        <Card.Text>
       {/* <h6> Subtotal: <span style={{marginLeft:"320px"}}>₹{props.data.val}</span></h6> */}
       <h6> Subtotal: <span style={{marginLeft:"320px"}}>₹{cartitems.reduce((accumulator,current) => accumulator + current.val, initialValue)}</span></h6>
        <p>includes ₹2 feeding India donation</p>
        </Card.Text>
        <Card.Text style={{display:"flex"}}>
          GST and restaurant charges <span style={{marginLeft:"200px"}}>₹17.85</span> </Card.Text>
      <Card.Text>Delivery Partener fee<span style={{marginLeft:"250px"}}>₹40</span></Card.Text>
       
        <Card.Text style={{borderTop:"1px dashed grey",marginTop:"-12px",paddingTop:"10px",cursor:"pointer",fontWeight:"bold"}} >
        {/* Grand Total <span style={{marginLeft:"280px",}}>₹{props.data.val +57.85}</span>  */}
        Grand Total <span style={{marginLeft:"270px",}}>₹{cartitems.reduce((accumulator,current) => accumulator + current.val, initialValue) +57.85}</span> 
        </Card.Text>
        {coupon&&<Card.Text>Coupon - (TREAT) <span style={{marginLeft:"260px"}}>-₹120</span></Card.Text>}
        {coupon?<Card.Text style={{fontWeight:"bold"}}>Net Payable <span style={{marginLeft:"265px"}}>₹{cartitems.reduce((accumulator,current) => accumulator + current.val, initialValue) -62.15}</span></Card.Text>:
        <Card.Text style={{fontWeight:"bold"}}>Net Payable <span style={{marginLeft:"265px"}}>₹{cartitems.reduce((accumulator,current) => accumulator + current.val, initialValue)+57.85}</span></Card.Text>}
      </Card.Body>
    </Card>
      </Card.Body>
    </Card>
      
     
    {/* <Card style={{width:"300px",height:"50px",marginLeft:"2px",flexBasis:"50%",marginTop:"30px",marginBottom:"20px"}}>
      
      <Card.Title>Your Details</Card.Title>
      </Card> */}
    
     
    </div>

    <div style={{marginLeft:"50px"}}>
    {/* style={{display:"flex", justifyContent:"center",alignContent:"center",marginBottom:"50px",}} */}
      <OverlayTrigger trigger="click" placement="right" rootClose overlay={ <Popover id="popover-basic"  >
    <Popover.Header as="h3">Enter Address</Popover.Header>
    <Popover.Body>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="standard-basic" label="Enter Name" variant="standard" value={name} onChange={(e)=>setname(e.target.value)}/>
      <TextField id="standard-basic" label="Enter Address" variant="standard" value={address} onChange={(e)=>setAddress(e.target.value)} />
      <TextField id="standard-basic" label="Enter Phone number" variant="standard" value={phn} onChange={(e)=>setPhn(e.target.value)}/>
      <Button  onClick={()=>{setSubmitted(!submitted);document.body.click()}}>Submit</Button>
    </Box>
    </Popover.Body>
  </Popover>}>
      <h5 style={{marginTop:"30px"}}>Your Details<i className="fa fa-arrow-right" aria-hidden="true"></i></h5>
  </OverlayTrigger>
{submitted&& <Card style={{width:"400px",marginTop:"30px"}}>
  <Card.Header>Details</Card.Header>
  <Card.Body>
    <Card.Text>Name:{name}</Card.Text>
    <Card.Text>Address:{address}</Card.Text>
    <Card.Text>Phone number:{phn}</Card.Text>
  </Card.Body>
</Card>
  
  }

<Card style={{ width:"400px",height:"220px",marginLeft:"2px",flexBasis:"50%",marginTop:"30px",marginBottom:"20px" }}>
    <Card.Header style={{textAlign:"center",color:"red"}}>Pay Using</Card.Header>
      <Card.Body>
        <form>

        <input type="radio" name="pay" id="phnpe" value="phnpe"  /><npsp> </npsp>
        <label for="phnpe"><span><img src={phone} style={{width:"20px",marginRight:"20px"}} /></span>Phone pe</label><br></br>
       
        <input type="radio" name="pay" id="googlepay" value="googlepay" /><npsp> </npsp>
        <label for="googlepay"><span><img src={gpay} style={{width:"20px",marginRight:"20px"}} /></span> Google pay</label><br></br>

        <input type="radio" name="pay" id="upi" value="upi" /><npsp> </npsp>
        <label for="upi"><span><img src={upi} style={{width:"30px",marginRight:"20px"}} /></span>UPI</label><br></br>

        <input type="radio" name="pay" id="net" value="net" /><npsp> </npsp>
        <label for="net"><span><img src={net} style={{width:"20px",marginRight:"20px"}} /></span>Net Banking</label><br></br>

        <input type="radio" name="pay" id="cod" value="cod" /><npsp> </npsp>
        <label for="cod"><span><img src={cod} style={{width:"20px",marginRight:"20px"}} /></span>Cash on delivery</label>

       </form>
</Card.Body>
</Card>

{localStorage.getItem("token")?<button type='submit' style={{marginLeft:"130px",color:"red"}} onClick={()=>{alert("Payment successful");navigate("/")}}>Complete Payment</button>:<button type='submit' style={{marginLeft:"130px",color:"red"}} onClick={()=>{alert("Please Login first to complete payment");navigate("/")}}>Complete Payment</button>}
    </div>
   
    </div>
    </>
  )
}


function Cart() {
  const navigate=useNavigate();
  
  
  const location=useLocation();   
  const [cartitems,setCartitems]=useContext(userContext)
  console.log(cartitems.length)
  if(cartitems.length==0 && localStorage.getItem("token")){
    alert("Please add items to cart to proceed")
    window.location.href="/"
    console.log("first")
  }
  if(cartitems.length==0 && !localStorage.getItem("token")){
    alert("You need to login first")
    window.location.href="/"
    console.log("first")
  }
  
  const val1=location.state.val;
  const name1=location.state.name
  const symbol1=location.state.symbol;
  const count1=location.state.count
  console.log(val1,name1);
  let a={val:val1,name:name1,symbol:symbol1,count:count1}
let b=[];
b.push(a);

console.log(b)
  const handlelogout=async()=>{
    const result=await(await fetch("http://localhost:9000/rest/logout",{
      method:"POST",
      credentials:"include"
    })).json()
    
    console.log(result);
    // .then(res=>console.log(res.json()))
    // .then(a=>console.log(a))
    localStorage.setItem("token","")
     }
  return (
   <>
   <div className="head container">
   
   
{/* <img src='https://mir-s3-cdn-cf.behance.net/projects/404/2971a3169377049.Y3JvcCwxMDgwLDg0NCwwLDExNw.png' style={{width:"190px",height:"160px",marginTop:"-40px"}} onClick={()=>{navigate("/")}} /> */}
<img src={require("./tomato.png")} style={{width:"190px",height:"160px",marginTop:"-40px"}} onClick={()=>{navigate("/")}} />

 {/* {localStorage.getItem("token")&&<h4>Welcome {((JSON.parse(localStorage.getItem("token"))).email)} {console.log((JSON.parse(localStorage.getItem("token"))).email)} </h4>
} */}
<h3 style={{color:"red",marginTop:"30px"}}>"GET WHAT YOU EYE"</h3>


{/* <ul className="list">  */}
{/* <li><a href="/cart"><i class="fa fa-shopping-cart" aria-hidden="true"></i></a></li> */}
   {/* <li><a href="/" onClick={handlelogout} >Logout</a></li>
   
   </ul> */}

   <ul className="list"> 
   {localStorage.getItem("auth")==true&&<li><a href="/admin">admin</a></li>}
{localStorage.getItem("token")? <li><a href="/" onClick={handlelogout}>Logout</a></li>:<ul className="list">
    <li><a href="/login">Login</a></li>
    <li><a href="/signup">SignUp</a></li>
  </ul>} 
    {/* <li><a href="/" onClick={handlelogout} >Logout</a></li> */}
    
    </ul>

</div>




<div>
      {/* <Media loading /> */}
      <Media data={a} />
    </div>

   </>
  )
}

export default Cart