$(document).ready(function(){

  $('#customWidth').on('click' , function(){
    $('#test').animate({'width': '200px', }, 4000);
  })

  $('#customOpacity').on('click', function(){
    $('#test').animate({'opacity': '0.5'}, 4000);
  })

  $('#hide').on('click', function(){
    $('#test').hide(100);
  })

  $('#show').on('click', function(){
    $('#test').show(1000);
  })

  $('#hideAndShow').on('click', function(){
    $('#test').hide(1000).delay(1000).show(1000);
  })

  $('#fadeOut').on('click', function(){
    $('#test').fadeOut(1000);
  })

  $('#fadeIn').on('click', function(){
    $('#test').fadeIn(1000);
  })

  $('#fadeToggle').on('click', function(){
    $('#test').fadeToggle(1000);
  })

  $('#slideUp').on('click', function(){
    $('#test').slideUp(1000);
  })

  $('#slideDown').on('click', function(){
    $('#test').slideDown(1000);
  })

  $('#slideToggle').on('click', function(){
    $('#test').slideToggle(1000);
  })
});
