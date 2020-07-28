$(document).ready(function(){
  
  // Load
  //$('#datos').load("https://reqres.in/");

  // Get
  $.get("https://reqres.in/api/users", {page: 2}, function(response){
    response.data.forEach((element,index)=>{
      $('#datos').append("<p>"+element.first_name+"  "+element.last_name+"<p>");
    });
  });


  // Post
  $('#formulario').submit(function(event){
    event.preventDefault(); // Evento para que la página no se rederiga
    var usuario = {
      'name': $('input[name="name"]').val(),
      'web': $('input[name="web"]').val()
    }
    /*
    $.post($(this).attr('action'), usuario, function(response){
      console.log(response);
    }).done(function(){
      alert('Usuario registrado correctamente');
    });
    */
    $.ajax({
      type: 'POST',
      //dataType: 'json',
      //contentType: 'application/json',
      url: $(this).attr('action'),
      data: usuario,
      beforeSend: function(){
        console.log('Enviando usuario...');
      },
      success: function(response){
        console.log(response);
      },
      error: function(){ 
        console.log('Ha ocurrido un error');
      },
      timeout: 2000 // Tiempo máximo que puede durar la petición
    });
  });
});