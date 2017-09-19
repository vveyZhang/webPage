import React,{Component} from 'react';
import Header from '../header'
import ArticleList from './articleList.js'
import Footer from '../footer.js'
export default class Article extends Component{
    render(){
        return(
            <div className="article-container">
                {this.children||<ArticleList /> }
                <Footer></Footer>
            </div>
        )
    }
}