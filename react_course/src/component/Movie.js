import React from "react";
import "./css/movie.css"

const Movie = (props) =>{
    return (
        <div className="movie">
            <img src={props.poster} alt=""></img>
            <p>{props.title}</p>
            <p>{props.year}</p>
            <p>{props.runtime}</p>
          

        </div>

    )
}

export default Movie;