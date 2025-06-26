import React, { useState } from 'react';
import PropTypes from 'prop-types';
import searchIcon from '../img/fe_search.svg';
import avatar from '../img/Ellipse2.png';
HeaderLog.propTypes = {
    
};

function HeaderLog(props) {

    const [isVisibleForm, setIsVisibleForm] = useState(false); 
    const [textFromInput, setTextFromInput] = useState('');
    
    const testFunk = (Masange) =>{
        return alert(`Your ${Masange}`);
    }
    const callFunk = () =>{
        testFunk('Hi');
    }
    if (props.isLog){
        return(
            <div className="right">
                {isVisibleForm && (
                    <div style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
                        <input 
                            className='search-input'
                            value={textFromInput}
                            onChange={(e) => setTextFromInput(e.target.value)} 
                            type="text" 
                            placeholder='Enter smth' 
                            
                        />
                        {textFromInput.length > 2 &&  <span className='search-inputResult'>{textFromInput}</span>}
                    </div>

                )}
                <button className="search-button" onClick={() => setIsVisibleForm(!isVisibleForm)}>
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