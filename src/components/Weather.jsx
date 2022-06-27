import React from "react";

const Weather = ({ weather }) => {
  if (weather) {
    const date = new Date(weather.location.localtime);
    return (
      <div className="weather-card">
        <div className="weather-details-section">
          <h1 className="location">Weather in {weather.location.name}</h1>
          <p className="weather-description">
            <strong>Decription:</strong> {weather.current.condition.text}
          </p>
          <p className="local-time">
            <strong>Local Time:</strong> {date.toUTCString().slice(17, 22)}
          </p>
          <p className="local-time">
            <strong>Date:</strong> {date.toUTCString().slice(0, 16)}
          </p>
          <p className="temperature">
            <strong>Temperature:</strong> {weather.current.temp_c}°C
          </p>
          <p className="wind-speed">
            <strong>Wind:</strong> {weather.current.wind_mph}mph{" "}
            {weather.current.wind_dir}
          </p>
        </div>

        <div className="weather-icon-section">
          <img
            className="weather-icon"
            src={weather.current.condition.icon}
            alt={"weather icon"}
            width={250}
            height={250}
          />
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Weather;
