import React, { useState } from "react";

import SearchForm from "./components/SearchForm";
import Weather from "./components/Weather";
import axios from "axios";

const App = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState();
  const [errorMsg, setErrorMsg] = useState("");

  const API_KEY = "76df88098c544693a0b133409222706";
  const URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`;

  const search = (event) => {
    event.preventDefault();

    axios
      .get(URL)
      .then((response) => {
        setWeather(response.data);
      })
      .catch(function (error) {
        setErrorMsg(error.message);

        setTimeout(function () {
          setErrorMsg("");
        }, 5000);
      });
  };

  const searchOnChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <div className="app">
      <div className="tint">
        <div className="main-layout">
          <SearchForm
            search={search}
            city={city}
            searchOnChange={searchOnChange}
          />

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
//               Error: Invalid country or city! Check your input and try again.
            </div>
          ) : null}

          <Weather weather={weather} />
        </div>
      </div>
    </div>
  );
};

export default App;
