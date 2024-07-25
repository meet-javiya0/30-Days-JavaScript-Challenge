function addNum(a, b) {
    return a + b;
}
exports.addNum = addNum;

function subNum(a, b) {
    return a - b;
}
exports.subNum = subNum;

function mulNum(a, b) {
    return a * b;
}
exports.mulNum = mulNum;

let obj = {
    fName: "jenish",
    email: "jenish@gmail.com",
    mNumber() {
        return 1234567890;
    },
};
exports.obj = obj;