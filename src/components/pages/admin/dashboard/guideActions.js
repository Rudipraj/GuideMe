import React, {useEffect, useRef} from 'react';
import {Button, Checkbox, Col, Form, message, Row, Upload} from "antd";
import firebase from "firebase";
import {LoadingOutlined,PlusOutlined} from "@ant-design/icons"
import {randomIdGenerator} from "../../../../config";

const GuideActions = ({addedGuide,guide}) => {
    const [imageUrl, setImageUrl] = React.useState('');
    const [finalUrl, setFinalUrl] = React.useState('');
    const [loadingImage, setLoading] = React.useState(false);
    const [guideValues, setGuideValues] = React.useState(guide ? {...guide} : {})
    const inputRef = useRef({});
    useEffect(() => {
        inputRef.current['fName'].focus()

    }, []);



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
        handleUpload()
    };
    const handleUpload = e => {
        let storage=firebase.storage()
        setLoading(true);
        console.log("uploading...");

        storage
            .ref("images/" + imageUrl.name)
            .put(imageUrl)
            .then(snapshot => {
                return snapshot.ref.getDownloadURL();
            })
            .then(url => {
                setFinalUrl(url);
                setLoading(false);
            })
            .catch(error => {
                console.log(error);
            });
    };
    const handleAddGuide = (e) => {
        let randomId=randomIdGenerator();
        let database = firebase.firestore();
        database.collection("guides").doc(randomId).set({
            fName: inputRef.current['fName'].value,
            lName: inputRef.current['lName'].value,
            email: inputRef.current['email'].value,
            phone: inputRef.current['phoneNo'].value,
            twitter: inputRef.current['twitter'].value,
            facebook: inputRef.current['facebook'].value,
            featured: inputRef.current['isFeatured'].state.checked,
            createdDate: Date.now(),
            description: inputRef.current['description'].value,
            id: randomId,
            avatar: finalUrl,
        })
            .then((res) => {
                document.getElementById('add-user').reset();
                addedGuide(res)
                console.log(res);
            })
            .catch((error) => {
                console.log(error);

                console.error(error);
            });
        // addUser(inputRef.current['name'].value,inputRef.current['job'].value).then(r=>addedUser(r))
    }
    const uploadButton = (
        <div>
            {loadingImage ? <LoadingOutlined /> : <PlusOutlined />}
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );
    return (
        <Form id={"add-user"} onSubmit={(e) => handleAddGuide(e)}>
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
                        {finalUrl ? <img loading="lazy" src={finalUrl} alt="avatar" style={{width: '100%'}}/> : uploadButton}
                    </Upload>
                </Col>
                <Col span={12}>
                    <input className="input-user" placeholder="first name" ref={el => inputRef.current['fName'] = el}/>

                </Col>
                <Col span={12}>
                    <input className="input-user" placeholder="last name" ref={el => inputRef.current['lName'] = el}/>

                </Col>
                <Col span={12}>
                    <input className="input-user" placeholder="email" ref={el => inputRef.current['email'] = el}/>

                </Col>
                <Col span={12}>

                    <input className="input-user" placeholder="phone" ref={el => inputRef.current['phoneNo'] = el}/>

                </Col>
                <Col span={12}>
                    <input className="input-user" placeholder="Facebook link" ref={el => inputRef.current['facebook'] = el}/>

                </Col>
                <Col span={12}>
                    <input className="input-user" placeholder="twitter link" ref={el => inputRef.current['twitter'] = el}/>
                </Col>
                <Col span={12}>
                    <input className="input-user" placeholder="twitter link" ref={el => inputRef.current['twitter'] = el}/>
                </Col>
                <Col span={12}>
                    <Checkbox placeholder="featured" className="input-user" ref={el => inputRef.current['isFeatured'] = el}>Featured guide</Checkbox>
                </Col>
                <Col span={12}>
                    <textarea placeholder="description" className="input-user"
                              ref={el => inputRef.current['description'] = el}/>
                </Col>


            </Row>
            <Button onClick={(e) => handleAddGuide(e)}>Add Guide</Button>

        </Form>
    );
}

export default GuideActions;