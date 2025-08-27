"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Grid = Grid;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var react_native_1 = require("react-native");
var flash_list_1 = require("@shopify/flash-list");
var colors = [
    "#FF5252",
    "#FF4081",
    "#E040FB",
    "#7C4DFF",
    "#536DFE",
    "#448AFF",
    "#40C4FF",
    "#18FFFF",
    "#64FFDA",
    "#69F0AE",
    "#B2FF59",
    "#EEFF41",
    "#FFFF00",
    "#FFD740",
    "#FFAB40",
    "#FF6E40",
];
// Generate data using a loop
var generateData = function (count) {
    var items = [];
    for (var i = 0; i < count; i++) {
        items.push({
            id: i,
            title: "Item ".concat(i),
            span: i % 9 === 0 ? 2 : 1,
            color: colors[i % colors.length], // Cycle through colors
        });
    }
    return items;
};
function Grid() {
    var _a = tslib_1.__read((0, react_1.useState)(1000), 1), numItems = _a[0]; // Default to 100 items
    // Generate colors for the grid items
    var data = (0, react_1.useMemo)(function () { return generateData(numItems); }, [numItems]);
    var contentContainerStyle = (0, react_1.useMemo)(function () { return ({
        padding: 4,
    }); }, []);
    var overrideItemLayout = (0, react_1.useCallback)(function (layout, item) {
        var _a;
        layout.span = (_a = item.span) !== null && _a !== void 0 ? _a : 1;
    }, []);
    var renderItem = (0, react_1.useCallback)(function (_a) {
        var item = _a.item;
        return react_1.default.createElement(GridItem, { item: item });
    }, []);
    var keyExtractor = (0, react_1.useCallback)(function (item) { return item.id.toString(); }, []);
    return (react_1.default.createElement(react_1.default.StrictMode, null,
        react_1.default.createElement(react_native_1.View, { style: styles.container },
            react_1.default.createElement(flash_list_1.FlashList, { testID: "GridScreen", data: data, numColumns: 2, contentContainerStyle: contentContainerStyle, 
                // maintainVisibleContentPosition={{}}
                initialScrollIndex: 25, overrideItemLayout: overrideItemLayout, renderItem: renderItem, keyExtractor: keyExtractor }))));
}
var GridItem = function (_a) {
    var item = _a.item;
    var _b = tslib_1.__read((0, flash_list_1.useRecyclingState)(false, [item.id]), 2), isExpanded = _b[0], setIsExpanded = _b[1];
    var baseHeight = 50;
    var height = isExpanded ? (item.id % 2 === 0 ? 80 : 100) : baseHeight;
    return (react_1.default.createElement(react_native_1.Pressable, { onPress: function () { return setIsExpanded(!isExpanded); } },
        react_1.default.createElement(react_native_1.View, { style: [
                styles.itemWrapper,
                {
                    backgroundColor: item.color,
                },
            ] },
            react_1.default.createElement(react_native_1.View, { style: [
                    styles.item,
                    {
                        height: height,
                    },
                ] },
                react_1.default.createElement(react_native_1.Text, { style: styles.itemText }, item.title)))));
};
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: react_native_1.Platform.OS === "web" ? undefined : 1,
        height: react_native_1.Platform.OS === "web" ? window.innerHeight : undefined,
        backgroundColor: "#f5f5f5",
    },
    itemWrapper: {
        padding: 16,
        margin: 4,
        borderRadius: 8,
        flex: 1,
        justifyContent: "center",
    },
    item: {
        justifyContent: "center",
        alignItems: "center",
    },
    itemText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
    },
});
//# sourceMappingURL=Grid.js.map