import React from 'react'
import'./Style/Subcribe.css'

export default function Subcribe() {
  function sub()
  {
     alert(" Thanks For Subcribing !!!");
  }
  return (
    <div className='sub1'>

<nav className="navbar navbar-light bg-light">
  <a className="navbar-brand">NewsLetter<br/><p className='news'>Subscribe to our newsletter and get 20% off your first purchase</p></a>
 
  <form className="form-inline">
    <input
      className="text"
      type="search"
      placeholder="Your Email"
      aria-label="Search"
    />
    <button className="submit" type="submit" onClick={sub}>
     Subcribe
    </button>
  </form>
</nav>

<div className='All'>
    
    ©2022 All Rights Reserverd. This template is made with By ShopKaro
</div>



    </div>
  )
}
