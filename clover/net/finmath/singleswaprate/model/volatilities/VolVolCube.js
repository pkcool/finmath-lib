var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":130,"id":34115,"methods":[{"el":70,"sc":2,"sl":50},{"el":83,"sc":2,"sl":72},{"el":88,"sc":2,"sl":85},{"el":93,"sc":2,"sl":90},{"el":97,"sc":2,"sl":95},{"el":102,"sc":2,"sl":99},{"el":107,"sc":2,"sl":104},{"el":112,"sc":2,"sl":109},{"el":118,"sc":2,"sl":114},{"el":123,"sc":2,"sl":120},{"el":128,"sc":2,"sl":125}],"name":"VolVolCube","sl":26}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_157":{"methods":[{"sl":50},{"sl":72}],"name":"testMulti","pass":true,"statements":[{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":55},{"sl":57},{"sl":58},{"sl":59},{"sl":61},{"sl":63},{"sl":64},{"sl":65},{"sl":67},{"sl":69},{"sl":75},{"sl":76},{"sl":78},{"sl":79},{"sl":80},{"sl":82}]},"test_361":{"methods":[{"sl":50},{"sl":72}],"name":"testBasicPiterbarg","pass":true,"statements":[{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":55},{"sl":57},{"sl":58},{"sl":59},{"sl":61},{"sl":63},{"sl":64},{"sl":65},{"sl":67},{"sl":69},{"sl":75},{"sl":76},{"sl":78},{"sl":79},{"sl":80},{"sl":82}]},"test_370":{"methods":[{"sl":50},{"sl":72}],"name":"b_testBasicPiterbarg","pass":true,"statements":[{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":55},{"sl":57},{"sl":58},{"sl":59},{"sl":61},{"sl":63},{"sl":64},{"sl":65},{"sl":67},{"sl":69},{"sl":75},{"sl":76},{"sl":78},{"sl":79},{"sl":80},{"sl":82}]},"test_372":{"methods":[{"sl":50},{"sl":72}],"name":"testBasic","pass":true,"statements":[{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":55},{"sl":57},{"sl":58},{"sl":59},{"sl":61},{"sl":63},{"sl":64},{"sl":65},{"sl":67},{"sl":69},{"sl":75},{"sl":76},{"sl":78},{"sl":79},{"sl":80},{"sl":82}]},"test_463":{"methods":[{"sl":50},{"sl":72}],"name":"testSABRCubeCalibration","pass":true,"statements":[{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":55},{"sl":57},{"sl":58},{"sl":59},{"sl":61},{"sl":63},{"sl":64},{"sl":65},{"sl":67},{"sl":69},{"sl":75},{"sl":76},{"sl":78},{"sl":79},{"sl":80},{"sl":82}]},"test_472":{"methods":[{"sl":50},{"sl":72}],"name":"testMultiPiterbarg","pass":true,"statements":[{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":55},{"sl":57},{"sl":58},{"sl":59},{"sl":61},{"sl":63},{"sl":64},{"sl":65},{"sl":67},{"sl":69},{"sl":75},{"sl":76},{"sl":78},{"sl":79},{"sl":80},{"sl":82}]},"test_534":{"methods":[{"sl":50},{"sl":72}],"name":"testCalibration","pass":true,"statements":[{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":55},{"sl":57},{"sl":58},{"sl":59},{"sl":61},{"sl":63},{"sl":64},{"sl":65},{"sl":67},{"sl":69},{"sl":75},{"sl":76},{"sl":78},{"sl":79},{"sl":80},{"sl":82}]},"test_605":{"methods":[{"sl":50},{"sl":72}],"name":"testCalibration","pass":true,"statements":[{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":55},{"sl":57},{"sl":58},{"sl":59},{"sl":61},{"sl":63},{"sl":64},{"sl":65},{"sl":67},{"sl":69},{"sl":75},{"sl":76},{"sl":78},{"sl":79},{"sl":80},{"sl":82}]},"test_74":{"methods":[{"sl":50},{"sl":72}],"name":"testStaticCubeCalibration","pass":true,"statements":[{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":55},{"sl":57},{"sl":58},{"sl":59},{"sl":61},{"sl":63},{"sl":64},{"sl":65},{"sl":67},{"sl":69},{"sl":75},{"sl":76},{"sl":78},{"sl":79},{"sl":80},{"sl":82}]},"test_87":{"methods":[{"sl":50},{"sl":72}],"name":"c_testMultiPiterbarg","pass":true,"statements":[{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":55},{"sl":57},{"sl":58},{"sl":59},{"sl":61},{"sl":63},{"sl":64},{"sl":65},{"sl":67},{"sl":69},{"sl":75},{"sl":76},{"sl":78},{"sl":79},{"sl":80},{"sl":82}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [372, 87, 534, 605, 370, 157, 472, 74, 361, 463], [372, 87, 534, 605, 370, 157, 472, 74, 361, 463], [372, 87, 534, 605, 370, 157, 472, 74, 361, 463], [372, 87, 534, 605, 370, 157, 472, 74, 361, 463], [372, 87, 534, 605, 370, 157, 472, 74, 361, 463], [372, 87, 534, 605, 370, 157, 472, 74, 361, 463], [], [372, 87, 534, 605, 370, 157, 472, 74, 361, 463], [372, 87, 534, 605, 370, 157, 472, 74, 361, 463], [372, 87, 534, 605, 370, 157, 472, 74, 361, 463], [], [372, 87, 534, 605, 370, 157, 472, 74, 361, 463], [], [372, 87, 534, 605, 370, 157, 472, 74, 361, 463], [372, 87, 534, 605, 370, 157, 472, 74, 361, 463], [372, 87, 534, 605, 370, 157, 472, 74, 361, 463], [], [372, 87, 534, 605, 370, 157, 472, 74, 361, 463], [], [372, 87, 534, 605, 370, 157, 472, 74, 361, 463], [], [], [372, 87, 534, 605, 370, 157, 472, 74, 361, 463], [], [], [372, 87, 534, 605, 370, 157, 472, 74, 361, 463], [372, 87, 534, 605, 370, 157, 472, 74, 361, 463], [], [372, 87, 534, 605, 370, 157, 472, 74, 361, 463], [372, 87, 534, 605, 370, 157, 472, 74, 361, 463], [372, 87, 534, 605, 370, 157, 472, 74, 361, 463], [], [372, 87, 534, 605, 370, 157, 472, 74, 361, 463], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]