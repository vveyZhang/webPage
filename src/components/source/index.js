import React,{Component} from 'react';
import SourceItem from './item.js'
import { Pagination } from 'antd';
import Footer from '../footer.js'
import './source.less'
export default class Source extends Component{
    render(){
        return(
            <div className="source-container">
                <img src="/images/article-list-banner.jpg" alt="" className="article-list-banner" />
                <div className="source-content-container container">
                    <div className="source-list clearfix">
                        <SourceItem content={"测试内容测试内容测试"} ></SourceItem>
                        <SourceItem content={"测试内容测试内容测试"} ></SourceItem>
                        <SourceItem content={"测试内容测试内容测试"} ></SourceItem>
                        <SourceItem content={"测试内容测试内容测试"} ></SourceItem>
                        <SourceItem content={"测试内容测试内容测试"} ></SourceItem>
                        <SourceItem content={"测试内容测试内容测试"} ></SourceItem>
                        <SourceItem content={"测试内容测试内容测试"} ></SourceItem>
                        <SourceItem content={"测试内容测试内容测试"} ></SourceItem>
                    </div>
                    <div className="custom-page">
                        <Pagination defaultCurrent={1} onChange={()=>this.goPage()} total={500} />
                    </div>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}
