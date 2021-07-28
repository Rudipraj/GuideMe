import React from 'react';
import {DribbbleOutlined, FacebookOutlined, LinkedinOutlined, TwitterOutlined} from "@ant-design/icons";
import "./adminCard.css"

function AdminCard({guide}) {
    return (
        <div>
            <div className="card">
                <img draggable={false} src={guide.avatar||'https://www.w3schools.com/w3images/team2.jpg'} alt="John" style={{width:"100%",height:200}}/>
                    <h2>{guide.fName+' '+guide.lName}</h2>
                    <p className="title">{guide.phone||'-'}</p>
                    <p>{guide.description||'-'}</p>
                    <div style={{margin: "24px 0"}}>
                        <a target="_blank" className="link" href={guide.facebook}><DribbbleOutlined/></a>
                        <a target="_blank" className="link" href={guide.twitter}><TwitterOutlined/></a>
                        <a target="_blank" className="link" href={guide.facebook}><LinkedinOutlined/></a>
                        <a target="_blank" className="link" href={guide.facebook}><FacebookOutlined/></a>
                    </div>
                    <p>
                        <button className="adminCardButton">Contact</button>
                    </p>
            </div>
        </div>
    );
}

export default AdminCard;