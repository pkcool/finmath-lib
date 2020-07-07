var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":178,"id":4588,"methods":[{"el":55,"sc":2,"sl":50},{"el":61,"sc":2,"sl":57},{"el":91,"sc":2,"sl":69},{"el":96,"sc":2,"sl":93},{"el":112,"sc":2,"sl":105},{"el":129,"sc":2,"sl":120},{"el":137,"sc":4,"sl":134},{"el":142,"sc":4,"sl":139},{"el":144,"sc":2,"sl":131},{"el":149,"sc":2,"sl":146},{"el":156,"sc":2,"sl":151},{"el":160,"sc":2,"sl":158},{"el":165,"sc":2,"sl":162},{"el":170,"sc":2,"sl":167},{"el":177,"sc":2,"sl":172}],"name":"DiscountCurveNelsonSiegelSvensson","sl":35}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_100":{"methods":[{"sl":69},{"sl":158}],"name":"testUnalignedPeriods[NSS-10,000]","pass":true,"statements":[{"sl":73},{"sl":75},{"sl":76},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":82},{"sl":83},{"sl":85},{"sl":86},{"sl":88},{"sl":90},{"sl":159}]},"test_101":{"methods":[{"sl":69},{"sl":158}],"name":"testSinglePeriods[NSS-200,000]","pass":true,"statements":[{"sl":73},{"sl":75},{"sl":76},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":82},{"sl":83},{"sl":85},{"sl":86},{"sl":88},{"sl":90},{"sl":159}]},"test_119":{"methods":[{"sl":50},{"sl":57},{"sl":69},{"sl":146},{"sl":158},{"sl":172}],"name":"testVolatilityCalibration[VOLATILITYNORMAL]","pass":true,"statements":[{"sl":51},{"sl":52},{"sl":54},{"sl":60},{"sl":73},{"sl":75},{"sl":76},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":82},{"sl":83},{"sl":85},{"sl":86},{"sl":88},{"sl":90},{"sl":148},{"sl":159},{"sl":174}]},"test_129":{"methods":[{"sl":69},{"sl":158}],"name":"testUnalignedPeriods[NSS-1,000]","pass":true,"statements":[{"sl":73},{"sl":75},{"sl":76},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":82},{"sl":83},{"sl":85},{"sl":86},{"sl":88},{"sl":90},{"sl":159}]},"test_131":{"methods":[{"sl":69},{"sl":158}],"name":"testUnalignedPeriods[NSS-200,000]","pass":true,"statements":[{"sl":73},{"sl":75},{"sl":76},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":82},{"sl":83},{"sl":85},{"sl":86},{"sl":88},{"sl":90},{"sl":159}]},"test_135":{"methods":[{"sl":69},{"sl":158}],"name":"testSinglePeriods[NSS-40,000]","pass":true,"statements":[{"sl":73},{"sl":75},{"sl":76},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":82},{"sl":83},{"sl":85},{"sl":86},{"sl":88},{"sl":90},{"sl":159}]},"test_138":{"methods":[{"sl":69},{"sl":158}],"name":"testMultiPeriodFloater[NSS-8,000]","pass":true,"statements":[{"sl":73},{"sl":75},{"sl":76},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":82},{"sl":83},{"sl":85},{"sl":86},{"sl":88},{"sl":90},{"sl":159}]},"test_160":{"methods":[{"sl":69},{"sl":158}],"name":"testMultiPeriodFloater[NSS-4,000]","pass":true,"statements":[{"sl":73},{"sl":75},{"sl":76},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":82},{"sl":83},{"sl":85},{"sl":86},{"sl":88},{"sl":90},{"sl":159}]},"test_166":{"methods":[{"sl":69},{"sl":158}],"name":"testMultiPeriodFloater[NSS-2,000]","pass":true,"statements":[{"sl":73},{"sl":75},{"sl":76},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":82},{"sl":83},{"sl":85},{"sl":86},{"sl":88},{"sl":90},{"sl":159}]},"test_257":{"methods":[{"sl":69},{"sl":158}],"name":"testUnalignedPeriods[NSS-40,000]","pass":true,"statements":[{"sl":73},{"sl":75},{"sl":76},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":82},{"sl":83},{"sl":85},{"sl":86},{"sl":88},{"sl":90},{"sl":159}]},"test_261":{"methods":[{"sl":69},{"sl":158}],"name":"testMultiPeriodFloater[NSS-200,000]","pass":true,"statements":[{"sl":73},{"sl":75},{"sl":76},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":82},{"sl":83},{"sl":85},{"sl":86},{"sl":88},{"sl":90},{"sl":159}]},"test_309":{"methods":[{"sl":50},{"sl":57},{"sl":69}],"name":"test","pass":true,"statements":[{"sl":51},{"sl":52},{"sl":54},{"sl":60},{"sl":73},{"sl":75},{"sl":76},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":82},{"sl":83},{"sl":85},{"sl":86},{"sl":88},{"sl":90}]},"test_322":{"methods":[{"sl":69},{"sl":158}],"name":"testUnalignedPeriods[NSS-2,000]","pass":true,"statements":[{"sl":73},{"sl":75},{"sl":76},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":82},{"sl":83},{"sl":85},{"sl":86},{"sl":88},{"sl":90},{"sl":159}]},"test_333":{"methods":[{"sl":69},{"sl":158}],"name":"testUnalignedPeriods[NSS-4,000]","pass":true,"statements":[{"sl":73},{"sl":75},{"sl":76},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":82},{"sl":83},{"sl":85},{"sl":86},{"sl":88},{"sl":90},{"sl":159}]},"test_337":{"methods":[{"sl":69},{"sl":158}],"name":"testUnalignedPeriods[NSS-20,000]","pass":true,"statements":[{"sl":73},{"sl":75},{"sl":76},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":82},{"sl":83},{"sl":85},{"sl":86},{"sl":88},{"sl":90},{"sl":159}]},"test_339":{"methods":[{"sl":69},{"sl":158}],"name":"testUnalignedPeriods[NSS-8,000]","pass":true,"statements":[{"sl":73},{"sl":75},{"sl":76},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":82},{"sl":83},{"sl":85},{"sl":86},{"sl":88},{"sl":90},{"sl":159}]},"test_345":{"methods":[{"sl":69},{"sl":158}],"name":"testUnalignedPeriods[NSS-100,000]","pass":true,"statements":[{"sl":73},{"sl":75},{"sl":76},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":82},{"sl":83},{"sl":85},{"sl":86},{"sl":88},{"sl":90},{"sl":159}]},"test_368":{"methods":[{"sl":69},{"sl":158}],"name":"testSinglePeriods[NSS-10,000]","pass":true,"statements":[{"sl":73},{"sl":75},{"sl":76},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":82},{"sl":83},{"sl":85},{"sl":86},{"sl":88},{"sl":90},{"sl":159}]},"test_379":{"methods":[{"sl":69},{"sl":158}],"name":"testUnalignedPeriods[NSS-80,000]","pass":true,"statements":[{"sl":73},{"sl":75},{"sl":76},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":82},{"sl":83},{"sl":85},{"sl":86},{"sl":88},{"sl":90},{"sl":159}]},"test_381":{"methods":[{"sl":69},{"sl":158}],"name":"testMultiPeriodFloater[NSS-20,000]","pass":true,"statements":[{"sl":73},{"sl":75},{"sl":76},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":82},{"sl":83},{"sl":85},{"sl":86},{"sl":88},{"sl":90},{"sl":159}]},"test_401":{"methods":[{"sl":69},{"sl":158}],"name":"testMultiPeriodFloater[NSS-80,000]","pass":true,"statements":[{"sl":73},{"sl":75},{"sl":76},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":82},{"sl":83},{"sl":85},{"sl":86},{"sl":88},{"sl":90},{"sl":159}]},"test_402":{"methods":[{"sl":69},{"sl":158}],"name":"testMultiPeriodFloater[NSS-40,000]","pass":true,"statements":[{"sl":73},{"sl":75},{"sl":76},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":82},{"sl":83},{"sl":85},{"sl":86},{"sl":88},{"sl":90},{"sl":159}]},"test_407":{"methods":[{"sl":69},{"sl":158}],"name":"testSinglePeriods[NSS-20,000]","pass":true,"statements":[{"sl":73},{"sl":75},{"sl":76},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":82},{"sl":83},{"sl":85},{"sl":86},{"sl":88},{"sl":90},{"sl":159}]},"test_420":{"methods":[{"sl":69},{"sl":158}],"name":"testMultiPeriodFloater[NSS-10,000]","pass":true,"statements":[{"sl":73},{"sl":75},{"sl":76},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":82},{"sl":83},{"sl":85},{"sl":86},{"sl":88},{"sl":90},{"sl":159}]},"test_441":{"methods":[{"sl":69},{"sl":158}],"name":"testSinglePeriods[NSS-2,000]","pass":true,"statements":[{"sl":73},{"sl":75},{"sl":76},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":82},{"sl":83},{"sl":85},{"sl":86},{"sl":88},{"sl":90},{"sl":159}]},"test_490":{"methods":[{"sl":69},{"sl":158}],"name":"testSinglePeriods[NSS-80,000]","pass":true,"statements":[{"sl":73},{"sl":75},{"sl":76},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":82},{"sl":83},{"sl":85},{"sl":86},{"sl":88},{"sl":90},{"sl":159}]},"test_495":{"methods":[{"sl":69},{"sl":158}],"name":"testSinglePeriods[NSS-8,000]","pass":true,"statements":[{"sl":73},{"sl":75},{"sl":76},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":82},{"sl":83},{"sl":85},{"sl":86},{"sl":88},{"sl":90},{"sl":159}]},"test_546":{"methods":[{"sl":69},{"sl":158}],"name":"testMultiPeriodFloater[NSS-100,000]","pass":true,"statements":[{"sl":73},{"sl":75},{"sl":76},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":82},{"sl":83},{"sl":85},{"sl":86},{"sl":88},{"sl":90},{"sl":159}]},"test_551":{"methods":[{"sl":69},{"sl":158}],"name":"testMultiPeriodFloater[NSS-1,000]","pass":true,"statements":[{"sl":73},{"sl":75},{"sl":76},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":82},{"sl":83},{"sl":85},{"sl":86},{"sl":88},{"sl":90},{"sl":159}]},"test_585":{"methods":[{"sl":69},{"sl":158}],"name":"testSinglePeriods[NSS-1,000]","pass":true,"statements":[{"sl":73},{"sl":75},{"sl":76},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":82},{"sl":83},{"sl":85},{"sl":86},{"sl":88},{"sl":90},{"sl":159}]},"test_606":{"methods":[{"sl":50},{"sl":69},{"sl":146},{"sl":158},{"sl":172}],"name":"testVolatilityCalibration[VOLATILITYLOGNORMAL]","pass":true,"statements":[{"sl":51},{"sl":52},{"sl":54},{"sl":73},{"sl":75},{"sl":76},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":82},{"sl":83},{"sl":85},{"sl":86},{"sl":88},{"sl":90},{"sl":148},{"sl":159},{"sl":174}]},"test_70":{"methods":[{"sl":69},{"sl":158}],"name":"testSinglePeriods[NSS-100,000]","pass":true,"statements":[{"sl":73},{"sl":75},{"sl":76},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":82},{"sl":83},{"sl":85},{"sl":86},{"sl":88},{"sl":90},{"sl":159}]},"test_87":{"methods":[{"sl":50},{"sl":69},{"sl":158}],"name":"test","pass":true,"statements":[{"sl":51},{"sl":52},{"sl":54},{"sl":73},{"sl":75},{"sl":76},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":82},{"sl":83},{"sl":85},{"sl":86},{"sl":88},{"sl":90},{"sl":159}]},"test_9":{"methods":[{"sl":50},{"sl":69},{"sl":146},{"sl":167}],"name":"testCalibration","pass":true,"statements":[{"sl":51},{"sl":52},{"sl":54},{"sl":73},{"sl":75},{"sl":76},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":82},{"sl":83},{"sl":85},{"sl":86},{"sl":88},{"sl":90},{"sl":148},{"sl":169}]},"test_95":{"methods":[{"sl":69},{"sl":158}],"name":"testSinglePeriods[NSS-4,000]","pass":true,"statements":[{"sl":73},{"sl":75},{"sl":76},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":82},{"sl":83},{"sl":85},{"sl":86},{"sl":88},{"sl":90},{"sl":159}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [9, 119, 606, 309, 87], [9, 119, 606, 309, 87], [9, 119, 606, 309, 87], [], [9, 119, 606, 309, 87], [], [], [119, 309], [], [], [119, 309], [], [], [], [], [], [], [], [], [322, 441, 420, 379, 101, 345, 261, 381, 135, 129, 585, 9, 551, 339, 490, 257, 495, 100, 119, 546, 402, 166, 160, 606, 333, 407, 70, 337, 95, 138, 131, 309, 368, 87, 401], [], [], [], [322, 441, 420, 379, 101, 345, 261, 381, 135, 129, 585, 9, 551, 339, 490, 257, 495, 100, 119, 546, 402, 166, 160, 606, 333, 407, 70, 337, 95, 138, 131, 309, 368, 87, 401], [], [322, 441, 420, 379, 101, 345, 261, 381, 135, 129, 585, 9, 551, 339, 490, 257, 495, 100, 119, 546, 402, 166, 160, 606, 333, 407, 70, 337, 95, 138, 131, 309, 368, 87, 401], [322, 441, 420, 379, 101, 345, 261, 381, 135, 129, 585, 9, 551, 339, 490, 257, 495, 100, 119, 546, 402, 166, 160, 606, 333, 407, 70, 337, 95, 138, 131, 309, 368, 87, 401], [322, 441, 420, 379, 101, 345, 261, 381, 135, 129, 585, 9, 551, 339, 490, 257, 495, 100, 119, 546, 402, 166, 160, 606, 333, 407, 70, 337, 95, 138, 131, 309, 368, 87, 401], [322, 441, 420, 379, 101, 345, 261, 381, 135, 129, 585, 9, 551, 339, 490, 257, 495, 100, 119, 546, 402, 166, 160, 606, 333, 407, 70, 337, 95, 138, 131, 309, 368, 87, 401], [322, 441, 420, 379, 101, 345, 261, 381, 135, 129, 585, 9, 551, 339, 490, 257, 495, 100, 119, 546, 402, 166, 160, 606, 333, 407, 70, 337, 95, 138, 131, 309, 368, 87, 401], [322, 441, 420, 379, 101, 345, 261, 381, 135, 129, 585, 9, 551, 339, 490, 257, 495, 100, 119, 546, 402, 166, 160, 606, 333, 407, 70, 337, 95, 138, 131, 309, 368, 87, 401], [], [322, 441, 420, 379, 101, 345, 261, 381, 135, 129, 585, 9, 551, 339, 490, 257, 495, 100, 119, 546, 402, 166, 160, 606, 333, 407, 70, 337, 95, 138, 131, 309, 368, 87, 401], [322, 441, 420, 379, 101, 345, 261, 381, 135, 129, 585, 9, 551, 339, 490, 257, 495, 100, 119, 546, 402, 166, 160, 606, 333, 407, 70, 337, 95, 138, 131, 309, 368, 87, 401], [], [322, 441, 420, 379, 101, 345, 261, 381, 135, 129, 585, 9, 551, 339, 490, 257, 495, 100, 119, 546, 402, 166, 160, 606, 333, 407, 70, 337, 95, 138, 131, 309, 368, 87, 401], [322, 441, 420, 379, 101, 345, 261, 381, 135, 129, 585, 9, 551, 339, 490, 257, 495, 100, 119, 546, 402, 166, 160, 606, 333, 407, 70, 337, 95, 138, 131, 309, 368, 87, 401], [], [322, 441, 420, 379, 101, 345, 261, 381, 135, 129, 585, 9, 551, 339, 490, 257, 495, 100, 119, 546, 402, 166, 160, 606, 333, 407, 70, 337, 95, 138, 131, 309, 368, 87, 401], [], [322, 441, 420, 379, 101, 345, 261, 381, 135, 129, 585, 9, 551, 339, 490, 257, 495, 100, 119, 546, 402, 166, 160, 606, 333, 407, 70, 337, 95, 138, 131, 309, 368, 87, 401], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [9, 119, 606], [], [9, 119, 606], [], [], [], [], [], [], [], [], [], [322, 441, 420, 379, 101, 345, 261, 381, 135, 129, 585, 551, 339, 490, 257, 495, 100, 119, 546, 402, 166, 160, 606, 333, 407, 70, 337, 95, 138, 131, 368, 87, 401], [322, 441, 420, 379, 101, 345, 261, 381, 135, 129, 585, 551, 339, 490, 257, 495, 100, 119, 546, 402, 166, 160, 606, 333, 407, 70, 337, 95, 138, 131, 368, 87, 401], [], [], [], [], [], [], [], [9], [], [9], [], [], [119, 606], [], [119, 606], [], [], [], []]