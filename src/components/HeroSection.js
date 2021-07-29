import React from 'react';
import hero from './images/hero.jpg';
import './HeroSection.css';
import {Card, Dropdown, Empty,Typography} from "antd";
import {database} from "../config";
 const {Title}=Typography;

class HeroSection extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state={
            searchedValue:[],
            guidesList:[],
            searched:false
        }
    }
    componentDidMount() {
        this.getAllGuides()
    }

    handleGuideSearch=(e)=>
    {
        let value=e.target.value;
        if(value.length===0)
        {
            this.setState({searchedValue:[],searched:false})
        }
        if(e.target.value.length>3)
        {
            let searchValues=[];
            this.setState({searched:true})
            this.state.guidesList.forEach((guide)=>
            {
                /*country.name.toUpperCase().includes(this.state.searchKey.toUpperCase())*/
                if(guide.district.toUpperCase().includes(value.toUpperCase()) || guide.fName.toUpperCase().includes(value.toUpperCase()) )
                {
                    searchValues.push(guide)
                }
            })
            this.setState({searchedValue:searchValues})
        }
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
        let {searchedValue,searched}=this.state;
        return (

            <div className="hero-container">

                <div className="hero-wrapper">
                    <h1><span className="s-pan">Ad</span>venture Calls?</h1>
                    <p>Find the best Tourist Guides around...</p>
                    <div className="search-bar">
                        <div className="search-input">
                            <Dropdown overlay={<div className="search-card-main">
                                {searchedValue.length>0? searchedValue.map((item, index) =>
                                    <Card style={{padding: 0}} className="search-card-wrap">
                                        <div style={{padding: 0}} className="search-cards flex-between">
                                            <img width="50" height="50" src={item.avatar} className="logoImage"/>
                                            <div>
                                                <Title style={{color: "#000"}} level={5} align="left" ellipsis={{rows: 3}}>
                                                    {item.fName+' '+item.lName}, {item.phone}
                                                </Title>
                                            </div>
                                        </div>

                                    </Card>
                                ) : <Card className="search-card-wrap"> <Empty description="no data found"/></Card>
                                }

                            </div>} visible={searched}>
                                 <input onChange={(e) => this.handleGuideSearch(e)} className="search-input" type="text" name="search" placeholder="Location eg. Pokhara"/>
                            </Dropdown>
                        </div>
                        <div className="search-btn">
                            <button>Search</button>
                        </div>


                    </div>
                </div>


            </div>


        )
    }
}

export default HeroSection;