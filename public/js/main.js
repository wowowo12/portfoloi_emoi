$(".h_order").click(function(){
    $(this).stop().animate({"bottom":"0"});
});
$("header").stop().click(function(){
    $(".h_order").animate({"bottom":"-255px"});
});
$(".lnb>li").hover(function(){
    $(this).children(".lnb_bt").slideToggle(200);
    $(this).find(".lnb_down").slideToggle(200);
});
$(".nav_bg").hover(function(){
    $(this).css({"background-color":"#fff"});
    $(".lnb>li>a").css({"color":"#000"});
    $(".gnb>li>a").css({"color":"#ad3536"});
    $(".logo").hide();
    $(".logo_on").show();
}, function(){
    $(this).css({"background-color":"#232a30"});
    $(".lnb>li>a").css({"color":"#fff"});
    $(".gnb>li>a").css({"color":"#ccc"});
    $(".logo").show();
    $(".logo_on").hide();
});



