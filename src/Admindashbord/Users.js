import React from 'react'
import {  Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './style.css'
function Users() {

  const [inputs,setUser] = useState([]);

  const [users, setUsers] = useState([]);
    useEffect(() => {
        // getUsers();
        getUse();
    }, []);
  
  
      const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setUser(values => ({...values, [name]: value}));
    }
  
  
  
  ///show data
  
    function getUse() {
      axios.get(`http://localhost/ApiRedux/user.php`).then(function(response) {
          console.log(response.data);
          setUsers(response.data);
      });
  }
  
  /////delete
  
  const deleteUser = (id) => {
      axios.delete(`http://localhost/ApiRedux/user.php/${id}/delete`).then(function(response){
          console.log(response.data);
          getUse();
      });
      alert("Are you sure you want to Delete this User ?"); 
  }
  
  
  const EditUser = (id) => {
  axios.put(`http://localhost/ApiRedux/user.php/${id}/edit`, inputs).then(function(response){
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
      <h2>Users Information</h2>
      <table className="table  my-5">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">phone</th>  
      <th scope="col">location</th>
      <th scope="col">role</th>
      <th scope="col">ِAction</th>
    </tr>
  </thead>

  
  <tbody >{users.map((user, key) =>

<tr key={key}> 
<th scope="row">{user.id}</th>
<td>{user.name}</td>
<td>{user.email}</td>
<td>{user.mobile}</td>
<td>{user.location}</td>
<td>{user.role}</td>
   
      <td>
{/* <button type="button" className="btn btn-success">Edit</button> */}
<Link to={`EditUser/${user.id}`}><button type="button" className="btn btn-warning mx-2" >Edit</button></Link>

<button type="button" className="btn btn-danger" onClick={() => deleteUser(user.id)}>Delete</button>
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

export default Users