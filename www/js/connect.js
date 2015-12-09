  //run the following code whenever a new pseudo-page is created

// document.addEventListener("touchstart", function() {}, false);


$(document).ready(function () {


      alert("dos");





  $("#showTable").click(function(){


  //   console.log(navigator.accelerometer);
  //   function onSuccess(acceleration) {
  //       alert('Acceleration X: ' + acceleration.x + '\n' +
  //             'Acceleration Y: ' + acceleration.y + '\n' +
  //             'Acceleration Z: ' + acceleration.z + '\n' +
  //             'Timestamp: '      + acceleration.timestamp + '\n');
  //   }
  //
  //   function onError() {
  //       alert('onError!');
  //   }
  //
  //   var options = { frequency: 3000 };  // Update every 3 seconds
  //
  //   var watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);

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
  });
});
