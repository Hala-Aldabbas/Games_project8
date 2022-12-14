import React from 'react'
import { Form } from "react-bootstrap";

import { Link } from "react-router-dom";
import './style.css'
function AddUser() {
  return (<>
  	<header className="header-section dashboard-nav">
  <div className="header-warp">
 
    <div className="header-bar-warp d-flex">
      {/* site logo */}
      <a href="/" className="site-logo">
        <img src="./img/logo.png" alt="" />
      </a>
      <nav className="top-nav-area w-100">
        <div className="user-panel">
          
     
        
        <Link className="navbar-brand" to='/adminprofile'>Admin Profile</Link>
        

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

            <div className='userstable'>
    <Form className='w-75 mx-auto mt-5 '> 
    <h2 className='mb-5'>Add User</h2>
  
  <div className="mb-3 row ">
    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-6">
    <input type="email" className="form-control backColor" id="email" />
    </div>
  </div>
  <div className="mb-3 row">
    <label htmlFor="UserName" className="col-sm-2 col-form-label">User Name</label>
    <div className="col-sm-6">
      <input type="text" className="form-control backColor" id="userName" />
    </div>
  </div>
  <div className="mb-3 row">
    <label htmlFor="MobileNumber" className="col-sm-2 col-form-label">Phone</label>
    <div className="col-sm-6">
    <input type="tel" className="form-control backColor" id="mobile" />
    </div>
  </div>
  <div className="mb-3 row">
    <label htmlFor="location" className="col-sm-2 col-form-label">Location</label>
    <div className="col-sm-6">
      <input type="text" className="form-control backColor" id="location" />
    </div>
  </div>
  <div className="mb-3 row">
  <label className="col-sm-2 col-form-label"></label>
  <div className="col-sm-6 mt-4 ">
  <button className="btn btn-info" type="button">
              Add User </button>
              </div>
              </div>
</Form></div>
    </>
  )
}

export default AddUser