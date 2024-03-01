import React, { useState } from 'react';
import './Navbar.css';
import { NavLink} from 'react-router-dom';
import { IoMenu } from "react-icons/io5";



const Navbar = () => {

const [menu,setMenu]= useState("Home");
const [showMenu, setShowMenu] = useState(false);

 const toggleMenu = () => {
   setShowMenu(!showMenu);
 };
  return (
    <>
   <header>
      <nav className='navbar '>
      <div className="logo">
          <img src="new_logo_bg.png" alt=""/>
        </div>
      <div className="container">
       
        <div className="menu-icon" id="menu-icon" onClick={toggleMenu}>
         <IoMenu />
       </div>
       <div className={`nav-elements  ${showMenu && 'active'}`}>
        <ul className={`nav-menu  ${showMenu && 'active'}`}>
          <li onClick={() =>{setMenu("Home")}}><span><NavLink to="/">Home</NavLink></span>{menu==="Home"?<hr></hr>:<></>}</li>
          <li onClick={() =>{setMenu("Notes")}}><span><NavLink to="/Notes">Notes</NavLink></span>{menu==="Notes"?<hr></hr>:<></>}</li>
          <li onClick={() =>{setMenu("Practicals")}}><span><NavLink to="/Practicals">Practicals</NavLink></span>{menu==="Practicals"?<hr></hr>:<></>}</li>
          <li onClick={() =>{setMenu("Hackathon")}}><span><NavLink to="/Hackathon">Hackathon</NavLink> </span>{menu==="Hackathon"?<hr></hr>:<></>}</li>
          <li onClick={() =>{setMenu("Anime")}}><span><NavLink to="/Anime">anime</NavLink></span>{menu==="Anime"?<hr></hr>:<></>}</li>
          <li onClick={() =>{setMenu("Photography")}}><span><NavLink to="/Photography">photography</NavLink></span>{menu ==="Photography"?<hr></hr>:<></>}</li>
          <li onClick={() =>{setMenu("Login")}} className="nav-login-cart"><span><NavLink to="/Login">Login</NavLink></span>{menu ==="Login"?<br></br>:<></>}</li>
        </ul>  
        </div></div></nav>
        <div className="nav_controls">
         {/* <div className="search_bar" ><img src="search.png" alt="search_icon" title='search' className='search' /></div> */}
          <div className="mode"></div>
        </div>
        {/* <div className="nav-login-cart">
          <button onClick={() =>{setMenu("Login")}}><span><NavLink to="/Login">Login</NavLink></span>{menu ==="Login"?<br></br>:<></>}</button>
          <div className="nav-cart-count"></div>
          
        </div>   */}
        </header>
    </>
  );
};

export default Navbar;
