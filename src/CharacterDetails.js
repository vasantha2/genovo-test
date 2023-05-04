import React from "react";
import moment from "moment";

const CharacterDetails = ({ character }) => {
  const { name, height, mass, created, films, birth_year } = character;
  const formattedCreatedDate = moment(created).format(
    "MMMM Do YYYY, h:mm:ss a"
  );

  return (
    <div className="character-details">
      <h2>{name}</h2>
      <p>Height: {height} cm</p>
      <p>Mass: {mass} kg</p>
      <p>Date Added: {formattedCreatedDate}</p>
      <p>Number of Films: {films.length}</p>
      <p>Birth Year: {birth_year}</p>
    </div>
  );
};

export default CharacterDetails;
