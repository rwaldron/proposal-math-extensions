# `Math` Extensions Proposal


- [Polyfill](https://www.npmjs.com/package/ecma-proposal-math-extensions)
- [Spec](https://rwaldron.github.io/proposal-math-extensions)


## Champion

Rick Waldron


## Status

This proposal is currently stage 1 of [the TC39 process](https://github.com/tc39/ecma262/).


## Motivation


These functions exist in many, many JS libraries either hand rolled or via  [many modules on npm](https://www.npmjs.com/search?q=math). Providing them as built-ins serves to pave cow path. Implementations and naming is inconsistent. Several other languages offer these as built-ins.


Java
- https://docs.oracle.com/javase/7/docs/api/java/lang/Math.html
  + `Math`
    + `Math.toDegrees(double angrad)`
    + `Math.toRadians(double angdeg)`
- JSR275
  + [Unit specification](https://www.jcp.org/en/jsr/detail?id=275)
- [JScience](http://jscience.org/)


Python
- Math
  - https://docs.python.org/2/library/math.html#angular-conversion
  - https://docs.python.org/3/library/math.html#angular-conversion
    + `math`
      + `math.degrees(x)`
      + `math.radians(x)`
- [Units](https://pypi.python.org/pypi/units)

Racket
- [Math](https://docs.racket-lang.org/reference/generic-numbers.html#%28def._%28%28lib._racket%2Fmath..rkt%29._degrees-~3eradians%29%29)
  + 4.2.2.10 Extra Constants and Functions
- [Operations on Measures](https://docs.racket-lang.org/measures-with-dimensions/Operations__Types__and_Structs.html#%28part._.Operations_on_.Measures%29)
  + 1.1.1 Operations on Measures


Rust
- https://doc.rust-lang.org/std/primitive.f32.html
- https://doc.rust-lang.org/std/primitive.f64.html





## Questions

- `Math.map` 
  + Is it...
    - `Math.scale` <-- this
    - `Math.map` 
    - `Math.remap`
  + Should there be a corresponding `Math.fmap`? (ie. https://tc39.github.io/ecma262/#sec-math.fround, Step 3 & 4 convert result to IEEE 754-2008 binary32 (using roundTiesToEven), then to IEEE 754-2008 binary64).
- `Math.constrain`
  + Is it...
    - `Math.constrain` 
    - `Math.clamp`

