$(document).ready(function() {


  var options = { frequency: 300 };
  var watchId = 0;
  var maxValue = 0;
  var pressed = false;
  document.addEventListener("deviceready", onDeviceReady, true);

  function onDeviceReady() {
    $("#btnStart").bind('touchstart', function() {

      if(watchId == 0){
        watchId = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
      }
      else {

        navigator.accelerometer.clearWatch( watchId );
        $('#btnStart').html('Start accelerometer');
        watchId = 0;
        alert(maxValue);
        maxValue = 0;
      }

      function onSuccess(acceleration) {

        if(maxValue < acceleration.z){
          maxValue = acceleration.z;
        }
        $('#txtX').attr( 'value', acceleration.x);
        $('#txtY').attr( 'value', acceleration.y);
        $('#txtZ').attr( 'value', acceleration.z);
        $('#btnStart').html('Stop watching');
      }


      function onError() {
        alert('onError!');
      }
  });
  }
  // alert(watchId);

});
