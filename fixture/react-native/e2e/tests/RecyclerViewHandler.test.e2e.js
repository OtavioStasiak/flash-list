"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var goBack_1 = tslib_1.__importDefault(require("../utils/goBack"));
var SnapshotAsserts_1 = require("../utils/SnapshotAsserts");
var SnapshotLocation_1 = require("../utils/SnapshotLocation");
describe("RecyclerViewHandler", function () {
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
                    // Navigate to RecyclerViewHandlerTest screen
                    return [4 /*yield*/, element(by.id("RecyclerView Handler Test")).tap()];
                case 2:
                    // Navigate to RecyclerViewHandlerTest screen
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
    it("renders initial list correctly", function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var testName, screenshotPath;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    testName = "RecyclerView_initial_state";
                    return [4 /*yield*/, element(by.id("RecyclerView")).takeScreenshot(testName)];
                case 1:
                    screenshotPath = _a.sent();
                    (0, SnapshotAsserts_1.assertSnapshot)(screenshotPath, testName);
                    return [2 /*return*/];
            }
        });
    }); });
    it("scrolls to specific index", function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var scrolledTestName, scrolledScreenshotPath;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: 
                // Tap scroll to index 20
                return [4 /*yield*/, element(by.text("Scroll to Index 20")).tap()];
                case 1:
                    // Tap scroll to index 20
                    _a.sent();
                    scrolledTestName = "RecyclerView_after_scroll_to_index";
                    return [4 /*yield*/, element(by.id("RecyclerView")).takeScreenshot(scrolledTestName)];
                case 2:
                    scrolledScreenshotPath = _a.sent();
                    (0, SnapshotAsserts_1.assertSnapshot)(scrolledScreenshotPath, scrolledTestName);
                    return [2 /*return*/];
            }
        });
    }); });
    it("scrolls to end", function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var scrolledTestName, scrolledScreenshotPath;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: 
                // Tap scroll to end
                return [4 /*yield*/, element(by.text("Scroll to End")).tap()];
                case 1:
                    // Tap scroll to end
                    _a.sent();
                    scrolledTestName = "RecyclerView_after_scroll_to_end";
                    return [4 /*yield*/, element(by.id("RecyclerView")).takeScreenshot(scrolledTestName)];
                case 2:
                    scrolledScreenshotPath = _a.sent();
                    (0, SnapshotAsserts_1.assertSnapshot)(scrolledScreenshotPath, scrolledTestName);
                    return [2 /*return*/];
            }
        });
    }); });
    it("clears and resets items", function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var emptyTestName, emptyScreenshotPath, resetTestName, resetScreenshotPath;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: 
                // Tap clear items
                return [4 /*yield*/, element(by.text("Clear Items")).tap()];
                case 1:
                    // Tap clear items
                    _a.sent();
                    emptyTestName = "RecyclerView_empty_state";
                    return [4 /*yield*/, element(by.id("RecyclerView")).takeScreenshot(emptyTestName)];
                case 2:
                    emptyScreenshotPath = _a.sent();
                    (0, SnapshotAsserts_1.assertSnapshot)(emptyScreenshotPath, emptyTestName);
                    // Reset items
                    return [4 /*yield*/, element(by.text("Reset Items")).tap()];
                case 3:
                    // Reset items
                    _a.sent();
                    resetTestName = "RecyclerView_reset_state";
                    return [4 /*yield*/, element(by.id("RecyclerView")).takeScreenshot(resetTestName)];
                case 4:
                    resetScreenshotPath = _a.sent();
                    (0, SnapshotAsserts_1.assertSnapshot)(resetScreenshotPath, resetTestName);
                    return [2 /*return*/];
            }
        });
    }); });
    it("taps on an item to scroll to it", function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var tapItemTestName, tapItemScreenshotPath;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: 
                // First scroll down to see more items
                return [4 /*yield*/, element(by.text("Scroll to Index 20")).tap()];
                case 1:
                    // First scroll down to see more items
                    _a.sent();
                    // Tap on a visible item
                    return [4 /*yield*/, element(by.text("Item 20")).tap()];
                case 2:
                    // Tap on a visible item
                    _a.sent();
                    tapItemTestName = "RecyclerView_after_tap_item";
                    return [4 /*yield*/, element(by.id("RecyclerView")).takeScreenshot(tapItemTestName)];
                case 3:
                    tapItemScreenshotPath = _a.sent();
                    (0, SnapshotAsserts_1.assertSnapshot)(tapItemScreenshotPath, tapItemTestName);
                    return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=RecyclerViewHandler.test.e2e.js.map