import React from 'react';
import './Aboutus.css'
import {Link} from 'react-router-dom';

const Aboutus = () =>{
    return(
        <>
        <div className="about-container">
            <div className="img-container">
            
            </div>
            <div className="appeal-container">
                <div className="appeal-content">
                <p><span className="we-part">We GuideMe team</span> encourage all the travel enthusiast out there to seek out for
                never ending possibilities of Nature and its infinite splendor.Signup with Your genuine documents 
                to register as a guide and earn as per your will.   
                </p>
                <Link to="/sign-in">
                <button type="button">
                Register
                </button>
                </Link>
                </div>
            </div>
        </div>
        <div className="abt-container">
        <h1>Reach Out our Team</h1>
        <div className="abt-2">
            <div className="f-container">
                <form>
                <div className="name-container">
                    <div className="fn-container">
                        <label>First Name:</label>
                        <input type="text" placeholder="FirstName" />
                    </div>
                    <div className="ln-container">
                        <label>Last Name:</label>
                        <input type="text" placeholder="Lastname" />
                    </div>
                
                </div>

                <div className="email-container">
                <label>Email</label>
                <input type="email" placeholder="www.xyz@gmail.com"></input>
                </div>

                <div className="message-container">
                <label>Message</label>
                <textarea type="text" placeholder="Your Message Here" />
                </div>

                <button>Inquiry</button>
                </form>
            </div>
            <div className="contact-part">
                <div className="contact-bc">
            
                </div>
                <div className="contact-info">
                <h5><i className="fas fa-phone" />
                +977 9815322859</h5>
                <br />
                <h5><i className="fas fa-envelope" /> Guidemetoadventure@gmail.com</h5>
                <br />
                <h5><i class="fas fa-building" /> Mitrapark, Chabahil, Kathmandu.</h5>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}
export default Aboutus;