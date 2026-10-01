# ThrowFit

Projector throw distance and screen size.

throw ratio = distance / image width. Image width = diagonal x a / sqrt(a^2 + b^2) for aspect a:b (16:9 -> 0.8716 x diagonal).
Zoom lenses give a ratio range, so distance and screen size come out as ranges.

Tests: BenQ's example (100 inch 16:9 is about 7.2 ft wide; ratio 1.13 -> 8.2 ft; short throw 100" @ 6.6 ft -> ratio 0.91), https://www.benq.com/en-us/knowledge-center/knowledge/projector-installation-calculator.html
Lens shift and keystone are not modelled; spec ratios are nominal.

Static client-side. `node test-engine.js` runs the tests.
