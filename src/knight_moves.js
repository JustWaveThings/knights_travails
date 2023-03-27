// create a function to generate all possible moves for a knight
export function knightMoves(row, col) {
	const relativeMoves = [
		[2, 1],
		[2, -1],
		[-2, 1],
		[-2, -1],
		[1, 2],
		[1, -2],
		[-1, 2],
		[-1, -2],
	];

	// check if the moves are valid against gameboardValidMoves
	// if valid, add to movesArray
	// if not valid, do not add to movesArray

	const allMoves = [];

	const actualValidMovesArray = [];
}

export function addValidMoves(moves) {
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
