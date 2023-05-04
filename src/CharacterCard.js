import React from "react";

const CharacterCard = ({ character, onSelect }) => {
  const { name, species, image } = character;
  const speciesClass = species.toLowerCase().replace(" ", "-");

  const handleClick = () => {
    onSelect(character);
  };

  return (
    <div className={`character-card ${speciesClass}`} onClick={handleClick}>
      <div className="character-image">
        <img src={image || "https://via.placeholder.com/150"} alt={name} />
      </div>
      <div className="character-info">
        <h3>{name}</h3>
        <p>Species: {species}</p>
      </div>
    </div>
  );
};

export default CharacterCard;
