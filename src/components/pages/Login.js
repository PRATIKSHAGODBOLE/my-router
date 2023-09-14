import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const navigate = useNavigate();
    // user lekar aa rhe from db.json file
    const [users, setusers] = useState([])

    const [loginDetails, setloginDetails] = useState({
        username: "",
        password: ""
    })

    // useEffect for user state
    useEffect (() => {
        axios.get('http://localhost:3005/api/users', loginDetails)
            .then((res) => setusers(res.data))
            .catch((err) => console.log(err))
    }, [])




// Function Login
function loginProcess() {
    //  console.log(loginDetails); (db ke andar do id hai usko compare krege with find method)
    let foundUser = users.find((u) => u.email == loginDetails.username)
    if(foundUser){   // age match hue to 
         if(foundUser.password == loginDetails.password){

            if(foundUser.role == "Author") //Agr role Author hai to
            {
                sessionStorage.setItem("role", "Author")
                navigate("/home")   // go to home page.
            }
            else  //Author nhi hai to visiter
            {
                sessionStorage.setItem("role", "Visitor")
                navigate("/home")
            }
         }  

    }
    else
    {
        alert("You have no Access Register Yourself")
        navigate("/register")
    }
}
// Function Register 
function ResterProcess(){
    navigate("/register")
}

return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6'>
                <h3 className='text-success'>Login Page</h3>
                <form>
                    <label htmlFor="">Username</label>
                    <input type="text" className="form-control"
                        onChange={(e) => setloginDetails({ ...loginDetails, username: e.target.value })}
                                                                                
                    />

                    <label htmlFor="">Password</label>
                    <input type="password" className="form-control"
                        onChange={(e) => setloginDetails({ ...loginDetails, password: e.target.value })}

                    />

                    <button type="button" className="btn btn-primary m-2" onClick={loginProcess}>Login</button>
                    <button type="button" className="btn btn-primary m-2" onClick={ResterProcess}>Register</button>

                </form>
            </div>
        </div>
    </div>
)
  }
