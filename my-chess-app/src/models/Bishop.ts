import { Piece } from './Piece';

export class Bishop extends Piece {
    constructor(position: string, color: 'white' | 'black') {
        super(position, color, 'Bishop');
    }

    move(to: string): boolean {
        return true;
    }
}