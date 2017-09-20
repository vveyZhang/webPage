import React,{Component} from 'react';
import $ from 'jquery'
export default class AboutBg extends Component{
    componentDidMount(){
        const $bg= $('.aboutMe-bg');
        let cw=$(window).width();
        const h=1080,w=1920,ch=800;
        setBg();
        $(window).resize(function(){
            cw=$(window).width();
            setBg();
        })
        function setBg(){
            if(ch/cw>h/w){
                $bg.height(ch);
                $bg.width(ch/(h/w));
            }else{
                $bg.width(cw);
                $bg.height(cw*(h/w));

            }
            var newW=$bg.width();
            var newH=$bg.height();
            $bg.css({'left':-(newW-cw)/2,'top':-(newH-ch)/2});
        }
    }
    componentWillUnmount(){
        $(window).off();
    }
    render(){
        return(
            <div className="aboutMe-bg-container">
                <div className="aboutMe-bg-box" style={{top:0}}>
                    <div className="aboutMe-bg" style={{"backgroundImage":`url('/images/me1.jpg')`}}></div>
                </div>
                <div className="aboutMe-bg-box"  style={{top:"800px"}}>
                    <div className="aboutMe-bg" style={{"backgroundImage":`url('/images/me2.jpg')`}}></div>
                </div>
                <div className="aboutMe-bg-box" style={{top:"1600px"}}>
                    <div className="aboutMe-bg" style={{"backgroundImage":`url('/images/me3.jpg')`}}></div>
                </div>
            </div>
        )
    }
}
