import React from 'react';
import './Signup.css';
import GuideActions from "../admin/dashboard/guideActions";
import {database} from "../../../config";
import {Alert} from "antd";
import {LoadingOutlined} from "@ant-design/icons"
import AdminCard from "../admin/dashboard/adminCard";

class Signup extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            myProfile: {},
            isApproved: null,
            pending: null,
            isLogin: !!JSON.parse(localStorage.getItem('userData')) || false,
            userInfo: JSON.parse(localStorage.getItem('userData')) || {},
        }
    }

    componentDidMount() {
        if (this.state.isLogin) {
            this.getAllGuides()
        }
    }

    getAllGuides = () => {
        let guides = [];
        this.setState({loading: true})
        database.collection('guides').get().then((res) => {
            database.collection('guides').get().then((res) => {
                res.forEach(res => {
                    if (res.data().id === this.state.userInfo.id) {
                        this.setState({myProfile: res.data()})
                    }
                    if (res.data().approved && res.data().id === this.state.userInfo.id) {
                        this.setState({isApproved: true})
                    } else if (!res.data().approved && res.data().id === this.state.userInfo.id) {
                        this.setState({pending: true})
                    }
                })
                this.setState({loading: false})

            })
        })
    }

    render() {
        return (
            <>
                {this.state.loading ?
                    <div align="center">
                        <LoadingOutlined style={{fontSize: "5em"}}/>
                    </div>
                    : this.state.pending ?
                        <div className="signup-wrapper">
                            <Alert
                                message="Your verification is pending"
                                description="Please wait while admin approves your account. this might take some time"
                                type="info"
                                showIcon
                            />
                            <AdminCard fromAdmin={false} guide={this.state.myProfile}/>
                        </div> :
                        this.state.isApproved ?
                            <div className="signup-wrapper">
                                <Alert
                                    message="Your account is verified"
                                    description=""
                                    type="success"
                                    showIcon
                                />
                                <br/>
                                <AdminCard fromAdmin={false} guide={this.state.myProfile}/>
                            </div>

                            :
                            <div className="signup-wrapper">
                                <h2>Add yourself as a guide</h2>
                                <GuideActions fromUser={true}/>
                            </div>}
            </>
        )
    }
}

export default Signup;