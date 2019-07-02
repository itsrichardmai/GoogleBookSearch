import React from 'react';
import SearchBook from './SearchBook';
import ResultsList from './ResultsList';
import API from '../utils/API';

class BookSearchContainer extends React.Component {

    constructor() {
        super();
        this.state = {
            search: "",
            results: []
        }
    }

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    };

    // When the form is submitted, search the Giphy API for `this.state.search`
    handleFormSubmit = event => {
        event.preventDefault();
        this.searchBook(this.state.search);
    };

    searchBook = searchItem => {
        console.log("In the search item!");
        this.setState({
            results: []
        });
        
        API.search(searchItem).then((bookResults) => {
            console.log(bookResults.data);

            this.setState({
                results: bookResults.data.items
            })
        });
    }
    render() {

        return (
            <div>
                <div className="welcome"><h1>Book Search: </h1>
                    <h1>This is the test input: {this.state.search}</h1>
                    <SearchBook
                        search={this.state.search}
                        handleFormSubmit={this.handleFormSubmit}
                        handleInputChange={this.handleInputChange}
                    />
                </div>

                <div className="welcome">
                    <ResultsList results={this.state.results} />
                </div>
            </div>
        )
    }
}
export default BookSearchContainer;
