import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Register() {
    const navigate = useNavigate();
    
    const [register, setregister] = useState({
        email:"",
        password:"",
        name:"",
        role : "Visitor"

    })
    // Function ResterUserProcess

    function ResterUserProcess(){
        //console.log(register)
        axios.post(`http://localhost:3005/api/users`, register)
        .then((res)=> alert("New User Registered"))
        .catch(err=>console.log(err))

        navigate("/login")
    }

    
  return (
    <div className='container'>
        <div className='row'>
            <div className='col'>
                <h1 className=' text-center text-primary'>Register Page</h1>
            </div>
        </div>
        <div className='row'>
            <div className='offset-md-3 col-md-6'>
            <form>
                    <label htmlFor="">Email</label>
                    <input type="text" className="form-control"
                        onChange={(e) => setregister({ ...register, email: e.target.value })}/>

                    <label htmlFor="">Password</label>
                    <input type="password" className="form-control"
                        onChange={(e) => setregister({ ...register, password: e.target.value })} />

                   <label htmlFor="">Name</label>
                    <input type="password" className="form-control"
                        onChange={(e) => setregister({ ...register, name: e.target.value })} />

                    <button type="button" className="btn btn-primary m-2" onClick={ResterUserProcess}>Register</button>

                </form>
            </div>
        </div>
       

    </div>
  )
}
