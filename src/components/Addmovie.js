import React,{useState} from 'react';
const AddMovie =({addMovie})=>{
    const[title, setTitle]=useState('');
    const[description, setDescription]=useState('');
    const[posterURL, setPosterURL]=useState('');
    const[rating, setRating]=useState(0);
    const handleSubmit=(e)=>{
        e.preventDefault();
        const newMovie={title, description,posterURL, rating};
        addMovie(newMovie);
        setTitle('');
        setDescription('');
        setPosterURL('')
        setRating(0);
        
    };
return(
    <form className='movieform'>
        <input value={title} onChange={(e)=>setTitle(e.target.value)} placeholder='title'/>
        <input value={description} onChange={(e)=>setDescription(e.target.value)} placeholder='description'/>
        <input value={posterURL} onChange={(e)=>setPosterURL(e.target.value)} placeholder='posterURL'/>
        <input value={rating} onChange={(e)=>setRating(e.target.value)} placeholder='rating'/>
        <button>Add Movie</button>
    </form>
   );
 };
 export default AddMovie;