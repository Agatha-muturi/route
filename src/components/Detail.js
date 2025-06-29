import { useParams,Link } from "react-router-dom";

const Detail =({movies})=>{
    const{id}=useParams();
        const movie=movies.find((m)=>m.id===parseInt(id));
        if (!movie) return<p>Movie  not found</p>;
        return(
            <div className="detail">
                <h2>{movie.title}</h2>
                <p>{movie.description}</p>
                <iframe
                width='560'
                height='315'
                src={movie.trailer}
                title={movie.title}
                allowFullScreen>

                </iframe><br/>
                <Link  to='/'style={{
                display: 'inline-block',
                marginTop: '20px',
                color: '#fff',  
                backgroundColor: '#333',
                padding: '10px 15px',
                borderRadius: '8px',
                textDecoration: 'none'}}>← Home</Link>
            </div>
        )
 
};
export default Detail;