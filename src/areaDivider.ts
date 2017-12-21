
function getMin(w: number, h: number) {
    if (w === 0) {
        return h;
    }
    if (h === 0) {
        return w;
    }

    if (w > h) {
        return getMin(w % h, h);
    }
    else {
        return getMin(w, h % w);
    }
}

var width = 5665, height = 343;
var min = getMin(width, height);
