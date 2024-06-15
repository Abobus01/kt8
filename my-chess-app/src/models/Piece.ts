export interface IPiece {
    position: string;
    color: 'white' | 'black';
    type: string;
    move(to: string): boolean;
}
    
export abstract class Piece implements IPiece {
    constructor(public position: string, public color: 'white' | 'black', public type: string) {}
    
    abstract move(to: string): boolean;
} 