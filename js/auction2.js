'use strict';

$(document).ready(function() {

    $.ajax({
        url: "https://savingsmultipliedssh.firebaseio.com/items.json",
        dataType: "jsonp",
        success: function(data){
            // data.preventDefault();
            console.log(data);
            console.log(data[0].title);
            $("#item1").append("<img class='auction-size' src='" + data[0].image +"'>");
            $("#item1").append("<br>");
            $("#item1").append(data[0].title);
            $("#item1").append(data[0].price);
            $("#item1").append(data[0].seller);
            $("#item1").append(data[0].endDate);
            $("#item2").append("<img class='auction-size' src='" + data[1].image +"'>");
            $("#item2").append("<br>");
            $("#item2").append(data[1].title);
            $("#item2").append(data[1].price);
            $("#item2").append(data[1].seller);
            $("#item2").append(data[1].endDate);
            $("#item3").append("<img class='auction-size' src='" + data[2].image +"'>");
            $("#item3").append("<br>");
            $("#item3").append(data[2].title);
            $("#item3").append(data[2].price);
            $("#item3").append(data[2].seller);
            $("#item3").append(data[2].endDate);
            $("#item4").append("<img class='auction-size' src='" + data[3].image +"'>");
            $("#item4").append("<br>");
            $("#item4").append(data[3].title);
            $("#item4").append(data[3].price);
            $("#item4").append(data[3].seller);
            $("#item4").append(data[3].endDate);
            $("#item5").append("<img src='" + data[4].image +"'>");
            $("#item5").append(data[4].title);
            $("#item5").append(data[4].price);
            $("#item5").append(data[4].seller);
            $("#item5").append(data[4].endDate);
            $("#item6").append("<img src='" + data[5].image +"'>");
            $("#item6").append(data[5].title);
            $("#item6").append(data[5].price);
            $("#item6").append(data[5].seller);
            $("#item6").append(data[5].endDate);
            $("#item7").append("<img src='" + data[6].image +"'>");
            $("#item7").append(data[6].title);
            $("#item7").append(data[6].price);
            $("#item7").append(data[6].seller);
            $("#item7").append(data[6].endDate);
            $("#item8").append("<img src='" + data[7].image +"'>");
            $("#item8").append(data[7].title);
            $("#item8").append(data[7].price);
            $("#item8").append(data[7].seller);
            $("#item8").append(data[7].endDate);
            $("#item9").append("<img src='" + data[8].image +"'>");
            $("#item9").append(data[8].title);
            $("#item9").append(data[8].price);
            $("#item9").append(data[8].seller);
            $("#item9").append(data[8].endDate);
            $("#item10").append("<img src='" + data[9].image +"'>");
            $("#item10").append(data[9].title);
            $("#item10").append(data[9].price);
            $("#item10").append(data[9].seller);
            $("#item10").append(data[9].endDate);
            $("#item11").append("<img src='" + data[10].image +"'>");
            $("#item11").append(data[10].title);
            $("#item11").append(data[10].price);
            $("#item11").append(data[10].seller);
            $("#item11").append(data[10].endDate);
            $("#item12").append("<img src='" + data[11].image +"'>");
            $("#item12").append(data[11].title);
            $("#item12").append(data[11].price);
            $("#item12").append(data[11].seller);
            $("#item12").append(data[11].endDate);
        }
     })


});

