import React,{Component} from 'react';
import './list.less';
import ArticleItem from './item.js'
import { Pagination } from 'antd';
import $ from 'jquery'
let top=0;
function scrollToTop(){
    $('html,body').animate({
        scrollTop:top
    })
}
export default class ArticleList extends Component{
    goPage(){
        scrollToTop();
    }
    componentDidMount(){
        top=$('.article-list-banner').height()-60;
    }
    render(){
        return(
            <div className="article-list">
                <img src="/images/source-banner.jpg" alt="" className="article-list-banner" />
                <div className="article-list-container">
                    <div className="container">
                        <div className="lf list-container">
                            <ArticleItem></ArticleItem>
                            <ArticleItem></ArticleItem>
                            <ArticleItem></ArticleItem>
                            <ArticleItem></ArticleItem>
                            <ArticleItem></ArticleItem>
                            <ArticleItem></ArticleItem>
                            <ArticleItem></ArticleItem>
                            <ArticleItem></ArticleItem>
                        </div>
                        <div className="rt recommend-container">
                            <div className="title">推荐资源</div>
                            <ul>
                                <li><a href="">推荐，推荐，推荐</a></li>
                            </ul>
                        </div>
                        <div className="clearfix"></div>
                        <div className="custom-page">
                            <Pagination defaultCurrent={1} onChange={()=>this.goPage()} total={500} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
