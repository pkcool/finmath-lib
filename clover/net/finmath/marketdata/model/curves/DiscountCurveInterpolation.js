var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":454,"id":4478,"methods":[{"el":44,"sc":2,"sl":42},{"el":58,"sc":2,"sl":54},{"el":74,"sc":2,"sl":70},{"el":109,"sc":2,"sl":89},{"el":130,"sc":2,"sl":123},{"el":154,"sc":2,"sl":143},{"el":172,"sc":2,"sl":164},{"el":203,"sc":2,"sl":191},{"el":228,"sc":2,"sl":222},{"el":254,"sc":2,"sl":247},{"el":286,"sc":2,"sl":272},{"el":308,"sc":2,"sl":300},{"el":339,"sc":2,"sl":327},{"el":371,"sc":2,"sl":357},{"el":392,"sc":2,"sl":382},{"el":401,"sc":2,"sl":397},{"el":410,"sc":2,"sl":406},{"el":427,"sc":2,"sl":420},{"el":444,"sc":2,"sl":435},{"el":448,"sc":2,"sl":446},{"el":453,"sc":2,"sl":450}],"name":"DiscountCurveInterpolation","sl":33}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_117":{"methods":[{"sl":70},{"sl":89},{"sl":406},{"sl":446},{"sl":450}],"name":"testMultiCurveCalibration","pass":true,"statements":[{"sl":73},{"sl":94},{"sl":98},{"sl":102},{"sl":104},{"sl":105},{"sl":108},{"sl":409},{"sl":447},{"sl":452}]},"test_143":{"methods":[{"sl":406}],"name":"c_testAccessPerformance","pass":true,"statements":[{"sl":409}]},"test_146":{"methods":[{"sl":406}],"name":"testSwaptionCalibration[TERMINAL]","pass":true,"statements":[{"sl":409}]},"test_147":{"methods":[{"sl":70},{"sl":89},{"sl":357},{"sl":397},{"sl":406},{"sl":446}],"name":"test","pass":true,"statements":[{"sl":73},{"sl":94},{"sl":98},{"sl":102},{"sl":104},{"sl":105},{"sl":108},{"sl":362},{"sl":363},{"sl":365},{"sl":366},{"sl":367},{"sl":370},{"sl":400},{"sl":409},{"sl":447}]},"test_148":{"methods":[{"sl":42},{"sl":164},{"sl":300},{"sl":406},{"sl":446}],"name":"testModelHierarchy","pass":true,"statements":[{"sl":43},{"sl":165},{"sl":167},{"sl":168},{"sl":171},{"sl":301},{"sl":303},{"sl":304},{"sl":307},{"sl":409},{"sl":447}]},"test_149":{"methods":[{"sl":406}],"name":"a_testSimplifiedLinear","pass":true,"statements":[{"sl":409}]},"test_161":{"methods":[{"sl":42},{"sl":164},{"sl":406},{"sl":446},{"sl":450}],"name":"testForwardCurveFromDiscountCurve[LINEAR]","pass":true,"statements":[{"sl":43},{"sl":165},{"sl":167},{"sl":168},{"sl":171},{"sl":409},{"sl":447},{"sl":452}]},"test_165":{"methods":[{"sl":406}],"name":"testZeroCMSSwap","pass":true,"statements":[{"sl":409}]},"test_168":{"methods":[{"sl":406}],"name":"a_cubeATM","pass":true,"statements":[{"sl":409}]},"test_176":{"methods":[{"sl":397},{"sl":406}],"name":"testFRAMonteCarloVersusAnalytic[forward-EUR-3M-200,000]","pass":true,"statements":[{"sl":400},{"sl":409}]},"test_180":{"methods":[{"sl":70},{"sl":89},{"sl":123},{"sl":143},{"sl":406},{"sl":446},{"sl":450}],"name":"testCurvesAndCalibration[HARMONIC_SPLINE_WITH_MONOTONIC_FILTERING]","pass":true,"statements":[{"sl":73},{"sl":94},{"sl":98},{"sl":102},{"sl":104},{"sl":105},{"sl":108},{"sl":129},{"sl":148},{"sl":149},{"sl":150},{"sl":153},{"sl":409},{"sl":447},{"sl":452}]},"test_186":{"methods":[{"sl":406}],"name":"b_strikeSlices","pass":true,"statements":[{"sl":409}]},"test_199":{"methods":[{"sl":406}],"name":"testStaticCubeCalibration","pass":true,"statements":[{"sl":409}]},"test_218":{"methods":[{"sl":406}],"name":"testCalibration","pass":true,"statements":[{"sl":409}]},"test_220":{"methods":[{"sl":406}],"name":"testMulti","pass":true,"statements":[{"sl":409}]},"test_237":{"methods":[{"sl":406}],"name":"testSimplified","pass":true,"statements":[{"sl":409}]},"test_240":{"methods":[{"sl":406}],"name":"testSwaptionSmile[SPOT]","pass":true,"statements":[{"sl":409}]},"test_243":{"methods":[{"sl":70},{"sl":89},{"sl":406},{"sl":446}],"name":"testATMSwaptionCalibration[VOLATILITYNORMAL-STOCHASTIC_LEVENBERG_MARQUARDT-ADJOINT_AUTOMATIC_DIFFERENTIATION]","pass":true,"statements":[{"sl":73},{"sl":94},{"sl":98},{"sl":102},{"sl":104},{"sl":105},{"sl":108},{"sl":409},{"sl":447}]},"test_248":{"methods":[{"sl":42},{"sl":164},{"sl":406},{"sl":446},{"sl":450}],"name":"testForwardCurveFromDiscountCurve[HARMONIC_SPLINE_WITH_MONOTONIC_FILTERING]","pass":true,"statements":[{"sl":43},{"sl":165},{"sl":167},{"sl":168},{"sl":171},{"sl":409},{"sl":447},{"sl":452}]},"test_25":{"methods":[{"sl":397},{"sl":406}],"name":"testSimplifiedLinear","pass":true,"statements":[{"sl":400},{"sl":409}]},"test_256":{"methods":[{"sl":70},{"sl":89},{"sl":406},{"sl":446}],"name":"testATMSwaptionCalibration[Model: NORMAL, Calibration: ANALYTIC]","pass":true,"statements":[{"sl":73},{"sl":94},{"sl":98},{"sl":102},{"sl":104},{"sl":105},{"sl":108},{"sl":409},{"sl":447}]},"test_258":{"methods":[{"sl":397},{"sl":406}],"name":"testMultiPiterbarg","pass":true,"statements":[{"sl":400},{"sl":409}]},"test_260":{"methods":[{"sl":397},{"sl":406}],"name":"testBond[TERMINAL]","pass":true,"statements":[{"sl":400},{"sl":409}]},"test_272":{"methods":[{"sl":406}],"name":"testSwaption[TERMINAL]","pass":true,"statements":[{"sl":409}]},"test_274":{"methods":[{"sl":70},{"sl":89},{"sl":397},{"sl":406},{"sl":446}],"name":"testATMSwaptionCalibration","pass":true,"statements":[{"sl":73},{"sl":94},{"sl":98},{"sl":102},{"sl":104},{"sl":105},{"sl":108},{"sl":400},{"sl":409},{"sl":447}]},"test_279":{"methods":[{"sl":406}],"name":"testCaplet","pass":true,"statements":[{"sl":409}]},"test_280":{"methods":[{"sl":397},{"sl":406}],"name":"testBasicPiterbarg","pass":true,"statements":[{"sl":400},{"sl":409}]},"test_282":{"methods":[{"sl":406}],"name":"testSwaptionCalibration[SPOT]","pass":true,"statements":[{"sl":409}]},"test_284":{"methods":[{"sl":42},{"sl":164},{"sl":300},{"sl":406},{"sl":446}],"name":"testExpectedPositiveExposure","pass":true,"statements":[{"sl":43},{"sl":165},{"sl":167},{"sl":168},{"sl":171},{"sl":301},{"sl":303},{"sl":304},{"sl":307},{"sl":409},{"sl":447}]},"test_287":{"methods":[{"sl":406}],"name":"testDigitalCaplet[TERMINAL]","pass":true,"statements":[{"sl":409}]},"test_293":{"methods":[{"sl":70},{"sl":89},{"sl":357},{"sl":397},{"sl":406},{"sl":446}],"name":"test","pass":true,"statements":[{"sl":73},{"sl":94},{"sl":98},{"sl":102},{"sl":104},{"sl":105},{"sl":108},{"sl":362},{"sl":363},{"sl":365},{"sl":366},{"sl":367},{"sl":370},{"sl":400},{"sl":409},{"sl":447}]},"test_294":{"methods":[{"sl":406}],"name":"testPutOnMoneyMarketAccount","pass":true,"statements":[{"sl":409}]},"test_297":{"methods":[{"sl":42},{"sl":164},{"sl":300},{"sl":406},{"sl":446}],"name":"testFixLeg","pass":true,"statements":[{"sl":43},{"sl":165},{"sl":167},{"sl":168},{"sl":171},{"sl":301},{"sl":303},{"sl":304},{"sl":307},{"sl":409},{"sl":447}]},"test_3":{"methods":[{"sl":406}],"name":"b_testBasicPiterbarg","pass":true,"statements":[{"sl":409}]},"test_31":{"methods":[{"sl":70},{"sl":89},{"sl":123},{"sl":143},{"sl":406},{"sl":446},{"sl":450}],"name":"testCDS","pass":true,"statements":[{"sl":73},{"sl":94},{"sl":98},{"sl":102},{"sl":104},{"sl":105},{"sl":108},{"sl":129},{"sl":148},{"sl":149},{"sl":150},{"sl":153},{"sl":409},{"sl":447},{"sl":452}]},"test_312":{"methods":[{"sl":406}],"name":"testBasic","pass":true,"statements":[{"sl":409}]},"test_313":{"methods":[{"sl":406}],"name":"testSwaptionSmile[TERMINAL]","pass":true,"statements":[{"sl":409}]},"test_316":{"methods":[{"sl":406}],"name":"d_testAccessPerformanceOnNodes","pass":true,"statements":[{"sl":409}]},"test_318":{"methods":[{"sl":406}],"name":"testExpectation","pass":true,"statements":[{"sl":409}]},"test_323":{"methods":[{"sl":406}],"name":"testDepositValue","pass":true,"statements":[{"sl":409}]},"test_324":{"methods":[{"sl":70},{"sl":89},{"sl":123},{"sl":143},{"sl":357},{"sl":397},{"sl":406},{"sl":446}],"name":"test","pass":true,"statements":[{"sl":73},{"sl":94},{"sl":98},{"sl":102},{"sl":104},{"sl":105},{"sl":108},{"sl":129},{"sl":148},{"sl":149},{"sl":150},{"sl":153},{"sl":362},{"sl":363},{"sl":365},{"sl":366},{"sl":367},{"sl":370},{"sl":400},{"sl":409},{"sl":447}]},"test_330":{"methods":[{"sl":397},{"sl":406}],"name":"testBond","pass":true,"statements":[{"sl":400},{"sl":409}]},"test_340":{"methods":[{"sl":397},{"sl":406}],"name":"testFRAMonteCarloVersusAnalytic[forward-EUR-3M-40,000]","pass":true,"statements":[{"sl":400},{"sl":409}]},"test_346":{"methods":[{"sl":406}],"name":"testBermudanSwaption","pass":true,"statements":[{"sl":409}]},"test_354":{"methods":[{"sl":70},{"sl":89},{"sl":123},{"sl":143},{"sl":406},{"sl":446},{"sl":450}],"name":"testCurvesAndCalibration[LINEAR]","pass":true,"statements":[{"sl":73},{"sl":94},{"sl":98},{"sl":102},{"sl":104},{"sl":105},{"sl":108},{"sl":129},{"sl":148},{"sl":149},{"sl":150},{"sl":153},{"sl":409},{"sl":447},{"sl":452}]},"test_364":{"methods":[{"sl":42},{"sl":164},{"sl":300},{"sl":406},{"sl":446}],"name":"testFloatLeg","pass":true,"statements":[{"sl":43},{"sl":165},{"sl":167},{"sl":168},{"sl":171},{"sl":301},{"sl":303},{"sl":304},{"sl":307},{"sl":409},{"sl":447}]},"test_370":{"methods":[{"sl":406}],"name":"c_testMultiPiterbarg","pass":true,"statements":[{"sl":409}]},"test_371":{"methods":[{"sl":42},{"sl":164},{"sl":300},{"sl":406},{"sl":446}],"name":"testLIBORInArrearsFloatLeg","pass":true,"statements":[{"sl":43},{"sl":165},{"sl":167},{"sl":168},{"sl":171},{"sl":301},{"sl":303},{"sl":304},{"sl":307},{"sl":409},{"sl":447}]},"test_372":{"methods":[{"sl":70},{"sl":89},{"sl":123},{"sl":143},{"sl":406},{"sl":446},{"sl":450}],"name":"testCurvesAndCalibration[AKIMA_CONTINUOUS]","pass":true,"statements":[{"sl":73},{"sl":94},{"sl":98},{"sl":102},{"sl":104},{"sl":105},{"sl":108},{"sl":129},{"sl":148},{"sl":149},{"sl":150},{"sl":153},{"sl":409},{"sl":447},{"sl":452}]},"test_383":{"methods":[{"sl":406}],"name":"testSwaption[SPOT]","pass":true,"statements":[{"sl":409}]},"test_394":{"methods":[{"sl":70},{"sl":89},{"sl":123},{"sl":143},{"sl":406},{"sl":446},{"sl":450}],"name":"testCurvesAndCalibration[CUBIC_SPLINE]","pass":true,"statements":[{"sl":73},{"sl":94},{"sl":98},{"sl":102},{"sl":104},{"sl":105},{"sl":108},{"sl":129},{"sl":148},{"sl":149},{"sl":150},{"sl":153},{"sl":409},{"sl":447},{"sl":452}]},"test_395":{"methods":[{"sl":406}],"name":"testSingleSmile","pass":true,"statements":[{"sl":409}]},"test_398":{"methods":[{"sl":406}],"name":"testSABRCubeCalibration","pass":true,"statements":[{"sl":409}]},"test_40":{"methods":[{"sl":42},{"sl":164},{"sl":406},{"sl":446},{"sl":450}],"name":"testForwardCurveFromDiscountCurve[AKIMA_CONTINUOUS]","pass":true,"statements":[{"sl":43},{"sl":165},{"sl":167},{"sl":168},{"sl":171},{"sl":409},{"sl":447},{"sl":452}]},"test_404":{"methods":[{"sl":42},{"sl":164},{"sl":397},{"sl":406},{"sl":446}],"name":"testConversions","pass":true,"statements":[{"sl":43},{"sl":165},{"sl":167},{"sl":168},{"sl":171},{"sl":400},{"sl":409},{"sl":447}]},"test_418":{"methods":[{"sl":42},{"sl":164},{"sl":406},{"sl":446},{"sl":450}],"name":"testForwardCurveFromDiscountCurve[CUBIC_SPLINE]","pass":true,"statements":[{"sl":43},{"sl":165},{"sl":167},{"sl":168},{"sl":171},{"sl":409},{"sl":447},{"sl":452}]},"test_422":{"methods":[{"sl":397},{"sl":406}],"name":"testFRAMonteCarloVersusAnalytic[forward-EUR-3M-100,000]","pass":true,"statements":[{"sl":400},{"sl":409}]},"test_423":{"methods":[{"sl":42},{"sl":164},{"sl":406},{"sl":446},{"sl":450}],"name":"testForwardCurveFromDiscountCurve[HARMONIC_SPLINE]","pass":true,"statements":[{"sl":43},{"sl":165},{"sl":167},{"sl":168},{"sl":171},{"sl":409},{"sl":447},{"sl":452}]},"test_430":{"methods":[{"sl":70},{"sl":89},{"sl":123},{"sl":143},{"sl":406},{"sl":446},{"sl":450}],"name":"testCurvesAndCalibration[HARMONIC_SPLINE]","pass":true,"statements":[{"sl":73},{"sl":94},{"sl":98},{"sl":102},{"sl":104},{"sl":105},{"sl":108},{"sl":129},{"sl":148},{"sl":149},{"sl":150},{"sl":153},{"sl":409},{"sl":447},{"sl":452}]},"test_455":{"methods":[{"sl":406}],"name":"a_cubeATM","pass":true,"statements":[{"sl":409}]},"test_456":{"methods":[{"sl":406}],"name":"testCapletSmile","pass":true,"statements":[{"sl":409}]},"test_460":{"methods":[{"sl":406}],"name":"testCaplet[TERMINAL]","pass":true,"statements":[{"sl":409}]},"test_461":{"methods":[{"sl":406}],"name":"testSwap","pass":true,"statements":[{"sl":409}]},"test_469":{"methods":[{"sl":70},{"sl":89},{"sl":357},{"sl":397},{"sl":406},{"sl":446}],"name":"bsTest","pass":true,"statements":[{"sl":73},{"sl":94},{"sl":98},{"sl":102},{"sl":104},{"sl":105},{"sl":108},{"sl":362},{"sl":363},{"sl":365},{"sl":366},{"sl":367},{"sl":370},{"sl":400},{"sl":409},{"sl":447}]},"test_473":{"methods":[{"sl":42},{"sl":164},{"sl":300},{"sl":406},{"sl":446}],"name":"testCMSSpreadLeg","pass":true,"statements":[{"sl":43},{"sl":165},{"sl":167},{"sl":168},{"sl":171},{"sl":301},{"sl":303},{"sl":304},{"sl":307},{"sl":409},{"sl":447}]},"test_475":{"methods":[{"sl":406}],"name":"testSwaption","pass":true,"statements":[{"sl":409}]},"test_496":{"methods":[{"sl":42},{"sl":382},{"sl":397},{"sl":406},{"sl":446}],"name":"test","pass":true,"statements":[{"sl":43},{"sl":383},{"sl":385},{"sl":386},{"sl":387},{"sl":388},{"sl":391},{"sl":400},{"sl":409},{"sl":447}]},"test_497":{"methods":[{"sl":406}],"name":"b_strikeSlices","pass":true,"statements":[{"sl":409}]},"test_5":{"methods":[{"sl":397},{"sl":406}],"name":"testFRAMonteCarloVersusAnalytic[forward-EUR-6M-100,000]","pass":true,"statements":[{"sl":400},{"sl":409}]},"test_504":{"methods":[{"sl":397},{"sl":406}],"name":"testFRAMonteCarloVersusAnalytic[forward-EUR-6M-40,000]","pass":true,"statements":[{"sl":400},{"sl":409}]},"test_514":{"methods":[{"sl":70},{"sl":89},{"sl":357},{"sl":397},{"sl":406},{"sl":446}],"name":"test","pass":true,"statements":[{"sl":73},{"sl":94},{"sl":98},{"sl":102},{"sl":104},{"sl":105},{"sl":108},{"sl":362},{"sl":363},{"sl":365},{"sl":366},{"sl":367},{"sl":370},{"sl":400},{"sl":409},{"sl":447}]},"test_525":{"methods":[{"sl":70},{"sl":89},{"sl":406},{"sl":446}],"name":"testATMSwaptionCalibration[VOLATILITYNORMAL-STOCHASTIC_LEVENBERG_MARQUARDT-FINITE_DIFFERENCES]","pass":true,"statements":[{"sl":73},{"sl":94},{"sl":98},{"sl":102},{"sl":104},{"sl":105},{"sl":108},{"sl":409},{"sl":447}]},"test_539":{"methods":[{"sl":70},{"sl":89},{"sl":357},{"sl":397},{"sl":406},{"sl":446}],"name":"hTest","pass":true,"statements":[{"sl":73},{"sl":94},{"sl":98},{"sl":102},{"sl":104},{"sl":105},{"sl":108},{"sl":362},{"sl":363},{"sl":365},{"sl":366},{"sl":367},{"sl":370},{"sl":400},{"sl":409},{"sl":447}]},"test_54":{"methods":[{"sl":42},{"sl":164},{"sl":300},{"sl":406},{"sl":446}],"name":"testStochasticCurves","pass":true,"statements":[{"sl":43},{"sl":165},{"sl":167},{"sl":168},{"sl":171},{"sl":301},{"sl":303},{"sl":304},{"sl":307},{"sl":409},{"sl":447}]},"test_541":{"methods":[{"sl":70},{"sl":89},{"sl":406},{"sl":446}],"name":"testATMSwaptionCalibration[Model: NORMAL, Calibration: MONTECARLO]","pass":true,"statements":[{"sl":73},{"sl":94},{"sl":98},{"sl":102},{"sl":104},{"sl":105},{"sl":108},{"sl":409},{"sl":447}]},"test_554":{"methods":[{"sl":406}],"name":"testCalibration","pass":true,"statements":[{"sl":409}]},"test_555":{"methods":[{"sl":406}],"name":"testEvaluationTime","pass":true,"statements":[{"sl":409}]},"test_557":{"methods":[{"sl":406}],"name":"testCap","pass":true,"statements":[{"sl":409}]},"test_563":{"methods":[{"sl":42},{"sl":164},{"sl":300},{"sl":406},{"sl":446}],"name":"testFixLeg","pass":true,"statements":[{"sl":43},{"sl":165},{"sl":167},{"sl":168},{"sl":171},{"sl":301},{"sl":303},{"sl":304},{"sl":307},{"sl":409},{"sl":447}]},"test_576":{"methods":[{"sl":397},{"sl":406}],"name":"testFRAMonteCarloVersusAnalytic[forward-EUR-6M-200,000]","pass":true,"statements":[{"sl":400},{"sl":409}]},"test_579":{"methods":[{"sl":70},{"sl":89},{"sl":357},{"sl":397},{"sl":406},{"sl":446}],"name":"test","pass":true,"statements":[{"sl":73},{"sl":94},{"sl":98},{"sl":102},{"sl":104},{"sl":105},{"sl":108},{"sl":362},{"sl":363},{"sl":365},{"sl":366},{"sl":367},{"sl":370},{"sl":400},{"sl":409},{"sl":447}]},"test_586":{"methods":[{"sl":406}],"name":"testSwap[TERMINAL]","pass":true,"statements":[{"sl":409}]},"test_587":{"methods":[{"sl":406}],"name":"testDigitalCaplet[SPOT]","pass":true,"statements":[{"sl":409}]},"test_589":{"methods":[{"sl":70},{"sl":89},{"sl":123},{"sl":143},{"sl":357},{"sl":397},{"sl":406},{"sl":446}],"name":"test","pass":true,"statements":[{"sl":73},{"sl":94},{"sl":98},{"sl":102},{"sl":104},{"sl":105},{"sl":108},{"sl":129},{"sl":148},{"sl":149},{"sl":150},{"sl":153},{"sl":362},{"sl":363},{"sl":365},{"sl":366},{"sl":367},{"sl":370},{"sl":400},{"sl":409},{"sl":447}]},"test_61":{"methods":[{"sl":42},{"sl":164},{"sl":300},{"sl":406},{"sl":446}],"name":"testMultiCurveModel","pass":true,"statements":[{"sl":43},{"sl":165},{"sl":167},{"sl":168},{"sl":171},{"sl":301},{"sl":303},{"sl":304},{"sl":307},{"sl":409},{"sl":447}]},"test_612":{"methods":[{"sl":397},{"sl":406}],"name":"testBond[SPOT]","pass":true,"statements":[{"sl":400},{"sl":409}]},"test_614":{"methods":[{"sl":42},{"sl":164},{"sl":300},{"sl":406},{"sl":446}],"name":"testCMSFloatLeg","pass":true,"statements":[{"sl":43},{"sl":165},{"sl":167},{"sl":168},{"sl":171},{"sl":301},{"sl":303},{"sl":304},{"sl":307},{"sl":409},{"sl":447}]},"test_618":{"methods":[{"sl":406}],"name":"testSwap[SPOT]","pass":true,"statements":[{"sl":409}]},"test_619":{"methods":[{"sl":406}],"name":"testCaplet[SPOT]","pass":true,"statements":[{"sl":409}]},"test_629":{"methods":[{"sl":406}],"name":"testRateValueConsistency","pass":true,"statements":[{"sl":409}]},"test_64":{"methods":[{"sl":42},{"sl":164},{"sl":300},{"sl":406},{"sl":446}],"name":"testFloatLeg","pass":true,"statements":[{"sl":43},{"sl":165},{"sl":167},{"sl":168},{"sl":171},{"sl":301},{"sl":303},{"sl":304},{"sl":307},{"sl":409},{"sl":447}]},"test_71":{"methods":[{"sl":70},{"sl":89},{"sl":406},{"sl":446}],"name":"testATMSwaptionCalibration[Model: DISPLACED, Calibration: MONTECARLO]","pass":true,"statements":[{"sl":73},{"sl":94},{"sl":98},{"sl":102},{"sl":104},{"sl":105},{"sl":108},{"sl":409},{"sl":447}]},"test_74":{"methods":[{"sl":70},{"sl":89},{"sl":123},{"sl":143},{"sl":406},{"sl":446},{"sl":450}],"name":"testCurvesAndCalibration[AKIMA]","pass":true,"statements":[{"sl":73},{"sl":94},{"sl":98},{"sl":102},{"sl":104},{"sl":105},{"sl":108},{"sl":129},{"sl":148},{"sl":149},{"sl":150},{"sl":153},{"sl":409},{"sl":447},{"sl":452}]},"test_77":{"methods":[{"sl":42},{"sl":164},{"sl":406},{"sl":446},{"sl":450}],"name":"testForwardCurveFromDiscountCurve[AKIMA]","pass":true,"statements":[{"sl":43},{"sl":165},{"sl":167},{"sl":168},{"sl":171},{"sl":409},{"sl":447},{"sl":452}]},"test_86":{"methods":[{"sl":42},{"sl":164},{"sl":300},{"sl":406},{"sl":446}],"name":"testAgainstSwaption","pass":true,"statements":[{"sl":43},{"sl":165},{"sl":167},{"sl":168},{"sl":171},{"sl":301},{"sl":303},{"sl":304},{"sl":307},{"sl":409},{"sl":447}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [248, 86, 61, 614, 148, 371, 54, 563, 284, 496, 473, 297, 404, 161, 418, 77, 64, 40, 423, 364], [248, 86, 61, 614, 148, 371, 54, 563, 284, 496, 473, 297, 404, 161, 418, 77, 64, 40, 423, 364], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [324, 579, 274, 469, 117, 71, 541, 430, 539, 354, 147, 514, 525, 589, 74, 372, 31, 243, 180, 293, 394, 256], [], [], [324, 579, 274, 469, 117, 71, 541, 430, 539, 354, 147, 514, 525, 589, 74, 372, 31, 243, 180, 293, 394, 256], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [324, 579, 274, 469, 117, 71, 541, 430, 539, 354, 147, 514, 525, 589, 74, 372, 31, 243, 180, 293, 394, 256], [], [], [], [], [324, 579, 274, 469, 117, 71, 541, 430, 539, 354, 147, 514, 525, 589, 74, 372, 31, 243, 180, 293, 394, 256], [], [], [], [324, 579, 274, 469, 117, 71, 541, 430, 539, 354, 147, 514, 525, 589, 74, 372, 31, 243, 180, 293, 394, 256], [], [], [], [324, 579, 274, 469, 117, 71, 541, 430, 539, 354, 147, 514, 525, 589, 74, 372, 31, 243, 180, 293, 394, 256], [], [324, 579, 274, 469, 117, 71, 541, 430, 539, 354, 147, 514, 525, 589, 74, 372, 31, 243, 180, 293, 394, 256], [324, 579, 274, 469, 117, 71, 541, 430, 539, 354, 147, 514, 525, 589, 74, 372, 31, 243, 180, 293, 394, 256], [], [], [324, 579, 274, 469, 117, 71, 541, 430, 539, 354, 147, 514, 525, 589, 74, 372, 31, 243, 180, 293, 394, 256], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [324, 430, 354, 589, 74, 372, 31, 180, 394], [], [], [], [], [], [324, 430, 354, 589, 74, 372, 31, 180, 394], [], [], [], [], [], [], [], [], [], [], [], [], [], [324, 430, 354, 589, 74, 372, 31, 180, 394], [], [], [], [], [324, 430, 354, 589, 74, 372, 31, 180, 394], [324, 430, 354, 589, 74, 372, 31, 180, 394], [324, 430, 354, 589, 74, 372, 31, 180, 394], [], [], [324, 430, 354, 589, 74, 372, 31, 180, 394], [], [], [], [], [], [], [], [], [], [], [248, 86, 61, 614, 148, 371, 54, 563, 284, 473, 297, 404, 161, 418, 77, 64, 40, 423, 364], [248, 86, 61, 614, 148, 371, 54, 563, 284, 473, 297, 404, 161, 418, 77, 64, 40, 423, 364], [], [248, 86, 61, 614, 148, 371, 54, 563, 284, 473, 297, 404, 161, 418, 77, 64, 40, 423, 364], [248, 86, 61, 614, 148, 371, 54, 563, 284, 473, 297, 404, 161, 418, 77, 64, 40, 423, 364], [], [], [248, 86, 61, 614, 148, 371, 54, 563, 284, 473, 297, 404, 161, 418, 77, 64, 40, 423, 364], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [86, 61, 614, 148, 371, 54, 563, 284, 473, 297, 64, 364], [86, 61, 614, 148, 371, 54, 563, 284, 473, 297, 64, 364], [], [86, 61, 614, 148, 371, 54, 563, 284, 473, 297, 64, 364], [86, 61, 614, 148, 371, 54, 563, 284, 473, 297, 64, 364], [], [], [86, 61, 614, 148, 371, 54, 563, 284, 473, 297, 64, 364], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [324, 579, 469, 539, 147, 514, 589, 293], [], [], [], [], [324, 579, 469, 539, 147, 514, 589, 293], [324, 579, 469, 539, 147, 514, 589, 293], [], [324, 579, 469, 539, 147, 514, 589, 293], [324, 579, 469, 539, 147, 514, 589, 293], [324, 579, 469, 539, 147, 514, 589, 293], [], [], [324, 579, 469, 539, 147, 514, 589, 293], [], [], [], [], [], [], [], [], [], [], [], [496], [496], [], [496], [496], [496], [496], [], [], [496], [], [], [], [], [], [324, 579, 258, 274, 176, 576, 469, 5, 612, 504, 330, 496, 404, 539, 147, 422, 514, 589, 25, 280, 260, 340, 293], [], [], [324, 579, 258, 274, 176, 576, 469, 5, 612, 504, 330, 496, 404, 539, 147, 422, 514, 589, 25, 280, 260, 340, 293], [], [], [], [], [], [586, 324, 557, 312, 282, 579, 287, 258, 143, 274, 248, 199, 86, 61, 165, 618, 176, 237, 576, 469, 461, 323, 614, 148, 117, 5, 629, 71, 612, 504, 371, 294, 541, 430, 54, 554, 563, 330, 284, 496, 473, 346, 272, 313, 455, 186, 297, 240, 497, 404, 539, 475, 161, 619, 354, 147, 418, 168, 370, 149, 422, 395, 220, 514, 525, 77, 383, 64, 3, 589, 25, 146, 460, 218, 74, 280, 316, 260, 40, 340, 372, 456, 31, 243, 398, 423, 180, 293, 555, 394, 364, 318, 279, 256, 587], [], [], [586, 324, 557, 312, 282, 579, 287, 258, 143, 274, 248, 199, 86, 61, 165, 618, 176, 237, 576, 469, 461, 323, 614, 148, 117, 5, 629, 71, 612, 504, 371, 294, 541, 430, 54, 554, 563, 330, 284, 496, 473, 346, 272, 313, 455, 186, 297, 240, 497, 404, 539, 475, 161, 619, 354, 147, 418, 168, 370, 149, 422, 395, 220, 514, 525, 77, 383, 64, 3, 589, 25, 146, 460, 218, 74, 280, 316, 260, 40, 340, 372, 456, 31, 243, 398, 423, 180, 293, 555, 394, 364, 318, 279, 256, 587], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [324, 579, 274, 248, 86, 61, 469, 614, 148, 117, 71, 371, 541, 430, 54, 563, 284, 496, 473, 297, 404, 539, 161, 354, 147, 418, 514, 525, 77, 64, 589, 74, 40, 372, 31, 243, 423, 180, 293, 394, 364, 256], [324, 579, 274, 248, 86, 61, 469, 614, 148, 117, 71, 371, 541, 430, 54, 563, 284, 496, 473, 297, 404, 539, 161, 354, 147, 418, 514, 525, 77, 64, 589, 74, 40, 372, 31, 243, 423, 180, 293, 394, 364, 256], [], [], [248, 117, 430, 161, 354, 418, 77, 74, 40, 372, 31, 423, 180, 394], [], [248, 117, 430, 161, 354, 418, 77, 74, 40, 372, 31, 423, 180, 394], [], []]