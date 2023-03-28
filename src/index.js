/* eslint-disable no-useless-return */
/* eslint-disable no-else-return */
/* eslint-disable consistent-return */
/* eslint-disable prefer-const */
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

const test1 = linkedListValidMovesInNumberType.toString();

console.log(test1);

// console.log(typeof test1.value); // number

// const test2 = knightMoves(3, 3);
// const test3 = addValidMoves(test2.potentialMoves);
// console.log(test2, 'potential moves or the starting position');
// console.log(test3, 'valid moves');

// const testFlat = new FlatTree(test3, 33);
//  prettyPrintFlat(testFlat.root);
// console.log(testFlat.root);

// the purpose of this function is to find the goal position  recursively by using the knight's moves in a flat tree structure.

/* function findGoal(startingPosition, goalPosition) {
	const moveAction = knightMoves(startingPosition);
	const result = addValidMoves(moveAction, startingPosition);
	console.log(result, 'valid moves from addValidMoves');

	const startingNode = new FlatTree(result, startingPosition);
	prettyPrintFlat(startingNode.root);

	dfs(startingNode.root);
}



function dfs(node2, goalPosition) {
	positionsCounter++;
	console.log(
		node2?.value,
		' <- node value',
		goalPosition,
		'<- goal position',
		positionsCounter,
		"<- position's checked counter"
	);
	if (node2?.value === goalPosition) {
		console.log(`found the goal position: ${node2?.value}`);
		goalFound = true;
		return node2;
	}
} */

let positionsCounter = 0;
const maxRecursion = 50;

let foundGoal = false;
function findGoal(startingPosition, goalPosition, counter = 1) {
	let output = null;
	/* 	// base to prevent infinite recursion if I
	if (counter > maxRecursion) {
		console.log('max recursion reached');
		return null;
	} */
	// base case
	if (foundGoal) {
		return output;
	}

	const moveAction = knightMoves(startingPosition);
	const result = addValidMoves(moveAction, startingPosition);

	const newRootNode = new FlatTree(result, startingPosition);

	newRootNode.root?.children.forEach((_, index) => {
		console.log(
			newRootNode.root.children[index].value,
			'the value being checked against the goal'
		);
		const childValue = newRootNode.root.children[index].value;
		positionsCounter++;
		if (childValue === goalPosition) {
			console.log('found the goal position', childValue);
			output = childValue;
			foundGoal = true;
		} else {
			const found = findGoal(childValue, goalPosition, counter + 1);
			if (found !== null) {
				output = found;
				return;
			}
		}
		if (output !== null) {
			return;
		}
	});
	return output;
}

const answer = findGoal(33, 23);
console.log(
	answer,
	'result of findGoal',
	positionsCounter,
	'and the number of spaces evaluated'
);
