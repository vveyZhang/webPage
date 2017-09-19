import React,{Component} from 'react';
import HomeBanner from './banner.js'
import './home.less';
import {Link} from 'react-router'
import {Icon} from 'antd'
import ArticleItem from '../article/item.js';
import SourceItem from '../source/item.js';
import Footer from '../footer.js'
export default class Home extends Component{
    render(){
        return(<div className="blog-home">
            <HomeBanner></HomeBanner>
            <div className="container home-content">
                <div className="home-title">
                  <Link className="more">更多<Icon type="plus" /></Link>  爬坑 ———— You jump, I jump
                </div>
                <div className="home-list home-list-article">
                    <ArticleItem></ArticleItem>
                    <ArticleItem></ArticleItem>
                    <ArticleItem></ArticleItem>
                </div>
                <div className="home-title">
                    <Link className="more">更多<Icon type="plus" /></Link> 资源分享
                </div>
                <div className="home-list">
                    <div className="home-list-source">
                        <SourceItem content={"测试内容测试内容"} ></SourceItem>
                        <SourceItem content={"测试内容测试内容"} ></SourceItem>
                        <SourceItem content={"测试内容测试内容"} ></SourceItem>
                        <SourceItem content={"测试内容测试内容"} ></SourceItem>
                        <SourceItem content={"测试内容测试内容测试"} ></SourceItem>
                        <SourceItem content={"测试内容"} ></SourceItem>
                        <SourceItem content={"测试内容"} ></SourceItem>
                        <SourceItem content={"测试内容"} ></SourceItem>
                    </div>

                </div>
            </div>
            <Footer></Footer>
        </div>
        )
    }
}