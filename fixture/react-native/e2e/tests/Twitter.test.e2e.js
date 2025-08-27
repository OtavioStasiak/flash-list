"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var DebugOptions_1 = require("../../src/Debug/DebugOptions");
var SnapshotAsserts_1 = require("../utils/SnapshotAsserts");
var SnapshotLocation_1 = require("../utils/SnapshotLocation");
var goBack_1 = tslib_1.__importDefault(require("../utils/goBack"));
describe("Twitter", function () {
    var flashListReferenceTestName = "Twitter_with_FlashList_looks_the_same";
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
                    return [4 /*yield*/, device.setOrientation("portrait")];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it("with FlashList looks the same", function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var testRunScreenshotPath;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, element(by.id("Twitter Timeline")).tap()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, element(by.id("FlashList")).takeScreenshot(flashListReferenceTestName)];
                case 2:
                    testRunScreenshotPath = _a.sent();
                    (0, SnapshotAsserts_1.assertSnapshot)(testRunScreenshotPath, flashListReferenceTestName);
                    return [2 /*return*/];
            }
        });
    }); });
    it("with FlatList looks the same as with FlashList", function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var testName, testRunScreenshotPath;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    testName = "Twitter_with_FlatList_looks_the_same_as_with_FlashList";
                    return [4 /*yield*/, element(by.id("Twitter FlatList Timeline")).tap()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, element(by.id("FlatList")).takeScreenshot(testName)];
                case 2:
                    testRunScreenshotPath = _a.sent();
                    // Assert that FlatList reference is the same
                    (0, SnapshotAsserts_1.assertSnapshot)(testRunScreenshotPath, testName);
                    // Assert that FlatList reference is the same as with FlashList
                    (0, SnapshotAsserts_1.assertSnapshotsEqual)((0, SnapshotLocation_1.reference)(flashListReferenceTestName), (0, SnapshotLocation_1.reference)(testName), testName);
                    return [2 /*return*/];
            }
        });
    }); });
    it("looks the same after orientation change", function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var testName, flashListScreenshotPath;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    testName = "Twitter_looks_the_same_after_orientation_change";
                    // Go to Twitter with FlashList screen
                    return [4 /*yield*/, element(by.id("Twitter Timeline")).tap()];
                case 1:
                    // Go to Twitter with FlashList screen
                    _a.sent();
                    // Scroll 500px down and change orientation to lansdsape
                    return [4 /*yield*/, scrollAndRotate("FlashList")];
                case 2:
                    // Scroll 500px down and change orientation to lansdsape
                    _a.sent();
                    return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 1000); })];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, element(by.id("FlashList")).takeScreenshot(testName)];
                case 4:
                    flashListScreenshotPath = _a.sent();
                    (0, SnapshotAsserts_1.assertSnapshot)(flashListScreenshotPath, testName);
                    return [2 /*return*/];
            }
        });
    }); });
    it("is updated after refreshed", function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var testName, flashList, flashListScreenshotPath;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    testName = "Twitter_is_updated_after_refreshed";
                    return [4 /*yield*/, element(by.id("Twitter Timeline")).tap()];
                case 1:
                    _a.sent();
                    flashList = element(by.id("FlashList"));
                    // Simulate pull to refresh
                    return [4 /*yield*/, flashList.swipe("down", "fast")];
                case 2:
                    // Simulate pull to refresh
                    _a.sent();
                    return [4 /*yield*/, flashList.takeScreenshot(testName)];
                case 3:
                    flashListScreenshotPath = _a.sent();
                    (0, SnapshotAsserts_1.assertSnapshot)(flashListScreenshotPath, testName);
                    return [2 /*return*/];
            }
        });
    }); });
    // Temporarily disabled due to failures, can be fixed after RN upgrade
    it("loads a new page when gets to the bottom of the list", function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var testName, flashList, flashListScreenshotPath;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    testName = "Twitter_loads_a_new_page_when_gets_to_the_bottom_of_the_list";
                    return [4 /*yield*/, enableDebugOption(DebugOptions_1.DebugOption.PagingEnabled)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, element(by.id("Twitter Timeline")).tap()];
                case 2:
                    _a.sent();
                    flashList = element(by.id("FlashList"));
                    return [4 /*yield*/, flashList.swipe("up", "fast")];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, flashList.takeScreenshot(testName)];
                case 4:
                    flashListScreenshotPath = _a.sent();
                    (0, SnapshotAsserts_1.assertSnapshot)(flashListScreenshotPath, testName);
                    return [2 /*return*/];
            }
        });
    }); });
});
var scrollAndRotate = function (id) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, element(by.id(id)).scroll(240, "down")];
            case 1:
                _a.sent();
                return [4 /*yield*/, device.setOrientation("landscape")];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
var enableDebugOption = function (option) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, element(by.id("debug-button")).tap()];
            case 1:
                _a.sent();
                return [4 /*yield*/, element(by.id(option)).longPress()];
            case 2:
                _a.sent();
                return [4 /*yield*/, (0, goBack_1.default)()];
            case 3:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
//# sourceMappingURL=Twitter.test.e2e.js.map