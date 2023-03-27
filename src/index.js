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

createChessboard();
console.log(gameboardValidMoves);

const test1 = linkedListValidMovesInNumberType.tail();
console.log(test1);
console.log(typeof test1.value); // number

knightMoves(3, 3);
