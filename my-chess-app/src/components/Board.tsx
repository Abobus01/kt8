import React from 'react';
import Square from './Square';
import { GameService } from '../services/GameService';
import './Board.css';

interface BoardProps {
    gameService: GameService;
}

const Board: React.FC<BoardProps> = ({ gameService }) => {
    const renderSquare = (i: number) => (
        <Square key={i} position={i} piece={gameService.getPieceAt(i)} />
    );

    const squares = Array(64).fill(null).map((_, i) => renderSquare(i));

    return <div className="board">{squares}</div>;
};

export default Board;