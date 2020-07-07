var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":564,"id":40025,"methods":[{"el":61,"sc":2,"sl":52},{"el":127,"sc":2,"sl":86},{"el":132,"sc":2,"sl":129},{"el":160,"sc":2,"sl":134},{"el":181,"sc":2,"sl":162},{"el":231,"sc":2,"sl":186},{"el":260,"sc":2,"sl":238},{"el":286,"sc":2,"sl":265},{"el":353,"sc":2,"sl":300},{"el":384,"sc":5,"sl":374},{"el":398,"sc":2,"sl":360},{"el":469,"sc":2,"sl":403},{"el":542,"sc":2,"sl":474},{"el":549,"sc":2,"sl":547},{"el":556,"sc":2,"sl":554},{"el":563,"sc":2,"sl":561}],"name":"BachelierModelMonteCarloValuationTest","sl":50}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_123":{"methods":[{"sl":162},{"sl":238}],"name":"testModelProperties[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=false]]","pass":true,"statements":[{"sl":167},{"sl":169},{"sl":172},{"sl":175},{"sl":177},{"sl":180},{"sl":243},{"sl":245},{"sl":247},{"sl":248},{"sl":249},{"sl":251},{"sl":252},{"sl":253},{"sl":255},{"sl":256},{"sl":257},{"sl":259}]},"test_144":{"methods":[{"sl":162},{"sl":238}],"name":"testModelProperties[RandomVariableDifferentiableADFactory [toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":167},{"sl":169},{"sl":172},{"sl":175},{"sl":177},{"sl":180},{"sl":243},{"sl":245},{"sl":247},{"sl":248},{"sl":249},{"sl":251},{"sl":252},{"sl":253},{"sl":255},{"sl":256},{"sl":257},{"sl":259}]},"test_207":{"methods":[{"sl":162},{"sl":474},{"sl":547},{"sl":554},{"sl":561}],"name":"testEuropeanCallVega[RandomVariableDifferentiableADFactory [toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":167},{"sl":169},{"sl":172},{"sl":175},{"sl":177},{"sl":180},{"sl":480},{"sl":483},{"sl":484},{"sl":485},{"sl":487},{"sl":488},{"sl":489},{"sl":492},{"sl":493},{"sl":495},{"sl":496},{"sl":497},{"sl":498},{"sl":501},{"sl":504},{"sl":506},{"sl":507},{"sl":509},{"sl":511},{"sl":512},{"sl":513},{"sl":516},{"sl":518},{"sl":519},{"sl":521},{"sl":529},{"sl":532},{"sl":539},{"sl":541},{"sl":548},{"sl":555},{"sl":562}]},"test_21":{"methods":[{"sl":162},{"sl":403},{"sl":547},{"sl":554},{"sl":561}],"name":"testEuropeanCallDelta[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]","pass":true,"statements":[{"sl":167},{"sl":169},{"sl":172},{"sl":175},{"sl":177},{"sl":180},{"sl":409},{"sl":412},{"sl":413},{"sl":414},{"sl":416},{"sl":417},{"sl":418},{"sl":421},{"sl":422},{"sl":424},{"sl":425},{"sl":426},{"sl":428},{"sl":431},{"sl":434},{"sl":436},{"sl":437},{"sl":439},{"sl":441},{"sl":442},{"sl":443},{"sl":446},{"sl":449},{"sl":456},{"sl":459},{"sl":466},{"sl":468},{"sl":548},{"sl":555},{"sl":562}]},"test_214":{"methods":[{"sl":162},{"sl":474},{"sl":547},{"sl":554},{"sl":561}],"name":"testEuropeanCallVega[RandomVariableDifferentiableAADFactory [diracDeltaApproximationMethod=DISCRETE_DELTA, diracDeltaApproximationWidthPerStdDev=0.05, diracDeltaApproximationDensityRegressionWidthPerStdDev=0.5, isGradientRetainsLeafNodesOnly=true, toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":167},{"sl":169},{"sl":172},{"sl":175},{"sl":177},{"sl":180},{"sl":480},{"sl":483},{"sl":484},{"sl":485},{"sl":487},{"sl":488},{"sl":489},{"sl":492},{"sl":493},{"sl":495},{"sl":496},{"sl":497},{"sl":498},{"sl":501},{"sl":504},{"sl":506},{"sl":507},{"sl":509},{"sl":511},{"sl":512},{"sl":513},{"sl":516},{"sl":518},{"sl":519},{"sl":521},{"sl":529},{"sl":532},{"sl":539},{"sl":541},{"sl":548},{"sl":555},{"sl":562}]},"test_281":{"methods":[{"sl":162},{"sl":238}],"name":"testModelProperties[RandomVariableDifferentiableAADFactory [diracDeltaApproximationMethod=DISCRETE_DELTA, diracDeltaApproximationWidthPerStdDev=0.05, diracDeltaApproximationDensityRegressionWidthPerStdDev=0.5, isGradientRetainsLeafNodesOnly=true, toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":167},{"sl":169},{"sl":172},{"sl":175},{"sl":177},{"sl":180},{"sl":243},{"sl":245},{"sl":247},{"sl":248},{"sl":249},{"sl":251},{"sl":252},{"sl":253},{"sl":255},{"sl":256},{"sl":257},{"sl":259}]},"test_305":{"methods":[{"sl":162},{"sl":474},{"sl":547},{"sl":554},{"sl":561}],"name":"testEuropeanCallVega[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]","pass":true,"statements":[{"sl":167},{"sl":169},{"sl":172},{"sl":175},{"sl":177},{"sl":180},{"sl":480},{"sl":483},{"sl":484},{"sl":485},{"sl":487},{"sl":488},{"sl":489},{"sl":492},{"sl":493},{"sl":495},{"sl":496},{"sl":497},{"sl":498},{"sl":501},{"sl":504},{"sl":506},{"sl":507},{"sl":509},{"sl":511},{"sl":512},{"sl":513},{"sl":516},{"sl":518},{"sl":519},{"sl":521},{"sl":529},{"sl":532},{"sl":539},{"sl":541},{"sl":548},{"sl":555},{"sl":562}]},"test_306":{"methods":[{"sl":162},{"sl":186},{"sl":547},{"sl":554},{"sl":561}],"name":"testEuropeanCall[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=false]]","pass":true,"statements":[{"sl":167},{"sl":169},{"sl":172},{"sl":175},{"sl":177},{"sl":180},{"sl":192},{"sl":195},{"sl":196},{"sl":197},{"sl":200},{"sl":201},{"sl":203},{"sl":204},{"sl":205},{"sl":207},{"sl":209},{"sl":210},{"sl":212},{"sl":215},{"sl":217},{"sl":220},{"sl":223},{"sl":228},{"sl":230},{"sl":548},{"sl":555},{"sl":562}]},"test_311":{"methods":[{"sl":162},{"sl":186},{"sl":547},{"sl":554},{"sl":561}],"name":"testEuropeanCall[RandomVariableDifferentiableAADFactory [diracDeltaApproximationMethod=DISCRETE_DELTA, diracDeltaApproximationWidthPerStdDev=0.05, diracDeltaApproximationDensityRegressionWidthPerStdDev=0.5, isGradientRetainsLeafNodesOnly=true, toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":167},{"sl":169},{"sl":172},{"sl":175},{"sl":177},{"sl":180},{"sl":192},{"sl":195},{"sl":196},{"sl":197},{"sl":200},{"sl":201},{"sl":203},{"sl":204},{"sl":205},{"sl":207},{"sl":209},{"sl":210},{"sl":212},{"sl":215},{"sl":217},{"sl":220},{"sl":223},{"sl":228},{"sl":230},{"sl":548},{"sl":555},{"sl":562}]},"test_366":{"methods":[{"sl":162},{"sl":265}],"name":"testModelRandomVariable[RandomVariableDifferentiableAADFactory [diracDeltaApproximationMethod=DISCRETE_DELTA, diracDeltaApproximationWidthPerStdDev=0.05, diracDeltaApproximationDensityRegressionWidthPerStdDev=0.5, isGradientRetainsLeafNodesOnly=true, toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":167},{"sl":169},{"sl":172},{"sl":175},{"sl":177},{"sl":180},{"sl":270},{"sl":272},{"sl":274},{"sl":275},{"sl":276},{"sl":277},{"sl":280},{"sl":281},{"sl":283},{"sl":285}]},"test_412":{"methods":[{"sl":162},{"sl":265}],"name":"testModelRandomVariable[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=false]]","pass":true,"statements":[{"sl":167},{"sl":169},{"sl":172},{"sl":175},{"sl":177},{"sl":180},{"sl":270},{"sl":272},{"sl":274},{"sl":275},{"sl":276},{"sl":277},{"sl":280},{"sl":281},{"sl":283},{"sl":285}]},"test_51":{"methods":[{"sl":162},{"sl":186},{"sl":547},{"sl":554},{"sl":561}],"name":"testEuropeanCall[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]","pass":true,"statements":[{"sl":167},{"sl":169},{"sl":172},{"sl":175},{"sl":177},{"sl":180},{"sl":192},{"sl":195},{"sl":196},{"sl":197},{"sl":200},{"sl":201},{"sl":203},{"sl":204},{"sl":205},{"sl":207},{"sl":209},{"sl":210},{"sl":212},{"sl":215},{"sl":217},{"sl":220},{"sl":223},{"sl":228},{"sl":230},{"sl":548},{"sl":555},{"sl":562}]},"test_52":{"methods":[{"sl":162},{"sl":238}],"name":"testModelProperties[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]","pass":true,"statements":[{"sl":167},{"sl":169},{"sl":172},{"sl":175},{"sl":177},{"sl":180},{"sl":243},{"sl":245},{"sl":247},{"sl":248},{"sl":249},{"sl":251},{"sl":252},{"sl":253},{"sl":255},{"sl":256},{"sl":257},{"sl":259}]},"test_532":{"methods":[{"sl":162},{"sl":474},{"sl":547},{"sl":554},{"sl":561}],"name":"testEuropeanCallVega[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=false]]","pass":true,"statements":[{"sl":167},{"sl":169},{"sl":172},{"sl":175},{"sl":177},{"sl":180},{"sl":480},{"sl":483},{"sl":484},{"sl":485},{"sl":487},{"sl":488},{"sl":489},{"sl":492},{"sl":493},{"sl":495},{"sl":496},{"sl":497},{"sl":498},{"sl":501},{"sl":504},{"sl":506},{"sl":507},{"sl":509},{"sl":511},{"sl":512},{"sl":513},{"sl":516},{"sl":518},{"sl":519},{"sl":521},{"sl":529},{"sl":532},{"sl":539},{"sl":541},{"sl":548},{"sl":555},{"sl":562}]},"test_550":{"methods":[{"sl":162},{"sl":403},{"sl":547},{"sl":554},{"sl":561}],"name":"testEuropeanCallDelta[RandomVariableDifferentiableAADFactory [diracDeltaApproximationMethod=DISCRETE_DELTA, diracDeltaApproximationWidthPerStdDev=0.05, diracDeltaApproximationDensityRegressionWidthPerStdDev=0.5, isGradientRetainsLeafNodesOnly=true, toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":167},{"sl":169},{"sl":172},{"sl":175},{"sl":177},{"sl":180},{"sl":409},{"sl":412},{"sl":413},{"sl":414},{"sl":416},{"sl":417},{"sl":418},{"sl":421},{"sl":422},{"sl":424},{"sl":425},{"sl":426},{"sl":428},{"sl":431},{"sl":434},{"sl":436},{"sl":437},{"sl":439},{"sl":441},{"sl":442},{"sl":443},{"sl":446},{"sl":449},{"sl":456},{"sl":459},{"sl":466},{"sl":468},{"sl":548},{"sl":555},{"sl":562}]},"test_566":{"methods":[{"sl":162},{"sl":403},{"sl":547},{"sl":554},{"sl":561}],"name":"testEuropeanCallDelta[RandomVariableDifferentiableADFactory [toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":167},{"sl":169},{"sl":172},{"sl":175},{"sl":177},{"sl":180},{"sl":409},{"sl":412},{"sl":413},{"sl":414},{"sl":416},{"sl":417},{"sl":418},{"sl":421},{"sl":422},{"sl":424},{"sl":425},{"sl":426},{"sl":428},{"sl":431},{"sl":434},{"sl":436},{"sl":437},{"sl":439},{"sl":441},{"sl":442},{"sl":443},{"sl":446},{"sl":449},{"sl":456},{"sl":459},{"sl":466},{"sl":468},{"sl":548},{"sl":555},{"sl":562}]},"test_570":{"methods":[{"sl":162},{"sl":403},{"sl":547},{"sl":554},{"sl":561}],"name":"testEuropeanCallDelta[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=false]]","pass":true,"statements":[{"sl":167},{"sl":169},{"sl":172},{"sl":175},{"sl":177},{"sl":180},{"sl":409},{"sl":412},{"sl":413},{"sl":414},{"sl":416},{"sl":417},{"sl":418},{"sl":421},{"sl":422},{"sl":424},{"sl":425},{"sl":426},{"sl":428},{"sl":431},{"sl":434},{"sl":436},{"sl":437},{"sl":439},{"sl":441},{"sl":442},{"sl":443},{"sl":446},{"sl":449},{"sl":456},{"sl":459},{"sl":466},{"sl":468},{"sl":548},{"sl":555},{"sl":562}]},"test_627":{"methods":[{"sl":162},{"sl":265}],"name":"testModelRandomVariable[RandomVariableDifferentiableADFactory [toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":167},{"sl":169},{"sl":172},{"sl":175},{"sl":177},{"sl":180},{"sl":270},{"sl":272},{"sl":274},{"sl":275},{"sl":276},{"sl":277},{"sl":280},{"sl":281},{"sl":283},{"sl":285}]},"test_7":{"methods":[{"sl":162},{"sl":186},{"sl":547},{"sl":554},{"sl":561}],"name":"testEuropeanCall[RandomVariableDifferentiableADFactory [toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":167},{"sl":169},{"sl":172},{"sl":175},{"sl":177},{"sl":180},{"sl":192},{"sl":195},{"sl":196},{"sl":197},{"sl":200},{"sl":201},{"sl":203},{"sl":204},{"sl":205},{"sl":207},{"sl":209},{"sl":210},{"sl":212},{"sl":215},{"sl":217},{"sl":220},{"sl":223},{"sl":228},{"sl":230},{"sl":548},{"sl":555},{"sl":562}]},"test_94":{"methods":[{"sl":162},{"sl":265}],"name":"testModelRandomVariable[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]","pass":true,"statements":[{"sl":167},{"sl":169},{"sl":172},{"sl":175},{"sl":177},{"sl":180},{"sl":270},{"sl":272},{"sl":274},{"sl":275},{"sl":276},{"sl":277},{"sl":280},{"sl":281},{"sl":283},{"sl":285}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [21, 305, 570, 144, 207, 306, 566, 281, 51, 94, 214, 123, 412, 366, 311, 52, 532, 627, 7, 550], [], [], [], [], [21, 305, 570, 144, 207, 306, 566, 281, 51, 94, 214, 123, 412, 366, 311, 52, 532, 627, 7, 550], [], [21, 305, 570, 144, 207, 306, 566, 281, 51, 94, 214, 123, 412, 366, 311, 52, 532, 627, 7, 550], [], [], [21, 305, 570, 144, 207, 306, 566, 281, 51, 94, 214, 123, 412, 366, 311, 52, 532, 627, 7, 550], [], [], [21, 305, 570, 144, 207, 306, 566, 281, 51, 94, 214, 123, 412, 366, 311, 52, 532, 627, 7, 550], [], [21, 305, 570, 144, 207, 306, 566, 281, 51, 94, 214, 123, 412, 366, 311, 52, 532, 627, 7, 550], [], [], [21, 305, 570, 144, 207, 306, 566, 281, 51, 94, 214, 123, 412, 366, 311, 52, 532, 627, 7, 550], [], [], [], [], [], [306, 51, 311, 7], [], [], [], [], [], [306, 51, 311, 7], [], [], [306, 51, 311, 7], [306, 51, 311, 7], [306, 51, 311, 7], [], [], [306, 51, 311, 7], [306, 51, 311, 7], [], [306, 51, 311, 7], [306, 51, 311, 7], [306, 51, 311, 7], [], [306, 51, 311, 7], [], [306, 51, 311, 7], [306, 51, 311, 7], [], [306, 51, 311, 7], [], [], [306, 51, 311, 7], [], [306, 51, 311, 7], [], [], [306, 51, 311, 7], [], [], [306, 51, 311, 7], [], [], [], [], [306, 51, 311, 7], [], [306, 51, 311, 7], [], [], [], [], [], [], [], [144, 281, 123, 52], [], [], [], [], [144, 281, 123, 52], [], [144, 281, 123, 52], [], [144, 281, 123, 52], [144, 281, 123, 52], [144, 281, 123, 52], [], [144, 281, 123, 52], [144, 281, 123, 52], [144, 281, 123, 52], [], [144, 281, 123, 52], [144, 281, 123, 52], [144, 281, 123, 52], [], [144, 281, 123, 52], [], [], [], [], [], [94, 412, 366, 627], [], [], [], [], [94, 412, 366, 627], [], [94, 412, 366, 627], [], [94, 412, 366, 627], [94, 412, 366, 627], [94, 412, 366, 627], [94, 412, 366, 627], [], [], [94, 412, 366, 627], [94, 412, 366, 627], [], [94, 412, 366, 627], [], [94, 412, 366, 627], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [21, 570, 566, 550], [], [], [], [], [], [21, 570, 566, 550], [], [], [21, 570, 566, 550], [21, 570, 566, 550], [21, 570, 566, 550], [], [21, 570, 566, 550], [21, 570, 566, 550], [21, 570, 566, 550], [], [], [21, 570, 566, 550], [21, 570, 566, 550], [], [21, 570, 566, 550], [21, 570, 566, 550], [21, 570, 566, 550], [], [21, 570, 566, 550], [], [], [21, 570, 566, 550], [], [], [21, 570, 566, 550], [], [21, 570, 566, 550], [21, 570, 566, 550], [], [21, 570, 566, 550], [], [21, 570, 566, 550], [21, 570, 566, 550], [21, 570, 566, 550], [], [], [21, 570, 566, 550], [], [], [21, 570, 566, 550], [], [], [], [], [], [], [21, 570, 566, 550], [], [], [21, 570, 566, 550], [], [], [], [], [], [], [21, 570, 566, 550], [], [21, 570, 566, 550], [], [], [], [], [], [305, 207, 214, 532], [], [], [], [], [], [305, 207, 214, 532], [], [], [305, 207, 214, 532], [305, 207, 214, 532], [305, 207, 214, 532], [], [305, 207, 214, 532], [305, 207, 214, 532], [305, 207, 214, 532], [], [], [305, 207, 214, 532], [305, 207, 214, 532], [], [305, 207, 214, 532], [305, 207, 214, 532], [305, 207, 214, 532], [305, 207, 214, 532], [], [], [305, 207, 214, 532], [], [], [305, 207, 214, 532], [], [305, 207, 214, 532], [305, 207, 214, 532], [], [305, 207, 214, 532], [], [305, 207, 214, 532], [305, 207, 214, 532], [305, 207, 214, 532], [], [], [305, 207, 214, 532], [], [305, 207, 214, 532], [305, 207, 214, 532], [], [305, 207, 214, 532], [], [], [], [], [], [], [], [305, 207, 214, 532], [], [], [305, 207, 214, 532], [], [], [], [], [], [], [305, 207, 214, 532], [], [305, 207, 214, 532], [], [], [], [], [], [21, 305, 570, 207, 306, 566, 51, 214, 311, 532, 7, 550], [21, 305, 570, 207, 306, 566, 51, 214, 311, 532, 7, 550], [], [], [], [], [], [21, 305, 570, 207, 306, 566, 51, 214, 311, 532, 7, 550], [21, 305, 570, 207, 306, 566, 51, 214, 311, 532, 7, 550], [], [], [], [], [], [21, 305, 570, 207, 306, 566, 51, 214, 311, 532, 7, 550], [21, 305, 570, 207, 306, 566, 51, 214, 311, 532, 7, 550], [], []]