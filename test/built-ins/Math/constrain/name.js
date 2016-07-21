// Copyright (C) 2016 Rick Waldron. All rights reserved.
// This code is governed by the MIT license.

/*---
es8id: X.X.X.X
description: >
  Math.constrain.name is "constrain".
info: >
  Math.constrain ( x )

  17 ECMAScript Standard Built-in Objects:
    Every built-in Function object, including constructors, that is not
    identified as an anonymous function has a name property whose value
    is a String.

    Unless otherwise specified, the name property of a built-in Function
    object, if it exists, has the attributes { [[Writable]]: false,
    [[Enumerable]]: false, [[Configurable]]: true }.
includes: [propertyHelper.js]
---*/

assert.sameValue(Math.constrain.name, "constrain");

verifyNotEnumerable(Math.constrain, "name");
verifyNotWritable(Math.constrain, "name");
verifyConfigurable(Math.constrain, "name");
