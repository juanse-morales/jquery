$(document).ready(function(){
  
  // Método Draggable: sirve para mover elementos por la página web.
  $('.elemento').draggable();

  // Método Resizable: sirve para redimensionar un elemento de la página web.
  $('.elemento').resizable();

  // Método Selectable: sirve para seleccionar un elemento.
  //$('.lista-seleccionable').selectable();

  // Método Sortable: sirve para ordenar elementos
  $('.lista-seleccionable').sortable({
    update: function(event, ui){
      console.log('Change');
    }
  });

  //Método Droppable
  $('#elemento-movido').draggable();
  $('#area').droppable({
    drop: function(){
      console.log('Drop On');
    }
  });

  // Efectos
  $('#mostrar').click(function(){
    // $('.caja-efectos').toggle('fade');
    // $('.caja-efectos').fadeToggle( );
    // $('.caja-efectos').effect('explode');
    // $('.caja-efectos').toggle('explode');
    // $('.caja-efectos').toggle('blind');
    // $('.caja-efectos').toggle('slide');
    // $('.caja-efectos').toggle('drop');
    // $('.caja-efectos').toggle('fold');
    // $('.caja-efectos').toggle('puff');
    // $('.caja-efectos').toggle('scale');
    // $('.caja-efectos').toggle('shake', 'slow');
    $('.caja-efectos').toggle('shake',{},4000);
  });

  // Tooltip
  $(document).tooltip();

  // Dialog
  $('#lanzar-popup').click(function(){
    $('#popup').dialog();
  });

  // Datepicker
  $('#calendario').datepicker();

  // Tabs
  $('#pestanas').tabs();
});