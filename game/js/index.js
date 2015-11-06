$(document).ready(function() {

  $("#startbutton").click(function() {
    $("#startbutton").hide();
     $("#kanyemad").hide();
     $("#chef").hide();
     $("#kimface").hide();
     $("#Title").hide();
     $("#kw1").show();
     $("#pistol").show();
  });

  $("#pistol").click(function() {
    $("#kw1").css("width", "380px");
    $("#kw1").css("height", "380px");
    $("#kw1").css("top", "40%");
    $("#kw1").css("left", "40%");
  });

});