import React from 'react'
import {Link} from 'react-router-dom'
export default function Home() {
  return (
    <div>
        <h1 className='text-danger'>This is Home Page</h1> 
        <p>This is a Home Page of Our Website</p>
        <p>And here we are learing about Router</p>
        <Link to ="/about">Go to About page</Link>
        </div>
    
  )
}
