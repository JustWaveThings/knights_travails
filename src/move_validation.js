import linkedListValidMovesInNumberType from './valid_moves_linked_list';

export const actualValidMoves = [];

export default function addValidMoves(movesArray) {
	// console.log(movesArray);
	movesArray.forEach(move => {
		const moveInNumberFormat = Number(move);
		if (linkedListValidMovesInNumberType.find(moveInNumberFormat)) {
			actualValidMoves.push(moveInNumberFormat);
		}
	});
	return actualValidMoves;
}
