import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
export default function ChangePhone() {
    function comfirm()
    {
        alert("Are You Sure!!!");
        navigate('/atmend');
    }

    const navigate=useNavigate();
    const initialstate={
      'account':'',
      'pin':''
    }


  return (
    <div>
        <h1>
            Here You Can Change Your Phone
        </h1>

<p className='l2' >Enter Your Detailes</p><br/>
        <br/>   
        <form className='l3' >
        <label htmlFor="account">Enter Your Phone No.</label>
        <input type="number" placeholder='Phone no.' name="acount"/>
       <br/><br/>
        <label htmlFor="pin">Retype Your Number</label>
      <input type="password" placeholder='Retype Your Number' name='pin'/><br/>
   <button onClick={comfirm}>Comfirm</button>
  
       </form>


    </div>


  )
}
