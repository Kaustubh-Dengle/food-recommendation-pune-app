import React, { useState } from "react";
import "./styles.css";
import { cuisineDB } from "./dbarray.js";

let dbArray = Object.keys(cuisineDB);

export default function App() {
  const [cuisineType, setCuisineType] = useState("Arabian");
  function cuisineClickHandler(cuisine) {
    setCuisineType(cuisine);
  }
  return (
    <div className="App">
      <h1 style={{ fontSize: "2.5rem" }}>PuneEats</h1>

      <p style={{ fontSize: "smaller" }}>
        Click on the type of cuisine you're feeling like eating today and we
        will suggest the best restaurants in Pune city.
      </p>
      <div>
        {dbArray.map((cuisine) => (
          <button
            onClick={() => cuisineClickHandler(cuisine)}
            style={{
              cursor: "pointer",
              padding: "0.5rem",
              margin: "0rem 1rem",
              border: "1px solid black",
              borderRadius: "1rem",
              backgroundColor: "lemonchiffon"
            }}
          >
            {cuisine}
          </button>
        ))}
      </div>
      <hr></hr>
      <div>
        <ul>
          {cuisineDB[cuisineType].map((place) => (
            <li
              key={place.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid black",
                maxWidth: "700px",
                borderRadius: "0.5rem",
                margin: "auto",
                marginBottom: "1rem"
              }}
            >
              <div
                style={{
                  fontSize: "1.4rem",
                  fontWeight: "bold"
                }}
              >
                {place.name}
              </div>
              <div style={{}}>{place.info}</div>
              <div>Address: {place.address}</div>
              <div>Rating: {place.rating}</div>
              <div>Approx Cost: {place.cost}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
