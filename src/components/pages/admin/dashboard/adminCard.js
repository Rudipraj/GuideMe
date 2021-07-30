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

function AdminCard({guide, onDelete, fromAdmin}) {
    const [editGuide, setEditGuide] = React.useState(false)
    const handleGuideDelete = (id) => {
        let database = firebase.firestore();
        database.collection("guides").doc(guide.id).delete()
            .then((res) => {
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
            <div className="card">
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
                <p>
                    <button className="adminCardButton">Contact</button>
                </p>

                {fromAdmin ?
                    <div className="flex-between">
                        <div className="flex-between">
                            <Popconfirm title="Are you sure you want to delete this?" onOk={() => handleGuideDelete()}>
                                <DeleteOutlined style={{fontSize:20}}/>
                            </Popconfirm>
                            <EditOutlined  style={{fontSize:20,marginLeft:"1em"}} onClick={() => setEditGuide(true)}/>
                        </div>

                        <Button
                            onClick={() => handleUpdateGuide(guide.id, guide)}>{guide.approved ? 'Revoke' : 'Approve'}</Button>
                    </div> : ''}
            </div>
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
                    <GuideEdit guide={guide} editedGuide={(res) => {
                        message.success('guide edited')
                    }}/> : ''}
            </Drawer>
        </div>
    );
}

export default AdminCard;