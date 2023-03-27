import './style.css';
import { LinkedList, Node as linkedListNode } from './utils/linked_list';
import {
	Node,
	Tree,
	// eslint-disable-next-line import/named
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
import { knightMoves, addValidMoves } from './knight_moves';
import { createChessboard, gameboardValidMoves } from './gameboard';

createChessboard(0, 0);
console.log(gameboardValidMoves);
