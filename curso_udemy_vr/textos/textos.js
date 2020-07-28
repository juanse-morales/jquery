$(document).ready(function(){
  reloadLinks();
  $('#add_button').removeAttr('disabled').click(function(){ // Método REMOVEATTR: permite eliminar un atributo a un elemento HTML.
    // $('#menu').html('<li><a href="'+$('#add_link').val()+'"></a></li>'); // Método HTNL: para incrustar en elemento HTML.
    // $('#menu').append('<li><a href="'+$('#add_link').val()+'"></a></li>'); // Método APPEND: para añadir al final un elemento HTML.
    // $('#menu').prepend('<li><a href="'+$('#add_link').val()+'"></a></li>'); // Método PREPEND: para añadir al inicio un elemento HTML.
    // $('#menu').before('<li><a href="'+$('#add_link').val()+'"></a></li>'); // Método BEFORE: para añadir antes un elemento HTML.
    $('#menu').after('<li><a href="'+$('#add_link').val()+'"></a></li>'); // Método AFTER: para añadir después un elemento HTML.
    $('#add_link').val('');
    reloadLinks();
  });
});

function reloadLinks(){
  $('a').each(function(index){
    var that = $(this);
    var enlace = that.attr('href'); // Método ATTR: permite obtener el valor de un atributo.
    that.attr('target','_blank');  // Método ATTR: permite añadir un atributo con su valor a un elemento.
    that.text(enlace); // Método TEXT: permite inserta o obtener el contenido de un elemento HTML.
  });
}