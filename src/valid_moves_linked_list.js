import { LinkedList } from './utils/linked_list';
import { boardSize } from './gameboard';

export const gameboardValidMoves = [];

for (let i = 0; i < boardSize; i++) {
	for (let j = 0; j < boardSize; j++) {
		const rowCol = `${i}${j}`;
		gameboardValidMoves.push(rowCol);
	}
}

const linkedListValidMovesInNumberType = new LinkedList();

gameboardValidMoves.forEach(move => {
	const moveToNumberFormat = Number(move);
	linkedListValidMovesInNumberType.append(moveToNumberFormat);
});

export default linkedListValidMovesInNumberType;
