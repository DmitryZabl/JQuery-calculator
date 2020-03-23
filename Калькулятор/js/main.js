$(document).ready(function(){

    $('#form-sum').on('submit' , function( event ){
      event.preventDefault();
      

      var number1, number2, sum;


      number1 = parseInt($('#field1').val());
      number2 = parseInt($('#field2').val());



      if(isNaN(number1)) number1 = 0;
      if(isNaN(number2)) number2 = 0;
      sum = number1 + number2;
      $('#sum').text(sum);

    });


});