import React from "react";
import darkarrow from '../../assets/dark-arrow.png'
import './hero.css';
const Hero=()=>{
    return(
        <div className="hero container">
            <div className="hero-text">
            <h1>We Ensure Better eduction for better World</h1>
            <p>Lorem ipsum dolor, sit amet consectetur
                 adipisicing elit. Eum odio iusto, sunt 
                 reprehenderit, porro, rem saepe aliquid 
                 id adipisci iste blanditiis
            </p>
            <button className="btn">Eplore more<img src={darkarrow} alt=""/> </button>
            </div>
        </div>
    )
}
export default Hero;