import React from 'react';
import { GameService } from '../services/GameService';

interface ControlsProps {
    gameService: GameService;
}

const Controls: React.FC<ControlsProps> = ({ gameService }) => {
    return (
        <div className="controls">
            <button onClick={() => gameService.resetGame()}>New Game</button>
            <button onClick={() => gameService.undoMove()}>Undo Move</button>
        </div>
    );
};

export default Controls;