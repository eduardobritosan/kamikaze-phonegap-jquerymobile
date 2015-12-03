$(document).ready(function() {
  $('#formAJAX').submit(function(evento) {
    evento.preventDefault();
    var datos_formulario = $(this).serialize();
    // $.getJSON('../insert.php?callback=?', datos_formulario, function (response) {
    //  alert("hola");
    // });


     $.ajax({
       url: 'http://farmaapp.netai.net/insert.php?callback=?',
       data: datos_formulario,
       type: 'POST',
       dataType: 'jsonp',
       success: function(datos) {
         alert("Exito.");
       },
       error: function(jqXHR, textStatus, errorThrown){
         console.log("Error.");
       }
     });
  });
});
