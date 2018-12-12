$(".h_order").click(function(){
    $(this).stop().animate({"bottom":"0"});
});
$("header").stop().click(function(){
    $(".h_order").animate({"bottom":"-255px"});
});