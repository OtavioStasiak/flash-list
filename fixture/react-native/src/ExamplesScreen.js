"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExamplesScreen = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var react_native_1 = require("react-native");
var native_1 = require("@react-navigation/native");
var Debug_1 = require("./Debug");
var ExamplesScreen = function () {
    var navigate = (0, native_1.useNavigation)().navigate;
    var onDebugButton = function () {
        navigate("Debug");
    };
    var data = [
        { title: "Horizontal List", destination: "HorizontalList" },
        { title: "Carousel", destination: "Carousel" },
        { title: "Grid", destination: "Grid" },
        { title: "Masonry", destination: "Masonry" },
        { title: "Complex Masonry", destination: "ComplexMasonry" },
        {
            title: "Chat",
            destination: "Chat",
        },
        {
            title: "RecyclerView Handler Test",
            destination: "RecyclerViewHandlerTest",
        },
        {
            title: "Contacts",
            destination: "Contacts",
        },
        {
            title: "Contacts SectionList",
            destination: "ContactsSectionList",
        },
        { title: "SectionList", destination: "SectionList" },
        { title: "PaginatedList", destination: "PaginatedList" },
        { title: "Twitter Timeline", destination: "Twitter" },
        {
            title: "Twitter FlatList Timeline",
            destination: "TwitterFlatList",
        },
        {
            title: "Twitter Benchmark",
            destination: "TwitterBenchmark",
        },
        { title: "List", destination: "List" },
        { title: "Reminders", destination: "Reminders" },
        {
            title: "Dynamic Items",
            destination: "DynamicItems",
        },
        {
            title: "Messages",
            destination: "Messages",
        },
        {
            title: "Messages FlatList",
            destination: "MessagesFlatList",
        },
        {
            title: "CellRenderer Examples",
            destination: "CellRendererExamples",
        },
        {
            title: "Header Footer Empty Example",
            destination: "HeaderFooterExample",
        },
        {
            title: "Movie Streaming",
            destination: "MovieList",
        },
        {
            title: "Layout Options",
            destination: "LayoutOptions",
        },
        { title: "Dynamic Column Span", destination: "DynamicColumnSpan" },
        {
            title: "Showcase App",
            destination: "ShowcaseApp",
        },
    ];
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(react_native_1.StatusBar, { barStyle: "dark-content" }),
        react_1.default.createElement(react_native_1.FlatList, { testID: "ExamplesFlatList", keyExtractor: function (item) { return item.destination; }, data: data, removeClippedSubviews: false, renderItem: function (_a) {
                var item = _a.item;
                return (react_1.default.createElement(react_native_1.Pressable, { style: styles.row, onPress: function () {
                        navigate(item.destination);
                    }, testID: item.title },
                    react_1.default.createElement(react_native_1.Text, { style: styles.rowTitle }, item.title)));
            } }),
        react_1.default.createElement(Debug_1.DebugButton, { onPress: onDebugButton })));
};
exports.ExamplesScreen = ExamplesScreen;
var styles = react_native_1.StyleSheet.create({
    row: {
        padding: 16,
        backgroundColor: "#FFF",
        borderBottomWidth: 1,
        borderBottomColor: "#EFEFEF",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    rowTitle: {
        fontSize: 18,
    },
});
//# sourceMappingURL=ExamplesScreen.js.map