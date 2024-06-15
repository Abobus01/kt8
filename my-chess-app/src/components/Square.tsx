import React from 'react';
import Piece from './Piece';
import { IPiece } from '../models/Piece';
import './Square.css';

interface SquareProps {
    position: number;
    piece: IPiece | null;
}

const Square: React.FC<SquareProps> = ({ position, piece }) => {
    return (
        <div className="square">
            {piece && <Piece piece={piece} />}
        </div>
    );
};

export default Square;