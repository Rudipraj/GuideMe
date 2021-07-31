import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import "./GuideDetail.css"
import fp from '../images/fp.jpg'
import {database, randomIdGenerator} from "../../config";
import {useParams} from "react-router-dom";
import {Modal, notification, Spin} from "antd";
import Login from "../pages/signin/Login";
import firebase from "firebase";

function GuideDetail(props) {
    const {guideId} = useParams();
    const [guide, setGuide] = React.useState({})
    const [booked, setBooked] = React.useState(false)
    const [loading, setLoading] = React.useState(false)
    const [loginDialog, setLoginDialog] = React.useState(false)
    const [userInfo, setUser] = React.useState(JSON.parse(localStorage.getItem('userData')))
    const [login, setLogin] = React.useState(!!JSON.parse(localStorage.getItem('userData')))
    useEffect(() => {
        window.scrollTo(0, 0)
        getAllGuides()
    }, []);
    const getAllGuides = () => {
        let guides = [];
        setLoading(true)
        database.collection('guides').get().then((res) => {
            res.forEach(res => {
                if (res.data().id === guideId) {
                    setGuide(res.data())
                }
            })
            setLoading(false)
        })
    }


    return (
        <>
            {loading ?
                <div style={{minHeight:"100vh"}} align="center">
                    <Spin style={{marginTop:100}} size={"large"} spinning={true}/>
                </div> : <div className="guide-detail">
                    <div className="avatar-container">
                        <img draggable={false} src={guide.avatar} className="guide-avatar"/>
                        <div className="book-action">
                            <h1 className="avatar-name">{guide.fName + '  ' + guide.lName}</h1>
                            {booked ? '' : <button onClick={() => {
                                setBooked(true)
                                if (!login) {
                                    setLoginDialog(true)
                                } else {
                                    let randomId = randomIdGenerator();
                                    let database = firebase.firestore();
                                    database.collection("inquires").doc(randomId).set({
                                        id:randomId,
                                        fName:userInfo.name.split(' ')[0],
                                        lName:userInfo.name.split(' ')[1],
                                        email:userInfo.email,
                                        message:`I would like to book ${guide.fName+' '+guide.lName} with email address ${guide.email} and phone no: ${guide.phone}`
                                    })
                                        .then((res) => {
                                            notification.open({
                                                message: 'Booking request',
                                                description:
                                                    `Thank you for reaching out to us. We will check availability of ${guide.fName+' '+guide.lName} for your request. Your request will be addressed sooner.`,
                                                onClick: () => {
                                                },
                                            });
                                        })
                                        .catch((error) => {

                                        });

                                }
                            }} className="book-btn">Book</button>}
                        </div>

                    </div>
                    <div className="info-container">
                        <h1>Area : {guide.district}</h1>
                        <div className="guide-info">
                            Name: <p className="info-data">{guide.fName + '  ' + guide.lName} </p>
                            <br/>
                            Description:
                            <p className="guide-desc"><p className="info-data">{guide.description}</p></p>
                            <br/>
                            Phone: <p className="info-data">{guide.phone}</p>
                            <br/>
                            Email: <p className="info-data">{guide.email}</p>
                            <br/>

                            Address: <p className="info-data">{guide.district}</p>
                            <br/>
                            <div className="social-link">
                                <i onClick={() => {
                                    window.location.href = "https://" + guide.facebook
                                }} className="fab fa-facebook"/>
                                <i onClick={() => {
                                    window.location.href = "https://" + guide.twitter
                                }} class="fab fa-twitter"/>
                                <a class="fas fa-envelope" href={guide.email}/>

                            </div>

                        </div>

                    </div>
                    <Modal style={{padding: 0}} footer={null} onCancel={() => setLoginDialog(false)}
                           visible={loginDialog}>
                        <Login/>
                    </Modal>
                </div>}
        </>
    );
}

export default GuideDetail;