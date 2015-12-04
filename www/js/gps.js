var coordinates;

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
}

   // onError Callback receives a PositionError object
   //
function onError(error) {
   alert('code: '    + error.code    + '\n' +
         'message: ' + error.message + '\n');
}
