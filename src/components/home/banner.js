import React,{Component} from 'react';
import $ from '../../common.js';
import bg from '../../images/home-bg.jpg';
import Header from '../header/index.js'
export default class HomeBanner extends Component{
    componentDidMount(){
        let moveX=null,moveY=null;
        const $bg=$(this.refs.bg);
        $bg.fitBgImg();
        $bg.hover(function(){
            $(this).css({transform: "matrix(1.05, 0, 0, 1.05, 0, 0)"});
        },function(){
            $(this).css({transform: "matrix(1, 0, 0, 1, 0, 0)"});
        })
        $bg.mousemove(function(ev){
                const e=ev||event;
                if(!moveX&&moveY){
                    moveX=e.pageX;
                    moveY=e.pageY;

                };
            const spaceX=(e.pageX-moveX)/50;
            const spaceY=(e.pageY-moveX)/50;
            $(this).css({transform: `matrix(1.05, 0, 0, 1.05, ${spaceX}, ${spaceY})`});
            });
        $(this.refs.welcome).mouseenter(function(ev){
           const e=ev||event;
            if(e.stopPropagation){
                e.stopPropagation()
            }else{
                e.cancelBubble=true;
            }
        });
    }
    render(){
        return(
            <div className="home-banner" ref="banner">
                <Header></Header>
                <div className="home-banner-content">
                    <div className="banner-welcome animate" ref="welcome">
                        <span>W</span>
                        <span>e</span>
                        <span>l</span>
                        <span>c</span>
                        <span>o</span>
                        <span>m</span>
                        <span className="over">e</span>
                        <span>T</span>
                        <span className="over">o</span>
                        <span>V</span>
                        <span>v</span>
                        <span>e</span>
                        <span>y</span>
                        <span>'</span>
                        <span className="over">s</span>

                        <span>B</span>
                        <span>l</span>
                        <span>o</span>
                        <span>g</span>
                    </div>
                </div>
                <div ref="bg" id="homeBg" className="home-bg">
                </div>
            </div>
        )
    }
}