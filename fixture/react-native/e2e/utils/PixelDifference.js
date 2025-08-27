"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pixelDifference = void 0;
var tslib_1 = require("tslib");
var fs = tslib_1.__importStar(require("fs"));
var pixelmatch_1 = tslib_1.__importDefault(require("pixelmatch"));
var pngjs_1 = require("pngjs");
var pixelDifference = function (referencePath, toMatchPath) {
    var reference = pngjs_1.PNG.sync.read(fs.readFileSync(referencePath));
    var toMatch = pngjs_1.PNG.sync.read(fs.readFileSync(toMatchPath));
    var width = reference.width, height = reference.height;
    var diff = new pngjs_1.PNG({ width: width, height: height });
    var numDiffPixels = (0, pixelmatch_1.default)(reference.data, toMatch.data, diff.data, width, height, { threshold: 0.2 });
    return numDiffPixels > 0 ? diff : null;
};
exports.pixelDifference = pixelDifference;
//# sourceMappingURL=PixelDifference.js.map