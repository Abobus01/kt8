import React, { useState, useEffect } from 'react';
import Board from './Board';
import Controls from './Controls';
import { GameService } from '../services/GameService';
import '../styles/Game.css';

const Game: React.FC = () => {
const [gameService, setGameService] = useState(new GameService());

useEffect(() => {
gameService.start();
}, [gameService]);

return (
<div className="game">
<Board gameService={gameService} />
<Controls gameService={gameService} />
</div>
);
};

export default Game;