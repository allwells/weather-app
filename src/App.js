import React, { useState } from 'react'

/**
 * @SearchForm is a React component that returns the search form.
 *
 */
import SearchForm from './components/SearchForm'
/**
 * @Weather is a component that returns the weather datails in a card.
 *
 */
import Weather from './components/Weather'
/**
 * @axios is a javascript library used to fetch data from an API (Application Programming Interface)
 *
 */
import axios from 'axios'

/**
 * This function/component contains all the data used in this application.
 * This function/React component imports all those other exported components.
 *
 *
 * @returns HTML components
 */
const App = () => {
  const [city, setCity] = useState('')
  const [weather, setWeather] = useState()
  const [errorMsg, setErrorMsg] = useState(false)

  /**
   * @API_KEY this is the API key used for authentication in order to fetch data from the particular API.
   *
   */
  const API_KEY = '76df88098c544693a0b133409222706'

  const options = {
    url: '/v1/current.json',
    method: 'get',
    baseURL: 'https://api.weatherapi.com',
    headers: { 'Access-Control-Allow-Origin': '*' },
    params: { key: API_KEY, q: city },
  }

  const search = (event) => {
    event.preventDefault()

    /**
     * Here @axios gets the data from the @URL in the options and @then pushes all of that data
     * to @setWeather object which can then be accessed using the @weather variable.
     *
     * If there was an error and the data was not fetched,
     * @axios will then @catch the error, set the @setErrorMsg varaible to @true in order to display the error.
     * And then after 5000ms => 5s, the @setErrorMsg variable is set to @false to remove the error message.
     *
     */
    axios
      .request(options)
      .then(function (response) {
        setWeather(response.data)
      })
      .catch(function (error) {
        setErrorMsg(error.message)

        setTimeout(function () {
          setErrorMsg('')
        }, 5000)
      })
  }

  /**
   * This function handles the values that are typed into the search input.
   * It takes those values and then assign them to @city using the @setCity method.
   *
   */
  const searchOnChange = (event) => {
    setCity(event.target.value)
  }

  return (
    <div className="app">
      <div className="tint">
        <div className="main-layout">
          {/**
           * @SearchForm component is called here.
           *
           */}
          <SearchForm
            search={search}
            city={city}
            searchOnChange={searchOnChange}
          />

          {/**
           * This is a ternary operation. It is more like the if else conditional statement.
           * E.G.: expression ? execute this if @true : execute this if @false
           *
           * @errorMsg is a boolean variable that is changed to @true whenever there is an error.
           * If @errorMsg is @true then it'll display an error message.
           * If @false then it'll display the weather details.
           *
           */}
          {errorMsg ? (
            <div className="error-msg">
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              {errorMsg}
            </div>
          ) : null}

          <Weather weather={weather} />
        </div>
      </div>
    </div>
  )
}

export default App
