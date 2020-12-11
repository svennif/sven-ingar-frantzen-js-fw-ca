import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Games({ name, background_image, rating, id, released }) {
  return (
    <>
      <Card className="vw-50 vh-25 m-3 ">
        <Card.Img src={background_image} alt={name} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <b>Rating:</b> {rating}
          </Card.Text>
          <Card.Text>
            <b>Release Date:</b> {released}
          </Card.Text>
          <Link to={`/game/${id}`}>
            <Button variant="secondary" block>
              View
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
}

Games.propTypes = {
  name: PropTypes.string.isRequired,
  background_image: PropTypes.string.isRequired,
  released: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default Games;
