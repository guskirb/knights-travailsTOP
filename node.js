let NewNode;

export default newNode = class Node {
    constructor(value) {
        this.value = value;
        this.adjacents = [];
    }

    addAdjacent(node) {
        this.adjacents.push(node);
    }

    getAdjacent() {
        return this.adjacents;
    }
}