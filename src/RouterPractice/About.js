import React from 'react'
import {Link} from 'react-router-dom'

export default function About() {
  return (
    <div>
         <h1 className='text-danger'>This is All About Page</h1> 
        <p>This is About Page of Our Website</p>
        <p>And here we are learing about Router</p>
        <Link to ="/home">Go to Home page</Link><br/>
        <Link to="/user/nisha" >Nisha</Link><br/>
      <Link to="/user/peter" >Peter</Link>
         </div>
  )
}
