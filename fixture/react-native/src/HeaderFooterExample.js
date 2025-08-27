"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeaderFooterExample = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var react_native_1 = require("react-native");
var flash_list_1 = require("@shopify/flash-list");
var SAMPLE_DATA = Array.from({ length: 20 }, function (_, index) { return ({
    id: index.toString(),
    title: "Item ".concat(index + 1),
}); });
var HeaderFooterExample = function () {
    var _a = tslib_1.__read((0, react_1.useState)(false), 2), showEmpty = _a[0], setShowEmpty = _a[1];
    var data = (0, react_1.useMemo)(function () { return (showEmpty ? [] : SAMPLE_DATA); }, [showEmpty]);
    var renderItem = (0, react_1.useCallback)(function (_a) {
        var item = _a.item;
        return (react_1.default.createElement(react_native_1.View, { style: styles.itemContainer },
            react_1.default.createElement(react_native_1.Text, { style: styles.itemText }, item.title)));
    }, []);
    var toggleEmpty = (0, react_1.useCallback)(function () { return setShowEmpty(!showEmpty); }, [showEmpty]);
    var ListHeader = (0, react_1.useCallback)(function () { return (react_1.default.createElement(react_native_1.View, { style: styles.headerContainer },
        react_1.default.createElement(react_native_1.Text, { style: styles.headerText }, "Header Section"),
        react_1.default.createElement(react_native_1.TouchableOpacity, { style: styles.toggleButton, onPress: toggleEmpty },
            react_1.default.createElement(react_native_1.Text, { style: styles.buttonText }, showEmpty ? "Show Items" : "Show Empty")))); }, [showEmpty, toggleEmpty]);
    var ListFooter = (0, react_1.useCallback)(function () { return (react_1.default.createElement(react_native_1.View, { style: styles.footerContainer },
        react_1.default.createElement(react_native_1.Text, { style: styles.footerText }, "Footer Section"))); }, []);
    var ListEmpty = (0, react_1.useCallback)(function () { return (react_1.default.createElement(react_native_1.View, { style: styles.emptyContainer },
        react_1.default.createElement(react_native_1.Text, { style: styles.emptyText }, "No items to display"),
        react_1.default.createElement(react_native_1.Text, { style: styles.emptySubtext }, "Tap the button above to load items"))); }, []);
    var contentContainerStyle = (0, react_1.useMemo)(function () { return ({ flexGrow: 1 }); }, []);
    var handleLoad = (0, react_1.useCallback)(function () {
        console.log("header footer empty example onLoad");
    }, []);
    return (react_1.default.createElement(react_native_1.View, { style: styles.container },
        react_1.default.createElement(flash_list_1.FlashList, { data: data, onLoad: handleLoad, renderItem: renderItem, contentContainerStyle: contentContainerStyle, ListHeaderComponent: ListHeader, ListFooterComponent: ListFooter, ListEmptyComponent: ListEmpty })));
};
exports.HeaderFooterExample = HeaderFooterExample;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
    },
    headerContainer: {
        padding: 16,
        backgroundColor: "white",
        borderBottomWidth: 1,
        borderBottomColor: "#e0e0e0",
        marginBottom: 8,
    },
    headerText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 12,
    },
    toggleButton: {
        backgroundColor: "#007AFF",
        padding: 10,
        borderRadius: 8,
        alignItems: "center",
    },
    buttonText: {
        color: "white",
        fontWeight: "600",
    },
    footerContainer: {
        padding: 16,
        backgroundColor: "white",
        borderTopWidth: 1,
        borderTopColor: "#e0e0e0",
        marginTop: 8,
    },
    footerText: {
        fontSize: 16,
        color: "#666",
        textAlign: "center",
    },
    itemContainer: {
        backgroundColor: "white",
        padding: 16,
        marginHorizontal: 8,
        marginVertical: 4,
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    itemText: {
        fontSize: 16,
        color: "#333",
    },
    emptyContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 32,
    },
    emptyText: {
        fontSize: 18,
        fontWeight: "600",
        color: "#666",
        marginBottom: 8,
    },
    emptySubtext: {
        fontSize: 14,
        color: "#999",
    },
});
//# sourceMappingURL=HeaderFooterExample.js.map