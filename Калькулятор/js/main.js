$(document).ready(function(){

  $('#toggles div').on('click', function(){
    let imgPath = $(this).attr('data-img-path');
    let $img = $('#img-holder img');

    $img.fadeOut(1000 , function(){
      $img.attr('src', imgPath).fadeIn(400);
    })
  });


});