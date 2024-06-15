import { Piece } from './Piece';

export class Queen extends Piece {
    constructor(position: string, color: 'white' | 'black') {
        super(position, color, 'Queen');
    }

    move(to: string): boolean {
        return true;
    }
} 