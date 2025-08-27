"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertSnapshotsEqual = exports.assertSnapshot = void 0;
var SnapshotLocation_1 = require("./SnapshotLocation");
var PixelDifference_1 = require("./PixelDifference");
var assertSnapshot = function (snapshotPath, testName) {
    var referencePath = (0, SnapshotLocation_1.reference)(testName);
    if (referencePath) {
        var diffPNG = (0, PixelDifference_1.pixelDifference)(snapshotPath, referencePath);
        if (diffPNG !== null) {
            var diffPath = (0, SnapshotLocation_1.saveDiff)(diffPNG, "".concat(testName, "_diff.png"));
            throw Error("There is difference between reference screenshot and test run screenshot.\n         See diff: ".concat(diffPath));
        }
    }
    else {
        (0, SnapshotLocation_1.saveReference)(snapshotPath, testName);
        throw Error("There is no reference screenshot present.\n       New reference screenshot was just created for test name \"".concat(testName, "\".\n       Please run the test again."));
    }
};
exports.assertSnapshot = assertSnapshot;
var assertSnapshotsEqual = function (firstPath, secondPath, testName) {
    if (!firstPath) {
        throw new Error("Invalid path: ".concat(firstPath, ". Please make sure that you have a screenshot before running this assertion."));
    }
    if (!secondPath) {
        throw new Error("Invalid path: ".concat(secondPath, ". Please make sure that you have a screenshot before running this assertion."));
    }
    var diffPNG = (0, PixelDifference_1.pixelDifference)(firstPath, secondPath);
    if (diffPNG !== null) {
        var diffPath = (0, SnapshotLocation_1.saveDiff)(diffPNG, "".concat(testName, "_diff.png"));
        throw Error("There is difference between reference screenshot and test run screenshot.\n       See diff: ".concat(diffPath, ".\n       Original screenshots: ").concat(firstPath, " and ").concat(secondPath));
    }
};
exports.assertSnapshotsEqual = assertSnapshotsEqual;
//# sourceMappingURL=SnapshotAsserts.js.map