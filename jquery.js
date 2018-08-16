$(".red").css("backgroundColor", "red");
$("#myElement").on("click", function () {
    alert("myElement was clicked");

});
$("#myElement").css("backgroundColor", "blue");
$("#myElement div:first").css("backgroundColor", "green");
$("#myElement div:first").css("color", "white");

$("#myElement div:last").css("backgroundColor", "orange");
$("#myElement div:last").css("color", "pink");

//BUTTONS//

$("button").hover( function () {
    $(this).css("font-weight", "bold");
    $(this).css("border", "2px solid blue");
});


$("#btnFade").on("click",function () {
   $("img").fadeOut(4000);
});

$("#btnUnfade").on("click", function () {
    $("img").fadeIn(4000);
});

$("#btnSlideDn").on("click", function () {
    $("img").slideDown(400);
});
$("#btnSlideUp").on("click", function () {
    $("img").slideUp(400);
});
