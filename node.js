let NewNode;

export default NewNode = class Node {
    constructor(value) {
        this.value = value;
        this.adjacents = [];
        this.predecessor = null;
    }

    addAdjacent(value) {
        let duplicate = false;
        this.adjacents.forEach((adjacent) => {
            if ((adjacent[0] === value[0]) && (adjacent[1] === value[1])) {
                duplicate = true;
            }
        })

        if (duplicate === false) {
            this.adjacents.push(value);
        }
    }

    getAdjacent() {
        return this.adjacents;
    }
}