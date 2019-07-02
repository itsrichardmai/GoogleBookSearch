import React from "react";

function SearchBook(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-input"
          placeholder="Search for book on Google"
          id="search"
        />
        <button onClick={props.handleFormSubmit} className="search-button">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchBook;