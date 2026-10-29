import { Link, useLocation } from "react-router-dom";
import './Header.css'
function Header(){

    let currentuser=JSON.parse(localStorage.getItem("currentuser"));
    useLocation();
  
     return(
       
        <div className="header">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>  
          <Link to="/login">login</Link>
          <Link to ="/register">Register</Link>   
          
        </div>
    )
}
export default Header;