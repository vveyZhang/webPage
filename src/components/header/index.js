import React,{Component} from 'react';
import {Link} from 'react-router';
import { Button } from 'antd';
import $ from 'jquery'
export default class Header extends Component{
    render(){
        return(
            <div className="header" ref="header">

                <div className="container">
                    <ul className="header-nav">
                        <li><Link activeClassName="cur" to="/home">首页</Link></li>
                        <li><Link activeClassName="cur"  to="/article">前端</Link></li>
                        <li><Link activeClassName="cur"  to="/source">资源分享</Link></li>
                        <li><Link activeClassName="cur"  to="/me">关于我</Link></li>
                    </ul>
                    <div className="header-search">
                        <input type="text"/>
                        <Button  shape="circle" icon="search" />
                    </div>
                </div>
            </div>
        )
    }
}
