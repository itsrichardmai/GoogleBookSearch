const db = require("../models/");
const axios = require("axios");
const booksController = require("../controller/booksController");

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const APIKEY = ":keyes&key=" + process.env.REACT_APP_BOOKS_API;

module.exports = function(app) {

    //Search for books
    app.post("/search", (req, res) => {
        axios.get(BASEURL + req.body.searchItem + APIKEY).then( (searchResult) => {
            console.log(searchResult.data);
            res.json(searchResult.data);
        });
    });
}