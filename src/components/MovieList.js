import MovieCard from "./MovieCard";    

const MovieList =({movies})=>{
    return(
        <div className="List">
            {movies.map((movie,index)=>(
                <MovieCard key={index} movie={movie}/>
            ))}
        </div>
    );
};
export default MovieList;