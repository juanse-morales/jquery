$(document).ready(function(){
  var caja = $('#caja');

  // Mouse Over
  caja.mouseover(function(){
    $(this).css('background','red');
  });

  // Mouse Out
  caja.mouseout(function(){
    $(this).css('background','green');
  });

  var caja2 = $('#caja2');

  function cambiaRojo(){
    $(this).css('background','red');
  }

  function cambiaVerde(){
    $(this).css('background','green');
  }

  // Hover
  caja2.hover(cambiaVerde,cambiaRojo);

  // Click
  caja.click(function(){
    $(this).css('background','blue').css('color','white');
  });

  // Doble Click
  caja2.dblclick(function(){
    $(this).css('background','pink').css('color','white');
  });

  var nombre = $('#nombre');
  var datos = $('#datos');

  // Focus
  nombre.focus(function(){
    $(this).css('border','2px solid red');
  });

  // Blur
  nombre.blur(function(){
    $(this).css('border','2px solid green');
    datos.text($(this).val()).show();
  });

  // Mouse Down
  datos.mousedown(function(){
    $(this).css('border-color','gray');
  });

  // Mouse Up
  datos.mouseup(function(){
    $(this).css('border-color','black');
  });

  // Mouse Move
  $(document).mousemove(function(){
    $('body').css('cursor','none');
    $('#sigueme').css('left',event.clientX).css('top',event.clientY);
  });
});