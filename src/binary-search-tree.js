const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.binarySearchTreeRoot = null;
  }

  root() {
    return this.binarySearchTreeRoot;
  }

  add( data ) {
    this.binarySearchTreeRoot = addNode(this.binarySearchTreeRoot, data);
    // 3root & 5node
    function addNode(node, data) {
      if(!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addNode(node.left, data);
      } else {
        node.right = addNode(node.right, data);
      }
      return node;
    }
  }

  has( data ) {
    return searchNode(this.binarySearchTreeRoot, data);

    function searchNode(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      return data < node.data ? searchNode(node.left, data) : searchNode(node.right, data);

    }
  }

  find( data ) {
    return getNode(this.binarySearchTreeRoot, data);

    function getNode(node, data) {
      if (!node) {
        return null;
      }

      if (node.data === data) {
        return node;
      }

      return data < node.data ? getNode(node.left, data) : getNode(node.right, data);
    }
  }

  remove( data ) {
    this.binarySearchTreeRoot = removeNode(this.binarySearchTreeRoot, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null; // безопасное удаление ноды-листа
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let minFromRightNode = node.right;
        while (minFromRightNode.left) {
          minFromRightNode = minFromRightNode.left;
        }
        node.data = minFromRightNode.data;
        node.right = removeNode(node.right, minFromRightNode.data);

        return node;
      }
    }
  }

  min() {
    if (!this.binarySearchTreeRoot) {
      return null;
    }

    let node = this.binarySearchTreeRoot;
    while(node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this.binarySearchTreeRoot) {
      return null;
    }

    let node = this.binarySearchTreeRoot;
    while(node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};