// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.4.4.21-8-b-iii-1-6
description: >
    Array.prototype.reduce - element to be retrieved is own data
    property that overrides an inherited accessor property on an Array
includes: [runTestCase.js]
---*/

function testcase() {

        var testResult = false;
        function callbackfn(prevVal, curVal, idx, obj) {
            if (idx === 1) {
                testResult = (prevVal === 0);
            }
        }

        try {
            Object.defineProperty(Array.prototype, "0", {
                get: function () {
                    return "5";
                },
                configurable: true
            });

            [0, 1, 2].reduce(callbackfn);
            return testResult;
        } finally {
            delete Array.prototype[0];
        }
    }
runTestCase(testcase);
