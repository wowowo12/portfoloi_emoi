$(".h_order").click(function(){
    if($(window).width()>960) $(this).stop().animate({"bottom":"0"});
});
$("header").stop().click(function(){
    if($(window).width()>960) $(".h_order").animate({"bottom":"-255px"});
});
$(".nav_bg").hover(function(){
    $(this).css({"background-color":"#fff"});
    $(".lnb>li>a", $(this)).css({"color":"#000"});
    $(".gnb>li>a", $(this)).css({"color":"#ad3536"});
    $(".logo").find("img").eq(0).hide();
    $(".logo").find("img").eq(1).show();
  
}, function(){
    $(this).css({"background-color":"#232a30"});
    $(".lnb>li>a", $(this)).css({"color":"#fff"});
    $(".gnb>li>a", $(this)).css({"color":"#ccc"});
    $(".logo").find("img").eq(0).show();
    $(".logo").find("img").eq(1).hide();
});


$(".nav_mo").hover(function(){
    $(this).css({"background-color":"#fff"});
    $(".lnb>li>a", $(this)).css({"color":"#000"});
    $(".gnb>li>a", $(this)).css({"color":"#ad3536"});
    $(".img_logo").hide();
    $(".img_logo_on").show();
    console.log($(".logo").find("img").eq(1));
  
}, function(){
    $(".lnb").stop().slideUp();
    $(".fa-times").hide();
    $(".fa-bars").show();
    $(this).css({"background-color":"transparent"});
    $(".lnb>li>a").css({"color":"#fff"});
    $(".gnb>li>a").css({"color":"#ccc"});
    $(".img_logo").show();
    $(".img_logo_on").hide();
});

$(".nav_mo .fa-bars").click(function(){
    $(this).hide();
    $(this).next().show();
    $(".lnb").stop().slideDown();
});

$(".nav_mo .fa-times").click(function(){
    $(this).hide();
    $(this).prev().show();
    $(".lnb").stop().slideUp();
});

$(".lnb>li").hover(function(){
    $(this).children(".lnb_bt").stop().slideToggle(200);
    $(this).find(".lnb_down").stop().slideToggle(200);
});

$(".ab_img").hover(function(){
    $(this).children(".img_ab").fadeOut();
    $(this).children(".ab_img_t").show();
},function(){
    $(this).children(".img_ab").fadeIn();
    $(this).children(".ab_img_t").hide();
});

// if ($(window).width()<961){
// $(".ab_cont>.ab_txt p").removeClass("ab_txt_ani");}

$(window).resize(function(){
    var lis = $(".swap_li").remove();
    if($(this).width() > 632) {
        $(".swap_wrap").prepend(lis);
    }
    else {
        $(".swap_wrap").append(lis);
    }
}).trigger("resize");

