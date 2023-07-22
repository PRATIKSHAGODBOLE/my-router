
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
//What is dynamic routing = we can access dynamic data using useParams
    // When we load the page useEffect uske bad call hota isliye data aana chaiye to condition rendering krte hai {post? id} post hai to id show hogi

export default function PostDetails() {
    const {id} = useParams()       //Distucture kr liya we need only id type (Data get using useParams)
    const [post, setpost] = useState() //we useing post only for single data
    // console.log(id)

     //useEffect [] koe bhi data ya value ak bar nalegi(we receieved data of single post)
    //Note compoenent render hone ke bad useEffect work krna ha
    useEffect(()=>{
        axios
        .get(`http://127.0.0.1:3003/posts/${id}`)
        .then((res)=>setpost(res.data))
        .catch(err=>console.log(err))
    },[])
    // console.log(post)

  return (
    <div className='container'>
      <h2 className='text-center text-primary'>Social Post Details</h2>
    
    <div className="row">
        <div className="col-md-12">
            <table className='table table-bordered table-striped '>
                <tbody>
                    <tr>
                        <th>Id:</th>
                        <th>{post?.id}</th> {/*Conditional rendering {post?*/}
                    </tr>
                    <tr>
                        <th>Title:</th>
                        <th>{post?.title}</th>
                    </tr>
                    <tr>
                        <th>Body:</th>
                        <th>{post?.body}</th>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    </div>
  )
}
