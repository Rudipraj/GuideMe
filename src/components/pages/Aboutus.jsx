import React from 'react';
import './Aboutus.css'
import {Link} from 'react-router-dom';
import {randomIdGenerator} from "../../config";
import firebase from "firebase";

class Aboutus extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state={
            inquires:{}
        }
    }
    componentDidMount() {
    }

    handleAddGuide = (e) => {
        e.preventDefault();
        let randomId = randomIdGenerator();
        let database = firebase.firestore();
        database.collection("inquires").doc(randomId).set({
            id:randomId,
            fName:this.state.inquires.fName,
            lName:this.state.inquires.lName,
            email:this.state.inquires.email,
            message:this.state.inquires.message
        })
            .then((res) => {
                console.log(res)
            })
            .catch((error) => {

            });

    }

    render() {
        let {inquires}=this.state;
        return (
            <>
                <div className="about-container">
                    <div className="img-container">

                    </div>
                    <div className="appeal-container">
                        <div className="appeal-content">
                            <p><span className="we-part">We GuideMe team</span> encourage all the travel enthusiast out
                                there to seek out for
                                never ending possibilities of Nature and its infinite splendor.Signup with Your genuine
                                documents
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
                            <form onSubmit={(e)=>this.handleAddGuide(e)}>
                                <div className="name-container">
                                    <div className="fn-container">
                                        <label>First Name:</label>
                                        <input value={inquires.fName} onChange={(e)=>{
                                            inquires.fName=e.target.value;
                                            this.setState({inquires:inquires})
                                        }} type="text" placeholder="FirstName"/>
                                    </div>
                                    <div className="ln-container">
                                        <label>Last Name:</label>
                                        <input value={inquires.lName} onChange={(e)=>{
                                            inquires.lName=e.target.value;
                                            this.setState({inquires:inquires})
                                        }} type="text" placeholder="Lastname"/>
                                    </div>

                                </div>

                                <div className="email-container">
                                    <label>Email</label>
                                    <input value={inquires.email} onChange={(e)=>{
                                        inquires.email=e.target.value;
                                        this.setState({inquires:inquires})
                                    }} type="email" placeholder="www.xyz@gmail.com"/>
                                </div>

                                <div className="message-container">
                                    <label>Message</label>
                                    <textarea value={inquires.message} onChange={(e)=>{
                                        inquires.message=e.target.value;
                                        this.setState({inquires:inquires})
                                    }} type="text" placeholder="Your Message Here"/>
                                </div>

                                <button type="submit">Inquiry</button>
                            </form>
                        </div>
                        <div className="contact-part">
                            <div className="contact-bc">

                            </div>
                            <div className="contact-info">
                                <h5><i className="fas fa-phone"/>
                                    +977 9815322859</h5>
                                <br/>
                                <h5><i className="fas fa-envelope"/> Guidemetoadventure@gmail.com</h5>
                                <br/>
                                <h5><i class="fas fa-building"/> Mitrapark, Chabahil, Kathmandu.</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Aboutus;