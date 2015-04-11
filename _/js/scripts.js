$(document).ready(function() {
  //fullpage slides plugin
  $('#fullpage').fullpage({
    anchors: ['edwardAlonzo', 'workExperience', 'myEducation', 'mySkills', 'myInterests'],
    menu: '#pageNav'
  });

  //fit text jquery plugin
  $("h1").fitText();

  //add meanMenu for mobile menu issue
  $('body nav').first().meanmenu();


});
