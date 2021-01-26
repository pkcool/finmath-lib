var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":88,"id":32115,"methods":[{"el":38,"sc":2,"sl":23},{"el":71,"sc":2,"sl":48},{"el":76,"sc":2,"sl":73},{"el":81,"sc":2,"sl":78},{"el":86,"sc":2,"sl":83}],"name":"SimplifiedLinearAnnuityMapping","sl":17}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_159":{"methods":[{"sl":78}],"name":"c_testFirstDerivative","pass":true,"statements":[{"sl":80}]},"test_187":{"methods":[{"sl":73}],"name":"a_testMappings","pass":true,"statements":[{"sl":75}]},"test_202":{"methods":[{"sl":83}],"name":"d_testSecondDerivative","pass":true,"statements":[{"sl":85}]},"test_265":{"methods":[{"sl":73}],"name":"b_testSeq","pass":true,"statements":[{"sl":75}]},"test_398":{"methods":[{"sl":48},{"sl":73},{"sl":83}],"name":"testSimplified","pass":true,"statements":[{"sl":49},{"sl":51},{"sl":52},{"sl":53},{"sl":55},{"sl":57},{"sl":61},{"sl":63},{"sl":65},{"sl":66},{"sl":68},{"sl":69},{"sl":70},{"sl":75},{"sl":85}]},"test_439":{"methods":[{"sl":48},{"sl":73},{"sl":78},{"sl":83}],"name":"testSimplifiedLinear","pass":true,"statements":[{"sl":49},{"sl":51},{"sl":52},{"sl":53},{"sl":55},{"sl":57},{"sl":61},{"sl":63},{"sl":65},{"sl":66},{"sl":68},{"sl":69},{"sl":70},{"sl":75},{"sl":80},{"sl":85}]},"test_512":{"methods":[{"sl":48},{"sl":73},{"sl":78},{"sl":83}],"name":"a_testSimplifiedLinear","pass":true,"statements":[{"sl":49},{"sl":51},{"sl":52},{"sl":53},{"sl":55},{"sl":57},{"sl":61},{"sl":63},{"sl":65},{"sl":66},{"sl":68},{"sl":69},{"sl":70},{"sl":75},{"sl":80},{"sl":85}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [512, 439, 398], [512, 439, 398], [], [512, 439, 398], [512, 439, 398], [512, 439, 398], [], [512, 439, 398], [], [512, 439, 398], [], [], [], [512, 439, 398], [], [512, 439, 398], [], [512, 439, 398], [512, 439, 398], [], [512, 439, 398], [512, 439, 398], [512, 439, 398], [], [], [265, 187, 512, 439, 398], [], [265, 187, 512, 439, 398], [], [], [512, 159, 439], [], [512, 159, 439], [], [], [512, 439, 398, 202], [], [512, 439, 398, 202], [], [], []]