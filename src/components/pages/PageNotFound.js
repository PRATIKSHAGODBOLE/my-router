

import React from 'react'
import notFound from './Images/error.png'
export default function PageNotFound() {
  return (
    <div>
      <h2 className='text-center text-danger'> Page Not Found</h2>
      <div className='text-center'>
      <img src={notFound} alt=""  style={{width:"500px" }}/>
      </div>
    </div>
  )
}