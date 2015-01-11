$(function(){
$(".mod_thumbnail").each(function(){
var set = $(this);
var btn = set.find(".thumbnaillist li a");
var image = set.find(".mainimglist img");
var cap = set.find(".mainimglist p");
 
// hover時
$(btn).hover(function(){
$(image).attr("src",$(this).attr("href")).fadeIn();
$(image).attr("alt",$(this).attr("title"));
$(cap).text($(this).attr("title"));

});
//クリック時  
$(".thumbnaillist a").click(function(){
return false;
});
});
});