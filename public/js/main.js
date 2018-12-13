$(".h_order").click(function(){
    if($(window).width()>960) $(this).stop().animate({"bottom":"0"});
});
$("header").stop().click(function(){
    if($(window).width()>960) $(".h_order").animate({"bottom":"-255px"});
});
$(".lnb>li").hover(function(){
    $(this).children(".lnb_bt").stop().slideToggle(200);
    $(this).find(".lnb_down").stop().slideToggle(200);
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
    if($(window).width()<961) {
         $(this).css({"background-color":"transparent"});
         $(".gnb>li>a").css({"color":"#fff"});}
});

$(".ab_img").hover(function(){
    $(this).children(".img_ab").fadeOut();
    $(this).children(".ab_img_t").show();
},function(){
    $(this).children(".img_ab").fadeIn();
    $(this).children(".ab_img_t").hide();
});

$("#bar").click(function(){
    $(".lnb").slideToggle();
    $(".lnb").mouseleave(function(){
        $(this).hide();
    })
})
// if ($(window).width()<961){
// $(".ab_cont>.ab_txt p").removeClass("ab_txt_ani");}