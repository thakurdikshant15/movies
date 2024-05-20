import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            MOVIE RENTALS
          </a>
            <Link class="navbar-brand" to="/" href="#">Movies</Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            
              <div class="navbar-nav">
                <Link class="nav-link" aria-current="page" to="/addMovie" >
                  Add New Movie
                </Link>

              </div>
              
            
                
                
        
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
