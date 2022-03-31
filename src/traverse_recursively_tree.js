const path = [
    "A/B/D",
    "A/B/E",
    "A/B/F",
    "A/C",
    "X/Y",
    "X/Z",
];

const renderClick = ["A", "B", "D", "C"];

function renderTreeSet(path) {
    let tree = [];
    // for(let i=0; i<path.length; i++) {
    //     createPathObj(path[i].split('/'), pathObj);
    // }

    createPath("A/B/D".split('/'), tree);
    

    console.log("Path Object--", JSON.stringify(tree, null, 2));
}

function createPath(path, pathArr) {
    if(!pathArr.length) return;

    let elem = findPathExists(path, pathArr[0]);
    if (!Object.keys(elem).length) {
        path.push({
            label: pathArr[0],
            checked: false,
            children: [],
        });

        console.log("Path updated here--", path);
    }
    createPath(elem.children, pathArr.splice(1));
}

function findPathExists(path, label) {
    for(let i=0; i<path.length; i++) {
        if(path[i].label === label) {
            return path[i];
        }
    }

    return {};
}

renderTreeSet(path);