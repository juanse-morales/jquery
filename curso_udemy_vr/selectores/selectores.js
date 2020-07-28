// Selectores

jQuery(document).ready(function(){
  
  // Selector ID
  var rojo = $('#rojo').css('background','red').css('color','white');
  console.log(rojo);

  $('#amarillo').css('background','yellow').css('color','green');
  jQuery('#verde').css('background','green').css('color','white');


  // Selectores de clase
  var zebra = $('.zebra');
  console.log(zebra);
  console.log(zebra[0]);
  console.log(zebra.eq(1)); // Devuelve un objeto jQuery

  //zebra.css('border','5px dashed black')
  /*
  $('.sin_border').click(function(){
    $(this).addClass('zebra'); // Método que añade una clase al elemento
  })
  */

  // Selectores de etiqueta
  var parrafos = $('p').css('cursor','pointer');

  parrafos.click(function(){
    if($(this).hasClass("zebra")){
      $(this).removeClass("zebra"); // Método que elimina una clase al elemento
    }else{
      $(this).addClass("zebra"); // Método que añade una clase al elemento
    }
  });


  // Selectores de atributo
  $('[title="Google"]').css('background','#ccc');
  $('[title="Facebook"]').css('background','blue');


  // Otros
  $('p,a').addClass('margen-superior');
});