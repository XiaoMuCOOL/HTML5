$(function(){
  $("li").click(function(){
    var $src = $(this).find("img").attr("src");
    $(".mask img").attr("src",$src);
    $(".mask").show(200);
  });
  $(".mask").click(function(){
    $(this).hide(200);
  });
});