$(document).ready(function(){
  $('#mostrar').hide();
  $('#mostrar').click(function(){
    $(this).hide();
    $('#ocultar').show();
    // $('#caja').show('fast'); // Método SHOW: mouestra un elemento HTML;
    // $('#caja').fadeIn('normal'); // Método FADEIN: muestra un elemento con efecto.
    $('#caja').slideDown('slow');
  });

  $('#ocultar').click(function(){
    $(this).hide();
    $('#mostrar').show();
    // $('#caja').hide('fast'); // Método HIDE: oculta un elemento HTML.
    // $('#caja').fadeOut('normal'); // Método FADEOUT: oculta un elemento con efecto.
    // $('#caja').fadeTo('slow',0);
    $('#caja').slideUp('slow',function(){
      console.log('Cartel ocultado');
    });
  });

  $('#abrir').click(function(){
    // $('#caja').toggle('slow');
    // $('#caja').fadeToggle('slow');
    $('#caja').slideToggle('slow');
  });

  $('#animar').click(function(){
    $('#caja').animate({marginLeft: '500px',fontSize: '40px', height: '110px'},'slow')
              .animate({borderRadius: '900px', marginTop: '80px'},'slow')
              .animate({borderRadius: '0px', marginLeft: '0px'},'slow')
              .animate({borderRadius: '100px', marginTop: '0px'},'slow');
  });
});