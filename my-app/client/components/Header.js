import React from 'react';

function Header () {
    return (

        <div className="header-flex-container">
            <h3>Google Books Logo</h3>
            <a href="/search">Search</a>
            <a href="/saved">Saved</a>
        </div>
    );
}


export default Header;