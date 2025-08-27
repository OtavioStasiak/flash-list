"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var flash_list_1 = require("@shopify/flash-list");
var Twitter_1 = tslib_1.__importDefault(require("./Twitter"));
var TwitterBenchmark = function () {
    var ref = (0, react_1.useRef)(null);
    (0, flash_list_1.useBenchmark)(
    // @ts-ignore - Type compatibility issue with useFlatListBenchmark
    ref, function (res) {
        if (!res.interrupted) {
            // eslint-disable-next-line no-alert
            alert(res.formattedString);
        }
    }, { speedMultiplier: 2, repeatCount: 5 });
    // @ts-ignore - Type compatibility issue with ref passing
    return react_1.default.createElement(Twitter_1.default, { instance: ref });
};
exports.default = TwitterBenchmark;
//# sourceMappingURL=TwitterBenchmark.js.map