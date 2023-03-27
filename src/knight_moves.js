// create a function to generate all possible moves for a knight
export default function knightMoves(row, col) {
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

	const potentialMoves = [];

	for (let i = 0; i < relativeMoves.length; i++) {
		const knightMoveRow = `${row + relativeMoves[i][0]}`;
		const knightMoveCol = `${col + relativeMoves[i][1]}`;
		const combinedKnightMove = [knightMoveRow, ...knightMoveCol];
		potentialMoves.push(combinedKnightMove);
	}
	console.log({ potentialMoves });
}
