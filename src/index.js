import './style.css';
import { LinkedList, Node as linkedListNode } from './utils/linked_list';
import {
	Node,
	Tree,
	BuildTree,
	prettyPrint,
	find,
	insert,
	deleteNode,
	getSuccessor,
	depth,
	height,
	isBalanced,
	rebalance,
	levelOrder,
} from './utils/binary_search_tree';
import knightMoves from './knight_moves';
import createChessboard from './gameboard';
import linkedListValidMovesInNumberType, {
	gameboardValidMoves,
} from './valid_moves_linked_list';
import addValidMoves, { actualValidMoves } from './move_validation';

createChessboard();
console.log({ gameboardValidMoves });

const test1 = linkedListValidMovesInNumberType.tail();
console.log(test1);
// console.log(typeof test1.value); // number

const test2 = knightMoves(3, 3);
const test3 = addValidMoves(test2);
console.log(test2, 'potential moves or the starting position');

const testBST = new Tree(test3);
prettyPrint(testBST.root);
