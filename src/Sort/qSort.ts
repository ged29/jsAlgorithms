function quickSort(list: number[]): number[] {
    if (list.length < 2) {
        return list;
    }

    let pivot = list[0],
        less = [],
        greater = [];

    for (let inx = 1; inx < list.length; inx++) {
        let val = list[inx];
        if (val < pivot) {
            less.push(val);
        }
        else {
            greater.push(val);
        }
    }

    let lessArr = quickSort(less),
        greaterArr = quickSort(greater);

    return lessArr.concat(pivot, greaterArr);
}

var res: number[] = quickSort([33, 4, 5, 10, 87, 13, 45, 8]);
var z1 = 1;