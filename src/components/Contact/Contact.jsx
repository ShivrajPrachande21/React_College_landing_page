import React from 'react'
import './contact.css';
import mesgicon from '../../assets/msg-icon.png';
import mailicon from '../../assets/mail-icon.png';
import loctionicon from '../../assets/location-icon.png';
import phone from '../../assets/phone-icon.png';
import whitearrow from '../../assets/white-arrow.png';



const Contact = () => {


  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "221ae594-9f64-48c6-aadb-245354879186");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };





  return (
         <div className='contact'>
               <div className="contact-col">
                      <h3>Send us a Message <img src={mesgicon} alt="" /></h3>
                      <p>Lorem ipsum dolor sit amet, consectetur 
                        adipisicing elit. Quidem, debitis.</p>
                        <ul>
                          <li><img src={mailicon} alt="" />Contact@gmail.com </li>
                          <li><img src={phone} alt="" />+91-928276646 </li>
                          <li><img src={loctionicon} alt="" />323 , Keshavnagar mundhwa pune - 411036 </li>
                        </ul>
               </div>
               <div className="contact-col">
                    <form onSubmit={onSubmit}>
                        <label htmlFor="">Your name</label>
                        <input type="text"  name='name' placeholder='Enter your name' required/>
                        <label htmlFor="">Phone Number</label>
                        <input type="tel"  name='phone' placeholder='Enter your mobile number'/>
                        <label htmlFor="">Write your message</label>
                        <textarea name="message"  rows="6" placeholder='Enter your messaeg' required></textarea>
                        <button type='submit' className='btn dark-btn' >send <img src={whitearrow} alt="" /></button>
                    </form>
                    <span>
                          {result}
                    </span>
               </div>
        </div>
  )
}

export default Contact;