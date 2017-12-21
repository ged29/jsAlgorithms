var targetList = [1, 2, 3, 4, 5, 6];

function sum(list: number[]) {
    if (list.length === 1) {
        return list[0];
    }

    return list.shift() + sum(list);
}

function count(list: number[]) {
    if (list.length === 1) {
        return 1;
    }

    list.pop();

    return 1 + count(list);
}

function maximum(list: number[], max: number = -Infinity) {
    if (list.length === 0) {
        return max;
    }

    return maximum(list, Math.max(list.shift(), max));
}

function binarySrch(list: number[], item: number, low: number = 0, high: number = list.length) {
    let midInx = Math.floor((low + high) / 2),
        guess = list[midInx];

    if (guess === item || low === high) {
        return midInx;
    }

    return guess < item
        ? binarySrch(list, item, midInx + 1, high)
        : binarySrch(list, item, low, midInx - 1);
}

var listSum = sum(targetList.slice());
var listCount = count(targetList.slice());
var maxNumber = maximum(targetList.slice());
var bSearchIndex = binarySrch(targetList, 3);
var rez = 1;