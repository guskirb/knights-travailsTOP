import Graph from "./graph";

function knightMoves(start, end) {

}

function getMoves(array) {
    let allMoves = [];

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
