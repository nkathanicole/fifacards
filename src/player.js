
import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types'; 

function Player({ name, team, nationality, jerseyNumber, age, image }) {
  const cardStyle = {
    margin: '20px',
    width: '18rem'
  };

  return (
    <Card style={cardStyle}>
      <Card.Img variant="top" src={image} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Team: {team}</Card.Text>
        <Card.Text>Nationality: {nationality}</Card.Text>
        <Card.Text>Jersey Number: {jerseyNumber}</Card.Text>
        <Card.Text>Age: {age}</Card.Text>
      </Card.Body>
    </Card>
  );
}


Player.defaultProps = {
  name: 'Unknown Player',
  team: 'Unknown Team',
  nationality: 'Unknown',
  jerseyNumber: 'N/A',
  age: 'N/A',
  image: 'https://via.placeholder.com/150'
};

Player.propTypes = {
  name: PropTypes.string,
  team: PropTypes.string,
  nationality: PropTypes.string,
  jerseyNumber: PropTypes.string,
  age: PropTypes.string,
  image: PropTypes.string
};

export default Player;
