export const boardSize = 8;

function createChessboard(startRow = 0, startCol = 0, endRow = 7, endCol = 7) {
	const board = [];

	// fill the board with alternating black and white cells
	for (let i = 0; i < boardSize; i++) {
		const row = [];
		for (let j = 0; j < boardSize; j++) {
			if ((i + j) % 2 === 0) {
				row.push('⬜️');
			} else {
				row.push('⬛️');
			}
		}
		board.push(row);
	}

	board[startRow][startCol] = '🐴';
	board[endRow][endCol] = '🔴';

	// print the board to console
	for (let i = 0; i < boardSize; i++) {
		console.log(board[i].join(' '));
	}
}

// console.log(gameboardValidMoves);

// call the function to create the chessboard

export default createChessboard;
