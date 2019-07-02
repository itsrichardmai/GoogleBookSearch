import React from 'react';

function ResultsList(props) {
  console.log("props In the return");
  console.log(props);
  const leBooks = (props) => {
    return props.map(item => console.log(item));
  }
  return (
    <>
    <h1>Results Page:</h1>
      <ul className="results-ul">
        {props.results.map(result => (
          <li className="results-li" key={result.id} data-id={result.id}>
            <img alt={result.volumeInfo.title} className="results-img" src={result.volumeInfo.imageLinks.thumbnail
            } />
            <p>{result.volumeInfo.description}</p>
            <a href={result.infoLink}>Link to Books</a>
          </li>
        ))}
      </ul>
    </>
  )
}

export default ResultsList;