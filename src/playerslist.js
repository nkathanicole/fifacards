
import React from 'react';
import Player from './player';
import players from './players';

function PlayersList() {
  return (
    <div className="players-list">
      {players.map((player) => (
        <Player key={player.jerseyNumber} {...player} />
      ))}
    </div>
    
  );
}


export default PlayersList;
