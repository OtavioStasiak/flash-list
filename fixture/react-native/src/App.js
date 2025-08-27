"use strict";
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
require("react-native-gesture-handler");
var react_1 = tslib_1.__importDefault(require("react"));
var Debug_1 = require("./Debug");
var NavigationTree_1 = tslib_1.__importDefault(require("./NavigationTree"));
var App = function () {
    return (react_1.default.createElement(Debug_1.DebugContextProvider, null,
        react_1.default.createElement(NavigationTree_1.default, null)));
};
exports.default = App;
//# sourceMappingURL=App.js.map