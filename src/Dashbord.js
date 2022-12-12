
import React from "react";
import {  Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./dashbord.css";
import NavBar from "./Admindashbord/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css'; 
function App (){
   
  return (
  <>

 <NavBar />
 <div className='userstable '>
 <div className="d-flex justify-content-around p-5">
  <div className="card text-white bg-primary mb-3" style={{maxWidth: '18rem'}}>
    <h2 className="card-header">Number Of Users</h2>
    <div className="card-body">
      <p className="card-text">55</p>
    </div>
  </div>

  
 
  <div className="card text-dark bg-warning mb-3" style={{maxWidth: '18rem'}}>
  <h2 className="card-header">Number Of Users</h2>
    <div className="card-body">
      <p className="card-text">55</p>
    </div>
  </div>
  <div className="card text-dark bg-info mb-3" style={{maxWidth: '18rem'}}>
  <h2 className="card-header">Number Of Users</h2>
    <div className="card-body">
      <p className="card-text">55</p>
    </div>
  </div>
  <div className="card text-white bg-dark mb-3" style={{maxWidth: '18rem'}}>
  <h2 className="card-header">Number Of Users</h2>
    <div className="card-body">
      <p className="card-text">55</p>
    </div>
  </div>
</div>

      </div>

    </>
  );
  };

export default App;

