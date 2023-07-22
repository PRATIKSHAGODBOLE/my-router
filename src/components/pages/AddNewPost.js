import axios from 'axios'
import React, { useState } from 'react'
//useNavigate = navigate for set location/path for display data on perticuller file.
import { useNavigate } from 'react-router-dom'

export default function AddNewPost() {
  const navigate = useNavigate();
  const [newPost, setnewPost] = useState({
    // Note agr newdata add krege to wo data latest me jana chahiye isliye latest=true
     title: '', 
     body: '', 
     latest:true, 
     oldest:false, 
    //  liked:false, 
    //  disliked:true,
  })

  function  CreateNewPost (){
    // post use for creating new data
    axios
      .post(`http://127.0.0.1:3003/posts`, newPost)
       .then(res => alert("New Post Created") )
      .catch(err => console.log(err))

    // window.location.reload() remove this line because we are using navigate so we can reach any page (hence we will reach nested page).
    navigate('/nested') 
  }
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6'>
          <h3 className='text-success'>Create New Post</h3>
        <form>
        <label htmlFor="">Title</label>
        <input type="text" className="form-control"
          onChange={(e) => setnewPost({ ...newPost, title: e.target.value })}

        />

        <label htmlFor="">Body</label>
        <input type="text" className="form-control"
          onChange={(e) => setnewPost({ ...newPost, body: e.target.value })}

        />

        <button type="button" className="btn btn-primary my-2" onClick={CreateNewPost}>Create Record</button>
      </form>
        </div>
      </div>
    </div>
  )
}
