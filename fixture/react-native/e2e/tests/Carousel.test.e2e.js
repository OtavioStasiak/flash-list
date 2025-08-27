"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var goBack_1 = tslib_1.__importDefault(require("../utils/goBack"));
var SnapshotAsserts_1 = require("../utils/SnapshotAsserts");
var SnapshotLocation_1 = require("../utils/SnapshotLocation");
describe("Carousel", function () {
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
                    // Navigate to Carousel screen
                    return [4 /*yield*/, element(by.id("Carousel")).tap()];
                case 2:
                    // Navigate to Carousel screen
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
    it("handles orientation changes correctly", function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var portraitTestName, portraitScreenshotPath, landscapeTestName, landscapeScreenshotPath, portraitAgainTestName, portraitAgainScreenshotPath;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    portraitTestName = "Carousel_portrait";
                    return [4 /*yield*/, device.setOrientation("portrait")];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, element(by.id("CarouselScreen")).takeScreenshot(portraitTestName)];
                case 2:
                    portraitScreenshotPath = _a.sent();
                    (0, SnapshotAsserts_1.assertSnapshot)(portraitScreenshotPath, portraitTestName);
                    landscapeTestName = "Carousel_landscape";
                    return [4 /*yield*/, device.setOrientation("landscape")];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, element(by.id("CarouselScreen")).takeScreenshot(landscapeTestName)];
                case 4:
                    landscapeScreenshotPath = _a.sent();
                    (0, SnapshotAsserts_1.assertSnapshot)(landscapeScreenshotPath, landscapeTestName);
                    portraitAgainTestName = "Carousel_back_to_portrait";
                    return [4 /*yield*/, device.setOrientation("portrait")];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, element(by.id("CarouselScreen")).takeScreenshot(portraitAgainTestName)];
                case 6:
                    portraitAgainScreenshotPath = _a.sent();
                    (0, SnapshotAsserts_1.assertSnapshot)(portraitAgainScreenshotPath, portraitAgainTestName);
                    return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=Carousel.test.e2e.js.map