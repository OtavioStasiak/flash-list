"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var goBack_1 = tslib_1.__importDefault(require("../utils/goBack"));
var SnapshotAsserts_1 = require("../utils/SnapshotAsserts");
var SnapshotLocation_1 = require("../utils/SnapshotLocation");
describe("Chat", function () {
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
                    // Navigate to Chat screen
                    return [4 /*yield*/, element(by.id("Chat")).tap()];
                case 2:
                    // Navigate to Chat screen
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
    it("add messages at top and capture screenshot", function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var initialTestName, initialScreenshotPath, topMessagesTestName, topMessagesScreenshotPath;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    initialTestName = "Chat_initial_state";
                    // add a delay to ensure the screen is loaded
                    return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 1000); })];
                case 1:
                    // add a delay to ensure the screen is loaded
                    _a.sent();
                    return [4 /*yield*/, element(by.id("ChatScreen"))
                            .atIndex(0)
                            .takeScreenshot(initialTestName)];
                case 2:
                    initialScreenshotPath = _a.sent();
                    (0, SnapshotAsserts_1.assertSnapshot)(initialScreenshotPath, initialTestName);
                    // Add messages at the top
                    return [4 /*yield*/, element(by.text("Add at Top")).tap()];
                case 3:
                    // Add messages at the top
                    _a.sent();
                    topMessagesTestName = "Chat_add_at_top";
                    return [4 /*yield*/, element(by.id("ChatScreen"))
                            .atIndex(0)
                            .takeScreenshot(topMessagesTestName)];
                case 4:
                    topMessagesScreenshotPath = _a.sent();
                    (0, SnapshotAsserts_1.assertSnapshot)(topMessagesScreenshotPath, topMessagesTestName);
                    return [2 /*return*/];
            }
        });
    }); });
    it("add messages at bottom and capture screenshot", function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var initialTestName, initialScreenshotPath, bottomMessagesTestName, bottomMessagesScreenshotPath;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    initialTestName = "Chat_before_adding_bottom";
                    return [4 /*yield*/, element(by.id("ChatScreen"))
                            .atIndex(0)
                            .takeScreenshot(initialTestName)];
                case 1:
                    initialScreenshotPath = _a.sent();
                    (0, SnapshotAsserts_1.assertSnapshot)(initialScreenshotPath, initialTestName);
                    // Add message at the bottom
                    return [4 /*yield*/, element(by.text("Add at Bottom")).tap()];
                case 2:
                    // Add message at the bottom
                    _a.sent();
                    bottomMessagesTestName = "Chat_add_at_bottom";
                    return [4 /*yield*/, element(by.id("ChatScreen"))
                            .atIndex(0)
                            .takeScreenshot(bottomMessagesTestName)];
                case 3:
                    bottomMessagesScreenshotPath = _a.sent();
                    (0, SnapshotAsserts_1.assertSnapshot)(bottomMessagesScreenshotPath, bottomMessagesTestName);
                    return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=Chat.test.e2e.js.map