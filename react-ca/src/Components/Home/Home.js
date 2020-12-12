import React, { useState, useEffect } from "react";
import { BASE_URL } from "../Api";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import GameSearch from "../Game/GameSearch";
import Games from "../Game/Games";

function Home() {
  const [game, setGame] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(BASE_URL)
      .then((response) => response.json())
      .then((json) => {
        setGame(json.results);
        setFilteredGames(json.results);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  const filterGames = function (e) {
    const searchValue = e.target.value.toLowerCase();

    const filterArray = game.filter(function (char) {
      const lowerCaseName = char.name.toLowerCase();

      if (lowerCaseName.startsWith(searchValue)) {
        return true;
      }
      return false;
    });

    setFilteredGames(filterArray);
  };

  if (loading) {
    return <Spinner animation="border" className="spnner" />;
  }

  return (
    <>
      <Container>
        <GameSearch handleSearch={filterGames} />
        {filteredGames.map(
          ({ id, name, background_image, rating, released }) => (
            <Games
              key={id}
              id={id}
              name={name}
              background_image={background_image}
              rating={rating}
              released={released}
            />
          )
        )}
      </Container>
    </>
  );
}

export default Home;
