import React, { useEffect, useState } from "react";
import { BASE_URL } from "../Api";

function GameDetails() {
  const [game, setGame] = useState([]);

  useEffect(() => {
    fetch(BASE_URL)
      .then((response) => response.json())
      .then((json) => setGame(json.results))
      .catch((error) => console.log(error));
  });
  return (
    <>
      <p>{game.id}</p>
    </>
  );
}

export default GameDetails;
