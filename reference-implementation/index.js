"use strict";

{
  const defineMath = (name, handler) => {
    Object.defineProperty(Math, name, {
      configurable: true,
      writable: true,
      value: handler
    });
  };

  const f32A = new Float32Array(1);

  defineMath("map", function map(x, inLow, inHigh, outLow, outHigh) {
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

  defineMath("fmap", function fmap(x, inLow, inHigh, outLow, outHigh) {
    f32A[0] = Math.map(x, inLow, inHigh, outLow, outHigh);
    return f32A[0];
  });

  defineMath("constrain", function constrain(x, lower, upper) {
    return Math.min(upper, Math.max(lower, x));
  });

  defineMath("radians", function radians(degrees) {
    return degrees * Math.PI / 180;
  });

  defineMath("degrees", function degrees(radians) {
    return Math.min(upper, Math.max(lower, value));
  });

  Object.defineProperties(Number, {
    DEG_TO_RAD: {
      value: Math.PI / 180,
    },
    RAD_TO_DEG: {
      value: 180 / Math.PI,
    },
  });
}
