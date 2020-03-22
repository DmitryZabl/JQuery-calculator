$(document).ready(function(){


  $('#btn-1').on('dblclick' , function(){
    $('h1').toggleClass('pink');
  });   

  $('#text-area').on('mouseenter' , function(){
    $(this).toggleClass('change-color');
  });

  $('#text-area').on('mouseleave' , function(){
    $(this).toggleClass('change-color');
  });

  $('#input-1').on('focus' , function(){
    $(this).toggleClass('active');
  });

  $('#input-1').on('blur' , function(){
    $(this).toggleClass('active');
  });

  $('#input-1').on('change' , function(){
    $('#text-holder').text( $(this).val());
  })

  $('#input-1').on('keyup' , function(){
    $('#text-holder').text( $(this).val());
  })

  $(#input-1).on('keyup' , function(e) {
    if ( e.which == 27) {
      $('#text-holder').text('');
    }
  })

  
});
