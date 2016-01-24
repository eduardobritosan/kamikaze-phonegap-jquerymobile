$(document).ready(function() {
  $('#formAJAX').submit(function(evento) {
    evento.preventDefault();
    var datos_formulario = $(this).serialize();
    console.log(datos_formulario);
    // $.getJSON('../insert.php?callback=?', datos_formulario, function (response) {
    //  alert("hola");
    // });


     $.ajax({
       url: 'http://farmaapp.netai.net/insert.php?callback=?',
       data: {"id" : 65} ,
       type: 'GET',
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
