import React from 'react'
import Movie from './Movie';

const MoviesList = (props) => {
    

    const{movies_list} = props;

    return (
        <div className="movies_list ">
            {movies_list.map((movie)=>(<Movie key={movie.imdbID} {...movie}/>))}
        </div>
    )
}

export default MoviesList
