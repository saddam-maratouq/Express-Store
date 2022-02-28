import React from "react";
import "./header.css";

//icons 

import { IoSearchOutline } from "react-icons/io5";

import { IoCartOutline } from "react-icons/io5";

import { MdOutlineDisabledByDefault } from "react-icons/md";

import { FiUser } from "react-icons/fi"; 

// img

import logo from "../../Images/logo.png";
import store from "../../Images/stores.png";
import SecNav from "../Sec-Nav/SecNav";
import hodey from "../../Images/hoedy.png"; 




const Header = () => (
  <>
    <hr className="fline" /> 

   
    {/* <<!== Nav aBar  >>  */}


    <div className="Navs-color">
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <img className="ml-3" src={logo} alt=" logo " />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
         
              {/* <IoSearchOutline  className="S-icon " color="gray"  size='1.5rem' />  */}
             <input 
              

              style={{ fontFamily : 'FontAwesome'}}

              className=" search " 
           
              type="text" 
            
              placeholder="  &#xf002;  what are you looking for ?"
            /> 

            <img src={store} alt="store" />

            <div className="gray-line"> </div>

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Languges
                </a>
              </li> 

              {/* <<!== dropdown Cart >>  */}

              <li className="nav-item dropdown dropleft ">
                <a
                  className="nav-link "
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <IoCartOutline size="1.9em" />
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <div className="drop   ">
                    <div className="  cart-row ">
                      <MdOutlineDisabledByDefault
                        className="dropdown-item_icon "
                        size="2em"
                      />
                      <img
                        src={hodey}
                        alt="hodey"
                        className="dropdown-item  test "
                      />
                      <div className="details">
                        <div className="f-child">
                          <span> floral print wrap dress </span>
                          <span> size: 42 </span>
                        </div>

                        <div className="S-child">
                          <span> qty: 1 </span>
                          <span> $50 </span>
                        </div>
                      </div>
                    </div>
                    <div className="  cart-row ">
                      <MdOutlineDisabledByDefault
                        className="dropdown-item_icon  "
                        size="2em"
                      />
                      <img
                        src={hodey}
                        alt="hodey"
                        className="dropdown-item test "
                      />
                      <div className="details">
                        <div className="f-child">
                          <span> floral print wrap dress </span>
                          <span> size: 42 </span>
                        </div>

                        <div className="S-child">
                          <span> qty: 1 </span>
                          <span> $50 </span>
                        </div>
                      </div>
                    </div>
                    <div className="cart-row ">
                      <MdOutlineDisabledByDefault
                        className="dropdown-item_icon "
                        size="2em"
                      />
                      <img
                        src={hodey}
                        alt="hodey"
                        className="dropdown-item  test "
                      />
                      <div className="details">
                        <div className="f-child">
                          <span> floral print wrap dress </span>
                          <span> size: 42 </span>
                        </div>

                        <div className="S-child">
                          <span> qty: 1 </span>
                          <span> $50 </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* end dropdownCart */}

                  {/* <! cart-button>>  */}

                  <div className="button-cart">
                    <button> show all </button>
                    <button> check out </button>
                  </div>
                </ul>
              </li>

              <FiUser className=" user-icon mx-1  " color="brown" size="2rem" />
            </ul>
          </div>
        </div>
      </nav>

      <hr className="Sline" />
    </div>

    {/* <!== Sec NAv >>   */}

    <SecNav />
  </>
);

export default Header;
