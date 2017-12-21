function binarySearch(list: number[], item: number): number {
    var low = 0,
        high = list.length - 1,
        guess: number,
        mid: number;

    while (low <= high) {
        mid = Math.floor((low + high) / 2);
        guess = list[mid];
        if (guess === item) {
            return mid;
        }
        else if (item < guess) {
            high = mid - 1;
        }
        else {
            low = mid + 1;
        }
    }

    return -1;
}

binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2); //1
binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 8); //7
binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5); //4
binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6); //5