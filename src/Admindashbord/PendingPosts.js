import React from 'react'
import { Link } from "react-router-dom";
import {  Row, Col, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import './style.css'
function PendingPosts() {
  
const [inputs,setpending] = useState([]);

const [pendings, setpendings] = useState([]);
  useEffect(() => {
      // getUsers();
      getUse();
  }, []);


    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setpending(values => ({...values, [name]: value}));
  }



///show data

  function getUse() {
    axios.get(`http://localhost/ApiRedux/admin.php`).then(function(response) {
        console.log(response.data);
        setpendings(response.data);
    });
}

/////delete

const deleteUser = (id) => {
    axios.delete(`http://localhost/ApiRedux/admin.php/${id}/delete`).then(function(response){
        console.log(response.data);
        getUse();
    });
  
}


const EditUser = (id) => {
axios.put(`http://localhost/ApiRedux/admin.php/${id}/edit`, inputs).then(function(response){
            console.log(response.data);
            getUse();
        });
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
<Row className="rightFlex mt-5 mx-5">
            <Col sm="auto">
              {/* <Button
                className="btn btn-primary"
                type="button"
              >
                Add Users +
              </Button> */}
            </Col></Row>
    <div className='w-75 mx-auto mb-5'>
      <h2>Post Pending </h2>
      <table className="table  my-5">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">GameName</th>
      <th scope="col">User</th>
      <th scope="col">Post</th>  
      <th scope="col">Action</th>
      
    </tr>
  </thead>

  
  <tbody >{pendings.map((post, key) =>

<tr key={key}> 
<th scope="row">{post.id}</th>
<td>{post.game_name}</td>
<td>{post.name}</td>
<td>{post.comment}</td>


   
      <td>

<button  value={1} type="button" className="btn btn-success mx-1">Approve</button>
  <button  value={0}type="button" className="btn btn-danger mx-1">Reject</button>
  
</td>
    </tr>
       )}
  </tbody>
</table>

    </div>
    </div>
  </>
  )
}

export default PendingPosts