export async function getWeatherData(lat, lon){
    const apiUrl=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=d7ea080d65be6fce608649a5d97297ae`

    
    let response = await fetch(apiUrl) 
    
    response = await response.json()
    
    return response
}

export async function getWeatherDataCityName(cityName){
    const apiUrl2 = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=d7ea080d65be6fce608649a5d97297ae`

    let response = await fetch(apiUrl2) 
    
    response = await response.json()
    
    return response

}


