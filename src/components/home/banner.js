import React,{Component} from 'react';
import $ from '../../common.js';
import bg from '../../images/home-bg.jpg';
import Header from '../header/index.js'
import {Icon} from 'antd'
import github from '../../images/github.png';
import qq from '../../images/QQ.png';
import timg from '../../images/timg.png';
import wechat from '../../images/wechatIcon.png';
import wechatCode from '../../images/wecode.png';
import qqcode from '../../images/qrcode.jpg';
export default class HomeBanner extends Component{
    componentDidMount(){
        let moveX=null,moveY=null;
        const $bg=$(this.refs.bg);
        const $banner=$(this.refs.banner);
        const $content=$(this.refs.content)
        const top=$content.position().top;
        const bannerH=$banner.height();
        const contentH=$content.height();
        $bg.fitBgImg();
        $banner.hover(function(){
            $bg.css({transform: "matrix(1.05, 0, 0, 1.05, 0, 0)"});
        },function(){
            $bg.css({transform: "matrix(1, 0, 0, 1, 0, 0)"});
        });
        $banner.mousemove(function(ev){
                const e=ev||event;
                if(!moveX&&moveY){
                    moveX=e.pageX;
                    moveY=e.pageY;

                };
            const spaceX=(e.pageX-moveX)/50;
            const spaceY=(e.pageY-moveX)/50;
            $bg.css({transform: `matrix(1.05, 0, 0, 1.05, ${spaceX}, ${spaceY})`});
            });
        $(window).scroll(function(){
            const scrollTop=$(this).scrollTop();
            if(scrollTop/2+top+contentH<=bannerH-20){
                setTimeout(function(){
                    $content.css({top:scrollTop/2+top})
                },1)
            }
        })
    }
    render(){
        return(
            <div className="home-banner" ref="banner">
                <Header></Header>
                <div className="home-banner-content"  ref="content">
                    <div className="banner-content">
                        <div className="banner-link-container">
                            <div className="btn">
                                <a target="_blank"  href="https://github.com/vveyZhang" className="icon"><img src= {github} alt=""/></a>
                            </div>
                            <div className="btn">
                                <a target="_blank" href="https://git.oschina.net/helloxwz" className="icon"><img src={timg} alt=""/></a>
                            </div>
                            <div className="btn">
                                <div className="code">
                                    <img src={wechatCode} alt=""/>
                                </div>
                                <a href="javascript:void(0)" className="icon"><img src={wechat} alt=""/></a>
                            </div>
                            <div className="btn">
                                <div className="code">
                                    <img src={qqcode} alt=""/>
                                </div>
                                <a href="javascript:void(0)" className="icon"><img src={qq} alt=""/></a>
                            </div>
                        </div>
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
                </div>
                <div ref="bg" id="homeBg" className="home-bg">
                </div>
            </div>
        )
    }
}