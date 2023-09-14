import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';

import { Navigate } from 'react-router-dom';
import PageNotFound from './components/pages/PageNotFound';
import Post from './components/pages/Post'
import Menu from './components/Menu';
import SocialPost from './components/pages/SocialPost'
import SocialDetails from './components/pages/SocialDetails';
import NestedSocialPost from './components/pages/NestedSocialPost';
import AddNewPost from './components/pages/AddNewPost';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
//--------------------------------------------
//   import Home from './RouterPractice/Home'
//   import About from './RouterPractice/About'
// import Navbar from './RouterPractice/Navbar';
// import Page404 from './RouterPractice/Page404';
// import User from './RouterPractice/User';


function App() {
  return (
    <div className="container">
      
      <BrowserRouter>
        <Menu />

        <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/post" element={<Post />} />
          <Route path="*" element={<PageNotFound/>} />

          <Route path="/social" element={<SocialPost/>}/>
          <Route path="/social/:id" element={<SocialDetails/>}/>

          <Route path="/nested" element={<NestedSocialPost/>}/>
          <Route path="/nested/*" element={<NestedSocialPost/>}/> {/* (/* for go to latest oldest liked & disliked)*/}
          <Route path="/newpost" element={<AddNewPost/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>



        </Routes>
        
      </BrowserRouter>

      {/* <BrowserRouter>
      <Navbar />
      <Routes>
       <Route path="/home" element={<Home />} />
       <Route path="/about" element={<About/>}/>
       <Route path="*" element={<Page404/>} />
       {/* <Route path="/user/nisha" element={<User/>} /> */}
       {/* <Route path="/user:name" element={<User/>} />
      </Routes>

      </BrowserRouter> */} 
    </div>
  );
}

export default App;
