import React from 'react';

const Section = (props) => {
    const janr = ["Drama", "Thriller", "Supernatural,", "Mystery", "Sci-Fi"];
    const ratings = [1, 2, 3, 4, 5];
    const handleStarClick = (rating) => {
        alert(`You rated this ${rating}`);
    };
    
    const RbtnClick = () =>{
        alert("This button doesn't do anything yet.");
    }
    const AbtnClick = () =>{
        alert("This button does the same thing as the red button.");
    }
    return (
        <section>
                <div class="genres">
                    {janr.map(gan => <span key={gan} >{gan}</span>)}
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
                    {ratings.reverse().map(rating => 
                    <span class="star" onClick={() => handleStarClick(rating)}>
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        
                    </span>
                    )}
                </div>
                <div class="buttons">
                    <button class="btn btn-primary" onClick={RbtnClick}>
                        STREAM NOW <i class="fa fa-play"></i>
                    </button>
                    <button class="btn btn-secondary" onClick={AbtnClick}>
                        ALL EPISODES
                    </button>
                </div>
            </section>
    );
};

export default Section;