import React from "react";
import "./card.css";

const Card = (props) => (
  <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <img src="https://picsum.photos/200/300" alt="Avatar" />
      </div>
      <div class="flip-card-back">
        <h1>John Doe</h1>
        <p>Architect & Engineer</p>
        <p>We love that guy</p>
      </div>
    </div>
  </div>
);

export default Card;
