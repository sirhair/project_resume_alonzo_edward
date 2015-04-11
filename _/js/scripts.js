$(document).ready(function() {
  //fullpage slides plugin
  $('#fullpage').fullpage({
    anchors: ['edwardAlonzo', 'workExperience', 'myEducation', 'mySkills', 'myInterests'],
    menu: '#pageNav'
  });
  $("#pageNav li:first-of-type a").click( function(){
    $("#pageNav li").css("display","block");
    $("#pageNav").css("background","#fff");
  });

  $("#pageNav li + li").click( function(){
    $("#pageNav li + li").css("display","none");
    $("#pageNav").css("background","rgba(255,255,255, 0)");
    console.log('hi');
  });

  //fit text jquery plugin
  $("h1").fitText();

});
  
