import React, { useState } from "react";
import { getMovies } from "../temp/MovieService";
import Pagination from "./Pagination";
import { genreslist } from "../temp/Genres";
import Genre from "./Genre";

function MoviesPage(props) {
  // let movielist = getMovies();
  // const [movies, setMovies] = useState(movielist);
  const [currSearchText, setCurrentSearchText] = useState("");
  const [pageNumber, setPageNumber] = useState("1");
  const [limit, setLimit] = useState("4");
  let newgenrelist = [{id:"1",name :"All Genre"},...genreslist];
  const [genres,setGenres] = useState(newgenrelist);
  const [cGenre,setcGenre] = useState("All Genre");


  
  // function deleteEntry(id) {
  //   let newMovieList = movies.filter((movieObj) => {
  //     return movieObj._id !== id;
  //   });
  //   setMovies(newMovieList);
  // }
  let movies = props.movies;
  let deleteEntry = props.deleteEntry;
  let setMovies = props.setMovies;
console.log(movies);
  const sortByStock = (e) => {
    let classname = e.target.className;

    let sortedMovies;
    if (classname === "fas fa-sort-up") {
      sortedMovies = [...movies].sort(function (movieObjA, movieObjB) {
        return movieObjA.numberInStock - movieObjB.numberInStock;
      });
    } else {
      sortedMovies = [...movies].sort((movieObjA, movieObjB) => {
        return movieObjB.numberInStock - movieObjA.numberInStock;
      });
    }

    setMovies(sortedMovies);
  };

  const sortByRate = (e) => {
    let classname = e.target.className;
    let sortedMovies;

    if (classname === "fas fa-sort-up") {
      sortedMovies = [...movies].sort((movieObjA, movieObjB) => {
        return movieObjA.dailyRentalRate - movieObjB.dailyRentalRate;
      });
    } else {
      sortedMovies = [...movies].sort((movieObjA, movieObjB) => {
        return movieObjB.dailyRentalRate - movieObjA.dailyRentalRate;
      });
    }
    setMovies(sortedMovies);
  };

  const changeLimit = (e) => {
    let newlimit = e.target.value;

    setLimit(newlimit);
  };

  let filteredMovies;
  console.log(cGenre)
  if(cGenre!="All Genre"){
   
    filteredMovies = movies.filter((movieobj)=>{
      console.log(movieobj.genre.name);
      if (movieobj.genre.name == cGenre){
        return movieobj

      }
    })
  }
  else{
    filteredMovies = movies;
  }
  console.log(filteredMovies);

  if (currSearchText === "") {
    filteredMovies = filteredMovies;
  } else {
    filteredMovies = filteredMovies.filter((movieObj) => {
      let movieName = movieObj.title.trim().toLowerCase();
      return movieName.includes(currSearchText);
    });
  }

  let totalPages = Math.ceil(filteredMovies.length / limit);

  let si = (pageNumber - 1) * limit;
  let eidx = Number(si) + Number(limit);
  filteredMovies = filteredMovies.slice(si, eidx);

  

  return (
    <div>
 
      <div className="row">
        <div className="col-3">
          <Genre genres={genres} cGenre={cGenre} setcGenre={setcGenre}></Genre>
        </div>
        <div className="col-7">
          <input
            className="form-control"
            type="search"
            placeholder="Search..."
            value={currSearchText}
            onChange={(e) => {
              setCurrentSearchText(e.target.value);
            }}
          ></input>
          
          <h6>Movies per Page</h6>
            <input
            type="number"
            className="limit"
            placeholder="No. of elements/Page"
            value={limit}
            onChange={(e) => {
              changeLimit(e);
            }}
          ></input>

          {/* <input type="text" className="pageNumber" placeholder="Page No."></input> */}
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Genre</th>
                <th scope="col">
                  <i className="fas fa-sort-up" onClick={sortByStock}></i>
                  Stock
                  <i className="fas fa-sort-down" onClick={sortByStock}></i>
                </th>
                <th scope="col">
                  <i className="fas fa-sort-up" onClick={sortByRate}></i>
                  Rate
                  <i className="fas fa-sort-down" onClick={sortByRate}></i>
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredMovies.map((movieObj) => {
                return (
                  <tr className="movie-item" key={movieObj._id}>
                    <td>{movieObj.title}</td>
                    <td>{movieObj.genre.name}</td>
                    <td>{movieObj.numberInStock}</td>
                    <td>{movieObj.dailyRentalRate}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          deleteEntry(movieObj._id);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <Pagination totalPages={totalPages} limit={limit}
            pageNumber={pageNumber} setPageNumber={setPageNumber}>

          </Pagination>
        </div>
      </div>
    </div>
  );
}

export default MoviesPage;
