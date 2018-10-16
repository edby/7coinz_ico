
//固定导航样式
$(window).scroll(function(){
    //scrollTop是浏览器滚动条的top位置，
    var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
    if( scrollTop >= 260){
        $('.header').css('background','rgba(4,4,4,0.85)');
    }else {
        $('.header').css('background','');
    }
})
$(function(){
    $('.phone-header .leftbtn>a').click(function () {
        var src=$(this).children('img').attr('src');
        if(src.substr(src.length-5,5)==='n.png'){
            $(this).children('img').css("height","22");
            $('.phone-header .listphon').slideDown(200);
            src=$(this).children('img').attr('src').replace('left-btn.png','left-btn2.png');
        }else {
            $(this).children('img').css("height","17");
            $('.phone-header .listphon').slideUp(200);
            src=$(this).children('img').attr('src').replace('left-btn2.png','left-btn.png');
        }
        $(this).children('img').attr('src',src);
    })
    $('.listphon li').click(function () {
        $(this).addClass('activer').siblings().removeClass('activer');
    });
    //移动端二级动画开始
    $(".phone-header .listphon .down_1").click(function(){
        if($(this).siblings().css("display") == "none"){
            $(this).siblings().slideDown();
            $(this).addClass("animate");
        }else{
            $(this).siblings().slideUp();
            $(this).removeClass("animate");
        }
    });
    // nav
    $(".wrapper-header .header-con .head-nav li.item").click(function(){
        $('.wrapper-header .header-con .head-nav li.item').removeClass("active");
        $(this).addClass("active");
    })
    $(".page-four .container .items").mouseover(function(){
        $(this).addClass("service-item-shadow");
    }).mouseout(function(){
        $(this).removeClass("service-item-shadow");
    })
    // page-three
    $(".page-three .container ul li img").mouseover(function(){
        $(this).css("animation",'none');
        // $(this).toggleClass("active");
    }).mouseout(function(){
        $(this).css("animation",'pageThree 2s infinite alternate');
    })
    // 监测滚动添加动画
    $(window).scroll(function(){
        //为页面添加页面滚动监听事件
        var wst =  $(window).scrollTop() //滚动条距离顶端值

        for(var i = 1; i <= 11; i++) {
            if($("#map"+i).offset().top <= wst + 400 && wst>=1000) {
                for(var j = 1; j <= 11; j++) {
                    $("#map"+j).removeClass("map_active");
                }
                $("#map"+i).addClass("map_active")
            }else{
                $("#map"+i).removeClass("map_active")
            }
        }
        for (var i=2; i<=4; i++){
            if($("#page"+i).offset().top<=wst && wst>=500){ //判断滚动条位置
                $('.wrapper-header .header-con .head-nav li.item').removeClass("active");
                $("#page"+i+i).addClass("active");
            }
            if(wst<=500) {
                $('.wrapper-header .header-con .head-nav li.item').removeClass("active");
            }
        }
        if( wst >= $("#page4").offset().top-300){
            $(".page-seven .page-seve-content").addClass("pageOn");
        }
        if( wst > $(".page-eight").offset().top+100 || wst < $("#page4").offset().top-200){
            $(".page-seven .page-seve-content").removeClass("pageOn");
        }
        // skyScale
        if( wst >= $(".page-six").offset().top-500){
            $(".page-six .six-bg").addClass("skyScale");
        }
        if( wst > $(".page-seven").offset().top+100 || wst < $(".page-six").offset().top-500){
            $(".page-six .six-bg").removeClass("skyScale");
        }
        // earth
        if( wst >= $(".page-three").offset().top-500 ){
            $(".page-three .three-bg").addClass("threeEarth");
        }
        if( wst > $(".page-four").offset().top+100 || wst < $(".page-three").offset().top-500){
            $(".page-three .three-bg").removeClass("threeEarth");
        }
    })
})

$(window).scroll(function(){
    $(".wrapper-header").css({'background':'rgba(35,50,77,0.8)'});
    var s=$(window).scrollTop();
    if(s < 40){
        $(".wrapper-header").css('background','');
    }
})
$('#btn').click(function(){
    window.sharetitle = $(this).attr('data-url');
    window.shareUrl = $(this).siblings('img').attr('src');
    share();
});
function share() {
    //d指的是window
    (function(s, d, e) {
        try {} catch (e) {}
        var f = 'http://v.t.sina.com.cn/share/share.php?',
            u = d.location.href,
            p = ['url=', e(u), '&title=', e(window.sharetitle), '&appkey=2924220432', '&pic=', e(window.shareUrl)].join('');

        function a() {
            if (!window.open([f, p].join(''), 'mb', ['toolbar=0,status=0,resizable=1,width=620,height=450,left=', (s.width - 620) / 2, ',top=', (s.height - 450) / 2].join(''))) u.href = [f, p].join('');
        };
        if (/Firefox/.test(navigator.userAgent)) {
            setTimeout(a, 0)
        } else {
            a()
        }
    })(screen, document, encodeURIComponent);
}

//倒计时
$(document).ready(function() {
    var data = new Date()
    var time = Math.abs(data.getTimezoneOffset())/60
    $(".ft_counter").EightycloudsFliptimer({
        enddate    : "December 20  2017 24:00:00 "+time,   //27 December 2017 24:00:00 GMT
        callback   : function(){
            alert("Countdown is Complete!");
        }
    });
    $("#count").countdown({
        //to change lunch date just replace the current date with yours .
        date: "December 20, 2017 24:00",
        //html code in count div here.
        htmlTemplate: "<div id='days-count' class='numbers'>%{d}<span class='days-label'>days</span></div> <div id='hours-count' class='numbers'>%{h}<span class='hours-label'>hours</span></div><div id='min-count' class='numbers'>%{m}<span class='min-label'>min</span></div><div id='sec-count' class='numbers'>%{s}<span class='sec-label'>sec</span></div>"
    });
});
