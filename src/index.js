import './style.css';
import { FlatTree, prettyPrintFlat } from './utils/binary_search_tree';
import knightMoves from './knight_moves';
import createChessboard from './gameboard';
import linkedListValidMovesInNumberType, {
	gameboardValidMoves,
} from './valid_moves_linked_list';
import addValidMoves from './move_validation';

createChessboard();
console.log({ gameboardValidMoves });

const test1 = linkedListValidMovesInNumberType.tail();
console.log(test1);
// console.log(typeof test1.value); // number

const test2 = knightMoves(3, 3);
const test3 = addValidMoves(test2.potentialMoves);
console.log(test2, 'potential moves or the starting position');
console.log(test3, 'valid moves');

const testFlat = new FlatTree(test3, 33);
prettyPrintFlat(testFlat.root);
console.log(testFlat.root, 'flat tree');
