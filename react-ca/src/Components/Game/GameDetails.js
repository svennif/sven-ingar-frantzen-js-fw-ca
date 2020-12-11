import React, { useState, useEffect } from "react";
import { BASE_URL } from "../Api";

function GameDetails({ match }) {
  let [details, setDetails] = useState({});

  useEffect(() => {
    fetch(BASE_URL + `/${match.params.id}`)
      .then((response) => response.json())
      .then((json) => setDetails(json))
      .catch((error) => console.log(error));
  }, [match.params.id]);

  return (
    <>
      <h1>{details.name}</h1>
      <img src={details.background_image} alt={details.name} />
      <p>{details.description}</p>
      <a href={details.website}>Go to the website</a>
    </>
  );
}

export default GameDetails;
