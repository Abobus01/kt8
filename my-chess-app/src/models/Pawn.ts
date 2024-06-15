import { Piece } from './Piece';

export class Pawn extends Piece {
    constructor(position: string, color: 'white' | 'black') {
        super(position, color, 'Pawn');
    }

    move(to: string): boolean {
        return true;
    }
}