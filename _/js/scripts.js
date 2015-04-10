$(document).ready(function() {
  $('#fullpage').fullpage({
    anchors: ['edwardAlonzo', 'workExperience', 'myEducation', 'mySkills', 'myInterests'],
    menu: '#pageNav'
  });
  $('#pageNav').stickUp();
});
