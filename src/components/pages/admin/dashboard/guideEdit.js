import React from 'react';
import {Button, Checkbox, Col, Drawer, Form, message, Row, Upload} from "antd";
import {districts} from "../../../../config";
import firebase from "firebase";
import {LoadingOutlined, PlusOutlined} from "@ant-design/icons";
import GuideActions from "./guideActions";

function GuideEdit({guide, fromUser,onEdited}) {
    const [guideValues, setGuideValues] = React.useState(guide)
    const [loading, setLoading] = React.useState(false)
    const [imageUrl, setImageUrl] = React.useState('')

    function beforeUpload(file) {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('You can only upload JPG/PNG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('Image must smaller than 2MB!');
        }
        return isJpgOrPng && isLt2M;
    }

    const handleChange = info => {
        setImageUrl(info.file.originFileObj);
        handleUpload(info.file.originFileObj)
    };
    const handleUpload = (image) => {
        let storage = firebase.storage()
        setLoading(true);
        console.log("uploading...");
        storage
            .ref("images/" + image.name)
            .put(image)
            .then(snapshot => {
                return snapshot.ref.getDownloadURL();
            })
            .then(url => {
                guideValues.avatar = url;
                setGuideValues(guideValues);
                setLoading(false);
            })
            .catch(error => {
                console.log(error);
            });
    };
    const handleUpdateGuide = (item,id) => {
        let database = firebase.firestore();
        message.loading({content:"editing",key:id})
        database.collection("guides").doc(id).update(item)
            .then((res) => {
                onEdited()
                message.success({content:"edited",key:id})
            })
            .catch((error) => {
                message.error({content:"failed to edit!",key:id})
            });
    }
    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined/> : <PlusOutlined/>}
            <div style={{marginTop: 8}}>Upload</div>
        </div>
    );
    return (
        <div>
            <Form className="add-guide-form" id={"add-user"}
                  onSubmit={(e) => handleUpdateGuide( guideValues,guideValues.id)}>
                <Row gutter={[16, 16]}>
                    <Col align={"center"} span={24}>
                        <Upload
                            name="avatar"
                            listType="picture-card"
                            className="avatar-uploader"
                            showUploadList={false}
                            beforeUpload={beforeUpload}
                            onChange={handleChange}
                        >
                            {guideValues.avatar ? <img loading="lazy" src={guideValues.avatar} alt="avatar" style={{width: '100%'}}/> : uploadButton}
                        </Upload>
                    </Col>
                    <Col span={12}>
                        <Form.Item rules={[{required: true, message: 'Please choose a name'}]}>
                            <input onChange={(e) => {
                                guideValues.fName = e.target.value;
                                setGuideValues(prevState => ({
                                    ...prevState
                                }));
                            }} placeholder="first name" value={guideValues.fName}/>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            rules={[{required: true, message: 'Please choose a tag'}]}
                        >
                            <input onChange={(e) => {
                                guideValues.lName = e.target.value;
                                setGuideValues(prevState => ({
                                    ...prevState
                                }));
                            }} placeholder="last name" value={guideValues.lName}/>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <input onChange={(e) => {
                            guideValues.email = e.target.value;
                            setGuideValues(prevState => ({
                                ...prevState
                            }));
                        }} placeholder="email" value={guideValues.email}/>

                    </Col>
                    <Col span={12}>
                        <Form.Item
                            rules={[{required: true, message: 'Please choose a tag'}]}
                        >
                            <input onChange={(e) => {
                                guideValues.phone = e.target.value;
                                setGuideValues(prevState => ({
                                    ...prevState
                                }));
                            }} placeholder="phone" value={guideValues.phone}/>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            rules={[{required: true, message: 'Please choose a tag'}]}
                        >
                            <input onChange={(e) => {
                                guideValues.facebook = e.target.value;
                                setGuideValues(prevState => ({
                                    ...prevState
                                }));
                            }} placeholder="Facebook link" value={guideValues.facebook}/>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            rules={[{required: true, message: 'Please choose a tag'}]}
                        >
                            <input onChange={(e) => {
                                guideValues.twitter = e.target.value;
                                setGuideValues(prevState => ({
                                    ...prevState
                                }));
                            }} placeholder="twitter link" value={guideValues.twitter}/>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item

                            rules={[{required: true, message: 'Please choose a tag'}]}
                        >
                            <select onChange={(e) => {
                                guideValues.district = e.target.value;
                                setGuideValues(prevState => ({
                                    ...prevState
                                }));
                            }} value={guideValues.district} style={{width: "100%"}}>
                                {districts.map((district) =>
                                    <option value={district.Name}>{district.Name}</option>
                                )}
                            </select>
                        </Form.Item>
                    </Col>
                    {fromUser ? '' :
                        <div>
                            <Col span={12}>
                                <Checkbox onChange={(e) => {
                                    guideValues.featured = e.target.checked;
                                    setGuideValues(prevState => ({
                                        ...prevState
                                    }));
                                }} placeholder="featured" className="input-user" checked={guideValues.featured}>Featured
                                    guide</Checkbox>
                            </Col>
                        </div>}

                    <Col span={12}>
                        <textarea onChange={(e) => {
                            guideValues.description = e.target.value;
                            setGuideValues(prevState => ({
                                ...prevState
                            }));
                        }} placeholder="description" className="input-user" value={guideValues.description}/>
                    </Col>
                </Row>
                <Button onClick={(e) => handleUpdateGuide(guideValues,guideValues.id)}>{fromUser ? 'Submit' : 'Edit Guide'}</Button>

            </Form>
        </div>
    );
}

export default GuideEdit;