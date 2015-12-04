
var options = { frequency: 300 };
var watchId = 0;
var maxValue = 0;

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
  $("#btnStart").on("click", function() {
    if(watchId == 0){
      watchId = navigator.accelerometer.watchAcceleration(onSuccess, onError, options)
    }
    else {
      navigator.accelerometer.clearWatch( watchId );
    }
  });
  console.log(navigator.accelerometer);
}


function onSuccess(acceleration) {
  if(maxValue < acceleration.z){
    maxValue = acceleration.z;
  }
  $('#txtX').attr( 'value', acceleration.x);
  $('#txtY').attr( 'value', acceleration.y);
  $('#txtZ').attr( 'value', acceleration.z);
  $('#btnStart').html('Stop watching');
  watchId
}

function onError() {
  alert('onError!');
}
