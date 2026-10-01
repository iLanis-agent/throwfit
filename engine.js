(function (root) {
  'use strict';
  var ASPECTS = { '16:9': [16, 9], '16:10': [16, 10], '4:3': [4, 3], '21:9': [21, 9] };
  // image width from diagonal and aspect ratio a:b (same unit out as in)
  function width(diag, a, b) { return diag * a / Math.sqrt(a * a + b * b); }
  function height(diag, a, b) { return diag * b / Math.sqrt(a * a + b * b); }
  // throw ratio = distance / image width
  function distance(ratio, w) { return ratio * w; }
  function maxWidth(dist, ratio) { return dist / ratio; }
  function diagFromWidth(w, a, b) { return w * Math.sqrt(a * a + b * b) / a; }
  // zoom lens: ratio range [lo, hi]; distance range for a given width
  function range(lo, hi, w) { return [lo * w, hi * w]; }
  // biggest screen diagonal that fits a given mounting distance: a zoom projector can reach the widest picture at ratio lo
  function maxDiag(dist, lo, a, b) { return diagFromWidth(maxWidth(dist, lo), a, b); }
  function classify(r) { return r < 0.4 ? 'Ultra short throw' : r < 1.0 ? 'Short throw' : r <= 2.0 ? 'Standard throw' : 'Long throw'; }
  var api = { ASPECTS: ASPECTS, width: width, height: height, distance: distance, maxWidth: maxWidth, diagFromWidth: diagFromWidth, range: range, maxDiag: maxDiag, classify: classify };
  if (typeof module !== 'undefined' && module.exports) module.exports = api; else root.Throw = api;
})(typeof window !== 'undefined' ? window : this);
