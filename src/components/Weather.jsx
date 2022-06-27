import React from "react";

const Weather = ({ weather }) => {
  if (weather) {
    const date = new Date(weather.location.localtime);
    return (
      <div className="weather-card">
        <div className="weather-details-section">
          <table>
            <h1 className="location">Weather in {weather.location.name}</h1>

            <tbody>
              <tr className="weather-description">
                <td className="table-heading">Description:</td>
                <td>{weather.current.condition.text}</td>
              </tr>

              <tr className="local-time">
                <td className="table-heading">Local Time:</td>
                <td>{date.toUTCString().slice(17, 22)}</td>
              </tr>

              <tr className="local-time">
                <td className="table-heading">Date:</td>
                <td>{date.toUTCString().slice(0, 16)}</td>
              </tr>

              <tr className="temperature">
                <td className="table-heading">Temperature:</td>
                <td>{weather.current.temp_c}°C</td>
              </tr>

              <tr className="wind-speed">
                <td className="table-heading">Wind:</td>
                <td>
                  {weather.current.wind_mph}mph {weather.current.wind_dir}
                </td>
              </tr>
            </tbody>
          </table>
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
