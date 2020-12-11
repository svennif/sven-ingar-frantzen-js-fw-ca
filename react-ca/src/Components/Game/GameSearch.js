import React from "react";
import PropTypes from "prop-types";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

function GameSearch({ handleSearch }) {
  return (
    <InputGroup className="search vw-50 m-2">
      <FormControl
        placeholder="Search for a game"
        onChange={(e) => handleSearch(e)}
      />
    </InputGroup>
  );
}

GameSearch.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};

export default GameSearch;
