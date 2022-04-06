var button = document.querySelector(".button");
var inputValue = document.querySelector(".inputvalue");
var name = document.querySelector(".name");
var desc = document.querySelector(".desc");
var temp = document.querySelector(".temp");


button.addEventListener("click", function(){
    
fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=b8987c4247768bb3dc27b10dddb464d4')
.then(response => response.json())
.then(data => {
    var nameValue = data["name"];
    var tempValue = data["main"]["temp"];
    var descValue = data["weather"][0]["description"];

  name.innerHTML = nameValue;
  temp.HTML = tempValue;
  desc.HTML = descValue;
   
})
.catch(err => alert("Can't Find City"))
})