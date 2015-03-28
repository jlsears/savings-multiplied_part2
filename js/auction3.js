'use strict';

$(document).ready(function() {

    $.ajax({
        url: "https://savingsmultipliedssh.firebaseio.com/items.json",
        dataType: "jsonp",
        success: function(data){
            console.log(data);
          for (var i = 0; i < data.length; i++) {
            // console.log(data);
            // console.log(data[0].title);
            $("#majorDiv").append("<div class='col-md-3 center-it'>" + ("<img class='auction-size' src='" + data[i].image +"'>") + 
                "<br>" + 
                data[i].title +
                data[i].price + 
                "<br>" +
                data[i].seller +
                data[i].endDate +
                "<br>" +
                "</div>");
      }
    }
  })
});

