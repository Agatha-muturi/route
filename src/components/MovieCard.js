import {Link} from 'react-router-dom'
const MovieCard =({movie})=>{
    return(
        <div className="Card">
            <Link to={`/movie/${movie.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            
            <img src={movie.posterURL} alt={movie.title} width='200'/>
            <h3>{movie.title}</h3><br/>
            {movie.description}<br/>
            ⭐{movie.rating}
            </Link>
        </div>
    );
};
export default MovieCard;