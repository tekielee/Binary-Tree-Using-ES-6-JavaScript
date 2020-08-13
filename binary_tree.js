class BinaryNode {
	constructor(data = null) {
		this.data = data;
		this.left = null;
		this.right = null;
	}
	
	addChildren(left, right) {
		this.left = left;
		this.right = right;
	}
}

class BinaryTree {
	constructor(node) {
		this.root = node;
	}
	
	traverse(node, level = 0) {
		if(node) {
			console.log('-'.repeat(level) + node.data);
		}
		
		if(node.left) {
			this.traverse(node.left, level + 1);
		}
		
		if(node.right) {
			this.traverse(node.right, level + 1);
		}
	}
}

const final = new BinaryNode('Final');
const tree = new BinaryTree(final);

const semiFinal1 = new BinaryNode('Semi Final 1');
const semiFinal2 = new BinaryNode('Semi Final 2');

const quarterFinal1 = new BinaryNode('Quarter Final 1');
const quarterFinal2 = new BinaryNode('Quarter Final 2');
const quarterFinal3 = new BinaryNode('Quarter Final 3');
const quarterFinal4 = new BinaryNode('Quarter Final 4');

semiFinal1.addChildren(quarterFinal1, quarterFinal2);
semiFinal2.addChildren(quarterFinal3, quarterFinal4);

final.addChildren(semiFinal1, semiFinal2);

tree.traverse(tree.root);