import React,{Component} from 'react';
import './item.less';
function filter(content){
    const str=content.replace(/\s$/g,"");
    const html=[];
    for(let i=0;i<str.length;i++){
        const span=<span style={{"transition-delay":i*0.05 +"s"}} >{str[i]}</span>
        html.push(span)
    }
    return html;
}
export default class SourceItem extends Component{

    render(){
        const content=filter(this.props.content)
        return(
            <a href="" className="home-source-item">
                <img src="/images/4-3.png" alt=""/>
                <p>{content}</p>
            </a>
        )
    }
}
