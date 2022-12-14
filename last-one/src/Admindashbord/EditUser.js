import React from 'react'
import { Link } from "react-router-dom";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import './style.css'

function EditUser() {
  const [inputs, setInfo]=useState({
    name:"",
    email:"",
    mobile:"",
    location:''
}) 

const id = sessionStorage.getItem("id");

useEffect(() => {
    getUser();
}, []);

function getUser() {
    axios.get(`http://localhost/ApiRedux/user.php/${id}`)
    .then(function(response) {
        setInfo(response.data);
    });
}
console.log(id)

const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInfo(values => ({...values, [name]: value,id:sessionStorage.getItem('id')}));
}
const handleSubmit = (e) => {
    
    e.preventDefault();
    axios.put(`http://localhost/ApiRedux/user.php`,inputs).then(function(response){
        // navigate('/Userprofile');

    });
    window.location.reload(false);

}

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
     
        
        <Link className="navbar-brand" to='/adminProfile'>Admin Profile</Link>
        

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

 
    <Form onSubmit={handleSubmit} className='w-75 mx-auto mt-5 '> 
    <h2 className='mb-5'>Edit User</h2>
  
  <div className="mb-3 row ">
    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-6">
      <input type="email" name="email"  className="form-control backColor" placeholder={inputs.email} id="staticEmail" defaultValue="email@example.com" />
    </div>
  </div>
  <div className="mb-3 row">
    <label htmlFor="UserName" className="col-sm-2 col-form-label">User Name</label>
    <div className="col-sm-6">
      <input placeholder={inputs.name}  type="text" className="form-control backColor" name="name" id="userName" onChange={handleChange} />
    </div>
  </div>
  <div className="mb-3 row">
    <label htmlFor="UserName" className="col-sm-2 col-form-label">Phone number</label>
    <div className="col-sm-6">
      <input placeholder={inputs.mobile} type="text" className="form-control backColor" name="mobile" id="userName" onChange={handleChange} />
    </div>
  </div>

  <div className="mb-3 row">
    <label htmlFor="location" className="col-sm-2 col-form-label">Location</label>
    <div className="col-sm-6">
      <input placeholder={inputs.location} type="text" name='location' className="form-control backColor" id="location" onChange={handleChange} />
    </div>
  </div>
  {/* <div className="mb-3 row">
    <label htmlFor="role" className="col-sm-2 col-form-label">Role</label>
    <div className="col-sm-6">
      <select type="text" className="form-control" id="role">
      <option>User</option>
        <option>Admin</option>
       
      </select>
    </div>
  </div> */}
  <div className="mb-3 row">
  <label className="col-sm-2 col-form-label"></label>
  <div className="col-sm-6 mt-4 ">
  <Button
                className="btn btn-primary"
                type="submit"
              >
                Update
              </Button>
              </div>
              </div>
</Form></div>
    </>
  )
}

export default EditUser