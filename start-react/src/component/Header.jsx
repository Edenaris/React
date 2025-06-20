import React from 'react';
import HeaderLog from './HeaderLog';
import netflixLogo from '../img/netflix-logo-png-2562.png';
import searchIcon from '../img/fe_search.svg';
import avatar from '../img/Ellipse2.png';

const Header = ({data}) => {

    return (
        <header>
            <div className="left">
                <img src={netflixLogo} alt="Netflix Logo" />
                <p>Friday July {data}</p>
            </div>
            <HeaderLog isLog={true}></HeaderLog>
        </header>
    );
};

export default Header;