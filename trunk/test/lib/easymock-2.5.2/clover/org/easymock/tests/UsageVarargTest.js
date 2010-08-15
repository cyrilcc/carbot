var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":187,"id":6143,"methods":[{"el":39,"sc":5,"sl":35},{"el":56,"sc":5,"sl":41},{"el":67,"sc":5,"sl":58},{"el":78,"sc":5,"sl":69},{"el":89,"sc":5,"sl":80},{"el":100,"sc":5,"sl":91},{"el":111,"sc":5,"sl":102},{"el":122,"sc":5,"sl":113},{"el":133,"sc":5,"sl":124},{"el":144,"sc":5,"sl":135},{"el":163,"sc":5,"sl":146},{"el":155,"sc":21,"sl":152},{"el":185,"sc":5,"sl":168}],"name":"UsageVarargTest","sl":29}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_143":{"methods":[{"sl":41}],"name":"varargObjectAccepted","pass":true,"statements":[{"sl":43},{"sl":44},{"sl":45},{"sl":46},{"sl":47},{"sl":49},{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":55}]},"test_177":{"methods":[{"sl":102}],"name":"varargFloatAccepted","pass":true,"statements":[{"sl":104},{"sl":105},{"sl":107},{"sl":108},{"sl":109},{"sl":110}]},"test_196":{"methods":[{"sl":135}],"name":"varargShortAccepted","pass":true,"statements":[{"sl":137},{"sl":138},{"sl":140},{"sl":141},{"sl":142},{"sl":143}]},"test_233":{"methods":[{"sl":168}],"name":"allKinds","pass":true,"statements":[{"sl":170},{"sl":171},{"sl":172},{"sl":173},{"sl":174},{"sl":176},{"sl":177},{"sl":178},{"sl":179},{"sl":180},{"sl":181},{"sl":182},{"sl":183},{"sl":184}]},"test_257":{"methods":[{"sl":69}],"name":"varargByteAccepted","pass":true,"statements":[{"sl":71},{"sl":72},{"sl":74},{"sl":75},{"sl":76},{"sl":77}]},"test_308":{"methods":[{"sl":146},{"sl":152}],"name":"varargAcceptedIfArrayIsGiven","pass":true,"statements":[{"sl":148},{"sl":154},{"sl":157},{"sl":158},{"sl":159},{"sl":160},{"sl":161},{"sl":162}]},"test_314":{"methods":[{"sl":124}],"name":"varargLongAccepted","pass":true,"statements":[{"sl":126},{"sl":127},{"sl":129},{"sl":130},{"sl":131},{"sl":132}]},"test_346":{"methods":[{"sl":69}],"name":"varargByteAccepted","pass":true,"statements":[{"sl":71},{"sl":72},{"sl":74},{"sl":75},{"sl":76},{"sl":77}]},"test_383":{"methods":[{"sl":168}],"name":"allKinds","pass":true,"statements":[{"sl":170},{"sl":171},{"sl":172},{"sl":173},{"sl":174},{"sl":176},{"sl":177},{"sl":178},{"sl":179},{"sl":180},{"sl":181},{"sl":182},{"sl":183},{"sl":184}]},"test_402":{"methods":[{"sl":80}],"name":"varargCharAccepted","pass":true,"statements":[{"sl":82},{"sl":83},{"sl":85},{"sl":86},{"sl":87},{"sl":88}]},"test_465":{"methods":[{"sl":41}],"name":"varargObjectAccepted","pass":true,"statements":[{"sl":43},{"sl":44},{"sl":45},{"sl":46},{"sl":47},{"sl":49},{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":55}]},"test_509":{"methods":[{"sl":146},{"sl":152}],"name":"varargAcceptedIfArrayIsGiven","pass":true,"statements":[{"sl":148},{"sl":154},{"sl":157},{"sl":158},{"sl":159},{"sl":160},{"sl":161},{"sl":162}]},"test_571":{"methods":[{"sl":58}],"name":"varargBooleanAccepted","pass":true,"statements":[{"sl":60},{"sl":61},{"sl":63},{"sl":64},{"sl":65},{"sl":66}]},"test_589":{"methods":[{"sl":113}],"name":"varargIntAccepted","pass":true,"statements":[{"sl":115},{"sl":116},{"sl":118},{"sl":119},{"sl":120},{"sl":121}]},"test_645":{"methods":[{"sl":58}],"name":"varargBooleanAccepted","pass":true,"statements":[{"sl":60},{"sl":61},{"sl":63},{"sl":64},{"sl":65},{"sl":66}]},"test_659":{"methods":[{"sl":91}],"name":"varargDoubleAccepted","pass":true,"statements":[{"sl":93},{"sl":94},{"sl":96},{"sl":97},{"sl":98},{"sl":99}]},"test_692":{"methods":[{"sl":80}],"name":"varargCharAccepted","pass":true,"statements":[{"sl":82},{"sl":83},{"sl":85},{"sl":86},{"sl":87},{"sl":88}]},"test_823":{"methods":[{"sl":124}],"name":"varargLongAccepted","pass":true,"statements":[{"sl":126},{"sl":127},{"sl":129},{"sl":130},{"sl":131},{"sl":132}]},"test_84":{"methods":[{"sl":102}],"name":"varargFloatAccepted","pass":true,"statements":[{"sl":104},{"sl":105},{"sl":107},{"sl":108},{"sl":109},{"sl":110}]},"test_878":{"methods":[{"sl":91}],"name":"varargDoubleAccepted","pass":true,"statements":[{"sl":93},{"sl":94},{"sl":96},{"sl":97},{"sl":98},{"sl":99}]},"test_938":{"methods":[{"sl":113}],"name":"varargIntAccepted","pass":true,"statements":[{"sl":115},{"sl":116},{"sl":118},{"sl":119},{"sl":120},{"sl":121}]},"test_988":{"methods":[{"sl":135}],"name":"varargShortAccepted","pass":true,"statements":[{"sl":137},{"sl":138},{"sl":140},{"sl":141},{"sl":142},{"sl":143}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [465, 143], [], [465, 143], [465, 143], [465, 143], [465, 143], [465, 143], [], [465, 143], [465, 143], [465, 143], [465, 143], [465, 143], [465, 143], [465, 143], [], [], [571, 645], [], [571, 645], [571, 645], [], [571, 645], [571, 645], [571, 645], [571, 645], [], [], [346, 257], [], [346, 257], [346, 257], [], [346, 257], [346, 257], [346, 257], [346, 257], [], [], [692, 402], [], [692, 402], [692, 402], [], [692, 402], [692, 402], [692, 402], [692, 402], [], [], [878, 659], [], [878, 659], [878, 659], [], [878, 659], [878, 659], [878, 659], [878, 659], [], [], [84, 177], [], [84, 177], [84, 177], [], [84, 177], [84, 177], [84, 177], [84, 177], [], [], [938, 589], [], [938, 589], [938, 589], [], [938, 589], [938, 589], [938, 589], [938, 589], [], [], [823, 314], [], [823, 314], [823, 314], [], [823, 314], [823, 314], [823, 314], [823, 314], [], [], [988, 196], [], [988, 196], [988, 196], [], [988, 196], [988, 196], [988, 196], [988, 196], [], [], [308, 509], [], [308, 509], [], [], [], [308, 509], [], [308, 509], [], [], [308, 509], [308, 509], [308, 509], [308, 509], [308, 509], [308, 509], [], [], [], [], [], [233, 383], [], [233, 383], [233, 383], [233, 383], [233, 383], [233, 383], [], [233, 383], [233, 383], [233, 383], [233, 383], [233, 383], [233, 383], [233, 383], [233, 383], [233, 383], [], [], []]
