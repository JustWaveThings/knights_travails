const gameboardValidMoves = [];
function createChessboard(
	startRow = 0,
	startCol = 0,
	endRow = 7,
	endCol = 7,
	movesArray = []
) {
	const boardSize = 8; // 8x8 chessboard
	const board = []; // empty board array

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

	// print the board to console
	for (let i = 0; i < boardSize; i++) {
		console.log(board[i].join(' '));
	}
}

// console.log(gameboardValidMoves);

// call the function to create the chessboard
createChessboard(0, 0);

// create a function to generate all possible moves for a knight
function knightMoves(row, col) {
	const moves = [
		[2, 1],
		[2, -1],
		[-2, 1],
		[-2, -1],
		[1, 2],
		[1, -2],
		[-1, 2],
		[-1, -2],
	];

	//console.log(typeof moves[0], 'typeof moves[0]');

	// check if the moves are valid against gameboardValidMoves
	// if valid, add to movesArray
	// if not valid, do not add to movesArray

	const movesArray = [];

	function addValidMoves(moves) {
		for (let i = 0; i < moves.length; i++) {
			const knightMoveRow = `${row + moves[i][0]}`;
			const knightMoveCol = `${col + moves[i][1]}`;
			console.log(knightMoveRow);
			console.log(knightMoveCol);
			const combinedKnightMove = [...knightMoveRow, ...knightMoveCol];
			console.log(combinedKnightMove);

			/* if (gameboardValidMoves.includes(knightMove)) {
				movesArray.push(knightMove);
			} else {
				//console.log('invalid move', knightMove);
			} */
		}
	}

	addValidMoves(moves);
	// console.log(movesArray, 'movesArray');
	return movesArray;
}

knightMoves(0, 0);
