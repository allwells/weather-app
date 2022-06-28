import React from 'react'

/**
 * This function component is the weather card.
 * It displays all information about the weather in a particular city.
 *
 * @param {object} weather - The object returned from the result of the search which contains the weather details.
 * @returns HTML components (Weather card containing weather details)
 */
const Weather = ({ weather }) => {
  /**
   * A condition for displaying the weather details.
   * @if the weather details are available:
   * - return all weather details gotten,
   * - @else return 'null'.
   * @null means nothing.
   */
  if (weather) {
    /**
     * This variable converts the localtime in the specified city to a date variable and then holds that data.
     *
     * @var {date} date - The localtime in the specified city.
     */
    const date = new Date(weather.location.localtime)

    return (
      <div className="weather-card">
        <div className="weather-details-section">
          {/**
           * LOCATION/CITY that was spcified in the search input.
           *
           */}
          <h1 className="location">Weather in {weather.location.name}</h1>

          <table>
            <tbody>
              {/**
               * WEATHER DESCRIPTION in the specified city.
               *
               */}
              <tr className="weather-description">
                <td className="table-heading">Description:</td>
                <td>{weather.current.condition.text}</td>
              </tr>

              {/**
               * The LOCALTIME in the specified city.
               *
               */}
              <tr className="local-time">
                <td className="table-heading">Local Time:</td>
                <td>{date.toUTCString().slice(17, 22)}</td>
              </tr>

              {/**
               * The DATE in the specified city.
               *
               */}
              <tr className="local-time">
                <td className="table-heading">Date:</td>
                <td>{date.toUTCString().slice(0, 16)}</td>
              </tr>

              {/**
               * The TEMPERATURE in the specified city recorded in degree celcius.
               *
               */}
              <tr className="temperature">
                <td className="table-heading">Temperature:</td>
                <td>{weather.current.temp_c}°C</td>
              </tr>

              {/**
               * The WIND speed in the specified city.
               *
               */}
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
          {/**
           * WEATHER ICON in the specified city.
           *
           */}
          <img
            className="weather-icon"
            src={weather.current.condition.icon}
            alt={'weather icon'}
            width={250}
            height={250}
          />
        </div>
      </div>
    )
  } else {
    return null
  }
}

/**
 * Before any React component/function is used in another component/function,
 * it is first exported.
 *
 */
export default Weather
