"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LayoutOptions = LayoutOptions;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var react_native_1 = require("react-native");
var flash_list_1 = require("@shopify/flash-list");
// Generate colors for the items
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
function LayoutOptions() {
    // Configuration states
    var _a = tslib_1.__read((0, react_1.useState)(1), 2), numColumns = _a[0], setNumColumns = _a[1];
    var _b = tslib_1.__read((0, react_1.useState)(false), 2), isHorizontal = _b[0], setIsHorizontal = _b[1];
    var _c = tslib_1.__read((0, react_1.useState)(false), 2), isMasonry = _c[0], setIsMasonry = _c[1];
    var _d = tslib_1.__read((0, react_1.useState)(false), 2), optimizeItemArrangement = _d[0], setOptimizeItemArrangement = _d[1];
    // Generate data
    var data = (0, react_1.useMemo)(function () {
        return Array.from({ length: 100 }, function (_, i) { return ({
            id: i,
            title: "Item ".concat(i),
            color: colors[i % colors.length],
            height: ((i * 10) % 100) + 100,
        }); });
    }, []);
    // Configuration controls
    var renderControls = function () { return (react_1.default.createElement(react_native_1.View, { style: styles.controls },
        react_1.default.createElement(react_native_1.ScrollView, { horizontal: true, showsHorizontalScrollIndicator: false },
            react_1.default.createElement(ControlItem, { label: "Columns: ".concat(numColumns), onPress: function () { return setNumColumns(function (prev) { return (prev >= 4 ? 1 : prev + 1); }); } }),
            react_1.default.createElement(ControlItem, { label: "Orientation: ".concat(isHorizontal ? "Horizontal" : "Vertical"), onPress: function () { return setIsHorizontal(function (prev) { return !prev; }); } }),
            react_1.default.createElement(ControlItem, { label: "Layout: ".concat(isMasonry ? "Masonry" : "Grid"), onPress: function () { return setIsMasonry(function (prev) { return !prev; }); } }),
            react_1.default.createElement(react_native_1.View, { style: styles.switchContainer },
                react_1.default.createElement(react_native_1.Text, { style: styles.switchLabel }, "Optimize Arrangement:"),
                react_1.default.createElement(react_native_1.Switch, { value: optimizeItemArrangement, onValueChange: setOptimizeItemArrangement, trackColor: { false: "#767577", true: "#81b0ff" }, thumbColor: optimizeItemArrangement ? "#4472C4" : "#f4f3f4" }))))); };
    var renderItem = (0, react_1.useCallback)(function (_a) {
        var item = _a.item;
        return react_1.default.createElement(ListItemComponent, { item: item });
    }, []);
    return (react_1.default.createElement(react_native_1.View, { style: styles.container },
        renderControls(),
        react_1.default.createElement(flash_list_1.FlashList, { data: data, numColumns: isHorizontal ? 1 : numColumns, horizontal: isHorizontal, masonry: !isHorizontal && isMasonry, optimizeItemArrangement: optimizeItemArrangement, keyExtractor: function (item) { return item.id.toString(); }, contentContainerStyle: { padding: 4 }, renderItem: renderItem })));
}
// Component for control buttons
var ControlItem = function (_a) {
    var label = _a.label, onPress = _a.onPress;
    return (react_1.default.createElement(react_native_1.Pressable, { style: styles.controlButton, onPress: onPress },
        react_1.default.createElement(react_native_1.Text, { style: styles.controlButtonText }, label)));
};
// List item component
var ListItemComponent = function (_a) {
    var item = _a.item;
    var _b = tslib_1.__read((0, flash_list_1.useRecyclingState)(false, [item.id]), 2), isExpanded = _b[0], setIsExpanded = _b[1];
    return (react_1.default.createElement(react_native_1.Pressable, { onPress: function () { return setIsExpanded(!isExpanded); }, style: [
            styles.itemContainer,
            {
                backgroundColor: item.color,
            },
        ] },
        react_1.default.createElement(react_native_1.View, { style: [
                {
                    height: isExpanded ? item.height : 120,
                    justifyContent: "center",
                    alignItems: "center",
                },
            ] },
            react_1.default.createElement(react_native_1.Text, { style: styles.itemText }, item.title),
            isExpanded && react_1.default.createElement(react_native_1.Text, { style: styles.expandedText }, "Tap to collapse"))));
};
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: react_native_1.Platform.OS === "web" ? undefined : 1,
        height: react_native_1.Platform.OS === "web" ? window.innerHeight : undefined,
        backgroundColor: "#f5f5f5",
    },
    controls: {
        backgroundColor: "#ffffff",
        padding: 12,
        borderBottomWidth: 1,
        borderBottomColor: "#e0e0e0",
    },
    controlButton: {
        backgroundColor: "#4472C4",
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 6,
        marginRight: 8,
        minWidth: 120,
        alignItems: "center",
    },
    controlButtonText: {
        color: "#ffffff",
        fontWeight: "bold",
    },
    switchContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#f0f0f0",
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 6,
        marginRight: 8,
    },
    switchLabel: {
        marginRight: 8,
        fontSize: 13,
    },
    itemContainer: {
        flex: 1,
        margin: 4,
        padding: 16,
        borderRadius: 8,
    },
    itemText: {
        color: "#ffffff",
        fontWeight: "bold",
        fontSize: 16,
    },
    expandedText: {
        color: "#ffffff",
        marginTop: 8,
        opacity: 0.8,
    },
});
//# sourceMappingURL=LayoutOptions.js.map