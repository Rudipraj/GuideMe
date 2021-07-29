import React from "react";
import Search from "../Search";
import HeroSection from '../HeroSection'
import Wwo from "./Wwo";
import Topdestination from './Topdestination';
import {database} from "../../config";
import AdminCard from "./admin/dashboard/adminCard";
import {Divider, Skeleton} from "antd";

class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state={
            guidesList:[]
        }
    }

    componentDidMount() {
        this.getAllGuides();
    }
    getAllGuides = () => {
        let guides = [];
        this.setState({loading: true})
        database.collection('guides').get().then((res) => {
            res.forEach(res => {
                guides.push(res.data())
            })
            this.setState({loading: false, guidesList: guides})
        })
    }
    render() {
        let {guidesList}=this.state;
        return (
            <div>
                <HeroSection/>
                <Wwo/>
                <Divider/>
                <div style={{maxWidth:1200,margin:"100px auto"}}>
                    <h2 style={{marginLeft:10}}>Featured Guides</h2>
                    <div className="guides-wrap">
                        {guidesList.filter(guide=>guide.featured).map((guide) => this.state.loading?<Skeleton avatar paragraph={{ rows: 4 }} />:<AdminCard guide={guide}/>)}
                    </div>
                </div>

            </div>
        );
    }
}

export default Home;
