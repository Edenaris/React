import React from 'react';
import PropTypes from 'prop-types';
import searchIcon from '../img/fe_search.svg';
import avatar from '../img/Ellipse2.png';
HeaderLog.propTypes = {
    
};

function HeaderLog(props) {
    const testFunk = (Masange) =>{
        return alert(`Your ${Masange}`);
    }
    const callFunk = () =>{
        testFunk('Hi');
    }
    if (props.isLog){
        return(
            <div className="right">
                <button className="search-button">
                    <img src={searchIcon} alt="Search Icon" />
                </button>
                <img onClick={callFunk} src={avatar} alt="Avatar" className="avatar" />
            </div>
        );
    }else{
        return(
            <div className="right">
                <button className="search-button">
                    <img src={searchIcon} alt="Search Icon" />
                </button>
                <button className="login-button">
                    Login
                </button>
            </div>
        );
    }
}

export default HeaderLog;