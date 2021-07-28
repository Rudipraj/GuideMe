import React from 'react';
import './Wwo.css';

const Wwo = () =>{
    return(
        <>
        <div className="container">
            <div className="icons">
                <div className="guide">
                <i className="fa fa-user fa-5x" aria-hidden="true"></i>
                
                <h4>Hand picked Guides</h4>
                </div>

                <div className="customer">
                <i class="fa fa-cogs fa-5x" aria-hidden="true"></i>
                <h4>24/7 Customer Support</h4>
                </div>

                <div className="cancel">
                <i class="fa fa-reply fa-5x" aria-hidden="true"></i>
                <h4>Flexible Cancellation</h4>
                </div>
            </div>
        </div>
        </>
        )
}
export default Wwo;