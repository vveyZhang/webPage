import $ from 'jquery'
(function($){
    let ch=0,cw=0,divW=0,divH=0;
    function setScreen(options){
        var  h=options&&options.h?options.h:0;
        ch=$(window).height()-h;
        cw=$(window).width();
        if(options&&options._this) {
            options._this.css({width:cw,height:ch});
            if(options._this.height()!=ch||options._this.width()!=cw) {
                divW = options._this.width();
                divH = options._this.height();
                return;
            }
        }
        divW=cw;
        divH=ch;
    };
    function setBgImg(options){
        var imgH=options.height||1080,
            imgW=options.width||1920;
        var img=options._this;
        if(divH==0||divW==0)setScreen()
        if(divH/divW>imgH/imgW){
            img.height(divH);
            img.width(divH/(imgH/imgW));
        }else{
            img.width(divW);
            img.height(divW*(imgH/imgW));

        }
        var newW=img.width();
        var newH=img.height();
        img.css({'left':-(newW-divW)/2,'top':-(newH-divH)/2});
    };
    $.fn.extend({
        fitMain:function(optioin){
          let  optioins=optioin||{};
            optioins._this=$(this);
            setScreen(optioins);
            $(window).resize(function(){
                setScreen(optioins);
            })
        },
        fitBgImg:function(option){
            const options=option||{};
            options._this=$(this);
            setBgImg(options);
            $(window).resize(function(){
                setBgImg(options);
            })
        }
    });
})($)
export default $;