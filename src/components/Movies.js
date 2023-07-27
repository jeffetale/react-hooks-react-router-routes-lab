import React from "react";
import { movies } from "../data";

function Movies() {
  return (
    <>
      <h1>Movie Page</h1>
      <div>
        Title: Doctor Strange Time: 115
        <ul>
          {" "}
          Genres
          <li>Action</li>
          <li>Adventure</li>
          <li>Fantasy</li>
        </ul>
      </div>
      <div>
        Title: Trolls Time: 92
        <ul>
          {" "}
          Genres
          <li>Animation</li>
          <li>Adventure</li>
          <li>Family</li>
          <li>Fantasy</li>
        </ul>
      </div>
      <div>
        Title: Jack Reacher: Never Go Back Time: 118
        <ul>
          {" "}
          Genres
          <li>Action</li>
          <li>Adventure</li>
          <li>Crime</li>
          <li>Mystery</li>
          <li>Thriller</li>
        </ul>
      </div>
    </>
  );
}

export default Movies;
