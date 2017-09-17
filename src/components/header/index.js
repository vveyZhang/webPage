import React,{Component} from 'react';
import {Link} from 'react-router';
import { Button } from 'antd';
export default class Header extends Component{
    render(){
        return(
            <div className="header">
                <div className="container">
                    <ul className="header-nav">
                        <li><Link activeClassName="cur" to="/">Home</Link></li>
                        <li><Link activeClassName="cur"  to="/article">Article</Link></li>
                        <li><Link activeClassName="cur"  to="/article">Tool</Link></li>
                        <li><Link activeClassName="cur"  to="/about">About</Link></li>
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
