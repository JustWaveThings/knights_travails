/* eslint-disable class-methods-use-this */
// eslint-disable-next-line max-classes-per-file
export class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

export class FlatNode {
	constructor(value) {
		this.value = value;
		this.children = [];
	}
}

export class Tree {
	constructor(array) {
		this.array = BuildTree.removeDuplicates(array);
		const treeBuild = new BuildTree(array);
		this.root = treeBuild.build(this.array);
	}
}

export class FlatTree {
	constructor(array, rootValue) {
		this.array = BuildTree.removeDuplicates(array);
		const treeBuild = new BuildTree(array);
		this.root = treeBuild.buildFlat(this.array, rootValue);
	}
}

export class BuildTree {
	constructor(array) {
		this.array = array;
	}

	static sortArray(array) {
		return array.sort((a, b) => a - b);
	}

	static removeDuplicates(array) {
		const sorted = BuildTree.sortArray(array);
		const uniqueArray = sorted.filter(
			(item, pos) => sorted.indexOf(item) === pos
		);
		return uniqueArray;
	}

	build(uniqueArray) {
		if (uniqueArray.length === 0) return null;
		const mid = Math.floor(uniqueArray.length / 2);
		const root = new Node(uniqueArray[mid]);
		const left = uniqueArray.slice(0, mid);
		const right = uniqueArray.slice(mid + 1);
		root.left = this.build(left);
		root.right = this.build(right);
		return root;
	}

	buildFlat(uniqueArray, rootValue) {
		if (uniqueArray.length === 0) return null;

		const flatRoot = new FlatNode(rootValue);
		for (let i = 1; i < uniqueArray.length; i++) {
			const child = new FlatNode(uniqueArray[i]);
			flatRoot.children.push(child);
		}
		return flatRoot;
	}
}

// to print a visual representation of the tree in the console
export const prettyPrint = (node, prefix = '', isLeft = true) => {
	if (node === null) {
		return;
	}
	if (node.right !== null) {
		prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
	}
	console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.value}`);
	if (node.left !== null) {
		prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
	}
};

export const prettyPrintFlat = node => {
	if (node === null) {
		return;
	}
	console.log(` Pos: ${node.value}, Starting Knight`);

	node.children.forEach((child, index) => {
		console.log(`├── ${child.value}`);
	});
};

export function find(bst, value) {
	const current = bst;
	if (current === null || current === undefined) {
		return null;
	}
	if (current.value === value) {
		return current;
	}
	if (value < current.value) {
		return find(current.left, value);
	}
	return find(current.right, value);
}

export function insert(bst, value) {
	if (bst === null) {
		return new Node(value);
	}
	if (value < bst.value) {
		bst.left = insert(bst.left, value);
	} else {
		bst.right = insert(bst.right, value);
	}
	return bst;
}

export function insertFlat(flatRoot, value) {
	if (value < flatRoot.value) {
		bst.left = insert(flatRoot.left, value);
	} else {
		bst.right = insert(flatRoot.right, value);
	}
	return flatRoot;
}

export function deleteNode(node, value) {
	if (node === null) return null;
	if (value === node.value) {
		if (node.left === null && node.right === null) {
			return null;
		}
		if (node.right === null) {
			return node.left;
		}
		if (node.left === null) {
			return node.right;
		}
		const successor = getSuccessor(node);
		node.value = successor.value;
		node.right = delete (node.right, successor.value);
		return node;
	}
	if (value < node.value) {
		node.left = deleteNode(node.left, value);
		return node;
	}
	node.right = deleteNode(node.right, value);
	return node;
}

export function getSuccessor(delNode) {
	return getSuccessorRecursive(delNode, delNode.right, delNode, false);
}

function getSuccessorRecursive(delNode, current, parent, isLeftChild) {
	if (current === null) {
		if (isLeftChild) {
			parent.left = null;
		} else {
			parent.right = null;
		}
		return delNode;
	}
	return getSuccessorRecursive(current, current.left, current, true);
}

export function depth(bst, value) {
	// eslint-disable-next-line no-shadow
	function depthRecursive(node, value, currentDepth) {
		if (node === null) {
			return null;
		}
		if (node.value === value) {
			return currentDepth;
		}
		if (value < node.value) {
			return depthRecursive(node.left, value, currentDepth + 1);
		}
		return depthRecursive(node.right, value, currentDepth + 1);
	}
	return depthRecursive(bst.root, value, 0);
}

export function height(bst, value) {
	const node = find(bst, value);
	if (node === null) return null;
	return Math.max(getHeight(node.left), getHeight(node.right));
}

export function getHeight(node) {
	if (node === null) return 0;
	const leftHeight = getHeight(node.left);
	const rightHeight = getHeight(node.right);
	return Math.max(leftHeight, rightHeight) + 1;
}

export function isBalanced(bst) {
	if (bst === null) return true;
	const leftHeight = getHeight(bst.left);
	const rightHeight = getHeight(bst.right);
	if (Math.abs(leftHeight - rightHeight) > 1) return false;
	return isBalanced(bst.left) && isBalanced(bst.right);
}

export function rebalance(bst) {
	const array = inOrder(bst);
	const newTree = new Tree(array);
	return newTree;
}

export function levelOrder(node, funct) {
	if (node === null) return;
	const queue = [node];
	levelOrderRecursive(queue, funct);
}

function levelOrderRecursive(queue, funct) {
	if (queue.length === 0) return;
	const node = queue.shift();
	funct(node);
	if (node.left !== null) queue.push(node.left);
	if (node.right !== null) queue.push(node.right);
	levelOrderRecursive(queue, funct);
}

function preOrder(node, output = []) {
	if (node === null) {
		return output;
	}
	output.push(node.value);
	preOrder(node.left, output);
	preOrder(node.right, output);
	return output;
}

function inOrder(node, output = []) {
	if (node === null) return output;
	inOrder(node.left, output);
	output.push(node.value);
	inOrder(node.right, output);
	return output;
}

function postOrder(node, output = []) {
	if (node === null) return output;
	postOrder(node.left, output);
	postOrder(node.right, output);
	output.push(node.value);
	return output;
}
