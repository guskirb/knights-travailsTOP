import Node from "./node.js";

let NewGraph;

export default NewGraph = class Graph {
    constructor() {
        this.nodes = [];
    }

    addNode(value) {
        let vertex;
        this.nodes.forEach((node) => {
            if ((node.value[0] === value[0]) && (node.value[1] === value[1])) {
                vertex = node;
                return node;
            }
        })

        if (!vertex) {
            const newVertex = new Node(value);
            this.nodes.push(newVertex);
            return newVertex;
        }
        return vertex
    }

    addEdge(origin, dest) {
        const start = this.addNode(origin);
        const end = this.addNode(dest);

        start.addAdjacent(dest);
        end.addAdjacent(origin);
    }

    getNode(value) {
        let vertex;
        this.nodes.forEach((node) => {
            if ((node.value[0] === value[0]) && (node.value[1] === value[1])) {
                vertex = node;
                return node;
            }
        })
        return vertex;
    }
}

// let graph = new NewGraph;

// console.log(graph.addNode([1, 2]));
// console.log(graph.addNode([1, 3]));
// console.log(graph.addNode([1, 3]));
// console.log(graph.addEdge([1, 2], [1, 3]));
// console.log(graph.addEdge([1, 2], [1, 3]));
// console.log(graph.nodes)
// console.log(graph.getNode([1, 2]));
