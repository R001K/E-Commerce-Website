import React from 'react'
import { useNavigate } from 'react-router-dom';
export default function ChangePin() {

    function enter()
    {
      alert("Are You sure");
        navigate('/atmend');
    }

    const navigate=useNavigate();
    const initialstate={
      'account':'',
      'pin':''
    }

  return (

    <div>
   <h1>  Here Change Your Pin</h1>  <br/>

   <p className='l2' >Enter Your Detailes</p><br/>
        <br/>   
        <form className='l3' >
        <label htmlFor="account">Enter Your Current Pin</label>
        <input type="number" placeholder='Current Pin' name="acount"/>
       <br/><br/>
        <label htmlFor="pin">Enter Your New Pin</label>
      <input type="password" placeholder='New Pin' name='pin'/><br/><br/>
      <label htmlFor="pin">Retype Your New Pin</label>
      <input type="password" placeholder='Retype Pin' name='pin'/><br/>
   <button onClick={enter}>Comfirm</button>
  
       </form>



     
    </div>
  )
}
