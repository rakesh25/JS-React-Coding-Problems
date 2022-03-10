//Given an array of elements, our task is to construct a complete binary tree from this array in level order fashion.
//That is, elements from left in the array will be filled in the tree level wise starting from level 0.

/*
Input  :  arr[] = {1, 2, 3, 4, 5, 6,-1}
Output : Root of the following tree
                  1
                 / \
                2   3
               / \ /
              4  5 6
*/
class Node {
    constructor(val) {
        this.left = null;
        this.right = null;
        this.val = val;
    }
}
let root;

function LevelOrderTraversalFromArray(arr, root, i) {
    if(i<arr.length && arr[i]!==-1) {
        let temp = new Node(arr[i]);
        root = temp;

        root.left = LevelOrderTraversalFromArray(arr, root.left, (2*i +1));
        root.right = LevelOrderTraversalFromArray(arr, root.right, (2*i +2));
    }

    return root;
}

function inOrderTraversal(root) {
    if(!root) return;

    if(root!==null) {
        inOrderTraversal(root.left);
        console.log(root.val);
        inOrderTraversal(root.right);
    }
}

let arr = [ 1, 2, 3, 4, 5, 6, -1, 7, 8 ];
root = LevelOrderTraversalFromArray(arr, root, 0);
inOrderTraversal(root);