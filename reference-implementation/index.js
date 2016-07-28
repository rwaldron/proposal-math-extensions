"use strict";

{
  const defineMath = (name, assignment) => {
    var configurable = typeof assignment === "function" ? true : false;
    var writable = typeof assignment === "function" ? true : false;
    var enumerable = typeof assignment === "function" ? true : false;

    Object.defineProperty(Math, name, {
      configurable: configurable,
      enumerable: enumerable,
      writable: writable,
      value: assignment
    });
  };

  defineMath("DEG_PER_RAD", Math.PI / 180);
  defineMath("RAD_PER_DEG", 180 / Math.PI);

  const f32A = new Float32Array(1);

  defineMath("scale", function scale(x, inLow, inHigh, outLow, outHigh) {
    if (arguments.length === 0) {
      return NaN;
    }

    if (Number.isNaN(x) ||
        Number.isNaN(inLow) ||
        Number.isNaN(inHigh) ||
        Number.isNaN(outLow) ||
        Number.isNaN(outHigh)) {
      return NaN;
    }

    if (x === Infinity ||
        x === -Infinity) {
      return x;
    }

    return (x - inLow) * (outHigh - outLow) /
      (inHigh - inLow) + outLow;
  });

  defineMath("fscale", function fscale(x, inLow, inHigh, outLow, outHigh) {
    f32A[0] = Math.scale(x, inLow, inHigh, outLow, outHigh);
    return f32A[0];
  });

  defineMath("clamp", function clamp(x, lower, upper) {
    return Math.min(upper, Math.max(lower, x));
  });

  defineMath("radians", function radians(degrees) {
    return degrees * Math.DEG_PER_RAD;
  });

  defineMath("degrees", function degrees(radians) {
    return radians * Math.RAD_PER_DEG;
  });
}
