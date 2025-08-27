"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DynamicColumnSpan = DynamicColumnSpan;
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
// Generate data with both height and span variations
var generateData = function (count, spanPattern) {
    var items = [];
    for (var i = 0; i < count; i++) {
        items.push({
            id: i,
            title: "Item ".concat(i),
            span: spanPattern[i % spanPattern.length],
            height: ((i * 15) % 120) + 80,
            color: colors[i % colors.length],
        });
    }
    return items;
};
// Helper function to compare arrays
var arraysEqual = function (arr1, arr2) {
    return (arr1.length === arr2.length &&
        arr1.every(function (val, index) { return val === arr2[index]; }));
};
function DynamicColumnSpan() {
    var _a = tslib_1.__read((0, react_1.useState)(500), 1), numItems = _a[0];
    var _b = tslib_1.__read((0, react_1.useState)(false), 2), isMasonry = _b[0], setIsMasonry = _b[1];
    var _c = tslib_1.__read((0, react_1.useState)(3), 2), numColumns = _c[0], setNumColumns = _c[1];
    var _d = tslib_1.__read((0, react_1.useState)([1, 1, 1]), 2), spanPattern = _d[0], setSpanPattern = _d[1];
    // Predefined span patterns
    var spanPatterns = {
        uniform: [1, 1, 1],
        alternating: [1, 2, 1],
        mixed: [1, 1, 2, 1, 3, 1],
        large: [2, 2, 2],
        varied: [1, 2, 1, 3, 1, 2],
    };
    var data = (0, react_1.useMemo)(function () { return generateData(numItems, spanPattern); }, [numItems, spanPattern]);
    var contentContainerStyle = (0, react_1.useMemo)(function () { return ({
        padding: 4,
    }); }, []);
    var overrideItemLayout = (0, react_1.useCallback)(function (layout, item) {
        layout.span = item.span;
        if (isMasonry) {
            layout.size = item.height;
        }
    }, [isMasonry]);
    var renderItem = (0, react_1.useCallback)(function (_a) {
        var item = _a.item;
        return react_1.default.createElement(DynamicGridItem, { item: item, isMasonry: isMasonry });
    }, [isMasonry]);
    var keyExtractor = (0, react_1.useCallback)(function (item) { return item.id.toString(); }, []);
    var toggleLayout = function () {
        setIsMasonry(!isMasonry);
    };
    var changeColumns = function (cols) {
        setNumColumns(cols);
    };
    var changeSpanPattern = function (patternKey) {
        setSpanPattern(spanPatterns[patternKey]);
    };
    return (react_1.default.createElement(react_1.default.StrictMode, null,
        react_1.default.createElement(react_native_1.View, { style: styles.container },
            react_1.default.createElement(react_native_1.View, { style: styles.controlPanel },
                react_1.default.createElement(react_native_1.View, { style: styles.controlRow },
                    react_1.default.createElement(react_native_1.Text, { style: styles.controlLabel }, "Layout:"),
                    react_1.default.createElement(react_native_1.Pressable, { style: [styles.controlButton, !isMasonry && styles.activeButton], onPress: toggleLayout },
                        react_1.default.createElement(react_native_1.Text, { style: [
                                styles.buttonText,
                                !isMasonry && styles.activeButtonText,
                            ] }, isMasonry ? "Switch to Grid" : "Grid Mode")),
                    react_1.default.createElement(react_native_1.Pressable, { style: [styles.controlButton, isMasonry && styles.activeButton], onPress: toggleLayout },
                        react_1.default.createElement(react_native_1.Text, { style: [
                                styles.buttonText,
                                isMasonry && styles.activeButtonText,
                            ] }, isMasonry ? "Masonry Mode" : "Switch to Masonry"))),
                react_1.default.createElement(react_native_1.View, { style: styles.controlRow },
                    react_1.default.createElement(react_native_1.Text, { style: styles.controlLabel }, "Columns:"),
                    [2, 3, 4].map(function (cols) { return (react_1.default.createElement(react_native_1.Pressable, { key: cols, style: [
                            styles.controlButton,
                            numColumns === cols && styles.activeButton,
                        ], onPress: function () { return changeColumns(cols); } },
                        react_1.default.createElement(react_native_1.Text, { style: [
                                styles.buttonText,
                                numColumns === cols && styles.activeButtonText,
                            ] }, cols))); })),
                react_1.default.createElement(react_native_1.View, { style: styles.controlRow },
                    react_1.default.createElement(react_native_1.Text, { style: styles.controlLabel }, "Span Pattern:"),
                    react_1.default.createElement(react_native_1.View, { style: styles.patternButtons }, Object.keys(spanPatterns).map(function (patternKey) { return (react_1.default.createElement(react_native_1.Pressable, { key: patternKey, style: [
                            styles.controlButton,
                            styles.patternButton,
                            arraysEqual(spanPattern, spanPatterns[patternKey]) && styles.activeButton,
                        ], onPress: function () {
                            return changeSpanPattern(patternKey);
                        } },
                        react_1.default.createElement(react_native_1.Text, { style: [
                                styles.buttonText,
                                styles.patternButtonText,
                                arraysEqual(spanPattern, spanPatterns[patternKey]) && styles.activeButtonText,
                            ] }, patternKey))); })))),
            react_1.default.createElement(flash_list_1.FlashList, { testID: "DynamicColumnSpanList", data: data, numColumns: numColumns, masonry: isMasonry, contentContainerStyle: contentContainerStyle, overrideItemLayout: overrideItemLayout, renderItem: renderItem, keyExtractor: keyExtractor }))));
}
var DynamicGridItem = function (_a) {
    var item = _a.item, isMasonry = _a.isMasonry;
    var _b = tslib_1.__read((0, flash_list_1.useRecyclingState)(false, [item.id]), 2), isExpanded = _b[0], setIsExpanded = _b[1];
    // For grid mode, use dynamic height based on expansion
    // For masonry mode, use the predefined height
    var baseHeight = isMasonry ? item.height : 60;
    var height = isMasonry
        ? item.height
        : isExpanded
            ? baseHeight + 40
            : baseHeight;
    return (react_1.default.createElement(react_native_1.Pressable, { onPress: function () { return !isMasonry && setIsExpanded(!isExpanded); }, style: styles.itemPressable },
        react_1.default.createElement(react_native_1.View, { style: [
                styles.itemWrapper,
                {
                    backgroundColor: item.color,
                    height: height,
                },
            ] },
            react_1.default.createElement(react_native_1.View, { style: styles.itemContent },
                react_1.default.createElement(react_native_1.Text, { style: styles.itemText }, item.title),
                react_1.default.createElement(react_native_1.Text, { style: styles.spanText },
                    "Span: ",
                    item.span),
                isMasonry && (react_1.default.createElement(react_native_1.Text, { style: styles.heightText },
                    "Height: ",
                    item.height)),
                !isMasonry && (react_1.default.createElement(react_native_1.Text, { style: styles.expandText }, isExpanded ? "Tap to collapse" : "Tap to expand"))))));
};
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: react_native_1.Platform.OS === "web" ? undefined : 1,
        height: react_native_1.Platform.OS === "web" ? window.innerHeight : undefined,
        backgroundColor: "#f5f5f5",
    },
    controlPanel: {
        backgroundColor: "#fff",
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: "#e0e0e0",
        elevation: 2,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    controlRow: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 12,
        flexWrap: "wrap",
    },
    controlLabel: {
        fontSize: 16,
        fontWeight: "600",
        marginRight: 12,
        minWidth: 80,
        color: "#333",
    },
    controlButton: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        backgroundColor: "#e0e0e0",
        borderRadius: 20,
        marginRight: 8,
        marginBottom: 4,
    },
    patternButton: {
        paddingHorizontal: 12,
        paddingVertical: 6,
    },
    patternButtons: {
        flexDirection: "row",
        flexWrap: "wrap",
        flex: 1,
    },
    activeButton: {
        backgroundColor: "#007AFF",
    },
    buttonText: {
        fontSize: 14,
        fontWeight: "500",
        color: "#333",
    },
    patternButtonText: {
        fontSize: 12,
        textTransform: "capitalize",
    },
    activeButtonText: {
        color: "#fff",
    },
    itemPressable: {
        flex: 1,
    },
    itemWrapper: {
        margin: 4,
        borderRadius: 8,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        elevation: 2,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    itemContent: {
        alignItems: "center",
        justifyContent: "center",
        padding: 8,
    },
    itemText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
        textAlign: "center",
        marginBottom: 4,
    },
    spanText: {
        color: "#fff",
        fontSize: 12,
        opacity: 0.9,
        marginBottom: 2,
    },
    heightText: {
        color: "#fff",
        fontSize: 10,
        opacity: 0.8,
    },
    expandText: {
        color: "#fff",
        fontSize: 10,
        opacity: 0.8,
        textAlign: "center",
    },
});
//# sourceMappingURL=DynamicColumnSpan.js.map