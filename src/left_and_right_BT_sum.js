// https://assessments.hired.com/challenges/262260

/*
Input  :  arr[] = {1, 2, 3, 4, 5, 6,-1}
                  1
                 / \
                2   3
               / \ /
              4  5 6

Output: Sum of left tree: 11, Sum of right tree: 9, so output is "Left"
*/


class Node {
    constructor(val) {
        this.left = null;
        this.right = null;
        this.val = val ? val : 0;
    }
}

let leftSum = 0;
let rightSum = 0;

function sumTraversal(root, isLeft) {
    if(!root) return;

    if(isLeft) {
        leftSum+= root.val;
    } else {
        rightSum+= root.val;
    }
    
    sumTraversal(root.left, isLeft);
    sumTraversal(root.right, isLeft);
}

const solution = (arr) => {
    // Type your solution here 
    let root;
    function createTree(root, index){
        let temp = new Node();
        root = temp;
        if(index<arr.length && arr[index]!==-1) {
            root.val = arr[index];
            root.left = createTree(root.left, 2*index + 1);
            root.right = createTree(root.right, 2*index + 2);
        }
        
        return root;
    }
    
    root = createTree(root, 0);
        
    sumTraversal(root.left, true);
    sumTraversal(root.right, false);
        
    if(leftSum === rightSum) return "";
    
    return Math.max(leftSum, rightSum) === leftSum ? "Left": "Right";
};