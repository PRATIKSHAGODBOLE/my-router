import React from 'react'
import {Link} from 'react-router-dom'
export default function Page404() {
  return (
    <div>
        <h1 className='text-primary'>Page 404</h1>
        <p>Thit URL not found</p>
        <Link to="/home">Go to Home page</Link>
    </div>
  )
}
