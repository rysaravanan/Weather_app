$(document).ready(function(){
var latitude, longitude, api,city, country,cel,far,temp,forecast,icon,windspeed,desc,pressure,humidity;
  
  if(navigator.geolocation) {       
navigator.geolocation.getCurrentPosition(function(position){
            
  latitude = position.coords.latitude;
  longitude = position.coords.longitude;
             
    api = "https://fcc-weather-api.glitch.me/api/current?lat=" +latitude +"&lon="+longitude ;
   
$("#weather").click(function() {    $.ajax({url:api,dataType:'jsonp',success:function(data){      
  city = data.name;
  country = data.sys.country;  
  temp = data.main.temp;
  cel = temp.toFixed(1);
  far = (temp * (1.8) + 32).toFixed(1); 
  windspeed =data.wind.speed.toFixed(2);
  desc=data.weather[0].description;
  forecast = data.weather[0].main;
  icon = data.weather[0].icon;
  pressure=data.main.pressure;             
  humidity=data.main.humidity;                                         
$("#location").text("Location: " +city+","+country);
$("#temp").text("Temperature: " +cel + "°C");
$("#forecast").html( forecast +"<img src=" + icon +">");
$("#desc").text("Description: " + desc);
$("#pressure").text("Pressure:" +pressure+ " Pa");                  
$("#humidity").text("Humidity:" +humidity + "%");                       
$("#windspeed").text("Windspeed: " + windspeed + " Kmph");        
       
$("#convert").click(function() {
    $(this).text($(this).text() == "Convert to Farenheit" ? "Convert to Celsius" : "Convert to Farenheit");                              
    $("#temp").text($("#temp").text() == "Temperature: " + far + "°F" ? "Temperature: " + cel + "°C" : "Temperature: " + far + "°F" );                             });
                                    
 switch(forecast) { 
         case "Thunderstorm":$("body").css("background-image","url('http://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/14/2016/06/lightning.jpg')");
          break;
        
          case "Drizzle": $("body").css("background-image","url('https://c2.staticflickr.com/8/7393/11375147803_0f453d8676_b.jpg')");     
          break;
     
          case "Clouds": $("body").css("background-image","url('http://cliparts.co/cliparts/8Tz/rp5/8Tzrp5zyc.jpg')");     
          break;
          
          case "Rain": $("body").css("background-image","url('http://weknowyourdreams.com/images/rain/rain-04.jpg')");     
          break;
     
          case "Snow": $("body").css("background-image","url('http://hdlatestwallpaper.com/?edmc=12210')");     
          break;
     
          case "Haze": $("body").css("background-image","url('http://www.todayonline.com/sites/default/files/styles/photo_gallery_image_lightbox/public/photos/43_images/23581922.jpg?itok=ufee66e3')");     
          break;
     
          case "Clear": $("body").css("background-image","url('https://blakewd.files.wordpress.com/2015/02/sunny-day-wallpaper.jpg')");     
          break;
     
          case "Sunny": $("body").css("background-image","url('http://www.twincities.com/wp-content/uploads/2015/10/wpid-20140618__140618_hot_skybox.jpg?w=599')");     
          break;
     
          case "Mist": $("body").css("background-image","url('https://upload.wikimedia.org/wikipedia/commons/0/0d/Kraftwerk_im_Dunst.jpg')");     
          break;
   }
       }
          });
               });
                   });
                       }
}); 