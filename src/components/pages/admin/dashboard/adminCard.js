import React from 'react';
import {
    DribbbleOutlined,
    DeleteOutlined,
    FacebookOutlined,
    LinkedinOutlined,
    TwitterOutlined,
    EditOutlined
} from "@ant-design/icons";
import "./adminCard.css"
import firebase from "firebase";
import {Button, Drawer, message, Popconfirm, Tag} from "antd";
import GuideActions from "./guideActions";
import GuideEdit from "./guideEdit";
import {Link} from "react-router-dom";

function AdminCard({guide, onDelete, fromAdmin,guideEdited}) {
    const [editGuide, setEditGuide] = React.useState(false)
    const handleGuideDelete = (id) => {
        let database = firebase.firestore();
        message.loading({content:`Deleting ${guide.fName}...`,key:guide.id})
        database.collection("guides").doc(guide.id).delete()
            .then((res) => {
                message.info({content:`Guide ${guide.fName} deleted!!`,key:guide.id})
                onDelete();
            })
            .catch((error) => {
                message.error(error);
            });
    }
    const handleUpdateGuide = (id, item) => {
        let database = firebase.firestore();
        item.updatedAt = Date.now();
        item.approved = !item.approved;
        database.collection("guides").doc(id).update(item)
            .then((res) => {
                onDelete();
            })
            .catch((error) => {
            });
    }
    return (
        <div>
            <Link to={fromAdmin?'/dashboard':`/guides/${guide.id}`}>
                <div  className="card">
                    {fromAdmin ?
                        <div style={{position: "absolute", top: 20, left: 20}}>
                            {guide.approved ? <Tag color="green">Approved</Tag> :
                                <Tag color="orange">Pending approval</Tag>}
                        </div> : ''}
                    <img draggable={false} src={guide.avatar || 'https://www.w3schools.com/w3images/team2.jpg'} alt="John"
                         style={{width: "100%", height: 200}}/>
                    <h2>{guide.fName + ' ' + guide.lName}</h2>
                    <p className="title">{guide.phone || '-'}</p>
                    <p>{guide.description || '-'}</p>
                    <div style={{margin: "24px 0"}}>
                        <a target="_blank" className="link" href={guide.facebook}><DribbbleOutlined/></a>
                        <a target="_blank" className="link" href={guide.twitter}><TwitterOutlined/></a>
                        <a target="_blank" className="link" href={guide.facebook}><LinkedinOutlined/></a>
                        <a target="_blank" className="link" href={guide.facebook}><FacebookOutlined/></a>
                    </div>
                    {fromAdmin?'':<p>
                       <a className="adminCardButton" href={`tel:${guide.phone}`}>Contact</a>
                    </p>}

                    {fromAdmin ?
                        <div className="flex-between">
                            <div className="flex-between">
                                <Popconfirm title="Are you sure you want to delete this?" onConfirm={() => handleGuideDelete()}>
                                    <DeleteOutlined style={{fontSize:20}}/>
                                </Popconfirm>
                                <EditOutlined  style={{fontSize:20,marginLeft:"1em"}} onClick={() => setEditGuide(true)}/>
                            </div>

                            <Button
                                onClick={() => handleUpdateGuide(guide.id, guide)}>{guide.approved ? 'Revoke' : 'Approve'}</Button>
                        </div> : ''}
                </div>
            </Link>
            <Drawer
                title="Update guide"
                placement={window.innerWidth < 700 ? "bottom" : "right"}
                width={window.innerWidth > 700 ? "700px" : "100%"}
                height={window.innerWidth > 700 ? "100%" : "95%"}
                closable={true}
                onClose={() => setEditGuide(false)}
                visible={editGuide}
                key={"placement"}
            >
                {editGuide ?
                    <GuideEdit onEdited={()=>{
                        setEditGuide(false)
                        guideEdited()
                    }} guide={guide} editedGuide={(res) => {
                        message.success('guide edited')
                    }}/> : ''}
            </Drawer>
        </div>
    );
}

export default AdminCard;