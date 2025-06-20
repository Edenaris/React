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
                <div className="genres">
                    {janr.map((gan, id) => <span key={id} >{gan}</span>)}
                </div>
                <div className="MainName">
                    <h1>
                        {props.title}
                    </h1>
                </div>
                <div className="info">
                    <span>{props.yearData}</span>
                    <span><strong>DIRECTOR:</strong> <span className="episodes">Shawn Levy</span></span>
                    <span><strong>seasons:</strong>  <span className="episodes">3(5 Episodes)</span></span>
                </div>
                <div className="filmInfo">
                    <p>
                        {props.text}
                    </p>
                </div>
                <div className="stars">
                    {ratings.reverse().map((rating,id) => 
                    <span className="star" key={id} onClick={() => handleStarClick(rating)}>
                        <i className="fa-regular fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </span>
                    )}
                </div>
                <div className="buttons">
                    <button className="btn btn-primary" onClick={RbtnClick}>
                        STREAM NOW <i className="fa fa-play"></i>
                    </button>
                    <button className="btn btn-secondary" onClick={AbtnClick}>
                        ALL EPISODES
                    </button>
                </div>
                
            </section>
    );
};

export default Section;