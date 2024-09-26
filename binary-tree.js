/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if(this.root === null) return 0;
    function findMinDepth(node){
      if(node.left === null && node.right === null) return 1;
      if(node.left === null ) return findMinDepth(node.right) + 1;
      if(node.left !== null ) return findMinDepth(node.left) + 1;
      return Math.min(findMinDepth(node.left), findMinDepth(node.right))
    }
    
    return findMinDepth(this.root);
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {

    if(this.root === null) return 0;
    function findMaxDepth(node){
      if(node.left === null && node.right === null) return 1;
      if(node.left === null ) return findMaxDepth(node.right) + 1;
      if(node.right === null ) return findMaxDepth(node.left) + 1;
      return Math.max(findMaxDepth(node.left), findMaxDepth(node.right)) + 1;
    }

    return findMaxDepth(this.root);
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {

  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if(this.root === null) return null;

    let toVisitQueue = [this.root];
    let targetNum = null;

    while(toVisitQueue.length){
      let currentNode = toVisitQueue.shift();
      let currentVal = currentNode.val;

      let isCurValLargerThanLB = currentVal > lowerBound;
      let isCurValSmallerThanTN = currentVal < targetNum || targetNum === null; //初始值必须比lowerBound大

      if(isCurValLargerThanLB && isCurValSmallerThanTN) {
        targetNum = currentVal;
      }

      if(currentNode.left) toVisitQueue.push(currentNode.left);
      if(currentNode.right) toVisitQueue.push(currentNode.right);
    }

    return targetNum;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
