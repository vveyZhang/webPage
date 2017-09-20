import React,{Component} from 'react';
import {WorkItem} from "./workItem.js"
export default class Working extends Component{
    render(){
        return(
            <div className="aboutMe-work animate">
                <div className="aboutMe-title"><p>工作经历</p></div>
                <div className="container">
                    <div className="aboutMe-work-content">
                        <div className="aboutMe-work-box">
                            <WorkItem></WorkItem>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
