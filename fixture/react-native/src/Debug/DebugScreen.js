"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var react_native_1 = require("react-native");
var flash_list_1 = require("@shopify/flash-list");
var react_native_gesture_handler_1 = require("react-native-gesture-handler");
var DebugContext_1 = require("./DebugContext");
var DebugOptions_1 = require("./DebugOptions");
var DebugScreen = function () {
    var debugContext = (0, react_1.useContext)(DebugContext_1.DebugContext);
    var debugItems = (0, DebugOptions_1.getDebugItems)(debugContext);
    var renderItem = function (_a) {
        var item = _a.item;
        return (react_1.default.createElement(react_native_1.View, { style: styles.row },
            react_1.default.createElement(react_native_1.Text, { style: styles.rowTitle }, item.name),
            renderInput(item)));
    };
    return (
    // @ts-ignore - Type compatibility issue between different React versions
    react_1.default.createElement(flash_list_1.FlashList, { keyExtractor: function (item) {
            return item.name;
        }, renderItem: renderItem, ItemSeparatorComponent: Divider, data: debugItems }));
};
var Divider = function () {
    return react_1.default.createElement(react_native_1.View, { style: styles.divider });
};
var renderInput = function (item) {
    var _a;
    if (item.type === DebugOptions_1.DebugOptionType.Switch) {
        return (react_1.default.createElement(react_native_1.Switch, { onValueChange: function (value) {
                item.onValue(value);
            }, value: item.value, testID: item.testID }));
    }
    else if (item.type === DebugOptions_1.DebugOptionType.Input) {
        return (react_1.default.createElement(react_native_gesture_handler_1.TextInput, { onChangeText: function (value) {
                item.onValue(Number(value));
            }, placeholder: "Set value", value: (_a = item.value) === null || _a === void 0 ? void 0 : _a.toString(), keyboardType: "number-pad" }));
    }
};
exports.default = DebugScreen;
var styles = react_native_1.StyleSheet.create({
    row: {
        flex: 1,
        backgroundColor: "#FFF",
        height: 44,
        paddingLeft: 16,
        paddingRight: 16,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    rowTitle: {
        fontSize: 18,
    },
    divider: {
        width: "100%",
        height: react_native_1.StyleSheet.hairlineWidth,
        backgroundColor: "#DDD",
    },
});
//# sourceMappingURL=DebugScreen.js.map