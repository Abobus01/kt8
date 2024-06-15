import { Piece } from './Piece';

export class Knight extends Piece {
    constructor(position: string, color: 'white' | 'black') {
        super(position, color, 'Knight');
    }

    move(to: string): boolean {
        return true;
    }
}