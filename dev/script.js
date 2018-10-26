function init() {


  //console.log('start animation');



  var unitIsF = true;
  var degrees = {true:{unit:"F", value:0}, false:{unit:"C", value:0}};

  function processJSON(data) {
    console.log(data);
    var i;
    var htmls = '';
    var city = data.city.name + ', ' + data.city.country;
    //
    
      for (i = 0; i < 40; i+=4) { 

        degrees[true].value = Math.round(convertDegrees(data.list[i].main.temp, true));
        degrees[false].value = Math.round(convertDegrees(data.list[i].main.temp, false));
        var description = capitalize(data.list[i].weather[0].main);

        // ICONS
        var icon = data.list[i].weather[0].icon;
        //console.log(icon);
        var iconImage = 'url(\'http://openweathermap.org/img/w/'+ icon +'.png\')';
        var mode    = 'lighten';
        var filter  ='';
        var night   ='';
        var thoughts = '';

        var partlySunny   = 'https://media.giphy.com/media/3ogwG0cKu7x87xU6VG/giphy.gif'
        var sunnyHot      = 'https://media.giphy.com/media/107KlThVAe0M0w/giphy.gif'
        var sunnyClear    = 'https://media.giphy.com/media/jk9L41aToGZQA/giphy.gif'
        var starsBig      = 'https://media.giphy.com/media/l1J3rGigrYfx8aKqI/giphy.gif';
        var stars         = 'https://media.giphy.com/media/U3qYN8S0j3bpK/giphy.gif';
        var moon          = 'https://media.giphy.com/media/wYWV4zB7xmx0Y/giphy.gif'
        var moonClouds    = 'https://media.giphy.com/media/qgtRkugErgIxy/giphy.gif'
        //var rainy       = 'https://media.giphy.com/media/t7Qb8655Z1VfBGr5XB/giphy.gif';
        var rainUp        = 'https://media.giphy.com/media/KtSOan0Ue0yS4/giphy.gif';
        var lightClouds   = 'https://media.giphy.com/media/103yP2g58mcH4s/giphy.gif';
        var heavyClouds   = 'https://media.giphy.com/media/Cn46Wi1Fvh11S/giphy.gif';
        var rainSun       = 'https://media.giphy.com/media/PLJzdMVafDLTW/giphy.gif';
        var rainSunClouds = 'https://media.giphy.com/media/120VGDQhsbiHa8/giphy.gif';
        var flower        = 'https://media.giphy.com/media/2seaKlqqoGglLcPH2Q/giphy.gif';
        // var flower     = 'https://media.giphy.com/media/XEhGKZ7pXZJTi/giphy.gif';
        var thunder       = 'https://media.giphy.com/media/ykLwVO2f3afWU/giphy.gif';
        var thunderNight  = 'https://media.giphy.com/media/3oEjHB1EKuujDjYFWw/giphy.gif';
        var snowOverlay   = 'https://media.giphy.com/media/PkaZUCdVm2c5G/giphy.gif';


        

        
        // clear
        if (icon === "01d") {
          iconImage =  'url(\''+ partlySunny +'\'), ';
          iconImage += 'url(\''+ sunnyClear+'\')    ';
          mode = 'screen';
          thoughts = 'The Sun will be hard to ignore';
        } 
        if (icon === "01n") {
          iconImage =  'url(\''+ moon +'\'),';
          iconImage += 'url(\''+ starsBig+'\')    ';
          mode = 'screen';
          night = 'night';
          thoughts = 'You should be able to see stars';
        }

        // // sunny HOT
        // if (icon === "01d") { // write if temp above 80
        //   iconImage =  'url(\''+ sunnyHot +'\'),';
        //   iconImage += 'url(\''+ sunnyClear+'\')    ';
        //   mode = 'color-dodge';
        // }

        // partly sunny
        if (icon === "02d") {
          iconImage = 'url(\''+ sunnyClear+'\'),  ';
          iconImage +=  'url(\''+ lightClouds +'\') ';
          mode = 'screen';
          thoughts = 'The Sun will shine, or not';
        }
        if (icon === "02n") {
          iconImage =  'url(\''+ stars +'\'),';
          iconImage += 'url(\''+ moonClouds+'\')    ';
          mode = 'screen';
          night = 'night';
          thoughts = 'The stars appear to be twinkling';
        } 

        //clouds
        if (icon === "03d") {
          iconImage = 'url(\''+ lightClouds+'\'),  ';
          iconImage +=  'url(\''+ flower +'\') ';
          mode = 'screen';
          thoughts = 'I hope you like grey';
        }
        if (icon === "03n") {
          iconImage =  'url(\''+ lightClouds +'\'),';
          iconImage += 'url(\''+ moonClouds+'\')    ';
          mode = 'overlay';
          night = 'night';
          thoughts = 'It\'s not bad outside, just dark'
        } 

        // broken clouds
        if (icon === "04d") {
          iconImage = 'url(\''+ lightClouds+'\'),  ';
          iconImage +=  'url(\''+ flower +'\') ';
          mode = 'overlay';
          filter = 'hue-rotate(30deg) saturate(0.4)';
          thoughts = 'Don\'t worry, the sun is still there'
        } 
        if (icon === "04n") {
          iconImage = 'url(\''+ heavyClouds+'\'),  ';
          iconImage +=  'url(\''+ flower +'\') ';
          mode = 'hard-light';
          night = 'night';
          thoughts = 'It\'s really dark outside in the country,<br>or really bright in the city'
        } 

        // scattered rain
        if (icon === "09d") {  
          iconImage = 'url(\''+ rainSun+'\'),  ';
          iconImage +=  'url(\''+ rainSunClouds +'\') ';
          mode = 'screen';
          thoughts = 'A lil rainy'
        }
        if (icon === "09n") {
          iconImage = 'url(\''+ heavyClouds+'\'),  ';
          iconImage +=  'url(\''+ rainUp +'\') ';
          mode = 'hard-light';
          night = 'night';
          thoughts = 'It\'s wet ouside';
        }

        // rain
        if (icon === "10d") {
          iconImage = 'url(\''+ flower+'\'),  ';
          iconImage +=  'url(\''+ rainUp +'\') ';
          mode = 'hard-light';
          filter = 'hue-rotate(40deg) saturate(0.3)';
          thoughts = 'You\'ll want an umbrella, and a towel';
        }
        if (icon === "10n") {
          iconImage = 'url(\''+ flower+'\'),  ';
          iconImage +=  'url(\''+ rainUp +'\') ';
          mode = 'hard-light';
          night = 'night';
          thoughts = 'You can still go bowling';
        }

        // thunderstorm
        if (icon === "11d") {
          iconImage = 'url(\''+ thunder+'\'),  ';
          iconImage +=  'url(\''+ rainUp +'\') ';
          mode = 'screen';
          thoughts = 'It\'s scary out';
        }
        if (icon === "11n") {
          iconImage = 'url(\''+ thunderNight+'\'),  ';
          iconImage +=  'url(\''+ rainUp +'\') ';
          mode = 'soft-light';
          night = 'night';
          thoughts = 'It\'s dark and scary out';
        }

        // snow
        if (icon === "13d") {
          iconImage = 'url(\''+ flower+'\'),  ';
          iconImage +=  'url(\''+ snowOverlay +'\') ';
          mode = 'screen';
          filter = 'hue-rotate(190deg) saturate(0.33)';
          thoughts = 'Fluffy rain';
        }
        if (icon === "13n") {
          iconImage = 'url(\''+ flower+'\'),  ';
          iconImage +=  'url(\''+ snowOverlay +'\') ';
          mode = 'soft-light';
          night = 'night';
          thoughts = 'Your car will be white in the morning';
        }


        // data date – not used, easier to jusr start from today rather than caluclate what IS today based on 3 hour interval
        var str = data.list[i].dt_txt;
        // format date
        let current = new Date();

        current.setDate(current.getDate() + i/8);
        let dateLabel = current.toLocaleDateString('en-US',{weekday: 'long'});
        let dateDay = current.toLocaleDateString('en-US',{day: '2-digit'});

        function ordinal_suffix_of(dateDay) {
            var j = dateDay % 10,
                k = dateDay % 100;
            if (j == 1 && k != 11) {
                return dateDay + "st";
            }
            if (j == 2 && k != 12) {
                return dateDay + "nd";
            }
            if (j == 3 && k != 13) {
                return dateDay + "rd";
            }
            return dateDay + "th";
        }

        // construct html for formatted vdate <span class="the">the</span> 
        var finalDate = dateLabel+'</span> <span class="day"> '+ordinal_suffix_of(dateDay);

        // remove zero if date begins with 0
        if (finalDate.match(/[^>]+[0-0]{1,3}[1-9]{1,9}/) ){
            finalDate = finalDate.replace( '0', '');
        }

        //console.log(finalDate);


        htmls += '  <div class="col-xs-6 text-center weatherbox glide__slide '+night+'" >'; //<div class="background-fix"></div> 
        //htmls += '    <div class="city">'+city+'</div>';
        htmls += '    <div class="date"><span class="weekday">'+finalDate+'</span></div>';
        htmls += '    <div class="temp"><button class="degree btn">'+degrees[unitIsF].value + "°" + degrees[unitIsF].unit+'</button></div>';
        //htmls += '    <div class="icon">'+iconImage+'</div>';
        htmls += '    <div class="icon"><div class="img" style="background-image:'+iconImage+'; background-blend-mode:'+mode+'; filter:'+filter+'"></div></div>';
        htmls += '    <div class="description">'+description+'</div>';
        htmls += '    <div class="description thoughts">'+thoughts+'</div>';
        htmls += '  </div>'; 
        
        $(".dom-inject").html(htmls);  



    }
    setTimeout(function(){ 
          new Glide('#Glide').mount();
          $("body").append('<div class="cityHeading">///<span class="at">@</span><h1>'+city+'</h1></div>');  
    }, 200);
  }

  function processGeoData(position)  {
    var url = "https://api.openweathermap.org/data/2.5/forecast?"; 

    // This is MY api key, please create your own API key here https://api.openweathermap.org
    var req = url + "lat="+position.latitude + "&lon=" + position.longitude + "&APPID=b393e802f2e6474d96a95edfb4bd936d";
    // local testing only (comment out above code and run function)
    //var req = url + "lat=40.6870915&lon=-73.9608566&APPID=b393e802f2e6474d96a95edfb4bd936d";
   
    $.getJSON(req, processJSON);

  } 

  function convertDegrees(degrees, unitIsF) {
    if (!unitIsF)
      return degrees - 273.15;
      return degrees*1.8 - 459.67; // default to F
  }

  function capitalize(text) {
    return text[0].toUpperCase() + text.slice(1);
  }

  $(document).ready(function(){
    //processGeoData :

    $.getJSON("https://www.geoip-db.com/json/", processGeoData)
    .done(function() { console.log('geo located'); })
    .fail(function() { });        
    // local testing only (comment out above code and run function)
    //processGeoData();
    
    $("#degree").on('click', function() {
      console.log("switch");     
      unitIsF = !unitIsF;  
      $("#degree").html(degrees[unitIsF].value + "°" +  degrees[unitIsF].unit);   
    });



    if ( window.devicePixelRatio < 1.1){
      $('body').addClass('smallfonts');
    }

    
    



  }); // end doc ready

 

    function addHeight(){
        if ( !document.documentElement.clientHeight === window.innerHeight ){
            $('body').css('height', window.innerHeight+'px');
        } else { 
            $('body').css('height', window.innerHeight+'px'); 
        }
    }

    document.addEventListener("resize", addHeight);
    addHeight();


}
