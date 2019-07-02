import React from 'react';
import Header from './Header';
import Welcome from './Welcome';
import BookSearchContainer from './BookSearchContainer';

function SearchPage (){
    return (
        <div>
            <Header />
            <div className="mid-flex-container">
                <Welcome />
                <BookSearchContainer />
            </div>
        </div>
    )
}
export default SearchPage;
