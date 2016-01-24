// var coordinates;
// $(document).ready(function(){
//   // $.getJSON('https://maps.googleapis.com/maps/api/geocode/json?latlng=28.485463,-16.321617&key=AIzaSyDQLq2s2_duTmkGDAYdWeKAuQLrBSxcZoo', function(res) {
//   //   if (res != undefined)
//   //   console.log(res.results[0].address_components[0].long_name);
//   //   else {
//   //     console.log("undefined");
//   //   }
//   // });
//   $("#showGps").bind('touchstart', function() {
//     alert("Hola");
//     function getCoordinates() {
//       updateCoordinates();
//
//       return coordinates;
//     }
//
//     function updateCoordinates() {
//            navigator.geolocation.getCurrentPosition(onSuccess, onError);
//     }
//
//        // onSuccess Geolocation
//        //
//     function onSuccess(position) {
//
//        coordinates = { "latitude" : position.coords.latitude, "longitude": position.coords.longitude};
//        alert("Latitud: " + position.coords.latitude + " Longitud: " + position.coords.longitude);
//     }
//
//        // onError Callback receives a PositionError object
//        //
//     function onError(error) {
//        alert('code: '    + error.code    + '\n' +
//              'message: ' + error.message + '\n');
//     }
//
//     updateCoordinates();
//   });
// });
