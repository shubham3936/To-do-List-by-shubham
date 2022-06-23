import React from "react";
import "./Navbar1.css";
import amazonlogo from "../../images/Navbar1img/amazon_logo.png";
import flag from "../../images/Navbar1img/flag.png";
import location from "../../images/Navbar1img/location.png";
import search from "../../images/Navbar1img/search.png";

function Navbar1 ()
{
    return(
        <div className="navbar_container1">
            <div className="logo">
                <img src={amazonlogo}/>
            </div>
            <div className="location">
                <p>Hello</p>
                <p className="p_tag">Select your address</p>

                {/* <img src={location}/> */}
            
            </div>
            <div className="search_box">
                <div className="searchkaALL"><p>All</p></div>
                <input />
                <img src={search}/>
                
                
            </div>
            <div className="flag">
                <img src={flag}/>
            </div>
            <div className="signin">
                <p>Hello,sign in</p>
                <p className="p_tag">Accounts & Lists</p>
            </div>
            <div className="return_and_order">
                <p>Return &</p>
                <p className="p_tag">Orders</p>
            </div>
            <div className="cart">
                <img />
                <p>Cart</p>
            </div>
        </div>
    )
}

export default Navbar1;
