import React from 'react' 

import './hero.css'

 


const HeroSection = () => {
  return ( 
    <> 
    <section className='hero bg-white  ' > 
      <div className="  d-sm-flex  flex-column   align-items-start   pt-5   hero-img ">
        <h1> 70% Off </h1> 
        
        <p> On everything today  </p> 
        
        <button className='bg-orange' > Get Now </button>
      </div> 

    </section>  

      <div className=' d-sm-flex  flex-column   justify-content-between    ' >  
        <h2 className='pop' > Popular Products </h2> 
       </div>
    </>
  )
}

export default HeroSection 
