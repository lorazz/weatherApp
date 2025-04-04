import React from "react";
function Temperature(props) {
  function kelvinToFar(k) {
    let toFar = (k - 273.15) * (9 / 5) + 32;
    return toFar.toFixed(2);
  }
  function kelvinToCel(k) {
    let toCelc = k - 273.15;
    return toCelc.toFixed(2);
  }

  return (
    <>
      <div className="flex gap-[20px] justify-center text-center">
        <div>
          <p>{props?.kelvin ? props?.kelvin : "0"}</p>
          <p>Kelvin</p>
        </div>
        <div>
          {kelvinToFar(props?.kelvin) ? kelvinToFar(props?.kelvin) : "0"}
          <p>Farenheit</p>
        </div>
        <div>
          {kelvinToCel(props?.kelvin) ? kelvinToCel(props?.kelvin) : "0"}
          <p>Celcius</p>
        </div>
      </div>
    </>
  );
}
export default Temperature;
