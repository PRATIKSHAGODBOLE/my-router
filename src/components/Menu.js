import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function Menu() {
  const params = useParams()
  const [role, setrole] = useState("")
  const navigate = useNavigate()                 

   useEffect(() => {
    // session se data nikalne ke liye
    let userRole = sessionStorage.getItem('role')
    setrole(userRole)
  }, [params])                    
  
  // LogOut Function
     function LogoutFUn (){
     //session se data remove krege
      sessionStorage.removeItem('role')
     alert("Logout Successfully")                                          
    navigate("/login")
   }
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Router</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">

              {/* // Router Conditions */}
              {
                // role accessist krna hai to kuch kam krana hai else hame login dikhana hai
                role ? (
                  // agr role hamara author hai to kuch kam krana hai otherwise kuch or kam krana hai
                  role == "Author" ? (
                    <>
                      {/* For Author */}            
                      <li className="nav-item">
                        <Link className="nav-link active" to="/home">Home</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/post">Post</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/nested">Nested-Post</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/social">Social-Post</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/newpost">New-Post</Link>
                      </li>
                        {/* Logout Button */}
                      <li className="nav-item">
                        <button className="btn btn-info" onClick={LogoutFUn}>Logout</button>
                      </li>
                    </>

                  ) : (
                    <>
                       {/* For Visitor */}
                      <li className="nav-item">
                        <Link className="nav-link active" to="/home">Home</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/post">Post</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/nested">Nested-Post</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/social">Social-Post</Link>
                      </li>
                        {/* Logout Button */}
                        <li className="nav-item">
                        <button className="btn btn-info" onClick={LogoutFUn}>Logout</button>
                      </li>
                    </>
                  )
                ) : (
                  // For New User
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                  </li>
                )
              }

            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
