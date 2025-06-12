import React from 'react';

const SectionLower = () => {
    return (
            <section>
            <div class="section-header">
                <h2>POPULAR THIS WEEK</h2>
                <div class="arrows">
                <button class="arrow-btn left-arrow">
                    <i class="fa fa-chevron-left"></i>
                </button>
                <button class="arrow-btn right-arrow">
                    <i class="fa fa-chevron-right"></i>
                </button>
                </div>
            </div>
            <div class="movie-section">
            
                <div class="movies">
                <div class="movie">
                    {/* <img src="img/Rectangle6.png" alt="Breaking Bad"> */}
                </div>
                <div class="movie">
                    {/* <img src="img/Rectangle7.png" alt="The Rain"> */}
                </div>
                <div class="movie">
                    {/* <img src="img/Rectangle8.png" alt="Life in a Year"> */}
                </div>
                <div class="movie">
                    {/* <img src="img/Rectangle9.png" alt="Money Heist: Korea"> */}
                </div>
                <div class="movie">
                    {/* <img src="img/Rectangle11.png" alt="Squid Game"> */}
                </div>
                </div>
            
                <div class="age-rating">16+</div>
            </div>
        </section>
    );
};

export default SectionLower;