import React from 'react'

/**
 * This function component is responsible for the form display.
 * It displays the form and also takes in 3 arguments.
 *
 * @param {function} search          - The function to execute when the form is submitted.
 * @param {string}   city            - The city which is gotten from the form input field.
 * @param {function} searchOnChange  - The function that updates the state of the value inputed in the form input.
 * @returns HTML components (Search form)
 */
function SearchForm({ search, city, searchOnChange }) {
  return (
    <form className="search-form" onSubmit={search}>
      {/**
       *
       * This is the form input where the search term is typed.
       *
       */}
      <input
        className="search-input"
        value={city}
        onChange={searchOnChange}
        placeholder="Search city..."
      />

      {/**
       *
       * This is the button used to submit the form.
       * The form can also be submitted using the 'Enter' key on your keyboard.
       */}
      <button type="submit" className="search-btn">
        <svg
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
    </form>
  )
}

/**
 * Before any React component/function is used in another component/function,
 * it is first exported.
 *
 */
export default SearchForm
