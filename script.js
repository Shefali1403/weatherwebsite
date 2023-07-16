const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f5ef62a4bemshcfa47c89ba11ff1p1e1619jsndd596a950ada',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
async function getdata(city){
   let text1=document.getElementById("text1");
   // cityname.innerHTML=city; 

try {
   const response = await fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options);
   const result = await response.json();
   console.log(result);
   text1.innerHTML=result.temp;
   document.getElementById('max_temp').innerHTML=result.max_temp;
   document.getElementById('min_temp').innerHTML=result.min_temp;
   document.getElementById('humidity').innerHTML=result.humidity;
   document.getElementById('wind_speed').innerHTML=result.wind_speed;
}
catch (error) {
   console.error(error);
}
};
let box2=document.querySelectorAll('.box2');
Array.from(box2).forEach((boxe)=>{
   boxe.addEventListener("click", (e)=>{
      // console.log(e.target.innerHTML); 
      getdata(e.target.innerHTML);
   });
});
let boxt=document.querySelectorAll('.boxt');
Array.from(boxt).forEach((box)=>{
   box.addEventListener("click", (e)=>{
      // console.log(e.target.innerHTML); 
       getdata(e.target.innerHTML);
   })
   
})
console.log('hello');
let cityname=document.getElementById("cityname");
let button=document.getElementById("but");
button.addEventListener("click" ,(e)=>{
    e.preventDefault(); 
   getdata(cityname.value);
});
getdata("Delhi");