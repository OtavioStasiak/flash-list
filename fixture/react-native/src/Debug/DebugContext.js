"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DebugContext = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var DebugContextDefaultValue = {
    emptyListEnabled: false,
    pagingEnabled: false,
    setEmptyListEnabled: function () { },
    setInitialScrollIndex: function () { },
    setPagingEnabled: function () { },
};
exports.DebugContext = (0, react_1.createContext)(DebugContextDefaultValue);
var DebugContextProvider = function (_a) {
    var children = _a.children;
    var _b = tslib_1.__read((0, react_1.useState)(false), 2), emptyListEnabled = _b[0], setEmptyListEnabled = _b[1];
    var _c = tslib_1.__read((0, react_1.useState)(), 2), initialScrollIndex = _c[0], setInitialScrollIndex = _c[1];
    var _d = tslib_1.__read((0, react_1.useState)(false), 2), pagingEnabled = _d[0], setPagingEnabled = _d[1];
    var memoizedValue = (0, react_1.useMemo)(function () { return ({
        emptyListEnabled: emptyListEnabled,
        setEmptyListEnabled: setEmptyListEnabled,
        initialScrollIndex: initialScrollIndex,
        setInitialScrollIndex: setInitialScrollIndex,
        pagingEnabled: pagingEnabled,
        setPagingEnabled: setPagingEnabled,
    }); }, [
        emptyListEnabled,
        setEmptyListEnabled,
        initialScrollIndex,
        setInitialScrollIndex,
        pagingEnabled,
        setPagingEnabled,
    ]);
    return (react_1.default.createElement(exports.DebugContext.Provider, { value: memoizedValue }, children));
};
exports.default = DebugContextProvider;
//# sourceMappingURL=DebugContext.js.map