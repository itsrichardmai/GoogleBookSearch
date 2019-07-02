import axios from "axios";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function(searchItem) {
        const search = {
            searchItem
        }
    return axios.post("/search", search, (bookResults) => {
      console.log(bookResults);
      return bookResults;
    });
  },
  save: function (query){
    console.log(query);
    const  bookObj = {
    }

  return  axios.post("/api/books", bookObj, (response) => {
      console.log(response);
    } )
  }
};
//https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=yourAPIKey
