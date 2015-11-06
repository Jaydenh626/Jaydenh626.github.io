$(document).ready(function() {

  $("#startbutton").click(function() {
    $("#startbutton").hide();
     $("#kanyemad").hide();
     $("#chef").hide();
     $("#kimface").hide();
     $("#Title").hide();
     $("#kw1").show();
     $("#pistol").show();
     $("#kk1").show();
     $("#jb1").show();
  });

  $("#pistol").click(function() {
    $("#kw1").css("width", "380px");
    $("#kw1").css("height", "380px");
    $("#kw1").css("top", "20%");
    $("#kw1").css("left", "60%");
    $("#kk1").css("width", "380px");
    $("#kk1").css("height", "380px");
    $("#kk1").css("top", "40%");
    $("#kk1").css("right", "40%");
    $("#jb1").css("width", "380px");
    $("#jb1").css("height", "380px");
    $("#jb1").css("top", "35%");
    $("#jb1").css("right", "40%");
  });

$("#kw1").click(function() {
    $("#kw1").hide();
});


});