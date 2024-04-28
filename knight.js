import Graph from "./graph.js";

const graph = new Graph;

// Gets all possible moves available to passed array.
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

function knightMoves(start, end) {
    // Create a queue and enqueues the start arguement.
    const startNode = graph.addNode(start);
    const queue = [startNode];
    const visited = [];

    while (queue.length) {
        // Dequeues co-ordinate from from of queue.
        const current = queue.shift();

        // Marks the co-ordinate as visited and gets all possible moves.
        visited.push(current.value);
        const moves = getMoves(current.value);

        // Creates a graph edge from current to all possible moves.
        moves.forEach((move) => {
            graph.addEdge(current.value, move);
        })

        // Gets a list of all adjacents and stops repeat visitors queueing.
        const adjacents = current.getAdjacent();
        adjacents.forEach((adjacent) => {
            if (visited.includes(adjacent)) {
                return adjacent;
            }

            // Queues adjacents and assigns a predecessor to each.
            graph.getNode(adjacent).predecessor = current;
            queue.push(graph.getNode(adjacent));
        })
    }

    // Builds an array by following predecessors from end to start.
    const allMoves = [];
    let node = graph.getNode(end);

    while (node) {
        if (node.predecessor) {
            allMoves.unshift(node.value);
        } else {
            allMoves.unshift(node.value);
        }

        node = node.predecessor;
    }
    return allMoves;
}

console.log(knightMoves([0, 0], [7, 7]));

