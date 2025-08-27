"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var react_native_1 = require("react-native");
var flash_list_1 = require("@shopify/flash-list");
// Generate random items with varying heights
var generateItems = function (count) {
    var colors = [
        "#FFB6C1",
        "#FFA07A",
        "#FFDAB9",
        "#FFFACD",
        "#E0FFFF",
        "#B0E0E6",
        "#D8BFD8",
        "#DDA0DD",
        "#F0E68C",
        "#90EE90",
        "#98FB98",
        "#AFEEEE",
        "#B0C4DE",
        "#D3D3D3",
        "#FFC0CB",
    ];
    return Array.from({ length: count }).map(function (_, i) { return ({
        id: "item-".concat(i),
        title: "Item ".concat(i),
        subtitle: "This is a detailed description for item ".concat(i),
        height: 100 + Math.floor(Math.sin(i * 0.1) * 50 + 50), // Height variation using sine wave pattern
        color: colors[i % colors.length],
    }); });
};
var RecyclerViewHandlerTest = function () {
    var _a = tslib_1.__read((0, react_1.useState)(generateItems(100)), 2), items = _a[0], setItems = _a[1];
    var _b = tslib_1.__read((0, react_1.useState)(false), 2), horizontal = _b[0], setHorizontal = _b[1];
    var _c = tslib_1.__read((0, react_1.useState)("None"), 2), lastAction = _c[0], setLastAction = _c[1];
    var _d = tslib_1.__read((0, react_1.useState)(false), 2), isRefreshing = _d[0], setIsRefreshing = _d[1];
    // Reference to the FlashList
    var listRef = (0, react_1.useRef)(null);
    // Handle refresh
    var handleRefresh = function () {
        setIsRefreshing(true);
        // Simulate network request
        setTimeout(function () {
            setItems(generateItems(100));
            setIsRefreshing(false);
            setLastAction("Refreshed list");
        }, 1500);
    };
    // Scroll methods
    var scrollToOffset = function (offset, animated) {
        if (animated === void 0) { animated = true; }
        if (listRef.current) {
            listRef.current.scrollToOffset({
                offset: offset,
                animated: animated,
            });
            setLastAction("Scrolled to offset: ".concat(offset, ", animated: ").concat(animated));
        }
    };
    var scrollToIndex = function (index, animated, viewPosition, viewOffset) {
        if (animated === void 0) { animated = true; }
        if (listRef.current) {
            listRef.current.scrollToIndex({
                index: index,
                animated: animated,
                viewPosition: viewPosition,
                viewOffset: viewOffset,
            });
            var actionText = "Scrolled to index: ".concat(index, ", animated: ").concat(animated);
            if (viewPosition !== undefined)
                actionText += ", viewPosition: ".concat(viewPosition);
            if (viewOffset !== undefined)
                actionText += ", viewOffset: ".concat(viewOffset);
            setLastAction(actionText);
        }
    };
    var scrollToItem = function (item, animated, viewPosition, viewOffset) {
        if (animated === void 0) { animated = true; }
        if (listRef.current) {
            listRef.current.scrollToItem({
                item: item,
                animated: animated,
                viewPosition: viewPosition,
                viewOffset: viewOffset,
            });
            var actionText = "Scrolled to item: ".concat(item.title, ", animated: ").concat(animated);
            if (viewPosition !== undefined)
                actionText += ", viewPosition: ".concat(viewPosition);
            if (viewOffset !== undefined)
                actionText += ", viewOffset: ".concat(viewOffset);
            setLastAction(actionText);
        }
    };
    var scrollToEnd = function (animated) {
        if (animated === void 0) { animated = true; }
        if (listRef.current) {
            listRef.current.scrollToEnd({
                animated: animated,
            });
            setLastAction("Scrolled to end, animated: ".concat(animated));
        }
    };
    var flashScrollIndicators = function () {
        if (listRef.current) {
            listRef.current.flashScrollIndicators();
            setLastAction("Flashed scroll indicators");
        }
    };
    // Render item
    var renderItem = (0, react_1.useCallback)(function (_a) {
        var item = _a.item, index = _a.index;
        return (react_1.default.createElement(react_native_1.TouchableOpacity, { style: [
                styles.item,
                {
                    backgroundColor: item.color,
                    height: horizontal ? 150 : item.height,
                    width: horizontal ? item.height : undefined,
                },
            ], onPress: function () { return scrollToItem(item, true, 0); } },
            react_1.default.createElement(react_native_1.Text, { style: styles.itemTitle }, item.title),
            react_1.default.createElement(react_native_1.Text, { style: styles.itemSubtitle }, item.subtitle),
            react_1.default.createElement(react_native_1.Text, { style: styles.itemIndex },
                "Index: ",
                index)));
    }, [horizontal]);
    // Header component
    var ListHeaderComponent = (react_1.default.createElement(react_native_1.View, { style: [styles.header, horizontal ? styles.horizontalHeader : {}] },
        react_1.default.createElement(react_native_1.Text, { style: styles.headerText }, "List Header")));
    // Footer component
    var ListFooterComponent = (react_1.default.createElement(react_native_1.View, { style: [styles.footer, horizontal ? styles.horizontalFooter : {}] },
        react_1.default.createElement(react_native_1.Text, { style: styles.footerText }, "List Footer")));
    // Empty component
    var ListEmptyComponent = (react_1.default.createElement(react_native_1.View, { style: styles.empty },
        react_1.default.createElement(react_native_1.Text, { style: styles.emptyText }, "No items available")));
    // Separator component
    var ItemSeparatorComponent = (0, react_1.useCallback)(function () { return (react_1.default.createElement(react_native_1.View, { style: [styles.separator, horizontal ? styles.horizontalSeparator : {}] })); }, [horizontal]);
    return (react_1.default.createElement(react_native_1.SafeAreaView, { style: styles.container },
        react_1.default.createElement(react_native_1.View, { style: styles.mainContainer },
            react_1.default.createElement(react_native_1.ScrollView, { style: styles.controlPanel },
                react_1.default.createElement(react_native_1.View, { style: styles.lastActionContainer },
                    react_1.default.createElement(react_native_1.Text, { style: styles.lastActionTitle }, "Last Action:"),
                    react_1.default.createElement(react_native_1.Text, { style: styles.lastActionText }, lastAction)),
                react_1.default.createElement(react_native_1.View, { style: styles.controlRow },
                    react_1.default.createElement(react_native_1.TouchableOpacity, { style: styles.button, onPress: function () { return scrollToOffset(500); } },
                        react_1.default.createElement(react_native_1.Text, { style: styles.buttonText }, "Scroll to Offset 500"))),
                react_1.default.createElement(react_native_1.View, { style: styles.controlRow },
                    react_1.default.createElement(react_native_1.TouchableOpacity, { style: styles.button, onPress: function () { return scrollToOffset(1000, false); } },
                        react_1.default.createElement(react_native_1.Text, { style: styles.buttonText }, "Scroll to 1000 (No Animation)"))),
                react_1.default.createElement(react_native_1.View, { style: styles.controlRow },
                    react_1.default.createElement(react_native_1.TouchableOpacity, { style: styles.button, onPress: function () { return scrollToIndex(20); } },
                        react_1.default.createElement(react_native_1.Text, { style: styles.buttonText }, "Scroll to Index 20"))),
                react_1.default.createElement(react_native_1.View, { style: styles.controlRow },
                    react_1.default.createElement(react_native_1.TouchableOpacity, { style: styles.button, onPress: function () { return scrollToIndex(50, true, 0.5); } },
                        react_1.default.createElement(react_native_1.Text, { style: styles.buttonText }, "Scroll to Index 50 (Centered)"))),
                react_1.default.createElement(react_native_1.View, { style: styles.controlRow },
                    react_1.default.createElement(react_native_1.TouchableOpacity, { style: styles.button, onPress: function () { return scrollToIndex(75, true, 0, 50); } },
                        react_1.default.createElement(react_native_1.Text, { style: styles.buttonText }, "Scroll to Index 75 (With Offset 50)"))),
                react_1.default.createElement(react_native_1.View, { style: styles.controlRow },
                    react_1.default.createElement(react_native_1.TouchableOpacity, { style: styles.button, onPress: function () { return scrollToItem(items[10]); } },
                        react_1.default.createElement(react_native_1.Text, { style: styles.buttonText }, "Scroll to Item 10"))),
                react_1.default.createElement(react_native_1.View, { style: styles.controlRow },
                    react_1.default.createElement(react_native_1.TouchableOpacity, { style: styles.button, onPress: function () { return scrollToEnd(); } },
                        react_1.default.createElement(react_native_1.Text, { style: styles.buttonText }, "Scroll to End"))),
                react_1.default.createElement(react_native_1.View, { style: styles.controlRow },
                    react_1.default.createElement(react_native_1.TouchableOpacity, { style: styles.button, onPress: function () { return setItems([]); } },
                        react_1.default.createElement(react_native_1.Text, { style: styles.buttonText }, "Clear Items"))),
                react_1.default.createElement(react_native_1.View, { style: styles.controlRow },
                    react_1.default.createElement(react_native_1.TouchableOpacity, { style: styles.button, onPress: function () { return setItems(generateItems(100)); } },
                        react_1.default.createElement(react_native_1.Text, { style: styles.buttonText }, "Reset Items"))),
                react_1.default.createElement(react_native_1.View, { style: styles.controlRow },
                    react_1.default.createElement(react_native_1.TouchableOpacity, { style: styles.button, onPress: function () { return setHorizontal(!horizontal); } },
                        react_1.default.createElement(react_native_1.Text, { style: styles.buttonText }, horizontal ? "Switch to Vertical" : "Switch to Horizontal"))),
                react_1.default.createElement(react_native_1.View, { style: styles.controlRow },
                    react_1.default.createElement(react_native_1.TouchableOpacity, { style: styles.button, onPress: function () { return flashScrollIndicators(); } },
                        react_1.default.createElement(react_native_1.Text, { style: styles.buttonText }, "Flash Indicators")))),
            react_1.default.createElement(react_native_1.View, { style: styles.listContainer },
                react_1.default.createElement(flash_list_1.FlashList, { testID: "RecyclerView", ref: listRef, key: horizontal ? "horizontal" : "vertical", data: items, renderItem: renderItem, horizontal: horizontal, ListHeaderComponent: ListHeaderComponent, ListFooterComponent: ListFooterComponent, ListEmptyComponent: ListEmptyComponent, ItemSeparatorComponent: ItemSeparatorComponent, onRefresh: handleRefresh, refreshing: isRefreshing, keyExtractor: function (item) { return item.id; }, onEndReached: function () { return setLastAction("End reached"); } })))));
};
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
    },
    mainContainer: {
        flex: 1,
        flexDirection: "row", // Side-by-side layout
        padding: 8,
    },
    listContainer: {
        flex: 2, // Takes 2/3 of the space
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        overflow: "hidden",
    },
    controlPanel: {
        flex: 1, // Takes 1/3 of the space
        backgroundColor: "white",
        borderRadius: 8,
        marginRight: 8,
        padding: 12,
        elevation: 2,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    item: {
        padding: 16,
        borderRadius: 8,
        margin: 4,
        justifyContent: "center",
    },
    itemTitle: {
        fontSize: 18,
        fontWeight: "bold",
    },
    itemSubtitle: {
        fontSize: 14,
        opacity: 0.7,
        marginTop: 4,
    },
    itemIndex: {
        fontSize: 12,
        opacity: 0.5,
        marginTop: 8,
    },
    header: {
        padding: 16,
        backgroundColor: "#4CAF50",
        alignItems: "center",
    },
    horizontalHeader: {
        width: 200,
        height: "100%",
        justifyContent: "center",
    },
    headerText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white",
    },
    footer: {
        padding: 16,
        backgroundColor: "#2196F3",
        alignItems: "center",
    },
    horizontalFooter: {
        width: 200,
        height: "100%",
        justifyContent: "center",
    },
    footerText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white",
    },
    empty: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    emptyText: {
        fontSize: 18,
        color: "#999",
    },
    separator: {
        height: 1,
        backgroundColor: "#e0e0e0",
        marginVertical: 4,
    },
    horizontalSeparator: {
        width: 1,
        height: "100%",
        marginHorizontal: 4,
    },
    controlRow: {
        marginBottom: 8,
    },
    button: {
        backgroundColor: "#3498db",
        padding: 12,
        borderRadius: 6,
        alignItems: "center",
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 14,
    },
    lastActionContainer: {
        marginTop: 16,
        padding: 12,
        backgroundColor: "#f9f9f9",
        borderRadius: 6,
        borderWidth: 1,
        borderColor: "#eee",
    },
    lastActionTitle: {
        fontSize: 14,
        fontWeight: "bold",
        marginBottom: 4,
    },
    lastActionText: {
        fontSize: 14,
    },
});
exports.default = RecyclerViewHandlerTest;
//# sourceMappingURL=RecyclerViewHandlerTest.js.map