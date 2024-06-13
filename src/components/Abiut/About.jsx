import React from "react";
import about_img from '../../assets/about.png';
import playicon from '../../assets/play-icon.png';



import './about.css';

const About=({setPlaystate})=>{


    return(
           
                <div className="about">
                    <div className="about-left">
                        <img src={about_img} alt=""  className="about_img"/>
                        <img src={playicon} alt="" className="play_icon" onClick={()=>{setPlaystate(true)}}/>
                    </div>
                    <div className="about-right">
                             <h3>ABOUT UNIVERSITY</h3>
                             <h2>Nurturing Tomorrows Leaders Today</h2>
                             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Sit, minima quia optio nulla deleniti unde cumque quod 
                                quidem tempore consequuntur minus consequatur dignissimos 
                                consectetur labore, similique molestiae. Voluptatum, officia
                                 repudiandae.</p>
                                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Sit, minima quia optio nulla deleniti unde cumque quod 
                                quidem tempore consequuntur minus consequatur dignissimos 
                                consectetur labore, similique molestiae. Voluptatum, officia
                                 repudiandae.</p>
                                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Sit, minima quia optio nulla deleniti unde cumque quod 
                                quidem tempore consequuntur minus consequatur dignissimos 
                                consectetur labore, similique molestiae. Voluptatum, officia
                                 repudiandae.</p>
                    </div>
                </div>
            
    )
}
export default About;