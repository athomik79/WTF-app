var gLat;
var gLong;

$("#destination").click(function()
{
    var a = $("#search").val();
    var c = a.indexOf(",");
    var d = a.substr(0,c);
    var e = a.substr(c+1,a.length);
    var f = d+","+e;
    var APIKey = "5142591fdf2a45c9927600243a8834f2";
    var queryURL =  "https://api.weatherbit.io/v2.0/forecast/daily?city="+f+"&country=US&units=i&key=" + APIKey;

    $.ajax({
        url: queryURL,
        method: "GET"
    })

    .then(function(response) 
        {
        var lat = response.lat;
        var lon = response.lon;
    
        GetAddress (lat, lon);

        map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: +lat, lng: +lon },
        zoom: 16,
        });
    
    let currentLocation = { lat: +lat, lng: +lon };
    let marker = new google.maps.Marker({
        position: currentLocation,
        map: map
    });

    google.maps.event.addListener(search, 'places_changed', function() {
    document.getElementById("destination").onclick = function () 
    {
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
    window.location.href='localinfo.html';
});


function initMap () 
{
    let location = new Object();
    navigator.geolocation.getCurrentPosition(function(pos) 
    {
    
        location.lat = pos.coords.latitude;
        gLat = location.lat;
        location.long = pos.coords.longitude;
        gLong = location.long;
        map = new google.maps.Map(document.getElementById("map"), {
            center: { lat: location.lat, lng: location.long },
            zoom: 16,
        });
        currentLat = location.lat;
        localStorage.setItem("lat",currentLat);
        currentLong = location.long;
        localStorage.setItem("lon",currentLong);
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

function GetAddress(lat, lng) 
{
    var apiKey = "AIzaSyAriXxPMt_ogYg9aHln6QbvoT0FZxW0_og";
    var url = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + lng + "&key=" + apiKey;
   
    $.getJSON(url,function (data, textStatus) 
    {
        var streetaddress=data.results[0].formatted_address;
        localStorage.setItem ("lat",lat);
        localStorage.setItem ("lon",lng);
        
    });
}
