/* eslint-disable no-restricted-syntax */
import './style.css';
import { find, FlatTree, prettyPrintFlat } from './utils/binary_search_tree';
import knightMoves from './knight_moves';
import createChessboard from './gameboard';
import linkedListValidMovesInNumberType, {
	gameboardValidMoves,
} from './valid_moves_linked_list';
import addValidMoves from './move_validation';

createChessboard();
// console.log({ gameboardValidMoves });

// const test1 = linkedListValidMovesInNumberType.tail();
// console.log(test1);
// console.log(typeof test1.value); // number

// const test2 = knightMoves(3, 3);
// const test3 = addValidMoves(test2.potentialMoves);
// console.log(test2, 'potential moves or the starting position');
// console.log(test3, 'valid moves');

// const testFlat = new FlatTree(test3, 33);
//  prettyPrintFlat(testFlat.root);
// console.log(testFlat.root);

// the purpose of this function is to find the goal position  recursively by using the knight's moves in a flat tree structure.

let counter = 0;
const endRecursion = 10;

function findGoal(startingPosition, goalPosition) {
	if (counter > endRecursion) return;
	const moveAction = knightMoves(startingPosition);
	// console.log(moveAction, 'potential moves');
	const result = addValidMoves(moveAction);
	// console.log(result, 'valid moves');
	const startingNode = new FlatTree(result, startingPosition);
	// console.log(startingNode.root);
	// print the pretty tree
	prettyPrintFlat(startingNode.root);
	// eslint-disable-next-line consistent-return
	startingNode.root.children.forEach(child => {
		if (child.value === goalPosition) {
			console.log(`found the goal position: ${child.value}`);
			return child.value;
		}
	});
	// recursive case
	startingNode.root.children.forEach(child => {
		// console.log(typeof child.value);
		counter++;
		findGoal(child.value, goalPosition);
	});
}

findGoal(33, 26);
