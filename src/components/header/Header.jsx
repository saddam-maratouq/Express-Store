import React from "react";

import "./header.css";

//icons
import { IoCartOutline } from "react-icons/io5";

import { MdOutlineDisabledByDefault } from "react-icons/md";

import { FiUser } from "react-icons/fi"; 

// img

import logo from "../../Images/logo.png";

import store from "../../Images/stores.png";
import SecNav from "../Sec-Nav/SecNav";

import hodey from "../../Images/hoedy.png";

const Header = () => {
  return (
    <>
      <hr className="fline" />
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <form className="d-sm-flex   justify-content-start">
                <input
                  className="  form-control me-2 bg-white "
                  type="search"
                  placeholder="What are you looking for ? "
                  aria-label="Search"
                />
              </form>

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

                <li className="nav-item dropdown">
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
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
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
                            <span> qty:1 </span>
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
                            <span> qty:1 </span>
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
                            <span> qty:1 </span>
                            <span> $50 </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <! cart-button>>  */} 

                    <div className="button-cart" >
                      <button > show all  </button>
                      <button >  check out </button>
                    </div>
                  </ul>
                </li> 
                
                <FiUser color="brown"  size='2rem' />
                
              </ul>
            </div>
          </div>
        </nav>

        <hr className="Sline" />
      </div>
      <SecNav />
    </>
  );
};

export default Header;
