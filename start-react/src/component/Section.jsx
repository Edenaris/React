import React from 'react';

const Section = (props) => {
    return (
        <section>
                <div class="genres">
                    <span>Drama</span>
                    <span>Thriller</span>
                    <span>Supernatural</span>
                </div>
                <div class="MainName">
                    <h1>
                        {props.title}
                    </h1>
                </div>
                <div class="info">
                    <span>{props.yearData}</span>
                    <span><strong>DIRECTOR:</strong> <span class="episodes">Shawn Levy</span></span>
                    <span><strong>seasons:</strong>  <span class="episodes">3(5 Episodes)</span></span>
                </div>
                <div class="filmInfo">
                    <p>
                        {props.text}
                    </p>
                </div>
                <div class="stars">
                    <span class="star">
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </span>
                    <span class="star">
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </span>
                    <span class="star">
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </span>
                    <span class="star">
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </span>
                    <span class="star">
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </span>
                </div>
                <div class="buttons">
                    <button class="btn btn-primary">
                    STREAM NOW <i class="fa fa-play"></i>
                    </button>
                    <button class="btn btn-secondary">
                    ALL EPISODES
                    </button>
                </div>
            </section>
    );
};

export default Section;