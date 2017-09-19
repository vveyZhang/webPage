import "./item.less"
import React,{Component} from 'react';
import { Tag,Icon } from 'antd';
export default class ArticleItem extends Component{
    render(){
        return(
            <div className="article-item">
                <div className="pic">
                    <a href="">
                        <img src="/images/4-3.png" width="240" height="180" alt=""/>
                    </a>
                </div>
                <div className="infor">
                    <h1 className="title"><a href="">webpack+React热替换爬过的坑</a></h1>
                    <div className="type"><Tag color="#f50">React</Tag></div>
                    <p className="content">由于公司项目的性质平时接触移动端的项目不多，大概一年三、四个吧，刚接触移动端时自己在网上查了一些资料按照自己理解和经验开始制作，因为公司这边对移动端要求不高，很多东西都是得过且过，最近有一个移动端的项目，刚好在这里分享总结下写法，移动端我使用过两总方式。....</p>
                    <div className="other"><Icon type="eye-o" /> 109  <span></span><Icon type="clock-circle-o" /> 2017-19-2</div>
                </div>
            </div>
        )
    }
}
