import React from "react";
import { directors } from "../data";

function Directors() {
  return (
    <>
      <h1>Directors Page</h1>
      <div>
        Name: Scott Derrickson
        <ul>
          {" "}
          Movies
          <li>Doctor Strange</li>
          <li>Sinister</li>
          <li>The Exorcism of Emily Rose</li>
        </ul>
      </div>
      <div>
        Name: Edward Zwick
        <ul>
          {" "}
          Movies
          <li>Jack Reacher: Never Go Back</li>
          <li>Blood Diamon</li>
          <li>The Siege</li>
        </ul>
      </div>
      <div>
        Name: Mike Mitchell
        <ul>
          {" "}
          Movies
          <li>Trolls</li>
          <li>Alvin and the Chipmunks: Chipwrecked</li>
          <li>Sky High</li>
        </ul>
      </div>
    </>
  );
}

export default Directors;
