"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var RecyclerViewManager_1 = require("../recyclerview/RecyclerViewManager");
var WarningMessages_1 = require("../errors/WarningMessages");
describe("RecyclerViewManager", function () {
    var consoleWarnSpy;
    beforeEach(function () {
        consoleWarnSpy = jest.spyOn(console, "warn").mockImplementation();
    });
    afterEach(function () {
        consoleWarnSpy.mockRestore();
    });
    describe("keyExtractor warning with maintainVisibleContentPosition", function () {
        var createMockProps = function (overrides) {
            if (overrides === void 0) { overrides = {}; }
            return (tslib_1.__assign({ data: [{ id: 1 }, { id: 2 }, { id: 3 }], renderItem: jest.fn() }, overrides));
        };
        var createManager = function (props) {
            return new RecyclerViewManager_1.RecyclerViewManager(props);
        };
        it("should warn when onStartReached is defined but keyExtractor is not", function () {
            var props = createMockProps({
                onStartReached: jest.fn(),
                keyExtractor: undefined,
            });
            createManager(props);
            expect(consoleWarnSpy).toHaveBeenCalledWith(WarningMessages_1.WarningMessages.keyExtractorNotDefinedForMVCP);
        });
        it("should not warn when both onStartReached and keyExtractor are defined", function () {
            var props = createMockProps({
                onStartReached: jest.fn(),
                keyExtractor: function (item) { return item.id.toString(); },
            });
            createManager(props);
            expect(consoleWarnSpy).not.toHaveBeenCalled();
        });
        it("should not warn when onStartReached is not defined", function () {
            var props = createMockProps({
                onStartReached: undefined,
                keyExtractor: undefined,
            });
            createManager(props);
            expect(consoleWarnSpy).not.toHaveBeenCalled();
        });
        it("should not warn when onStartReached is not defined but keyExtractor is", function () {
            var props = createMockProps({
                onStartReached: undefined,
                keyExtractor: function (item) { return item.id.toString(); },
            });
            createManager(props);
            expect(consoleWarnSpy).not.toHaveBeenCalled();
        });
    });
});
//# sourceMappingURL=RecyclerViewManager.test.js.map