var zip = "22030";
var APIKey = "5142591fdf2a45c9927600243a8834f2";

var queryURL =  "https://api.weatherbit.io/v2.0/forecast/daily?postal_code="+zip+"&country=US&units=i&key=" + APIKey;

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
    })