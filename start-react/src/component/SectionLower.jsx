import React from 'react';
import rectangle6 from '../img/Rectangle6.png';
import rectangle7 from '../img/Rectangle7.png';
import rectangle8 from '../img/Rectangle8.png';
import rectangle9 from '../img/Rectangle9.png';
import rectangle11 from '../img/Rectangle11.png';

const SectionLower = () => {
    return (
        <section>
            <div className="section-header">
                <h2>POPULAR THIS WEEK</h2>
                <div className="arrows">
                    <button className="arrow-btn left-arrow">
                        <i className="fa fa-chevron-left"></i>
                    </button>
                    <button className="arrow-btn right-arrow">
                        <i className="fa fa-chevron-right"></i>
                    </button>
                </div>
            </div>
            <div className="movie-section">
                <div className="movies">
                    <div className="movie">
                        <img src={rectangle6} alt="Breaking Bad" />
                    </div>
                    <div className="movie">
                        <img src={rectangle7} alt="The Rain" />
                    </div>
                    <div className="movie">
                        <img src={rectangle8} alt="Life in a Year" />
                    </div>
                    <div className="movie">
                        <img src={rectangle9} alt="Money Heist: Korea" />
                    </div>
                    <div className="movie">
                        <img src={rectangle11} alt="Squid Game" />
                    </div>
                </div>
                <div className="age-rating">16+</div>
            </div>
        </section>
    );
};

export default SectionLower;