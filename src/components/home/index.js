import React,{Component} from 'react';
import HomeBanner from './banner.js'
import './home.less'
import ArticleItem from '../article/item.js';
export default class Home extends Component{
    render(){
        return(<div className="blog-home">
            <HomeBanner></HomeBanner>
            <div className="container home-content">
                <div className="home-title">
                    爬坑 ———— You jump, I jump
                </div>
                <div className="home-list">
                    <ArticleItem></ArticleItem>
                </div>
            </div>

        </div>
        )
    }
}