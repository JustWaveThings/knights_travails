export const gameboardValidMoves = [];
export function createChessboard(
	startRow = 0,
	startCol = 0,
	endRow = 7,
	endCol = 7,
	movesArray = []
) {
	const boardSize = 8;
	const board = [];

	// fill the board with alternating black and white cells
	for (let i = 0; i < boardSize; i++) {
		const row = [];
		for (let j = 0; j < boardSize; j++) {
			// need to make a string value of the coordinates that maintains the two digit format
			const from = `${i}${j}`;
			gameboardValidMoves.push(from);
			if ((i + j) % 2 === 0) {
				row.push('⬜️');
			} else {
				row.push('⬛️');
			}
		}
		board.push(row);
	}

	const test = gameboardValidMoves;
	console.log(test);

	// add the knight marker at position (0, 0)
	board[startRow][startCol] = '🐴';

	board[endRow][endCol] = '🔴';

	/* print the board to console
	for (let i = 0; i < boardSize; i++) {
		console.log(board[i].join(' '));
	} */
}

// console.log(gameboardValidMoves);

// call the function to create the chessboard
