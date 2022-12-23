import React,{ useState, useEffect } from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card';
 
import'./Style/BestSellerP.css'

export default function BestSellerP() {
  
  const [post,setPost]=useState([])
  useEffect(()=>
 

   async function getdata(){
     try{
const res=await axios.get("https://fakestoreapi.com/products");
 console.log(res.data); 
 setPost(res.data); 
     }
     catch(err)  
     { 

console.log(err);
}
getdata()

 },[])
  return (
    <div className='s1'>


         {/* fIRST */}
 
         <Card style={{ width: '100px' }}>
      <Card.Img variant="top" src="https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg" width="200px" height="150px;" />
     
      <Card.Body>
      <Card.Title ><b>Red-Top</b> <br/>Price$:300</Card.Title> 
     {post.map((e,index)=><li key={index}>
    <br/>
        </li>)}  
       
</Card.Body>
</Card>

 
    {/* Second */}
    <div className='s2'>
 
 <Card style={{ width: '100px' }}>
 <Card.Img variant="top" src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" width="200px" height="150px;" />

 <Card.Body>
 <Card.Title><b>Denie Jacket</b> <br/>Price$:250</Card.Title> 

   {post.map((e,index)=><li key={index}>
<br/>
   </li>)}  
  
</Card.Body>
</Card>
</div>

 {/* Third */}
 <div className='s3'>
 
 <Card style={{ width: '100px' }}>
 <Card.Img variant="top" src="https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg " width="200px" height="150px;" />

 <Card.Body>
 <Card.Title><b>Samgung-d1</b> <br/>Price$:750</Card.Title> 

   {post.map((e,index)=><li key={index}>
<br/>
   </li>)}  
  
</Card.Body>
</Card>
</div>

{/* Fourth */}
<div className='s4'>
 
 <Card style={{ width: '100px' }}>
 <Card.Img variant="top" src="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg" width="150px" height="150px;" />

 <Card.Body>
 <Card.Title><b>Nike-Shirt</b> <br/>Price$:900</Card.Title> 
   {post.map((e,index)=><li key={index}>
<br/>
   </li>)}  
  
</Card.Body>
</Card>
</div>
    

    <div>
   <button className='j'  >FREE SHIPPING</button>
    <button className='j' >CASH ON DELIVERY</button>
    <button className='j'>45 DAYS RETURN</button>
    <button className='j'>OPENING ALL WEEK</button>




    </div>
 
    </div>
  )
}
