import React,{Component} from 'react';
import './basic.less'
export class Basic extends Component{
    render(){
        return(
            <div className="me-basic clearfix animate">
                <div className="pic">
                    <img src="/images/4-3.png" width="175" height="175" alt=""/>
                </div>
                <div className="me">
                    <p className="name">张<span></span>伟</p>
                    <p className="passionate">web 前端工程师</p>
                </div>
                <div className="infor">
                    <p><b>Sports：</b>足球、羽毛球</p>
                    <p><b>Game：</b>lol、Playerunknown's Battlegrounds</p>
                    <p><b>Email：</b>helloxwz@qq.com</p>
                    <p><b>QQ：</b>759625328</p>
                </div>
            </div>
        )
    }
}
