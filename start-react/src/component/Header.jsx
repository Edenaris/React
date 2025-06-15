import React from 'react';

import netflixLogo from '../img/netflix-logo-png-2562.png';
import searchIcon from '../img/fe_search.svg';
import avatar from '../img/Ellipse2.png';

const Header = () => {
    return (
        <header>
            <div className="left">
                <img src={netflixLogo} alt="Netflix Logo" />
                <p>Friday July 8th</p>
            </div>
            <div className="right">
                <button className="search-button">
                    <img src={searchIcon} alt="Search Icon" />
                </button>
                <img src={avatar} alt="Avatar" className="avatar" />
            </div>
        </header>
    );
};

export default Header;