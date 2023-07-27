import React from "react";
import { actors } from "../data";

function Actors() {
  return (
    <>
      <h1>Actors Page</h1>
      <div>
        Name: Benedict Cumberbatch
        <ul>
          {""}
          <li>Doctor Strange</li>
          <li>The Imitation Game</li>
          <li>Black Mass</li>
        </ul>
      </div>
      <div>
        Name: Justin Timberlake
        <ul>
          {""}
          <li>Trolls</li>
          <li>Friends with Benefits</li>
          <li>The Social Network</li>
        </ul>
      </div>
      <div>
        Name: Tom Cruise
        <ul>
          {""}
          <li>Jack Reacher: Never Go Back</li>
          <li>Mission Impossible 6</li>
          <li>War of the Worlds</li>
        </ul>
      </div>
    </>
  );
}

export default Actors;
