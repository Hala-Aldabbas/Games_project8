import React from 'react'
import { Form } from "react-bootstrap";

import { Link } from "react-router-dom";
import './style.css'
function EditComment() {
  return (
    <>
    	<header className="header-section dashboard-nav">
  <div className="header-warp">
 
    <div className="header-bar-warp d-flex">
      {/* site logo */}
      <a href="/" className="site-logo">
        <img src="./img/logo.png" alt="" />
      </a>
      <nav className="top-nav-area w-100">
        <div className="user-panel">
          
     
        
        <Link className="navbar-brand" to='/adminprofile'>Admin Dashbord</Link>
        

        </div>
        {/* Menu */}
        <ul className="main-menu primary-menu">
        <li><a href="/users">users</a></li>
      {/* <NavLink to={"/users"}>Users</NavLink> */}

      <li><a href="/Posts">posts</a></li>

      <li><a href="/pendingPosts">Pending Posts</a>
      </li>
      <li><a href="/Comments">comments</a></li>

        </ul>
      </nav>
    </div>
  </div>
</header>
 
    <Form className='w-75 mx-auto mt-5 '> <h1 className='mb-5'>Edit Comment</h1>
  
  <div className="mb-3 row align-items-center d-flex justify-content-center">
    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Game</label>
    <div className="col-sm-10">
      <input type="text" readOnly className="form-control-plaintext" id="staticEmail" defaultValue="Game" />
    </div>
  </div>
  <div className="mb-3 row align-items-center d-flex justify-content-center">
    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Post</label>
    <div className="col-sm-10">
      <input type="text" readOnly className="form-control-plaintext" id="staticEmail" defaultValue="Post" />
    </div>
  </div>
  <div className="mb-3 row align-items-center d-flex justify-content-center">
    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">User</label>
    <div className="col-sm-10">
      <input type="text" readOnly className="form-control-plaintext" id="staticEmail" defaultValue="User" />
    </div>
  </div>
  <div className="mb-3 row">
    <label htmlFor="UserName" className="col-sm-2 col-form-label">Comment</label>
    <div className="col-sm-6">
      <input type="text" className="form-control" id="userName" />
    </div>
  </div>
  <div className="mb-3 row">
  <label className="col-sm-2 col-form-label"></label>
  <div className="col-sm-6 mt-4 ">
  <button className="btn btn-primary" type="button" >
          Update
              </button>
              </div>
              </div>
</Form>
    </>
  )
}

export default EditComment