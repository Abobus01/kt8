import { Piece } from './Piece';

export class Rook extends Piece {
    constructor(position: string, color: 'white' | 'black') {
        super(position, color, 'Rook');
    }

    move(to: string): boolean {
        return true;
    }
}