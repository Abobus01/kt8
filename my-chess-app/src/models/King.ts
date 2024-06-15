import { Piece } from './Piece';

export class King extends Piece {
    constructor(position: string, color: 'white' | 'black') {
        super(position, color, 'King');
    }

    move(to: string): boolean {
        return true;
    }
}