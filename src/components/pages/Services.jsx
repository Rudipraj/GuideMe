import React from 'react';
import './Services.css'

const Services = () => {
    return(
        <>
        <div className="services-container">
            <h1>What We Offer?</h1>
            <div className="content">
                <div className="content-1"></div>
                <div className="content-2">
                    <h4>Certified and Local guides within Nepal...</h4>
                    <ul>
                        <li>
                            <p>We are working on a Project to provide best deals
                                for certified Guides and Tourists as well to uplift the 
                                    spirit of Tourism around Nepal</p>
                        </li>
                    </ul>
                </div>
                </div>

            <h1>Who can Join us?</h1>
            <div className="whocan-container">
                <div className="user-background" data-aos="fade-down-right"></div>
                <div className="criteria">
                    <h4>Are You Eligible to Guide Our Tourists?</h4>
                    <ul>
                        <li><p>You must have clean police records.</p></li>
                        <br />
                        <li><p>You must be Nepali Citizen.</p></li>
                        <br />
                        <li><p>You must have comprehensive knowledge about your preferred Guiding Area.</p></li>
                        <br />
                        <li><p>Any Guides working with us must follow GuideMe Terms and Conditions.</p></li>
                        <br />
                        <li><p>Must be Fluent in English Language.</p></li>
                    </ul>
                </div>
            
            </div>


        </div>
        </>
    )
}
export default Services;