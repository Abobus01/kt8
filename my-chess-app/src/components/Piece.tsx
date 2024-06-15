import React from 'react';
import { IPiece } from '../models/Piece';
import './Piece.css';

interface PieceProps {
piece: IPiece;
}

const Piece: React.FC<PieceProps> = ({ piece }) => {
return (
<div className={`piece ${piece.color}`}>
{piece.type}
</div>
);
};

export default Piece;