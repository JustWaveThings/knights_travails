import linkedListValidMovesInNumberType from './valid_moves_linked_list';

const allMovesTaken = [];

export default function addValidMoves(movesArray, currentRoot) {
	// console.log(movesArray);

	if (!allMovesTaken.includes(currentRoot)) {
		allMovesTaken.push(currentRoot);
	}
	const actualValidMoves = [];
	movesArray.forEach(move => {
		const moveInNumberFormat = Number(move);
		if (
			linkedListValidMovesInNumberType.find(moveInNumberFormat) &&
			!allMovesTaken.includes(moveInNumberFormat)
		) {
			allMovesTaken.push(moveInNumberFormat);
			actualValidMoves.push(moveInNumberFormat);
		}
	});
	return actualValidMoves;
}
