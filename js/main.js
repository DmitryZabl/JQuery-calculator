$(document).ready(function(){

/*   $('.inner').addClass('selected');
  $('.inner').parent().children().addClass('selected'); */
/*   $('p').closest('.block').addClass('selected');
  $('p').closest('.inner').addClass('selected'); */
  //$('.block').find('p').addClass('selected');
  /* $('div').find('p').addClass('selected'); */
  /*  $('div.simple').prev().addClass('selected'); */
 /* $('.flex li:eq(2)').prev().addClass('selected'); */
 /* $('h1').prev().addClass('selected'); */
 $('li:first').siblings('li:not(:last)').addClass('selected');
});