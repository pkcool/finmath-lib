var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":188,"id":811,"methods":[{"el":57,"sc":2,"sl":47},{"el":76,"sc":2,"sl":67},{"el":87,"sc":2,"sl":85},{"el":105,"sc":4,"sl":95},{"el":107,"sc":2,"sl":89},{"el":117,"sc":2,"sl":115},{"el":127,"sc":2,"sl":125},{"el":134,"sc":2,"sl":132},{"el":141,"sc":2,"sl":139},{"el":148,"sc":2,"sl":146},{"el":155,"sc":2,"sl":153},{"el":162,"sc":2,"sl":160},{"el":169,"sc":2,"sl":167},{"el":176,"sc":2,"sl":174},{"el":186,"sc":2,"sl":181}],"name":"BlackScholesModel","sl":23}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_102":{"methods":[{"sl":67},{"sl":85},{"sl":89},{"sl":95},{"sl":115},{"sl":125}],"name":"test[net.finmath.fouriermethod.products.EuropeanOption@1f2586d6]","pass":true,"statements":[{"sl":68},{"sl":69},{"sl":70},{"sl":71},{"sl":72},{"sl":73},{"sl":74},{"sl":75},{"sl":86},{"sl":91},{"sl":92},{"sl":94},{"sl":97},{"sl":98},{"sl":116},{"sl":126}]},"test_142":{"methods":[{"sl":67},{"sl":85},{"sl":89},{"sl":95},{"sl":115},{"sl":125}],"name":"test[net.finmath.fouriermethod.products.DigitalOption@229f66ed]","pass":true,"statements":[{"sl":68},{"sl":69},{"sl":70},{"sl":71},{"sl":72},{"sl":73},{"sl":74},{"sl":75},{"sl":86},{"sl":91},{"sl":92},{"sl":94},{"sl":97},{"sl":98},{"sl":116},{"sl":126}]},"test_147":{"methods":[{"sl":47},{"sl":89},{"sl":95},{"sl":115},{"sl":125}],"name":"test","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":55},{"sl":56},{"sl":91},{"sl":92},{"sl":94},{"sl":97},{"sl":98},{"sl":116},{"sl":126}]},"test_164":{"methods":[{"sl":67},{"sl":85},{"sl":89},{"sl":95},{"sl":115},{"sl":125}],"name":"test","pass":true,"statements":[{"sl":68},{"sl":69},{"sl":70},{"sl":71},{"sl":72},{"sl":73},{"sl":74},{"sl":75},{"sl":86},{"sl":91},{"sl":92},{"sl":94},{"sl":97},{"sl":98},{"sl":116},{"sl":126}]},"test_298":{"methods":[{"sl":67},{"sl":85},{"sl":89},{"sl":95},{"sl":115},{"sl":125}],"name":"test","pass":true,"statements":[{"sl":68},{"sl":69},{"sl":70},{"sl":71},{"sl":72},{"sl":73},{"sl":74},{"sl":75},{"sl":86},{"sl":91},{"sl":92},{"sl":94},{"sl":97},{"sl":98},{"sl":116},{"sl":126}]},"test_369":{"methods":[{"sl":67},{"sl":85},{"sl":89},{"sl":95},{"sl":115},{"sl":125}],"name":"testDigitalOption","pass":true,"statements":[{"sl":68},{"sl":69},{"sl":70},{"sl":71},{"sl":72},{"sl":73},{"sl":74},{"sl":75},{"sl":86},{"sl":91},{"sl":92},{"sl":94},{"sl":97},{"sl":98},{"sl":116},{"sl":126}]},"test_469":{"methods":[{"sl":47},{"sl":89},{"sl":95},{"sl":115},{"sl":125}],"name":"bsTest","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":55},{"sl":56},{"sl":91},{"sl":92},{"sl":94},{"sl":97},{"sl":98},{"sl":116},{"sl":126}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [147, 469], [], [147, 469], [147, 469], [147, 469], [147, 469], [147, 469], [147, 469], [147, 469], [147, 469], [], [], [], [], [], [], [], [], [], [], [142, 369, 298, 164, 102], [142, 369, 298, 164, 102], [142, 369, 298, 164, 102], [142, 369, 298, 164, 102], [142, 369, 298, 164, 102], [142, 369, 298, 164, 102], [142, 369, 298, 164, 102], [142, 369, 298, 164, 102], [142, 369, 298, 164, 102], [], [], [], [], [], [], [], [], [], [142, 369, 298, 164, 102], [142, 369, 298, 164, 102], [], [], [142, 369, 298, 147, 164, 469, 102], [], [142, 369, 298, 147, 164, 469, 102], [142, 369, 298, 147, 164, 469, 102], [], [142, 369, 298, 147, 164, 469, 102], [142, 369, 298, 147, 164, 469, 102], [], [142, 369, 298, 147, 164, 469, 102], [142, 369, 298, 147, 164, 469, 102], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [142, 369, 298, 147, 164, 469, 102], [142, 369, 298, 147, 164, 469, 102], [], [], [], [], [], [], [], [], [142, 369, 298, 147, 164, 469, 102], [142, 369, 298, 147, 164, 469, 102], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]