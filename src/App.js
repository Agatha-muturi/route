import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React,{useState} from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import AddMovie from './components/Addmovie';
import MoneyTalks from'./images/mt.jpeg';
import Friday from './images/friday.jpeg';
import RushHour from './images/rushhour.jpeg';
import HangOver from './images/hangover.jpeg';
import Detail from './components/Detail';

function App() {
  const[movies, setMovies]=useState([
    {
      id:1,
      title:'Money Talks',
      description:'Action, Comedy, Crime, Thriller ',
      posterURL:MoneyTalks,
      rating: 9,
      trailer:'https://www.youtube.com/embed/UtMp1JEXIOw?si=i9SgtaQy4_VlUJfi'
    },
    {
      id:2,
      title:'Friday',
      description:' Comedy, Drama ',
      posterURL: Friday,
      rating:8.5,
      trailer:'https://www.youtube.com/embed/umvFBoLOOgo?si=CZFaRLR4YwFl5dGj'
    },
    {
      id:3,
      title:'Rush Hour',
      description:'Action, Comedy, Crime, Thriller',
      posterURL:RushHour ,
      rating:9.5,
      trailer:'https://www.youtube.com/embed/JMiFsFQcFLE?si=0KpU-kZpOR7rPvtv'
    },
    {
      id:4,
      title:'The Hangover',
      description:'Comedy, Crime',
      posterURL:HangOver ,
      rating:7.5,
      trailer:'https://www.youtube.com/embed/tlize92ffnY?si=eWt4sOWlqhtl23aV'
    }
  ]);
  const[filterTitle, setFilterTitle]=useState('');
  const[filterRate,setFilterRate]=useState(0);
  const addMovie=(movie)=>{
    setMovies([...movies,{...movie, id: movies.length+1}]);
  };
  const filteredMovies=movies.filter(
    (movie)=>
      movie.title.toLowerCase().includes(filterTitle.toLowerCase())&&
  movie.rating>=filterRate
);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
           path='/'
           element={
            <div>
              <h1>🎬 My Favorite Movies</h1> 
              <Filter
              filterTitle={filterTitle}
              setFilterTitle={setFilterTitle}
              filterRate={filterRate}
              setFilterRate={setFilterRate}
              />
              <AddMovie addMovie={addMovie}/>
              <MovieList movies={filteredMovies}/>
            </div>
            }
           />
          <Route
            path="/movie/:id"
            element={<Detail movies={movies} />}
          />
           
           
         </Routes>
      </Router>
    </div>
  );
};

export default App;
