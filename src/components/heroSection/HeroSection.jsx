import React from "react";

import "./hero.css"; 

//img 

import hoedy from'../../Images/hoedy.png'

const HeroSection = () => {
  return (
    <>
      <section className="hero bg-white  ">
        <div className="  d-sm-flex  flex-column   align-items-start   pt-5   hero-img ">
          <h1> 70% Off </h1>

          <p> On everything today </p>

          <button className="bg-orange"> Get Now </button>
        </div>
     

       {/* Cards */}  
      
        <h2 className="pop"> Popular Products </h2> 
        {/* card/*/} 
        <div className="row justify-content-start align-items-center  card-row   ">
        <div className="card bg-light rounded-sm col-2 "style={{ width: '13rem'}}>
          <img src={hoedy} className="card-img-top" alt=" hoedy" />
          <div className="card-body">
            <span className="card-title"> Autmen women</span>
            <p className="card-text">
             size :0000
            </p>
          </div>
        </div> 
         {/* card/*/}
         <div className="card bg-light rounded-sm col-2 "style={{ width: '13rem'}}>
          <img src={hoedy} className="card-img-top" alt=" hoedy" />
          <div className="card-body">
            <span className="card-title"> Autmen women</span>
            <p className="card-text">
             size :0000
            </p>
          </div>
        </div> 
         {/* card/*/}
         <div className="card bg-light rounded-sm col-2 "style={{ width: '13rem'}}>
          <img src={hoedy} className="card-img-top" alt=" hoedy" />
          <div className="card-body">
            <span className="card-title"> Autmen women</span>
            <p className="card-text">
             size :0000
            </p>
          </div>
        </div> 
         {/* card/*/}
         <div className="card bg-light rounded-sm col-2 "style={{ width: '13rem'}}>
          <img src={hoedy} className="card-img-top" alt=" hoedy" />
          <div className="card-body">
            <span className="card-title"> Autmen women</span>
            <p className="card-text">
             size :0000
            </p>
          </div>
        </div> 

          {/* card/*/}
          <div className="card bg-light rounded-sm col-2 "style={{ width: '13rem'}}>
          <img src={hoedy} className="card-img-top" alt=" hoedy" />
          <div className="card-body">
            <span className="card-title"> Autmen women</span>
            <p className="card-text">
             size :0000
            </p>
          </div>
        </div> 

          {/* card/*/}
          <div className="card bg-light rounded-sm col-2 "style={{ width: '13rem'}}>
          <img src={hoedy} className="card-img-top" alt=" hoedy" />
          <div className="card-body">
            <span className="card-title"> Autmen women</span>
            <p className="card-text">
             size :0000
            </p>
          </div>
        </div> 

        

        </div> 

        </section>

    </>
  );
};

export default HeroSection; 
