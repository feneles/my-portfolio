import React from "react";

function Main() {
  return (
    <div className="main row px-0 mx-0">
      <h2 className="main_topText">{"<projects>"}</h2>
      <div projects="main_projectsContainer col-12">
        <div className="main_project">
          <figure className="front">
            <h1>nice card</h1>
            <p>first page</p>
          </figure>
          <figure className="back">
            <h1>better card</h1>
            <p>second page</p>
          </figure>
        </div>
      </div>
    </div>
  );
}

export default Main;
