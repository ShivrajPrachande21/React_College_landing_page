import React, { useRef } from 'react'
import './tesimonials.css'
import next_icon from '../../assets/next-icon.png';
import back_icon from '../../assets/back-icon.png';
import user1 from '../../assets/user-1.png';
import user2 from '../../assets/user-2.png';
import user3 from '../../assets/user-3.png';
import user4 from '../../assets/user-4.png';

const Testimonials = () => {

    const slider=useRef();
    let tx=0;

const slideforword=()=>{
    if(tx > -50)
    {
        tx-=25
    }
    slider.current.style.transform=`translateX(${tx}%)`
}
const slidebackword=()=>{
    if(tx <= -25)
    {
        tx+=25
    }
    slider.current.style.transform=`translateX(${tx}%)`
}
  return (
    <div className='tesimonials'>
        <img src={next_icon} alt="" className='next_btn'  onClick={slideforword}/>
        <img src={back_icon} alt="" className='back_btn' onClick={slidebackword} />
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="userinfo">
                            <img src={user1} alt="" />
                            <div>
                                <h3>SHivraj Parchande</h3>
                                <span>Mundhwa Pune</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur 
                            adipisicing elit. Omnis quis veniam tenetur
                             distinctio rerum non recusandae minima! 
                             Velit, nobis porro.</p>
                    </div>
                </li>
                
            
            <li>
                    <div className="slide">
                        <div className="userinfo">
                            <img src={user2} alt="" />
                            <div>
                                <h3>SHivraj Parchande</h3>
                                <span>Mundhwa Pune</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur 
                            adipisicing elit. Omnis quis veniam tenetur
                             distinctio rerum non recusandae minima! 
                             Velit, nobis porro.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="userinfo">
                            <img src={user3} alt="" />
                            <div>
                                <h3>SHivraj Parchande</h3>
                                <span>Mundhwa Pune</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur 
                            adipisicing elit. Omnis quis veniam tenetur
                             distinctio rerum non recusandae minima! 
                             Velit, nobis porro.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="userinfo">
                            <img src={user4} alt="" />
                            <div>
                                <h3>SHivraj Parchande</h3>
                                <span>Mundhwa Pune</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur 
                            adipisicing elit. Omnis quis veniam tenetur
                             distinctio rerum non recusandae minima! 
                             Velit, nobis porro.</p>
                    </div>
                </li>
                </ul>
        </div>
        </div>
  )
}

export default Testimonials;