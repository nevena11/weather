$(function(){
var currentPlace = null;
var lat, lon;

var input = document.getElementById('search1');
var autocomplete = new google.maps.places.Autocomplete(input);
var url="api.openweathermap.org/data/2.5/forecast/daily?lat={lat}&lon={lon}&cnt={cnt}";
  var key="4ffaf308cc9aeca85e4e7514613725bc";


autocomplete.addListener('place_changed', function() {
	currentPlace = autocomplete.getPlace();
	//console.log(currentPlace);
	lat = currentPlace.geometry.location.lat();
	lon = currentPlace.geometry.location.lng();

});

window.setWeather = function setWeather(currentPlace){
	$.ajax({
		url:"http://api.openweathermap.org/data/2.5/forecast/daily?units=metric&lat="+lat+"&lon="+lon+"&APPID="+key,
		type:'GET',
		error:function(data){
			alert("Error message");
		},
		success:function(data){
			$("#right").empty();
			console.log(data);
			for(var i = 0; i<7;i++){
			
			$("#right").append('<table id="tabela"> <tr> <td>' + (i+1) + '. dan </td> <td> <img src=http://openweathermap.org/img/w/' + data.list[i].weather[0].icon + '.png> </td> <td>' + 'Min: ' + data.list[i].temp.min.toFixed(1) + '</td> <td>' + 'Max: ' +data.list[i].temp.max.toFixed(1) + '</td> </tr> </table>');
			}
		}
	});
}

window.convert = function convert(currentPlace){
	$.ajax({
		url:"http://api.openweathermap.org/data/2.5/forecast/daily?lat="+lat+"&lon="+lon+"&APPID="+key,
		type:'GET',
		error:function(data){
			alert("Error message");
		},
		success:function(data){
			$("#right").empty();
			console.log(data);
			for(var i = 0; i<7;i++){
			
			$("#right").append('<table id="tabela"> <tr> <td>' + (i+1) + '. dan </td> <td> <img src=http://openweathermap.org/img/w/' + data.list[i].weather[0].icon + '.png> </td> <td>' + 'Min: ' + data.list[i].temp.min.toFixed(1) + '</td> <td>' + 'Max: ' +data.list[i].temp.max.toFixed(1) + '</td> </tr> </table>');
			}
		}
	});
}
});