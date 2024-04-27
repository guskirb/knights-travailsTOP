import Node from "./node";

let NewGraph;

export default NewGraph = class Graph {
    constructor() {
        this.nodes = new Map();
    }

    addNode(value) {
        this.nodes.set(value, []);
    }

    addEdge(origin, dest) {
        this.nodes.get(origin).push(dest);
    }
}