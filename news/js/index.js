$(function () {
    function resize(originSize,type) {
        type=type||"x";
        if(type=="x"){
            var widths=document.documentElement.clientWidth;
            var scale=widths/originSize*100+"px";
        }else if(type="y"){
            var heights=document.documentElement.clientHeight;
            var scale=heights/originSize*100+"px";

        }
        document.getElementsByTagName("html")[0].style.fontSize=scale;
    }
    resize(750)

            var widths=$(".banner img").width();
            var heights=$(".banner img").height();
            var les=$(".banner img").length;
            $(".wheel").mousedown(function(e){
                e.preventDefault();  //阻止浏览器的默认行为
            })
            $(".wheel").mousemove(function(e){
                e.preventDefault();
            })
            var marginLeft;
            var num=0;
            touch.on(".wheel","dragstart",".banner",function(e){
                $(".banner").css({
                    transition:"none",
                })
                marginL=parseInt($(".banner").css("marginLeft"))?parseInt($(".banner").css("marginLeft")):0;
            })
            touch.on(".wheel","drag",".banner",function(e){
                $(".banner").css({
                    transition:"none",
                    marginLeft:marginL+e.x
                })
            })
            touch.on(".wheel","dragend",".banner",function(e){
                    if(Math.abs(e.x)>200){
                        if(e.direction=="left"){
                            num++;
                            if(num==4){
                                num=3;
                            }
                        }else if(e.direction=="right"){
                            num--;
                            if(num==-1){
                                num=0;
                            }
                        }
                        $(".banner").css({
                            marginLeft:-num*widths,
                            transition:"margin 1s ease"
                        })

                    }else{
                        $(".banner").css({
                            marginLeft:-num*widths,
                            transition:"margin-left 1s ease"
                        })
                    }
            })

    var Widths=$(".index-list .index-box").width();
    var Heights=$(".index-list .index-box").height();
    var Les=$(".index-list .index-box").length;
    $(".index-list").mousedown(function(e){
        e.preventDefault();  //阻止浏览器的默认行为
    })
    $(".index-list").mousemove(function(e){
        e.preventDefault();
    })
    var marginLeft;
    var num1=0;
    touch.on(".index-list","dragstart",".scale",function(e){
        $(".scale").css({
            transition:"none",
        })
        marginL1=parseInt($(".scale").css("marginLeft"))?parseInt($(".scale").css("marginLeft")):0;
    })
    touch.on(".index-list","drag",".scale",function(e){
        $(".scale").css({
            transition:"none",
            marginLeft:marginL1+e.x
        })
    })
    touch.on("body","dragend",".scale",function(e){
        if(Math.abs(e.x)>200){
            if(e.direction=="left"){
                num1++;
                if(num1==4){
                    num1=3;
                }
            }else if(e.direction=="right"){
                num1--;
                if(num1==-1){
                    num1=0;
                }
            }
            $(".scale").css({
                marginLeft:-num1*Widths,
                transition:"margin 1s ease"
            })
            $(".aa").removeClass("bb")
            $(".aa").eq(num1).addClass("bb")


        }else{
            $(".scale").css({
                marginLeft:-num1*Widths,
                transition:"margin-left 1s ease"
            })
            $(".aa").removeClass("bb")
            $(".aa").eq(num1).addClass("bb")

        }
    })
    $(".select").click(function () {
    })

    $(".btn li").click(function () {
        var index=$(".btn li").index(this)
        $(".aa").removeClass("bb")
        $(".aa").eq(index).addClass("bb")

    })
})