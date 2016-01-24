var coordinates;
var city;
$(document).ready(function() {
//Aqui empieza codigo de acelerometro
  var options = { frequency: 300 };
  var watchId = 0;
  var maxValue = 0;
  var pressed = false;
  document.addEventListener("deviceready", onDeviceReady, true);
  gpsCall();
  function onDeviceReady() {
    $("#btnStart").bind('touchstart', function() {
      if(watchId == 0){
        watchId = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
      }
      else {
        navigator.accelerometer.clearWatch( watchId );
        $('#btnStart').html('Start accelerometer');
        watchId = 0;
        send_data(maxValue);
        showTable();
        maxValue = 0;
      }
      function onSuccess(acceleration) {
        if((maxValue < (acceleration.z + acceleration.x + acceleration.y) / 3) && (((acceleration.z + acceleration.x + acceleration.y) / 3) > 0)){
          maxValue = (acceleration.z + acceleration.x + acceleration.y) / 3 ;
        }
        $('#btnStart').html('Stop watching');
      }
      function onError() {
        alert('onError!');
      }
  });
  }

// Acaba codigo acelerometro

//Envio datos a la bdd

  function send_data(maxValue) {
      var id = Math.floor((Math.random() * 10000) + 1);
      var datos_enviar = { "maxValue" : maxValue, "nombre" : $("#nombre").val(), "city" : city, "id" : id};
      $.ajax({
         url: 'http://farmaapp.netai.net/insert.php?callback=?',
         data: datos_enviar,
         type: 'GET',
         dataType: 'jsonp',
         success: function(datos) {
           console.log("Exito.");
           alert("Exito");
         },
         error: function(jqXHR, textStatus, errorThrown){
           console.log(textStatus);
           console.log("Error is : " + jqXHR + " - " + textStatus + " - " + errorThrown);
         }
       });
  }
//Fin envio datos a la bdd

//Inicio impresion en app de base de datos

  function showTable(){
      // cache this page for later use (inside the AJAX function)
      // var $this = $(this);
      // make an AJAX call to your PHP script
      $.getJSON('http://farmaapp.netai.net/query.php', function (response) {
          // create a variable to hold the parsed output from the server
          var output = [];
          // if the PHP script returned a success
          if (response.status == 'success') {
            for (index = 0; index < response.items.length; ++index) {
              // iterate through the response rows
              output.push('<tr>');
              for (var key in response.items[index]) {
                   // add each response row to the output variable
                   output.push('<td>' + response.items[index][key] + '</td>');
              }
              output.push('</tr>');
          }
          // if the PHP script returned an error
          } else {
              // output an error message
              output.push('<td>No Data Found</td>');
          }
          // append the output to the `data-role="content"` div on this page as a
          // listview and trigger the `create` event on its parent to style the
          // listview
          $("tbody").append(output).trigger('create');
      });
  }

//Fin Impresion en app base de datos

  function gpsCall (){
      function getCoordinates() {
        updateCoordinates();
        return coordinates;
      }
      function updateCoordinates() {
             navigator.geolocation.getCurrentPosition(onSuccess, onError);
      }
      // onSuccess Geolocation
      //
      function onSuccess(position) {
         coordinates = { "latitude" : position.coords.latitude, "longitude": position.coords.longitude};
         $.getJSON('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + coordinates.latitude + ',' + coordinates.longitude + '&key=AIzaSyDQLq2s2_duTmkGDAYdWeKAuQLrBSxcZoo', function(res) {
           if (res != undefined)
           city = res.results[0].address_components[3].long_name;
           else {
             console.log("undefined");
           }
         });
        //  alert("Latitud: " + position.coords.latitude + " Longitud: " + position.coords.longitude);
      }
       // onError Callback receives a PositionError object
       //
      function onError(error) {
         alert('code: '    + error.code    + '\n' +
               'message: ' + error.message + '\n');
      }
      updateCoordinates();
  }
});
