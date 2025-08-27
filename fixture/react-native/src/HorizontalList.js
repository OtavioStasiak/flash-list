"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var react_native_1 = require("react-native");
var flash_list_1 = require("@shopify/flash-list");
var generateItems = function (count) {
    var colors = [
        "#FF5252", // Red
        "#FF4081", // Pink
        "#E040FB", // Purple
        "#7C4DFF", // Deep Purple
        "#536DFE", // Indigo
        "#448AFF", // Blue
        "#40C4FF", // Light Blue
        "#18FFFF", // Cyan
        "#64FFDA", // Teal
        "#69F0AE", // Green
        "#B2FF59", // Light Green
        "#EEFF41", // Lime
        "#FFFF00", // Yellow
        "#FFD740", // Amber
        "#FFAB40", // Orange
        "#FF6E40", // Deep Orange
    ];
    return Array.from({ length: count }, function (_, i) { return ({
        id: i,
        title: "Item ".concat(i),
        color: colors[i % colors.length],
    }); });
};
// ListItem component that manages its own expanded state
var ListItem = function (_a) {
    var item = _a.item;
    var _b = tslib_1.__read((0, flash_list_1.useRecyclingState)(false, [item.id]), 2), isExpanded = _b[0], setIsExpanded = _b[1];
    var handlePress = function () {
        setIsExpanded(function (prev) { return !prev; });
    };
    return (react_1.default.createElement(react_native_1.View, null,
        react_1.default.createElement(react_native_1.Pressable, { style: [
                styles.itemContainer,
                { backgroundColor: item.color },
                isExpanded && {
                    height: 230,
                },
            ], onPress: handlePress },
            react_1.default.createElement(react_native_1.Text, { style: styles.itemText }, item.title))));
};
var Separator = function () { return react_1.default.createElement(react_native_1.View, { style: styles.separator }); };
var HorizontalList = function () {
    var _a = tslib_1.__read((0, react_1.useState)(generateItems(20)), 1), data = _a[0];
    // Memoize the separator component
    // Memoize the renderItem function
    var renderItem = (0, react_1.useCallback)(function (_a) {
        var item = _a.item;
        return react_1.default.createElement(ListItem, { item: item });
    }, []);
    // Memoize the keyExtractor function
    var keyExtractor = (0, react_1.useCallback)(function (item) { return item.id.toString(); }, []);
    var header = react_1.default.createElement(ListItem, { item: { id: 0, title: "Header", color: "red" } });
    return (react_1.default.createElement(react_native_1.View, { style: styles.container },
        react_1.default.createElement(react_native_1.StatusBar, { barStyle: "dark-content" }),
        react_1.default.createElement(react_native_1.Text, { style: styles.header }, "Horizontal List Example"),
        react_1.default.createElement(flash_list_1.FlashList, { testID: "HorizontalListScreen", horizontal: true, data: data, initialScrollIndex: 2, renderItem: renderItem, keyExtractor: keyExtractor, ItemSeparatorComponent: Separator, ListHeaderComponent: header }),
        react_1.default.createElement(react_native_1.Text, { style: styles.description }, "This example demonstrates a horizontal scrolling list using RecyclerView. Each item has a unique color and can be tapped to show an alert.")));
};
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
    },
    header: {
        fontSize: 22,
        fontWeight: "bold",
        margin: 16,
        color: "#333",
    },
    itemContainer: {
        width: 150,
        height: 180,
        margin: 8,
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    itemText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
        textShadowColor: "rgba(0, 0, 0, 0.3)",
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
    },
    separator: {
        width: 1,
        height: "80%",
        backgroundColor: "rgba(0, 0, 0, 0.15)",
        alignSelf: "center",
        marginHorizontal: 2,
        borderRadius: 5,
    },
    description: {
        fontSize: 16,
        lineHeight: 24,
        color: "#666",
        margin: 16,
    },
});
exports.default = HorizontalList;
//# sourceMappingURL=HorizontalList.js.map