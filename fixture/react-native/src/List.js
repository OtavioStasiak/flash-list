"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/** *
 Use this component inside your React Native Application.
 A scrollable list with different item type
 */
var react_1 = tslib_1.__importStar(require("react"));
var react_native_1 = require("react-native");
var flash_list_1 = require("@shopify/flash-list");
var react_native_reanimated_1 = tslib_1.__importStar(require("react-native-reanimated"));
var generateArray = function (size) {
    var arr = new Array(size);
    for (var i = 0; i < size; i++) {
        arr[i] = i;
    }
    return arr;
};
var List = function () {
    var _a = tslib_1.__read((0, react_1.useState)(false), 2), refreshing = _a[0], setRefreshing = _a[1];
    var _b = tslib_1.__read((0, react_1.useState)(function () { return generateArray(100); }), 2), data = _b[0], setData = _b[1];
    var list = (0, react_1.useRef)(null);
    var removeItem = (0, react_1.useCallback)(function (item) {
        var _a;
        (_a = list.current) === null || _a === void 0 ? void 0 : _a.prepareForLayoutAnimationRender();
        setData(function (prevData) {
            return prevData.filter(function (dataItem) {
                return dataItem !== item;
            });
        });
    }, []);
    var renderItem = (0, react_1.useCallback)(function (_a) {
        var item = _a.item;
        var backgroundColor = item % 2 === 0 ? "#00a1f1" : "#ffbb00";
        console.log("renderItem", item);
        return (react_1.default.createElement(react_native_1.Pressable, { onPress: function () {
                removeItem(item);
            } },
            react_1.default.createElement(react_native_1.View, { style: tslib_1.__assign(tslib_1.__assign({}, styles.container), { backgroundColor: item > 97 ? "red" : backgroundColor, height: item % 2 === 0 ? 100 : 200 }) },
                react_1.default.createElement(react_native_1.Text, null,
                    "Cell Id: ",
                    item))));
    }, [removeItem]);
    return (react_1.default.createElement(flash_list_1.FlashList, { ref: list, refreshing: refreshing, onRefresh: function () {
            setRefreshing(true);
            setTimeout(function () {
                setRefreshing(false);
            }, 2000);
        }, CellRendererComponent: CellRenderer, keyExtractor: function (item) {
            return item.toString();
        }, getItemType: function (item) {
            return item % 2 === 0 ? "even" : "odd";
        }, renderItem: renderItem, data: data }));
};
exports.default = List;
var CellRenderer = function (props) {
    return (react_1.default.createElement(react_native_reanimated_1.default.View, tslib_1.__assign({}, props, { layout: react_native_reanimated_1.LinearTransition, entering: react_native_reanimated_1.FadeIn, exiting: react_native_reanimated_1.FadeOut })));
};
var styles = react_native_1.StyleSheet.create({
    container: {
        justifyContent: "space-around",
        alignItems: "center",
        height: 120,
        backgroundColor: "#00a1f1",
    },
});
//# sourceMappingURL=List.js.map