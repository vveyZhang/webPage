import React,{Component} from 'react';

export class AboutBg extends Component{
    
    const {url,top}=this.props;
    render(){
        return(
            <div className="aboutMe-bg" style={{"background-image":{url},"background-position": `50% ${top}` }} ref="bg">

            </div>
        )
    }
}
