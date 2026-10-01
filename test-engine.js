var E = require('./engine.js'), n = 0, bad = 0;
function eq(a, b, m, t) { n++; if (!(Math.abs(a - b) <= (t == null ? 1e-9 : t))) { bad++; console.log('FAIL', m, a, b); } }
function is(a, b, m) { n++; if (a !== b) { bad++; console.log('FAIL', m, a, b); } }
// BenQ: 100-inch 16:9 image is about 7.2 ft wide; throw ratio 1.13 -> 8.2 ft from the wall
var w = E.width(100, 16, 9); eq(w, 87.1576, '16:9 width', 1e-3); eq(w / 12, 7.2636, 'ft', 1e-3); eq(w / 100, 0.8716, 'calculator.academy 0.8716 x diagonal', 1e-4);
eq(E.distance(1.13, w) / 12, 8.2, 'BenQ 8.2 ft', 0.05);
// BenQ short throw: 100" @ 6.6 ft -> ratio about 0.91
eq(6.6 * 12 / w, 0.9087, 'short throw ratio', 1e-3);
// height 16:9 = 49.0 in
eq(E.height(100, 16, 9), 49.0261, 'h', 1e-3);
// round trips
eq(E.diagFromWidth(w, 16, 9), 100, 'diag round trip'); eq(E.maxWidth(E.distance(1.5, 80), 1.5), 80, 'width round trip');
// zoom range 1.4-2.2 for an 87.16 in wide image
var r = E.range(1.4, 2.2, w); eq(r[0], 122.03, 'lo', 0.01); eq(r[1], 191.75, 'hi', 0.01);
// biggest picture for 10 ft (120 in) with ratio 1.13: width 106.19, diag 121.8
eq(E.maxDiag(120, 1.13, 16, 9), 121.84, 'maxDiag', 0.05);
// 4:3 width = 0.8 x diag, 16:10 = 0.8479 x diag
eq(E.width(100, 4, 3), 80, '4:3'); eq(E.width(100, 16, 10), 84.8, '16:10', 0.05);
is(E.classify(0.25), 'Ultra short throw', 'ust'); is(E.classify(0.9), 'Short throw', 'st'); is(E.classify(1.13), 'Standard throw', 'std'); is(E.classify(2.5), 'Long throw', 'long');
console.log(n + ' assertions, ' + bad + ' failed'); process.exit(bad ? 1 : 0);
