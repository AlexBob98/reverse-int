module.exports = function reverse (n) {
    n = Math.abs(n);
    let rev = n.toString().split('').reverse().join('');
    return Number(rev);
}
