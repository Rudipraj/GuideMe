import React from 'react';
import './Topdestination.css'
import {districts} from "../../config";
import {Card} from "antd";

class TopDestination extends React.Component {
    constructor(props, context) {
        super(props, context);

    }

    render() {
        return (
            <div className="dcontainer">
                <h1>Top destinations</h1>
                {districts.map((district)=>
                    <Card>
                        <div>{district.Name}</div>
                        <div>{district.Headquarters}</div>
                        <div>{district.population}</div>
                        <div>{district.area}km2</div>
                    </Card>
                )}
            </div>
        )
    }
}

export default TopDestination;