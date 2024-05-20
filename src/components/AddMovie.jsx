import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddMovie(props) {
 
  const [newMovie,setNewMovie] = useState({});  
  
  let navigate = useNavigate();
  
  const handleChange=(e)=>{
      let id = e.target.id;
      let value = e.target.value;
      console.log(id);
      console.log(value);
      let newmovojb = {...newMovie}
      setNewMovie({...newmovojb,[id] :value})
      console.log(newMovie)
      
    }
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        props.addMovie(newMovie);
        navigate("/");

  
    }



  return (
    <div className="movie">
      <h3>Add a new Movie</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" class="form-label">
            Title
          </label>
          <input id="title" type="text" class="form-control" onChange={handleChange} ></input>
        </div>

        <div className="mb-3">
          <label htmlFor="genre" class="form-label">
            Genre
            <select id="genre" class="form-control" aria-label="Default select example" onChange={handleChange}  >
              <option value="Action">Action</option>
              <option value="Comedy">Comedy</option>
              <option value="Thriller">Thriller</option>
            </select>
          </label>
        </div>
        <div className="mb-3">
            <label htmlFor="numberInStock" class="form-label">Number In Stock
              <input  type="number" id="numberInStock" class="form-control" onChange={handleChange}></input>
            </label>

        </div>
        <div className="mb-3">
            <label htmlFor="rate" class="form-label">Rate
              <input  type="number" id="rate" class="form-control" onChange={handleChange} ></input>
            </label>

        </div>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddMovie;
