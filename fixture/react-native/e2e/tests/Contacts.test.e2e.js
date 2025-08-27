"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var goBack_1 = tslib_1.__importDefault(require("../utils/goBack"));
var SnapshotAsserts_1 = require("../utils/SnapshotAsserts");
var SnapshotLocation_1 = require("../utils/SnapshotLocation");
describe("Contacts", function () {
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
                    return [2 /*return*/];
            }
        });
    }); });
    it("with FlashList and SectionList look the same", function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var testName, flashListTestName, flashListScreenshotPath, sectionListTestName, sectionListScreenshotPath;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    testName = "Contacts_with_FlashList_looks_the_same";
                    flashListTestName = "FlashList_".concat(testName);
                    // Go to contacts with FlashList
                    return [4 /*yield*/, element(by.id("Contacts")).tap()];
                case 1:
                    // Go to contacts with FlashList
                    _a.sent();
                    return [4 /*yield*/, element(by.id("FlashList")).takeScreenshot(flashListTestName)];
                case 2:
                    flashListScreenshotPath = _a.sent();
                    (0, SnapshotAsserts_1.assertSnapshot)(flashListScreenshotPath, flashListTestName);
                    return [4 /*yield*/, (0, goBack_1.default)()];
                case 3:
                    _a.sent();
                    // Go to contacts with SectionList
                    return [4 /*yield*/, element(by.id("Contacts SectionList")).tap()];
                case 4:
                    // Go to contacts with SectionList
                    _a.sent();
                    sectionListTestName = "SectionList_".concat(testName);
                    return [4 /*yield*/, element(by.id("SectionList")).takeScreenshot(flashListTestName)];
                case 5:
                    sectionListScreenshotPath = _a.sent();
                    (0, SnapshotAsserts_1.assertSnapshot)(sectionListScreenshotPath, sectionListTestName);
                    (0, SnapshotAsserts_1.assertSnapshotsEqual)((0, SnapshotLocation_1.reference)(flashListTestName), (0, SnapshotLocation_1.reference)(sectionListTestName), "SectionList_and_FlashList_".concat(testName));
                    return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=Contacts.test.e2e.js.map