

function knightMoves(start, end) {
    let queue = [];
    if (start === end) {
        return start;
    }

    if ((start[0] + 1) <= 7 && (start[1] + 2) <= 7) {
        queue.push(knightMoves([start[0] + 1, start[1] + 2], end));
    }
    if ((start[0] + 2) <= 7 && (start[1] + 1) <= 7) {
        queue.push(knightMoves([start[0] + 2, start[1] + 1], end));
    }
}

function getMoves(array) {
    const allMoves = [];

    allMoves.push([array[0] + 1, array[1] + 2]);
    allMoves.push([array[0] + 2, array[1] + 1]);
    allMoves.push([array[0] + 1, array[1] - 2]);
    allMoves.push([array[0] + 2, array[1] - 1]);
    allMoves.push([array[0] - 1, array[1] - 2]);
    allMoves.push([array[0] - 2, array[1] - 1]);
    allMoves.push([array[0] - 1, array[1] + 2]);
    allMoves.push([array[0] - 2, array[1] + 1]);

    return allMoves.filter((item) => item[0] <= 7 && item[1] <= 7 && item[0] >= 0 && item[1] >= 0);
}


console.log(getMoves([4, 1]));
// knightMoves([0, 0], [7, 7]);