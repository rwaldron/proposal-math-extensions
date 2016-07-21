# `Math` Extensions Proposal


[Polyfill](https://www.npmjs.com/package/ecma-proposal-math-extensions)


## Champion

Rick Waldron


## Status

This proposal is currently in stage -1 of [the TC39 process](https://github.com/tc39/ecma262/).


## Motivation


These functions exist in every JS-on-hardware, JS remotely controlling hardware & IoT project. Providing them as built-ins paves a widening cow path. Implementations of all can be [found throughout many modules on npm](https://www.npmjs.com/search?q=math), of varying quality and consistency. 




## Questions

- `Math.map` 
  + Is it...
    - `Math.scale`
    - `Math.map` 
    - `Math.remap`
  + Should there be a corresponding `Math.fmap`? (ie. https://tc39.github.io/ecma262/#sec-math.fround, Step 3 & 4 convert result to IEEE 754-2008 binary32 (using roundTiesToEven), then to IEEE 754-2008 binary64).
- `Math.constrain`
  + Is it...
    - `Math.constrain` 
    - `Math.clamp`

