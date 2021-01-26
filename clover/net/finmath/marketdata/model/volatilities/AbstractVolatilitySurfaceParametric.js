var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":111,"id":5342,"methods":[{"el":44,"sc":2,"sl":42},{"el":48,"sc":2,"sl":46},{"el":62,"sc":2,"sl":60},{"el":66,"sc":2,"sl":64},{"el":110,"sc":2,"sl":81}],"name":"AbstractVolatilitySurfaceParametric","sl":37}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_116":{"methods":[{"sl":42}],"name":"testDecayVolatility","pass":true,"statements":[{"sl":43}]},"test_428":{"methods":[{"sl":42},{"sl":60},{"sl":64},{"sl":81}],"name":"testVolatilityCalibration[VOLATILITYLOGNORMAL]","pass":true,"statements":[{"sl":43},{"sl":61},{"sl":65},{"sl":82},{"sl":83},{"sl":85},{"sl":86},{"sl":87},{"sl":90},{"sl":91},{"sl":92},{"sl":94},{"sl":95},{"sl":97},{"sl":98},{"sl":99},{"sl":102},{"sl":109}]},"test_435":{"methods":[{"sl":42},{"sl":60},{"sl":64},{"sl":81}],"name":"testVolatilityCalibration[VOLATILITYNORMAL]","pass":true,"statements":[{"sl":43},{"sl":61},{"sl":65},{"sl":82},{"sl":83},{"sl":85},{"sl":86},{"sl":87},{"sl":90},{"sl":91},{"sl":92},{"sl":94},{"sl":95},{"sl":97},{"sl":98},{"sl":99},{"sl":102},{"sl":109}]},"test_441":{"methods":[{"sl":42}],"name":"testIntegratedFourParameterExponentialVolatilityParamSetCZero","pass":true,"statements":[{"sl":43}]},"test_580":{"methods":[{"sl":42}],"name":"testIntegratedFourParameterExponentialVolatilityParamSet1","pass":true,"statements":[{"sl":43}]},"test_602":{"methods":[{"sl":42}],"name":"testFlatVolatilityUsingA","pass":true,"statements":[{"sl":43}]},"test_624":{"methods":[{"sl":42}],"name":"testFlatVolatilityUsingD","pass":true,"statements":[{"sl":43}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [602, 580, 441, 435, 428, 116, 624], [602, 580, 441, 435, 428, 116, 624], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [435, 428], [435, 428], [], [], [435, 428], [435, 428], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [435, 428], [435, 428], [435, 428], [], [435, 428], [435, 428], [435, 428], [], [], [435, 428], [435, 428], [435, 428], [], [435, 428], [435, 428], [], [435, 428], [435, 428], [435, 428], [], [], [435, 428], [], [], [], [], [], [], [435, 428], [], []]