const { NotImplementedError } = require('../extensions/index.js');

 const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search node according to task description
* using Node from extensions
*/
module.exports = class BinarySearcTree {
    constructor() {
        this.node = null;
    }
    root() {
        return this.node;
    }

    add(data) {
        this.node = innerAdd(this.node, data);

        function innerAdd(node, data) {
            if (!node) {
                return new Node(data);
            }
            if (node.data === data) {
                return node;
            }
            if (data < node.data) {
                node.left = innerAdd(node.left, data);
            } else {
                node.right = innerAdd(node.right, data);
            }
            return node;
        }
    }

    has(data) {
        return innerHas(this.node, data);

        function innerHas(node, data) {
            if (!node) {
                return false;
            }

            if (node.data === data) {
                return true;
            }

            return data < node.data ?
                innerHas(node.left, data) :
                innerHas(node.right, data);
        }
    }

    find(data) {
        let node = this.node;
        while (node) {
            if (data > node.data) {
                node = node.right;
            } else if (data < node.data) {
                node = node.left;
            } else if (data == node.data) {
                return node;
            }
        }
        return null;
    }

    remove(data) {
        this.node = removeNode(this.node, data);

        function removeNode(node, data) {
            if (!node) {
                return null;
            }

            if (data < node.data) {
                node.left = removeNode(node.left, data);
                return node;
            } else if (node.data < data) {
                node.right = removeNode(node.right, data);
                return node;
            } else {
                if (!node.left && !node.right) {
                    return null;
                }

                if (!node.left) {
                    node = node.right;
                    return node;
                }

                if (!node.right) {
                    node = node.left;
                    return node;
                }

                let minRight = node.right;
                while (minRight.left) {
                    minRight = minRight.left;
                }
                node.data = minRight.data;

                node.right = removeNode(node.right, minRight.data);

                return node;
            }
        }
    }

    min() {
        if (!this.node) {
            return;
        }

        let node = this.node;
        while (node.left) {
            node = node.left;
        }

        return node.data;
    }

    max() {
        if (!this.node) {
            return;
        }

        let node = this.node;
        while (node.right) {
            node = node.right;
        }

        return node.data;
    }
}