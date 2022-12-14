import React from 'react';

import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; 


const Header = () => {
   
  function logout() {
    sessionStorage.clear();
    window.open("/","_self")

   }
return( 
	<header className="header-section ">
  <div className="header-warp">
 
    <div className="header-bar-warp d-flex">
      {/* site logo */}
      <a href="/" className="site-logo">
        <img src="./img/logo.png" alt="" />
      </a>
      <nav className="top-nav-area w-100">
        <div className="user-panel">
          
        {sessionStorage.getItem("username")!== null?<>
        {sessionStorage.getItem('role')==="user"?<Link to="/Userprofile" className="navbar__item mx-4">
          Hello, {sessionStorage.getItem('username')}
          </Link>:<> </>}
        {sessionStorage.getItem('role')==="admin"?
        <Link className="navbar-brand" to='/Dashbord'>Dashbord</Link>:<> </>}
        <Link to="/" className="navbar__item">
          <Link  onClick={logout} >LOGOUT</Link>
        </Link>
        </>
         :<>
        <Link to="/register" className="navbar__item mx-5">
        Register
        </Link>
        <Link to="/login" className="navbar__item">
        Login
        </Link>
        </>
}

        </div>
        {/* Menu */}
        <ul className="main-menu primary-menu">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/HomePage">Games</a></li>

          <li><a href="/genres">Games Type</a>
          </li>
          <li><a href="/platforms">Games Platforms</a></li>
          <li><a href="/publishers">Games Publisher</a></li>
          
          {/* <Link to="/Conact">About Page</Link> */}



          
        </ul>
      </nav>
    </div>
  </div>
</header>

)}

export default Header;
