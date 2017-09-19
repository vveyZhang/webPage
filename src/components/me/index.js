import React,{Component} from 'react';
import "./index.less"
import {Basic} from './basic.js';
export default class AboutMe extends Component{
    render(){
        return(
            <div className="aboutMe-container">
                <div className="container">
                    <Basic></Basic>
                </div>
            </div>
        )
    }
}
