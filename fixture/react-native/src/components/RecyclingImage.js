"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecyclingImage = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var react_native_1 = require("react-native");
var isIOS = react_native_1.Platform.OS === "ios";
var RecyclingImageIOS = function (props) {
    var animatedOpacity = (0, react_1.useRef)(new react_native_1.Animated.Value(0)).current;
    (0, react_1.useMemo)(function () {
        animatedOpacity.setValue(0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.source.uri]);
    return (react_1.default.createElement(react_native_1.Animated.Image, tslib_1.__assign({}, props, { style: [props.style, { opacity: animatedOpacity }], onLoad: function () {
            animatedOpacity.setValue(1);
        } })));
};
var RecyclingImageAndroid = function (props) {
    return react_1.default.createElement(react_native_1.Image, tslib_1.__assign({}, props));
};
exports.RecyclingImage = isIOS ? RecyclingImageIOS : RecyclingImageAndroid;
//# sourceMappingURL=RecyclingImage.js.map