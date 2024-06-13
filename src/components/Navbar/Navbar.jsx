import React, { useEffect, useState } from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll';

import menuicon from '../../assets/menu-icon.png'

const Navbar = () => {
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 500 ? setSticky(true) : setSticky(false);
        });
        // Clean up the event listener on component unmount
        return () => window.removeEventListener('scroll', () => {});
    }, []);

const [phonwmwnu,setphonemenu]=useState(false);

const togglemenu=()=>{
    phonwmwnu? setphonemenu(false) : setphonemenu(true);
}


    return (
        <nav className={`container ${sticky ? 'darknav' : ''}`}>
            <img src={logo} alt="" className='logo'/>
            <ul className={phonwmwnu?'':'hidemenu'}>
                <li><Link to="hero" smooth={true} offset={0} duration={500}> Home</Link> </li>
                <li><Link to="programs" smooth={true} offset={-260} duration={500}> Program</Link></li>
                <li><Link to="about" smooth={true} offset={-150} duration={500}> About us</Link></li>
                <li><Link to="campus" smooth={true} offset={-260} duration={500}> Campus</Link></li>
                <li><Link to="tesimonials" smooth={true} offset={-260} duration={500}> Testimonials</Link></li>
                <li><Link to="contact" smooth={true} offset={-260} duration={500} className='btn'> Contact us</Link>
                </li>
            </ul>
            <img src={menuicon} alt="" className='menuicon' onClick={togglemenu}/>
        </nav>
    );
};

export default Navbar;

