import React, { useState } from 'react'
import  Navbar  from './components/Navbar/Navbar'
import About from './components/Abiut/About'
import Hero from './components/Hero/Hero';
import Program from './components/Programs/Program';
import Title from './components/Title/Title';
import Campus from './components/Campus/Campus';
import Testimonials from './components/Tesimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Fotter from './components/Fotter/Fotter';
import Videoplayer from './components/videoplayer/Videoplayer';
const App = () => {

  const [playState,setPlaystate]=useState(false);
  return (
    <div>
     
        <Navbar/>
        <Hero/>
      
        <Title subtitle='Our PROGRAM' title='what we offer'/>
        <div className='container'>
          <Program/> 
           <About  setPlaystate={setPlaystate}/>
           <Title subtitle='Gallery' title='Campos Photos'/>
            <Campus/>
            <Title subtitle='TESIMONIALS' title='what stidents says'/>
            <Testimonials/>
            <Title subtitle='CONTACT Us' title='Get in touch'/>
             <Contact/>
             <Fotter/>
         </div>
        
        <Videoplayer playState={playState} setplaystate={setPlaystate}/>
    </div>
  )
}
export default App;
