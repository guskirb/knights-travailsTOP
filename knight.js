import Graph from "./graph.js";

const graph = new Graph;

// Gets all possible moves available to passed array
function getMoves(array) {
    const allMoves = [];

    allMoves.push([array[0] + 1, array[1] + 2]);
    allMoves.push([array[0] + 2, array[1] + 1]);
    allMoves.push([array[0] - 1, array[1] - 2]);
    allMoves.push([array[0] - 2, array[1] - 1]);
    allMoves.push([array[0] + 1, array[1] - 2]);
    allMoves.push([array[0] + 2, array[1] - 1]);
    allMoves.push([array[0] - 1, array[1] + 2]);
    allMoves.push([array[0] - 2, array[1] + 1]);

    return allMoves.filter((item) => item[0] <= 7 && item[1] <= 7 && item[0] >= 0 && item[1] >= 0);
}

// Fills graph with all possible knight moves on a 7x7 board
function fillGraph() {
    for (let x = 0; x <= 7; x++) {
        for (let y = 0; y <= 7; y++) {
            const moves = getMoves([x, y]);
            moves.forEach((move) => {
                graph.addEdge([x, y], move);
            })
        }
    }
}

// function knightMoves(start, end) {

//     let moves = getMoves(start);

//     graph.addNode(start);
//     moves.forEach((move) => {
//         graph.addEdge(start, move);
//     })

//     knightMoves(moves[0], end);
// }


// console.log(knightMoves([0, 0], [1, 1]));
console.log(fillGraph())
console.log(graph.nodes)
console.log(graph.addNode([5, 3]).adjacents);