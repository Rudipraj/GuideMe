import React from 'react';
import hero from './images/hero.jpg';
import './HeroSection.css';
import {Card, Dropdown, Empty} from "antd";
import Title from "antd/es/typography/Title";


class HeroSection extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state={
            searchedValue:[],
            searched:false
        }
    }
    handleGuideSearch=(e)=>
    {
        console.log('hello')
        this.setState({searched:true})
    }
    searchedCard = () => {
        let {searchedValue}=this.state;
        return (
            <div className="search-card-main">
                {searchedValue ? searchedValue.map((item, index) =>
                    <Card style={{padding: 0}} className="search-card-wrap">
                        <div style={{padding: 0}} className="search-cards">
                            <img src={item.img} className="logoImage"/>
                            <div>
                                <Title style={{color: "white"}} level={5} align="left" ellipsis={{rows: 3}}>
                                    {item.title}, {item.year}
                                </Title>
                            </div>
                        </div>

                    </Card>
                ) : <Card className="search-card-wrap"> <Empty description="no data found"/></Card>
                }

            </div>
        )
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
                            <Dropdown overlay={this.searchedCard()} visible={searched}>
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