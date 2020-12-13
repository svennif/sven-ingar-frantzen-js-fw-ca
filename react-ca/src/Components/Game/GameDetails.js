import React, { useState, useEffect } from "react";
import { BASE_URL } from "../Api";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

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
      <Container>
        <h1 id="GameDetailTitle">{details.name}</h1>
        <Image
          fluid
          className="GameDetailImage"
          src={details.background_image}
          alt={details.name}
        />
        <p>{details.description_raw}</p>
        <a href={details.website}>Go to the website</a>
      </Container>
    </>
  );
}

export default GameDetails;

/**
 * <h1>{details.name}</h1>
            <img
              className="GameDetailImage"
              src={details.background_image}
              alt={details.name}
            />
            <p>{details.description}</p>
            <a href={details.website}>Go to the website</a>
 */
