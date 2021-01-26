var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":164,"id":29105,"methods":[{"el":49,"sc":2,"sl":41},{"el":65,"sc":2,"sl":58},{"el":75,"sc":2,"sl":73},{"el":116,"sc":2,"sl":77},{"el":125,"sc":2,"sl":123},{"el":139,"sc":2,"sl":127},{"el":149,"sc":2,"sl":146},{"el":156,"sc":2,"sl":151},{"el":163,"sc":2,"sl":158}],"name":"LIBORIndex","sl":28}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_10":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testUnalignedPeriods[DISCRETE-4,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_106":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testUnalignedPeriods[DISCRETE-100,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_111":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testUnalignedPeriods[NSS-2,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_113":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testSinglePeriods[NSS-2,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_118":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testMultiPeriodFloater[DISCRETE-40,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_121":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testSinglePeriods[NSS-200,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_125":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testStochasticCurves","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_126":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testSinglePeriods[DISCRETE-4,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_128":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testUnalignedPeriods[DISCRETE-200,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_138":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testUnalignedPeriods[NSS-1,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_144":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testMultiPeriodFloater[NSS-4,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_148":{"methods":[{"sl":58},{"sl":77},{"sl":127}],"name":"testFRAMonteCarloVersusAnalytic[forward-EUR-6M-100,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":81},{"sl":83},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":105},{"sl":106},{"sl":109},{"sl":110},{"sl":111},{"sl":112},{"sl":115},{"sl":128},{"sl":137}]},"test_158":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testSinglePeriods[DISCRETE-80,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_167":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testMultiPeriodFloater[NSS-8,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_177":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testUnalignedPeriods[NSS-100,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_178":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testMultiPeriodFloater[DISCRETE-100,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_188":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testUnalignedPeriods[NSS-20,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_190":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testSinglePeriods[DISCRETE-200,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_194":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testUnalignedPeriods[DISCRETE-8,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_20":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testSinglePeriods[NSS-20,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_219":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testMultiPeriodFloater[DISCRETE-10,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_230":{"methods":[{"sl":58},{"sl":77},{"sl":127}],"name":"testFRAMonteCarloVersusAnalytic[forward-EUR-3M-100,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":81},{"sl":83},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_236":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testSinglePeriods[DISCRETE-20,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_240":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testMultiPeriodFloater[DISCRETE-4,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_245":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testUnalignedPeriods[NSS-4,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_250":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testSinglePeriods[DISCRETE-1,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_26":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testUnalignedPeriods[NSS-40,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_273":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testFloatLeg","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_277":{"methods":[{"sl":58},{"sl":77},{"sl":127}],"name":"testFRAMonteCarloVersusAnalytic[forward-EUR-6M-40,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":81},{"sl":83},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":105},{"sl":106},{"sl":109},{"sl":110},{"sl":111},{"sl":112},{"sl":115},{"sl":128},{"sl":137}]},"test_292":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testSwap","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_3":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testMultiPeriodFloater[NSS-40,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_311":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testSinglePeriods[NSS-10,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_323":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testUnalignedPeriods[DISCRETE-40,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_362":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testSwaption","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_364":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testMultiPeriodFloater[NSS-2,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_386":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testModelHierarchy","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_388":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testMultiPeriodFloater[NSS-20,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_391":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testUnalignedPeriods[NSS-10,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_402":{"methods":[{"sl":58},{"sl":77},{"sl":127}],"name":"testAgainstSwaption","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":81},{"sl":83},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_412":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testUnalignedPeriods[DISCRETE-20,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_413":{"methods":[{"sl":58},{"sl":77},{"sl":127}],"name":"testFloatLeg","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":81},{"sl":83},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_421":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testUnalignedPeriods[NSS-80,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_425":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testMultiPeriodFloater[DISCRETE-8,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_431":{"methods":[{"sl":58},{"sl":77},{"sl":127}],"name":"testFRAMonteCarloVersusAnalytic[forward-EUR-6M-200,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":81},{"sl":83},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":105},{"sl":106},{"sl":109},{"sl":110},{"sl":111},{"sl":112},{"sl":115},{"sl":128},{"sl":137}]},"test_433":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testMultiPeriodFloater[DISCRETE-200,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_442":{"methods":[{"sl":58},{"sl":77},{"sl":127}],"name":"testFRAMonteCarloVersusAnalytic[forward-EUR-3M-40,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":81},{"sl":83},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_453":{"methods":[{"sl":58},{"sl":73}],"name":"testLIBORInArrearsFloatLeg","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74}]},"test_476":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testLIBORInArrearsFloatLeg","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_488":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testUnalignedPeriods[NSS-200,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_49":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testMultiPeriodFloater[DISCRETE-2,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_494":{"methods":[{"sl":41},{"sl":77},{"sl":127}],"name":"testSwap","pass":true,"statements":[{"sl":43},{"sl":44},{"sl":45},{"sl":46},{"sl":47},{"sl":48},{"sl":81},{"sl":83},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":129},{"sl":130},{"sl":131},{"sl":132},{"sl":134}]},"test_498":{"methods":[{"sl":58},{"sl":77},{"sl":127}],"name":"testFRAMonteCarloVersusAnalytic[forward-EUR-3M-200,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":81},{"sl":83},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_500":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testUnalignedPeriods[DISCRETE-2,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_502":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testSinglePeriods[DISCRETE-10,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_51":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testMultiPeriodFloater[DISCRETE-80,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_515":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testMultiPeriodFloater[NSS-80,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_523":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testMultiPeriodFloater[NSS-200,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_526":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testUnalignedPeriods[DISCRETE-80,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_53":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testMultiPeriodFloater[NSS-1,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_530":{"methods":[{"sl":58},{"sl":77},{"sl":127}],"name":"testExpectedPositiveExposure","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":81},{"sl":83},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_536":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testSinglePeriods[NSS-80,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_539":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testMultiPeriodFloater[NSS-100,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_550":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testSinglePeriods[NSS-100,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_58":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testSinglePeriods[DISCRETE-40,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_588":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testSinglePeriods[NSS-4,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_59":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testSinglePeriods[DISCRETE-2,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_593":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testMultiPeriodFloater[NSS-10,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_601":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testUnalignedPeriods[NSS-8,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_618":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testSinglePeriods[NSS-8,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_625":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testSinglePeriods[DISCRETE-8,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_631":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testSinglePeriods[DISCRETE-100,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_641":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testUnalignedPeriods[DISCRETE-1,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_643":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testMultiPeriodFloater[DISCRETE-1,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_649":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testSinglePeriods[NSS-1,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_75":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testUnalignedPeriods[DISCRETE-10,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_79":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testMultiPeriodFloater[DISCRETE-20,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]},"test_85":{"methods":[{"sl":58},{"sl":73},{"sl":77},{"sl":127}],"name":"testSinglePeriods[NSS-40,000]","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":74},{"sl":81},{"sl":89},{"sl":96},{"sl":101},{"sl":103},{"sl":115},{"sl":128},{"sl":137}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [494], [], [494], [494], [494], [494], [494], [494], [], [], [], [], [], [], [], [], [], [190, 625, 311, 364, 240, 601, 53, 500, 488, 106, 113, 138, 431, 177, 523, 49, 649, 502, 530, 10, 391, 121, 588, 250, 453, 498, 643, 51, 292, 421, 85, 144, 425, 79, 433, 125, 388, 618, 412, 476, 167, 158, 230, 178, 402, 277, 126, 128, 641, 219, 593, 111, 539, 188, 118, 148, 194, 413, 20, 515, 59, 386, 26, 75, 362, 631, 273, 526, 245, 236, 536, 58, 442, 323, 3, 550], [190, 625, 311, 364, 240, 601, 53, 500, 488, 106, 113, 138, 431, 177, 523, 49, 649, 502, 530, 10, 391, 121, 588, 250, 453, 498, 643, 51, 292, 421, 85, 144, 425, 79, 433, 125, 388, 618, 412, 476, 167, 158, 230, 178, 402, 277, 126, 128, 641, 219, 593, 111, 539, 188, 118, 148, 194, 413, 20, 515, 59, 386, 26, 75, 362, 631, 273, 526, 245, 236, 536, 58, 442, 323, 3, 550], [190, 625, 311, 364, 240, 601, 53, 500, 488, 106, 113, 138, 431, 177, 523, 49, 649, 502, 530, 10, 391, 121, 588, 250, 453, 498, 643, 51, 292, 421, 85, 144, 425, 79, 433, 125, 388, 618, 412, 476, 167, 158, 230, 178, 402, 277, 126, 128, 641, 219, 593, 111, 539, 188, 118, 148, 194, 413, 20, 515, 59, 386, 26, 75, 362, 631, 273, 526, 245, 236, 536, 58, 442, 323, 3, 550], [190, 625, 311, 364, 240, 601, 53, 500, 488, 106, 113, 138, 431, 177, 523, 49, 649, 502, 530, 10, 391, 121, 588, 250, 453, 498, 643, 51, 292, 421, 85, 144, 425, 79, 433, 125, 388, 618, 412, 476, 167, 158, 230, 178, 402, 277, 126, 128, 641, 219, 593, 111, 539, 188, 118, 148, 194, 413, 20, 515, 59, 386, 26, 75, 362, 631, 273, 526, 245, 236, 536, 58, 442, 323, 3, 550], [190, 625, 311, 364, 240, 601, 53, 500, 488, 106, 113, 138, 431, 177, 523, 49, 649, 502, 530, 10, 391, 121, 588, 250, 453, 498, 643, 51, 292, 421, 85, 144, 425, 79, 433, 125, 388, 618, 412, 476, 167, 158, 230, 178, 402, 277, 126, 128, 641, 219, 593, 111, 539, 188, 118, 148, 194, 413, 20, 515, 59, 386, 26, 75, 362, 631, 273, 526, 245, 236, 536, 58, 442, 323, 3, 550], [190, 625, 311, 364, 240, 601, 53, 500, 488, 106, 113, 138, 431, 177, 523, 49, 649, 502, 530, 10, 391, 121, 588, 250, 453, 498, 643, 51, 292, 421, 85, 144, 425, 79, 433, 125, 388, 618, 412, 476, 167, 158, 230, 178, 402, 277, 126, 128, 641, 219, 593, 111, 539, 188, 118, 148, 194, 413, 20, 515, 59, 386, 26, 75, 362, 631, 273, 526, 245, 236, 536, 58, 442, 323, 3, 550], [190, 625, 311, 364, 240, 601, 53, 500, 488, 106, 113, 138, 431, 177, 523, 49, 649, 502, 530, 10, 391, 121, 588, 250, 453, 498, 643, 51, 292, 421, 85, 144, 425, 79, 433, 125, 388, 618, 412, 476, 167, 158, 230, 178, 402, 277, 126, 128, 641, 219, 593, 111, 539, 188, 118, 148, 194, 413, 20, 515, 59, 386, 26, 75, 362, 631, 273, 526, 245, 236, 536, 58, 442, 323, 3, 550], [], [], [], [], [], [], [], [], [190, 625, 311, 364, 240, 601, 53, 500, 488, 106, 113, 138, 177, 523, 49, 649, 502, 10, 391, 121, 588, 250, 453, 643, 51, 292, 421, 85, 144, 425, 79, 433, 125, 388, 618, 412, 476, 167, 158, 178, 126, 128, 641, 219, 593, 111, 539, 188, 118, 194, 20, 515, 59, 386, 26, 75, 362, 631, 273, 526, 245, 236, 536, 58, 323, 3, 550], [190, 625, 311, 364, 240, 601, 53, 500, 488, 106, 113, 138, 177, 523, 49, 649, 502, 10, 391, 121, 588, 250, 453, 643, 51, 292, 421, 85, 144, 425, 79, 433, 125, 388, 618, 412, 476, 167, 158, 178, 126, 128, 641, 219, 593, 111, 539, 188, 118, 194, 20, 515, 59, 386, 26, 75, 362, 631, 273, 526, 245, 236, 536, 58, 323, 3, 550], [], [], [190, 625, 311, 364, 240, 601, 53, 500, 488, 106, 113, 138, 431, 177, 523, 49, 649, 502, 530, 10, 391, 121, 588, 250, 498, 643, 51, 292, 421, 85, 144, 425, 79, 433, 125, 388, 618, 412, 476, 167, 158, 230, 178, 402, 277, 126, 128, 641, 219, 593, 111, 539, 188, 118, 148, 194, 413, 20, 515, 59, 386, 26, 75, 362, 631, 273, 526, 494, 245, 236, 536, 58, 442, 323, 3, 550], [], [], [], [190, 625, 311, 364, 240, 601, 53, 500, 488, 106, 113, 138, 431, 177, 523, 49, 649, 502, 530, 10, 391, 121, 588, 250, 498, 643, 51, 292, 421, 85, 144, 425, 79, 433, 125, 388, 618, 412, 476, 167, 158, 230, 178, 402, 277, 126, 128, 641, 219, 593, 111, 539, 188, 118, 148, 194, 413, 20, 515, 59, 386, 26, 75, 362, 631, 273, 526, 494, 245, 236, 536, 58, 442, 323, 3, 550], [], [431, 530, 498, 230, 402, 277, 148, 413, 494, 442], [], [], [], [], [], [190, 625, 311, 364, 240, 601, 53, 500, 488, 106, 113, 138, 431, 177, 523, 49, 649, 502, 530, 10, 391, 121, 588, 250, 498, 643, 51, 292, 421, 85, 144, 425, 79, 433, 125, 388, 618, 412, 476, 167, 158, 230, 178, 402, 277, 126, 128, 641, 219, 593, 111, 539, 188, 118, 148, 194, 413, 20, 515, 59, 386, 26, 75, 362, 631, 273, 526, 494, 245, 236, 536, 58, 442, 323, 3, 550], [], [], [], [], [], [], [190, 625, 311, 364, 240, 601, 53, 500, 488, 106, 113, 138, 431, 177, 523, 49, 649, 502, 530, 10, 391, 121, 588, 250, 498, 643, 51, 292, 421, 85, 144, 425, 79, 433, 125, 388, 618, 412, 476, 167, 158, 230, 178, 402, 277, 126, 128, 641, 219, 593, 111, 539, 188, 118, 148, 194, 413, 20, 515, 59, 386, 26, 75, 362, 631, 273, 526, 494, 245, 236, 536, 58, 442, 323, 3, 550], [], [], [], [], [190, 625, 311, 364, 240, 601, 53, 500, 488, 106, 113, 138, 431, 177, 523, 49, 649, 502, 530, 10, 391, 121, 588, 250, 498, 643, 51, 292, 421, 85, 144, 425, 79, 433, 125, 388, 618, 412, 476, 167, 158, 230, 178, 402, 277, 126, 128, 641, 219, 593, 111, 539, 188, 118, 148, 194, 413, 20, 515, 59, 386, 26, 75, 362, 631, 273, 526, 494, 245, 236, 536, 58, 442, 323, 3, 550], [], [190, 625, 311, 364, 240, 601, 53, 500, 488, 106, 113, 138, 431, 177, 523, 49, 649, 502, 530, 10, 391, 121, 588, 250, 498, 643, 51, 292, 421, 85, 144, 425, 79, 433, 125, 388, 618, 412, 476, 167, 158, 230, 178, 402, 277, 126, 128, 641, 219, 593, 111, 539, 188, 118, 148, 194, 413, 20, 515, 59, 386, 26, 75, 362, 631, 273, 526, 494, 245, 236, 536, 58, 442, 323, 3, 550], [], [431, 277, 148], [431, 277, 148], [], [], [431, 277, 148], [431, 277, 148], [431, 277, 148], [431, 277, 148], [], [], [190, 625, 311, 364, 240, 601, 53, 500, 488, 106, 113, 138, 431, 177, 523, 49, 649, 502, 530, 10, 391, 121, 588, 250, 498, 643, 51, 292, 421, 85, 144, 425, 79, 433, 125, 388, 618, 412, 476, 167, 158, 230, 178, 402, 277, 126, 128, 641, 219, 593, 111, 539, 188, 118, 148, 194, 413, 20, 515, 59, 386, 26, 75, 362, 631, 273, 526, 494, 245, 236, 536, 58, 442, 323, 3, 550], [], [], [], [], [], [], [], [], [], [], [], [190, 625, 311, 364, 240, 601, 53, 500, 488, 106, 113, 138, 431, 177, 523, 49, 649, 502, 530, 10, 391, 121, 588, 250, 498, 643, 51, 292, 421, 85, 144, 425, 79, 433, 125, 388, 618, 412, 476, 167, 158, 230, 178, 402, 277, 126, 128, 641, 219, 593, 111, 539, 188, 118, 148, 194, 413, 20, 515, 59, 386, 26, 75, 362, 631, 273, 526, 494, 245, 236, 536, 58, 442, 323, 3, 550], [190, 625, 311, 364, 240, 601, 53, 500, 488, 106, 113, 138, 431, 177, 523, 49, 649, 502, 530, 10, 391, 121, 588, 250, 498, 643, 51, 292, 421, 85, 144, 425, 79, 433, 125, 388, 618, 412, 476, 167, 158, 230, 178, 402, 277, 126, 128, 641, 219, 593, 111, 539, 188, 118, 148, 194, 413, 20, 515, 59, 386, 26, 75, 362, 631, 273, 526, 494, 245, 236, 536, 58, 442, 323, 3, 550], [494], [494], [494], [494], [], [494], [], [], [190, 625, 311, 364, 240, 601, 53, 500, 488, 106, 113, 138, 431, 177, 523, 49, 649, 502, 530, 10, 391, 121, 588, 250, 498, 643, 51, 292, 421, 85, 144, 425, 79, 433, 125, 388, 618, 412, 476, 167, 158, 230, 178, 402, 277, 126, 128, 641, 219, 593, 111, 539, 188, 118, 148, 194, 413, 20, 515, 59, 386, 26, 75, 362, 631, 273, 526, 245, 236, 536, 58, 442, 323, 3, 550], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]