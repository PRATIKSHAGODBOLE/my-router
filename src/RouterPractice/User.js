import React from 'react'
import { useParams } from 'react-router-dom'

export default function User() {
    const params = useParams();
    const {name} = params;
    console.warn(name)
  return (
    <div>
        {/* <h1>This is Nisha Page</h1> */}
        <h1>This is {name}'s' Page</h1>
    </div>
  )
}
