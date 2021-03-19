const add = (x,y=x) => x + y;

const PI = 3.14;

const square = (x) => x*x;

// you must export in order to use in another file
const math = {
    add:add,
    PI:PI,
    square:square
}
module.exports.math = math;
