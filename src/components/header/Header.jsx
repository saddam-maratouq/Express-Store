import React from 'react' 

import './header.css'  

// import {  } from "react-icons/io5";


// img 

import logo from '../../Images/logo.png'

import store from '../../Images/stores.png'
import SecNav from '../Sec-Nav/SecNav'




const Header = () => {
  return ( 

    <>  
    <hr  className='fline' />
    <div>
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
     <div className="container-fluid">
    <img  className='ml-3' src={logo} alt=" logo " />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent"> 

    <form className="d-flex  align-items-start">  
        <input className="  form-control me-2 bg-white  " type="search" placeholder="What are you looking for ? " aria-label="Search"/>
      </form> 

        <img src={store}  alt="store"  /> 

        <div className='gray-line' >  </div>

      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Languges
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> 
      </ul>
     
    </div> 
  </div>
</nav>  

    <hr  className='Sline' /> 

    </div>  
    <SecNav/>  
    </>
  )
}

export default Header
