var gLat;
var gLong;

$("#destination").click(function(){alert("button has been pressed");
var a = $("#search").val();
var c = a.indexOf(",");
var d = a.substr(0,c);
var e = a.substr(c+2,a.length);
var f = d+","+e;
alert(f);

var zip = "22030";
var APIKey = "5142591fdf2a45c9927600243a8834f2";

var queryURL =  "https://api.weatherbit.io/v2.0/forecast/daily?city="+f+"&country=US&units=i&key=" + APIKey;

$.ajax({
    url: queryURL,
    method: "GET"
})

    .then(function(response) {
        console.log(response);

        var lat = response.lat;
        console.log(lat);

        var lon = response.lon;
        console.log(lon);

        localStorage.setItem("lattitude", JSON.stringify(lat));
        localStorage.setItem("longitude", JSON.stringify(lon));

        GetAddress (lat, lon);

        map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: +lat, lng: +lon },
        zoom: 16,
    });
    // currentLat = location.lat;
    // currentLong = location.long;
    let currentLocation = { lat: +lat, lng: +lon };
    let marker = new google.maps.Marker({
        position: currentLocation,
        map: map
    });

    google.maps.event.addListener(search, 'places_changed', function() {
    document.getElementById("destination").onclick = function () {
    var input = document.getElementById("search");

    google.maps.event.trigger(input, "focus", {});
    google.maps.event.trigger(input, "keydown", { keyCode: 13 });
    google.maps.event.trigger(this, "focus", {});
    }
    currentLat = lat;
    currentLong = lon;
    let currentLocation = { lat: location.lat, lng: location.long };
    let marker = new google.maps.Marker({
        position: currentLocation,
        map: map
    });


    });
})
})

$("#find").click(function()
{initMap()});

$('#weather').click(function(){
    window.location.href='aliindex.html';
});


function initMap () {
let location = new Object();
navigator.geolocation.getCurrentPosition(function(pos) {
    // location.lat = 34.052235;
    location.lat = pos.coords.latitude;
    gLat = location.lat;
    // location.long = -118.243683;
    location.long = pos.coords.longitude;
    gLong = location.long;
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: location.lat, lng: location.long },
        zoom: 16,
    });
    currentLat = location.lat;
    currentLong = location.long;
    let currentLocation = { lat: location.lat, lng: location.long };
    let marker = new google.maps.Marker({
        position: currentLocation,
        map: map
    });

    google.maps.event.addListener(search, 'places_changed', function() {
    document.getElementById("destination").onclick = function () {
    var input = document.getElementById("search");

    google.maps.event.trigger(input, "focus", {});
    google.maps.event.trigger(input, "keydown", { keyCode: 13 });
    google.maps.event.trigger(this, "focus", {});
    }

    });   
    });
    }

    function GetAddress(lat, lng) {
    // var lat = gLat;
    // var lng = gLong;
    var apiKey = "AIzaSyAriXxPMt_ogYg9aHln6QbvoT0FZxW0_og";
    var url = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + lng + "&key=" + apiKey;
    alert (lat + "," + lng);
    alert (url);
    $.getJSON(url,function (data, textStatus) {
           var streetaddress=data.results[0].formatted_address;
            // console.log (streetaddress);
            console.log (data);
          localStorage.setItem ("lat",lat);
          localStorage.setItem ("lon",lng);
        
        });
    }
