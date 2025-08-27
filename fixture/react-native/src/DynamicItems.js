"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var react_native_1 = require("react-native");
var flash_list_1 = require("@shopify/flash-list");
var id = 0;
var ItemRenderer = function (_a) {
    var item = _a.item;
    var _b = tslib_1.__read((0, react_1.useState)(item.id), 1), viewId = _b[0];
    // log mount and unmount
    (0, react_1.useEffect)(function () {
        console.log("ItemRenderer mounted");
        return function () {
            console.log("ItemRenderer unmounted");
        };
    }, []);
    return (react_1.default.createElement(react_native_1.View, { style: styles.itemContainer },
        react_1.default.createElement(react_native_1.Text, { style: styles.text },
            "Index: ",
            item.index),
        react_1.default.createElement(react_native_1.Text, { style: styles.text },
            "Data ID: ",
            item.id),
        react_1.default.createElement(react_native_1.Text, { style: styles.text },
            "View ID: ",
            viewId)));
};
var generateItems = function (size) {
    return Array.from({ length: size }, function (_, index) { return ({
        id: "item-".concat(id++),
        index: index,
    }); });
};
var DynamicItems = function () {
    (0, react_1.useEffect)(function () {
        return function () {
            id = 0;
        };
    }, []);
    var _a = tslib_1.__read((0, react_1.useState)(function () { return generateItems(20); }), 2), items = _a[0], setItems = _a[1];
    var addItems = function () {
        setItems(function (prevItems) { return tslib_1.__spreadArray(tslib_1.__spreadArray([], tslib_1.__read(prevItems), false), tslib_1.__read(generateItems(5).map(function (item, idx) { return (tslib_1.__assign(tslib_1.__assign({}, item), { index: prevItems.length + idx })); })), false); });
    };
    var removeItems = function () {
        setItems(function (prevItems) {
            return prevItems.length >= 5 ? prevItems.slice(0, -5) : prevItems;
        });
    };
    var renderItem = (0, react_1.useCallback)(function (_a) {
        var item = _a.item;
        return react_1.default.createElement(ItemRenderer, { item: item });
    }, []);
    var keyExtractor = (0, react_1.useCallback)(function (item) { return item.id; }, []);
    var ListEmptyComponent = (0, react_1.useCallback)(function () { return react_1.default.createElement(react_native_1.Text, null, "No items"); }, []);
    return (react_1.default.createElement(react_native_1.View, { style: styles.container },
        react_1.default.createElement(react_native_1.View, { style: styles.buttonContainer },
            react_1.default.createElement(react_native_1.Pressable, { style: styles.button, onPress: removeItems },
                react_1.default.createElement(react_native_1.Text, { style: styles.buttonText }, "Remove 5 Items")),
            react_1.default.createElement(react_native_1.Pressable, { style: styles.button, onPress: addItems },
                react_1.default.createElement(react_native_1.Text, { style: styles.buttonText }, "Add 5 Items"))),
        react_1.default.createElement(flash_list_1.FlashList, { data: items, renderItem: renderItem, keyExtractor: keyExtractor, ListEmptyComponent: ListEmptyComponent })));
};
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10,
        backgroundColor: "#f0f0f0",
    },
    button: {
        backgroundColor: "#2196F3",
        padding: 10,
        borderRadius: 5,
        minWidth: 120,
        alignItems: "center",
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
    },
    itemContainer: {
        backgroundColor: "#e1e1e1",
        padding: 16,
        margin: 8,
        borderRadius: 8,
        elevation: 2,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    text: {
        fontSize: 16,
        marginVertical: 2,
    },
});
exports.default = DynamicItems;
//# sourceMappingURL=DynamicItems.js.map