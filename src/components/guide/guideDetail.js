import React from 'react';
import {Link } from 'react-router-dom';
import "./GuideDetail.css"
import fp from '../images/fp.jpg'

function GuideDetail(props) {
    return (
        <>
            <div className="guide-detail">
                <div className="avatar-container"> 
                    <img src={fp} className="guide-avatar" />
                    <div className="book-action" >
                        <h1 className="avatar-name">Sushmita Pradhan</h1>
                        <button className="book-btn">Book</button>

                    </div>
                    
                </div>
                <div className="info-container">
                    <h1>Area : Location</h1>
                    <div className="guide-info">
                        Name: <p className="info-data">Sushmita Pradhan </p>
                        <br/>
                        Discription:<p className="guide-desc"><p className="info-data">I am very good Guide.</p></p>
                        <br/>
                        Phone: <p className="info-data">9815322859</p>
                        <br/>
                        Email: <p className="info-data">Sushmita@gmail.com</p>
                        <br/>
                        
                        Address: <p className="info-data">Kathmandu Mitrapark,Chabahil</p>
                        <br/>
                        <div className="social-link">
                        <i className="fab fa-facebook-messenger" />
                        <i class="fab fa-twitter" />
                        <i class="fas fa-envelope" />

                        </div>
                        
                    </div>

                </div>
                
            </div>
        </>
    );
}

export default GuideDetail;