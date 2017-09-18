import React,{Component} from 'react';
import HomeBanner from './banner.js'
import './home.less';
import {Link} from 'react-router'
import {Icon} from 'antd'
import ArticleItem from '../article/item.js';
import SourecItem from '../source/item.js';
export default class Home extends Component{
    render(){
        return(<div className="blog-home">
            <HomeBanner></HomeBanner>
            <div className="container home-content">
                <div className="home-title">
                  <Link className="more">更多<Icon type="plus" /></Link>  爬坑 ———— You jump, I jump
                </div>
                <div className="home-list">
                    <ArticleItem></ArticleItem>
                    <ArticleItem></ArticleItem>
                    <ArticleItem></ArticleItem>
                </div>
                <div className="home-title">
                    <Link className="more">更多<Icon type="plus" /></Link> 资源分享
                </div>
                <div className="home-list">
                    <div className="home-list-source">
                        <SourecItem></SourecItem>
                        <SourecItem></SourecItem>
                        <SourecItem></SourecItem>
                        <SourecItem></SourecItem>
                        <SourecItem></SourecItem>
                        <SourecItem></SourecItem>
                        <SourecItem></SourecItem>
                    </div>

                </div>
            </div>

        </div>
        )
    }
}