const url = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Delhi?unitGroup=metric&include=days%2Ccurrent&key=3WHJXXSX9XUK3B5BJ23GDP4ES&contentType=json';
const options = {
	method: 'GET',
	headers: {
		
	}
};
const sunUrl = "sun.jpg"
const rainUrl = "rain.jpg"

try {
   
        
    
	const response = await fetch(url, options)
    .then(response => response.json())
    .then((response) => {
        console.log(response)
        // min_temp.innerHTML = response.days[0].temp;
        min_temp1.innerHTML = response.days[0].temp;
        humidity.innerHTML = response.days[0].humidity;
        windSpeed.innerHTML = response.days[0].windspeed;
        weatherCondition.innerHTML = response.days[0].conditions;
        DateTime.innerHTML = response.days[0].datetime;
        datetime1.innerHTML = response.days[0].datetime;
        // icon.innerHTML = response.days[0].icon;
        cond.innerHTML = response.days[0].description;

        day1.innerHTML = response.days[1].datetime;
        day3.innerHTML = response.days[3].datetime;
        day4.innerHTML = response.days[4].datetime;
        day5.innerHTML = response.days[5].datetime;
        day6.innerHTML = response.days[6].datetime;
        day7.innerHTML = response.days[7].datetime;
        day2.innerHTML = response.days[2].datetime;

        min_temp2.innerHTML = response.days[1].temp;
        min_temp3.innerHTML = response.days[2].temp;
        min_temp4.innerHTML = response.days[3].temp;
        min_temp5.innerHTML = response.days[4].temp;
        min_temp6.innerHTML = response.days[5].temp;
        min_temp7.innerHTML = response.days[6].temp;
        min_temp8.innerHTML = response.days[7].temp;

        const icon = response.days[0].icon;
        if(icon == "rain"){
            document.getElementById("icony").src = "images/rain3.jpg";
        }
        else if(icon == "clear-day"){
            document.getElementById("icony").src = "images/sun1.jpg";
        }
    
        else {
            document.getElementById("icony").src = "images/cloudy.jpg";
        }

        const icon1 = response.days[1].icon;
        if(icon1 == "rain"){
            document.getElementById("icony1").src = "images/rain3.jpg";
        }
        if(icon1 == "clear-day"){
            document.getElementById("icony1").src = "images/sun1.jpg";
        }
    
        else {
            document.getElementById("icony1").src = "images/cloudy.jpg";
        }

        
        const icon2 = response.days[2].icon;
        if(icon2 === "rain"){
            document.getElementById("icony2").src = "images/rain3.jpg";
        }
        if(icon2 == "clear-day"){
            document.getElementById("icony2").src = "images/sun1.jpg";
        }
    
        else {
            document.getElementById("icony2").src = "images/cloudy.jpg";
        }

        const icon3 = response.days[3].icon;
        if(icon3 === "rain"){
            document.getElementById("icony3").src = "images/rain3.jpg";
        }
        if(icon3 == "clear-day"){
            document.getElementById("icony3").src = "images/sun1.jpg";
        }
    
        else {
            document.getElementById("icony3").src = "images/cloudy.jpg";
        }

        const icon4 = response.days[4].icon;
        if(icon4 === "rain"){
            document.getElementById("icony4").src = "images/rain3.jpg";
        }
        if(icon4 == "clear-day"){
            document.getElementById("icony4").src = "images/sun1.jpg";
        }
    
        else {
            document.getElementById("icony4").src = "images/cloudy.jpg";
        }

        const icon5 = response.days[5].icon;
        if(icon5 === "rain"){
            document.getElementById("icony5").src = "images/rain3.jpg";
        }
        if(icon5 == "clear-day"){
            document.getElementById("icony5").src = "images/sun1.jpg";
        }
    
        else {
            document.getElementById("icony5").src = "images/cloudy.jpg";
        }

        const icon6 = response.days[6].icon;
        if(icon6 === "rain"){
            document.getElementById("icony6").src = "images/rain3.jpg";
        }
        if(icon6 == "clear-day"){
            document.getElementById("icony6").src = "images/sun1.jpg";
        }
    
        else {
            document.getElementById("icony6").src = "images/cloudy.jpg";
        }

        const icon7 = response.days[7].icon;
        if(icon7 === "rain"){
            document.getElementById("icony7").src = "images/rain3.jpg";
        }
        if(icon7 == "clear-day"){
            document.getElementById("icony7").src = "images/sun1.jpg";
        }
    
        else {
            document.getElementById("icony7").src = "images/cloudy.jpg";
        }
        
        

        
    
        

})
	const result = await response.json();//text
    
	console.log(result);
    console.log(response)

} catch (error) {
	console.error(error);
}