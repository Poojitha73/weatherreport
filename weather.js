let form=document.querySelector("form")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let fetchData=async() =>{
        let key="497ce4864bd48d65b5dd66944529f918"
        let place=document.querySelector("#location").value 
        let data=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${key}`)
        let finalOutput=await data.json() 
        let finalCondition=(finalOutput.weather[0].main).toLowerCase()
        console.log(finalOutput)
        let temperature=document.querySelector("#temperature")
        let humidity=document.querySelector("#humidity")
        let finalTemp=Math.round(finalOutput.main.temp-273)
        let finalHumid=(finalOutput.main.humidity)
        temperature.innerHTML=`${finalTemp}<sup>0</sup>C`
        humidity.innerHTML=`${finalHumid}kmph`

        let weatherCondition=document.getElementById("weather_condition")
        weatherCondition.innerHTML=`${finalCondition}`
        console.log(weatherCondition)


        let weatherImage=document.getElementById("weather_img")
        let background=document.getElementById("main_container")
        switch(finalCondition){
            case "haze" :
                weatherImage.src="./assets/haze.jpg"
                background.style.backgroundImage="url(./assets/haze_back.jpg)"
                break;
            case "dust" :
                weatherImage.src="./assets/dust.webp"
                background.style.backgroundImage="url(./assets/dust_back.avif)"
                break;
                
            case "clouds":
                weatherImage.src="./assets/back_clouds.gif"
                background.style.backgroundImage="url(./assets/clouds_back.gif)"
                break;
            case "rain" :
                weatherImage.src="./assets/rain_drop.gif"
                 background.style.backgroundImage="url(./assets/back_rain_mid.webp)"
                 break;
            case "sunny" :
                weatherImage.src="./assets/rain_drop.gif"
                background.style.backgroundImage="url(./assets/back_rain_mid.webp)"
                break;
            case "sunny" :
                weatherImage.src="./assets/sunny_gif.gif"
                background.style.backgroundImage="url(./assets/back_sunny.gif)"
                break;
            case "snow" :
                weatherImage.src="./assets/rain_drop.gif"
                background.style.backgroundImage="url(./assets/back_rain_mid.webp)"
                break;
            case "clear" :
                weatherImage.src="./assets/images.jpeg"
                background.style.backgroundImage="url(./assets/images.jepg)"
                break;
            default:
                weatherImage.src="./assets/images.jepg"
                background.style.backgroundImage="url(./assets/images.jepg)"  
                

        }
        
    

            
        
    }
   fetchData()
})





// let api="https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}"