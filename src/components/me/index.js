import React,{Component} from 'react';
import "./index.less"
import {Basic} from './basic.js';
import AboutBg  from './bg.js';
import Introduce from './introduce.js'
import Working from './work.js'
export default class AboutMe extends Component{

    render(){
        return(
            <div className="aboutMe-container">
                <div className="container">
                    <Basic></Basic>
                </div>
                <AboutBg></AboutBg>
                <div className="aboutMe-content">
                    <Introduce></Introduce>
                    <Working></Working>
                </div>
            </div>
        )
    }
}
