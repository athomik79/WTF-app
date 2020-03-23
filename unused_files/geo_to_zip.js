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
          localStorage.setItem ("zipCode",data.results[0].address_components[7].short_name);
        
        });
    }
