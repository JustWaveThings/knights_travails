import linkedListValidMovesInNumberType from './valid_moves_linked_list';

export default function addValidMoves(moves) {
	for (let i = 0; i < moves.length; i++) {
		const knightMoveRow = `${row + moves[i][0]}`;
		const knightMoveCol = `${col + moves[i][1]}`;
		console.log(knightMoveRow);
		console.log(knightMoveCol);
		const combinedKnightMove = [...knightMoveRow, ...knightMoveCol];
		console.log(combinedKnightMove);
	}
}
