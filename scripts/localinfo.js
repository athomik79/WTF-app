var lat = localStorage.getItem("lat");
var lon = localStorage.getItem("lon");
var APIKey = "5142591fdf2a45c9927600243a8834f2";
var queryURL = "https://api.weatherbit.io/v2.0/current?lat=" + lat + "&lon=" + lon + "&units=I&key=" + APIKey;
var urlString = "https://us-restaurant-menus.p.rapidapi.com/restaurants/search/geo?page=1&lon=" + lon + 
"&lat=" + lat + "&distance=1";
var settings = {
    "async": true,
    "crossDomain": true,
    "url": urlString,
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "us-restaurant-menus.p.rapidapi.com",
      "x-rapidapi-key": "b21fc3e940mshe309850232bdc1ap11ff86jsncc48faf41fcd"
  }
}

$.ajax({
    url: queryURL,
    method: "GET"
})
   .then(function(response) 
   {
       var currentDayEl = $("p.currentDay");
       var currDate = moment().format('MMMM Do YYYY');
       currentDayEl.text(currDate);
       var iconcode = response.data[0].weather.icon;
       var iconurl = "http://weatherbit.io/static/img/icons/" + iconcode + ".png";
       $("#icon").attr("src",iconurl);
       $("#desc").text("Description: " + response.data[0].weather.description);
       var tempF = response.data[0].temp;
       var degreeSymbol = "\xB0";
       $("#main").text("Temperature: " + tempF.toFixed(2) + " " + degreeSymbol + "F");
       $("#city").text(response.data[0].city_name);
       $("#state").text(response.data[0].state_code);
    
       $.ajax(settings)
        .then(function (response) {

        for (var i=0; i<10; i++)
        {
          var name = response.result.data[i].restaurant_name;
          var nameDiv = "<div id=\"name"+i+"\">"+ name + "</div>";
          $('#food').append(nameDiv);
          var address = response.result.data[i].address.formatted;
          var addressDiv = "<div id=\"address"+i+"\">"+ address + "</div>";
          $('#food').append(addressDiv);
          var phone = response.result.data[i].restaurant_phone;
          var phoneDiv = "<div id=\"phone"+i+"\">"+ phone + "</div>";
          $('#food').append(phoneDiv);
          var id = response.result.data[i].restaurant_id;
          var idDiv = "<div id=\"id"+i+"\">"+ id + "</div>";
          $('#food').append(idDiv);
          $('#food').append("<br>");
        }
    });    
})