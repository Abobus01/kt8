import { Piece, IPiece } from '../models/Piece';
import { Pawn } from '../models/Pawn';
import { Rook } from '../models/Rook';
import { Knight } from '../models/Knight';
import { Bishop } from '../models/Bishop';
import { Queen } from '../models/Queen';
import { King } from '../models/King';

export class GameService {
    private board: (IPiece | null)[] = Array(64).fill(null);

    constructor() {
        this.setupBoard();
    }

    setupBoard() {
        this.board[0] = new Rook('a1', 'white');
        this.board[1] = new Knight('b1', 'white');
        this.board[2] = new Bishop('c1', 'white');
        this.board[3] = new Queen('d1', 'white');
        this.board[4] = new King('e1', 'white');
        this.board[5] = new Bishop('f1', 'white');
        this.board[6] = new Knight('g1', 'white');
        this.board[7] = new Rook('h1', 'white');
        for (let i = 8; i < 16; i++) {
            this.board[i] = new Pawn(`a${i - 7}`, 'white');
        }
        this.board[56] = new Rook('a8', 'black');
        this.board[57] = new Knight('b8', 'black');
        this.board[58] = new Bishop('c8', 'black');
        this.board[59] = new Queen('d8', 'black');
        this.board[60] = new King('e8', 'black');
        this.board[61] = new Bishop('f8', 'black');
        this.board[62] = new Knight('g8', 'black');
        this.board[63] = new Rook('h8', 'black');
        for (let i = 48; i < 56; i++) {
            this.board[i] = new Pawn(`a${i - 47}`, 'black');
        }
    }

    getPieceAt(position: number): IPiece | null {
        return this.board[position];
    }

    movePiece(from: number, to: number): boolean {
        const piece = this.board[from];
        if (piece && piece.move(to)) {
            this.board[to] = piece;
            this.board[from] = null;
            return true;
        }
        return false;
    }

    resetGame() {
        this.board = Array(64).fill(null);
        this.setupBoard();
    }

    undoMove() {
    }
}