//Add Date

var time = moment().format('MMMM Do YYYY');

let nowHour24 = moment().format("H");
let nowHour12 = moment().format("h");

let timeD = $('#currentDay');
timeD.text(time);


var img =  document.querySelector("#img");
var info = document.querySelector("#info");
var area = document.querySelector("#area");
var submit = document.querySelector("#submit");
var input = document.querySelector("#input");
var main = document.querySelector("#main");
var min = document.querySelector("#min");
var max = document.querySelector("#max");
var imgicon = document.querySelector("#icon");
var desc = document.querySelector("#desc");


//Day 2 Weather Variables
var Timgicon = document.querySelector("#Ticon");
var Timg =  document.querySelector("#Timg");
var Tdesc = document.querySelector("#Tdesc");
var Tmain = document.querySelector("#Tmain");
var Tdate = document.querySelector("#Tdate");

//Day 3 Weather Variables
var Mimgicon = document.querySelector("#Micon");
var Mimg =  document.querySelector("#Mimg");
var Mdesc = document.querySelector("#Mdesc");
var Mmain = document.querySelector("#Mmain");
var Mdate = document.querySelector("#Mdate");

//Day 4 Weather Variables
var Fimgicon = document.querySelector("#Ficon");
var Fimg =  document.querySelector("#Fimg");
var Fdesc = document.querySelector("#Fdesc");
var Fmain = document.querySelector("#Fmain");
var Fdate = document.querySelector("#Fdate");

//Day 5 Weather Variables
var Vimgicon = document.querySelector("#Vicon");
var Vimg =  document.querySelector("#Vimg");
var Vdesc = document.querySelector("#Vdesc");
var Vmain = document.querySelector("#Vmain");
var Vdate = document.querySelector("#Vdate");


$(submit).on("click", function(event) {
    event.preventDefault();
    var local = input.value;
    console.log(local);


var APIKey = "5142591fdf2a45c9927600243a8834f2";

var queryURL = "https://api.weatherbit.io/v2.0/forecast/daily?postal_code="+local+"&country=US&units=i&key=" + APIKey;

$.ajax({
    url: queryURL,
    method: "GET"
})

    .then(function(response) {
        console.log(response);
        console.log(response.data[0].weather.icon);
        console.log(response.data[0].temp);
        console.log(response.data[0].min_temp);
        console.log(response.data[0].max_temp);
        console.log(response.data[0].weather.description);

        //Current Weather Data
        var icon = response.data[0].weather.icon;
        var iconURL = "https://www.weatherbit.io/static/img/icons/" + icon + ".png";
        var tempF = (response.data[0].temp);
        var tempFN = (response.data[0].min_temp);
        var tempFX = (response.data[0].max_temp);

        $(img).attr("src", iconURL);
        $(main).text( "Right now : " + tempF.toFixed(0) + "F");
        $(min).text("Low : " + tempFN.toFixed(0) + "F");
        $(max).text("High : " + tempFX.toFixed(0) + "F");
        $(desc).text(response.data[0].weather.description);

        //Day 2 Data
        var Ticon = response.data[1].weather.icon;
        var TiconURL = "https://www.weatherbit.io/static/img/icons/" + Ticon + ".png";
        var TtempF = (response.data[1].temp);

        $(Timg).attr("src", TiconURL);
        $(Tdesc).text(response.data[1].weather.description);
        $(Tmain).text(TtempF.toFixed(0) + "F");
        $(Tdate).text(response.data[1].datetime);

         //Day 3 Data
         var Micon = response.data[2].weather.icon;
         var MiconURL = "https://www.weatherbit.io/static/img/icons/" + Micon + ".png";
         var MtempF = (response.data[2].temp);
 
         $(Mimg).attr("src", MiconURL);
         $(Mdesc).text(response.data[2].weather.description);
         $(Mmain).text(MtempF.toFixed(0) + "F");
         $(Mdate).text(response.data[2].datetime);

         //Day 4 Data
        var Ficon = response.data[3].weather.icon;
        var FiconURL = "https://www.weatherbit.io/static/img/icons/" + Ficon + ".png";
        var FtempF = (response.data[3].temp);

        $(Fimg).attr("src", FiconURL);
        $(Fdesc).text(response.data[3].weather.description);
        $(Fmain).text(FtempF.toFixed(0) + "F");
        $(Fdate).text(response.data[3].datetime);

        //Day 5 Data
        var Vicon = response.data[4].weather.icon;
        var ViconURL = "https://www.weatherbit.io/static/img/icons/" + Vicon + ".png";
        var VtempF = (response.data[4].temp);

        $(Vimg).attr("src", ViconURL);
        $(Vdesc).text(response.data[4].weather.description);
        $(Vmain).text(VtempF.toFixed(0) + "F");
        $(Vdate).text(response.data[4].datetime);

        $(area).text(response.city_name);
        console.log(area);
        console.log(response.country_code)
        input.value = "";
    })
})