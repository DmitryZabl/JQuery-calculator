$(document).ready(function(){

  $('p').addClass('selected');
  $('.selected').removeClass('selected');
  $('p').removeClass('selected');
  $('h1').addClass('delete-border');
  $('a[href="http://korotkov-balzam.ru/"]').addClass('selected');
  $('a[href!="http://korotkov-balzam.ru/"]').addClass('selected');
});