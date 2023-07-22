import axios from 'axios'
import React, { useState, useEffect } from 'react'


export default function LatestPost() {
    const [posts, setposts] = useState()
    //Fetching API DATA
    useEffect(()=>{
        axios
        .get("http://127.0.0.1:3003/posts")
        .then((res)=>{
            let postData = res.data
           postData = postData.filter((post)=>post.oldest == false && post.latest == true) // As Per db.json (true and false)
           setposts(postData)

        })


        .catch(err=>console.log(err))
    },[])
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
              <th scope="col">Actions</th>
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
                  <button className="bi bi-hand-thumbs-up-fill btn btn-success btn-sm">Linked</button>
                </td>
                <td>
                    <button className='bi bi-hand-thumbs-down-fill btn btn-danger btn-sm'>Disliked</button>
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
