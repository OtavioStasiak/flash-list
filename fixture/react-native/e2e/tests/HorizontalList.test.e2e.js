"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var goBack_1 = tslib_1.__importDefault(require("../utils/goBack"));
var SnapshotAsserts_1 = require("../utils/SnapshotAsserts");
var SnapshotLocation_1 = require("../utils/SnapshotLocation");
describe("HorizontalList", function () {
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
                    // Navigate to HorizontalList screen
                    return [4 /*yield*/, element(by.id("Horizontal List")).tap()];
                case 2:
                    // Navigate to HorizontalList screen
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
    it("renders horizontal list correctly", function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var initialTestName, initialScreenshotPath;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    initialTestName = "HorizontalList_initial_render";
                    return [4 /*yield*/, element(by.id("HorizontalListScreen")).takeScreenshot(initialTestName)];
                case 1:
                    initialScreenshotPath = _a.sent();
                    (0, SnapshotAsserts_1.assertSnapshot)(initialScreenshotPath, initialTestName);
                    return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=HorizontalList.test.e2e.js.map