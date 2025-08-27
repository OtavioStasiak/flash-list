"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var goBack_1 = tslib_1.__importDefault(require("../utils/goBack"));
var SnapshotAsserts_1 = require("../utils/SnapshotAsserts");
var SnapshotLocation_1 = require("../utils/SnapshotLocation");
describe("Grid", function () {
    beforeAll(function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, device.launchApp({ newInstance: true })];
                case 1:
                    _a.sent();
                    (0, SnapshotLocation_1.wipeArtifactsLocation)("diffs");
                    return [2 /*return*/];
            }
        });
    }); });
    beforeEach(function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, device.reloadReactNative()];
                case 1:
                    _a.sent();
                    // Navigate to Grid screen
                    return [4 /*yield*/, element(by.id("Grid")).tap()];
                case 2:
                    // Navigate to Grid screen
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    afterEach(function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, goBack_1.default)()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it("renders the grid correctly", function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var gridTestName, gridScreenshotPath;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    gridTestName = "Grid_initial_render";
                    return [4 /*yield*/, element(by.id("GridScreen")).takeScreenshot(gridTestName)];
                case 1:
                    gridScreenshotPath = _a.sent();
                    (0, SnapshotAsserts_1.assertSnapshot)(gridScreenshotPath, gridTestName);
                    return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=Grid.test.e2e.js.map