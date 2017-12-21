
function getSmallestIndex(list: number[]) {
    var smallestInx = 0, smallest = list[smallestInx];

    for (var inx = 0; inx < list.length; inx++) {
        if (list[inx] < smallest) {
            smallest = list[inx];
            smallestInx = inx;
        }
    }

    return smallestInx;
}
// O(n*n) => O(n/2 * n) - алгоритм сортировки выбором
function selectSort(list: number[]) {
    var smallestInx: number,
        result = new Array(list.length);

    for (var inx = 0, len = list.length; inx < len; inx++) {
        smallestInx = getSmallestIndex(list);
        result.push(list[smallestInx]);
        list.splice(smallestInx, 1);
    }

    return result;
}

var zzz = selectSort([8, 3, 2, 1, 9, 0, 2, 3, 4, 2, 3, 4, 2, 3, 3, 5, 6, 5, 8, 6, 5, 1, 3, 5, 2, 5, 3, 4, 5, 8, 9, 3, 4, 9, 8, 5, 7, 3, 8, 9, 7, 5]);