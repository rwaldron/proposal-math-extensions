// Copyright (C) 2016 Rick Waldron. All rights reserved.
// This code is governed by the MIT license.

/*---
es8id: X.X.X.X
description: Testing descriptor property of Math.constrain
includes: [propertyHelper.js]
---*/

verifyWritable(Math, "constrain");
verifyNotEnumerable(Math, "constrain");
verifyConfigurable(Math, "constrain");
