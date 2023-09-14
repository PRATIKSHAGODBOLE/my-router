import axios from 'axios'
import React, { useState, useEffect } from 'react'
import '../../../node_modules/bootstrap-icons/font/bootstrap-icons.json'

export default function OldestPost() {
    const [posts, setposts] = useState()

    // function so we can call again..
    function delDataofoldestPost() {
      axios
      .get("http://localhost:3005/api/posts")
      .then((res)=>{
          let postData = res.data
         postData = postData.filter((post)=>post.oldest == true && post.latest == false) // As Per db.json (true and false)
         setposts(postData)
      })
    .catch(err=>console.log(err))
    }
    //Fetching API DATA
    useEffect(()=>{
      delDataofoldestPost ();  
    },[])

    // Delete Function Declared here
    function deletePost(post) {
      post.liked = true
      post.disliked = true
      post.oldest = true
      post.latest = false
      // Now we also update the database
      if (window.confirm("Are you sure to delete the Record")) {
      axios.delete(`http://localhost:3005/api/posts/${post._id}`, post)
        .then(() => {
          delDataofoldestPost()
        })
        .catch(err => console.log(err))
      }
    }
  return (
    <div>
     <div className="row">
        <div className="col-md-12">
          <h4 className="text-center bg-primary text-white py-2">
            List of Posts
          </h4>
        </div>
      </div>

      <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Title</th>
              <th scope="col">Body</th>
            </tr>
          </thead>
          <tbody>
            {posts ?
              // posts && is used here for conditional rendering
              posts.map((post, i) => (
                <tr key={i}>
                  <td>{post.id}</td>
                  <td>{post.title}</td>
                  <td>{post.body}</td>
                  <td>
                  <i class="fa fa-trash" style={{color:'red', fontSize:'30px' }} aria-hidden="true" onClick={() => deletePost(post)}></i>
                  </td>
                </tr>
                
              )) : <tr>
                <td>Loading...!!</td>
              </tr>
            }
          </tbody>
        </table>
    </div>
    
  )
}
