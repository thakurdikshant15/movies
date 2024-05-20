import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import MoviesPage from './components/MoviesPage';
import Navbar from './components/Navbar';
import AddMovie from './components/AddMovie';
import { getMovies } from './temp/MovieService';
import { useState } from 'react';
import { genreslist } from "./temp/Genres.jsx";


export default function App() {
  let movielist = getMovies();
  const [movies, setMovies] = useState(movielist);
  

    
  function deleteEntry(id) {
    let newMovieList = movies.filter((movieObj) => {
      return movieObj._id !== id;
    });
    setMovies(newMovieList);
  }

  const addMovie=(obj)=>{
    
    //console.log(obj);
    let {title,genre,rate,numberInStock} = obj;
    let genreObj = genreslist;
    for (let i=0;i<genreObj.length;i++){
      if(genreObj[i].name==genre){
        genre = genreObj[i];
      }
    }
    let movieObj = {
      _id:Date.now(),
      title,
      genre,
      dailyRentalRate: rate,
      numberInStock
    }
    let copyOfMovies = [...movies, movieObj];
    setMovies(copyOfMovies);
    }

  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<MoviesPage movies={movies} setMovies={setMovies} deleteEntry={deleteEntry}/>}></Route>
        <Route path='/addMovie' element={<AddMovie addMovie={addMovie}></AddMovie>}></Route>
      </Routes>
      
    </>
  );
}

