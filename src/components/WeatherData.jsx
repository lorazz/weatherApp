import { useEffect, useState } from "react";
import {
  getWeatherData,
  getWeatherDataCityName,
} from "../ApiCalls/Api";
import Temperature from "./Temperature";

//icons https://openweathermap.org/img/wn/04n@2x.png

function WeatherData() {
  const [lat, setLat] = useState("27.97");
  const [lon, setLon] = useState("153.38");
  const [city, setCity] = useState("Gold Coast");
  const [country, setCountry] = useState("");
  const [temp, setTemp] = useState("");
  const [useCity, setUseCity] = useState(false);
  const [weatherData, setWeatherData] = useState("");
  const [icon, setIcon] = useState("");

  function handleLat(event) {
    setLat(event.target.value);
  }
  function handleLon(event) {
    setLon(event.target.value);
  }
  async function sendApiRequest() {
    let response;
    if (useCity == true) {
      response = await getWeatherDataCityName(city);
    } else {
      response = await getWeatherData(lat, lon);
    }
    console.log(response);
    setTemp(response.main.temp);
    setCity(response.name);
    setCountry(response.sys.country);
    setWeatherData(response.weather[0].description);
    setIcon(response.weather[0].icon);
  }
  // function kelvinToFar(kelvin){
  //     let toFar = (kelvin-273.15) * (9/5) + 32
  //     return toFar.toFixed(2)
  // }
  // function kelvinToCel(kelvin){
  //     let toCelc = (kelvin - 273.15)
  //     return toCelc.toFixed(2)
  // }
  function handleSetCity(city) {
    setCity(city.target.value);
  }
  function weatherIcon(icon) {
    return (
      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        className="w-50 h-50"
      />
    );
  }

  useEffect(() => {
    sendApiRequest();

  }, []);

  return (
    <>
      <section className="h-[100vh] bg-blue-100 flex flex-col  items-center gap-[20px] pt-5">
        <div className="flex gap-[40px]">
          <button
            onClick={() => setUseCity(false)}
            className="p-2 rounded active:bg-blue-200 focus:outline-non focus:shadow-md focus:shadow-blue-200"
          >
            Weather by Geocoordinate
          </button>
          <button
            onClick={() => setUseCity(true)}
            className="p-2 rounded active:bg-blue-200 focus:outline-non focus:shadow-md focus:shadow-blue-200"
          >
            Weather by City Name
          </button>
        </div>
        <div className="bg-white p-15 rounded-2xl h-[20vh] flex flex-col justify-center gap-[20px]">
          {useCity ? (
            <div>
              <label>City Name: </label>
              <input
                className="border-black/20 border-[1px] rounded p-1"
                onChange={(city) => handleSetCity(city)}
                value={city}
              />
            </div>
          ) : (
            <div className="h-[10vh] flex flex-col justify-center gap-[20px]">
              <div className="flex gap-[10px] ">
                <label>Latitude: </label>
                <input
                  className="border-black/20 border-[1px] rounded p-1"
                  onChange={(event) => handleLat(event)}
                  value={lat}
                ></input>
              </div>
              <div className="flex gap-[10px]">
                <label>Longitude: </label>
                <input
                  className="border-black/20 border-[1px] rounded p-1"
                  onChange={(event) => handleLon(event)}
                  value={lon}
                ></input>
              </div>
            </div>
          )}
          <button onClick={sendApiRequest} className="px-.05 py-1 rounded p-1 active:bg-blue-200 hover:bg-blue-100">Send request</button>
        </div>
        {/* <div className="h-[10vh]">hello

            </div> */}
        <div className="flex flex-col h-[40vh] w-[300px] rounded-2xl p-5 bg-white">
          <div className="flex flex-col gap-[5px] items-center">
            <h2>
              {city}, {country}
            </h2>
            <p>{weatherData}</p>
            <p>{weatherIcon(icon)}</p>
          </div>
          <Temperature kelvin={temp} />
          {/* <div className="flex gap-[20px] justify-center text-center">
                    <div>
                        <p>{temp ?temp : "0"}</p>
                        <p>Kelvin</p>
                    </div>
                    <div>
                        {kelvinToFar(temp) ? kelvinToFar(temp) : "0"}  
                        <p>Farenheit</p>
                    </div>
                    <div>
                        {kelvinToCel(temp) ? kelvinToCel(temp) : "0"}   
                        <p>Celcius</p>
                    </div>
                </div> */}
        </div>
        <div className="h-[10vh]"></div>
      </section>
    </>
  );
}

export default WeatherData;
