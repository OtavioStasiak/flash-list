"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var native_1 = require("@react-navigation/native");
var stack_1 = require("@react-navigation/stack");
var Reminders_1 = tslib_1.__importDefault(require("./Reminders"));
var List_1 = tslib_1.__importDefault(require("./List"));
var PaginatedList_1 = tslib_1.__importDefault(require("./PaginatedList"));
var twitter_1 = require("./twitter");
var ContactsSectionList_1 = tslib_1.__importDefault(require("./contacts/ContactsSectionList"));
var Contacts_1 = tslib_1.__importDefault(require("./contacts/Contacts"));
var ExamplesScreen_1 = require("./ExamplesScreen");
var Debug_1 = require("./Debug");
var Messages_1 = require("./Messages");
var TwitterBenchmark_1 = tslib_1.__importDefault(require("./twitter/TwitterBenchmark"));
var Masonry_1 = require("./Masonry");
var ComplexMasonry_1 = require("./ComplexMasonry");
var SectionList_1 = require("./SectionList");
var Grid_1 = require("./Grid");
var DynamicColumnSpan_1 = require("./DynamicColumnSpan");
var HorizontalList_1 = tslib_1.__importDefault(require("./HorizontalList"));
var Chat_1 = require("./Chat");
var CellRendererExamples_1 = tslib_1.__importDefault(require("./CellRendererExamples"));
var HeaderFooterExample_1 = require("./HeaderFooterExample");
var DynamicItems_1 = tslib_1.__importDefault(require("./DynamicItems"));
var RecyclerViewHandlerTest_1 = tslib_1.__importDefault(require("./RecyclerViewHandlerTest"));
var MovieList_1 = tslib_1.__importDefault(require("./MovieList"));
var Carousel_1 = tslib_1.__importDefault(require("./Carousel"));
var LayoutOptions_1 = require("./LayoutOptions");
var ShowcaseApp_1 = tslib_1.__importDefault(require("./ShowcaseApp"));
var Stack = (0, stack_1.createStackNavigator)();
var NavigationTree = function () {
    return (react_1.default.createElement(native_1.NavigationContainer, null,
        react_1.default.createElement(Stack.Navigator, { screenOptions: { animation: "none" } },
            react_1.default.createElement(Stack.Group, null,
                react_1.default.createElement(Stack.Screen, { name: "Examples", component: ExamplesScreen_1.ExamplesScreen }),
                react_1.default.createElement(Stack.Screen, { name: "List", component: List_1.default }),
                react_1.default.createElement(Stack.Screen, { name: "Grid", component: Grid_1.Grid }),
                react_1.default.createElement(Stack.Screen, { name: "DynamicColumnSpan", component: DynamicColumnSpan_1.DynamicColumnSpan, options: { title: "Dynamic Column Span" } }),
                react_1.default.createElement(Stack.Screen, { name: "SectionList", component: SectionList_1.SectionList }),
                react_1.default.createElement(Stack.Screen, { name: "PaginatedList", component: PaginatedList_1.default }),
                react_1.default.createElement(Stack.Screen, { name: "Twitter", component: twitter_1.Twitter }),
                react_1.default.createElement(Stack.Screen, { name: "Reminders", component: Reminders_1.default }),
                react_1.default.createElement(Stack.Screen, { name: "TwitterFlatList", component: twitter_1.TwitterFlatList, options: { title: "Twitter" } }),
                react_1.default.createElement(Stack.Screen, { name: "Contacts", component: Contacts_1.default }),
                react_1.default.createElement(Stack.Screen, { name: "ContactsSectionList", component: ContactsSectionList_1.default, options: { title: "Contacts" } }),
                react_1.default.createElement(Stack.Screen, { name: "DynamicItems", component: DynamicItems_1.default }),
                react_1.default.createElement(Stack.Screen, { name: "TweetDetailScreen", component: twitter_1.TweetDetailScreen }),
                react_1.default.createElement(Stack.Screen, { name: "Messages", component: Messages_1.Messages }),
                react_1.default.createElement(Stack.Screen, { name: "MessagesFlatList", component: Messages_1.MessagesFlatList }),
                react_1.default.createElement(Stack.Screen, { name: "TwitterBenchmark", component: TwitterBenchmark_1.default }),
                react_1.default.createElement(Stack.Screen, { name: "Chat", component: Chat_1.Chat }),
                react_1.default.createElement(Stack.Screen, { name: "HeaderFooterExample", component: HeaderFooterExample_1.HeaderFooterExample, options: { title: "Header Footer Empty Example" } }),
                react_1.default.createElement(Stack.Screen, { name: "RecyclerViewHandlerTest", component: RecyclerViewHandlerTest_1.default, options: { title: "RecyclerView Handler Test" } }),
                react_1.default.createElement(Stack.Screen, { name: "MovieList", component: MovieList_1.default, options: { title: "Movie Streaming" } }),
                react_1.default.createElement(Stack.Screen, { name: "Carousel", component: Carousel_1.default, options: { title: "Carousel Example" } }),
                react_1.default.createElement(Stack.Screen, { name: "LayoutOptions", component: LayoutOptions_1.LayoutOptions, options: { title: "Layout Options" } }),
                react_1.default.createElement(Stack.Screen, { name: "ShowcaseApp", component: ShowcaseApp_1.default, options: { title: "Showcase App" } })),
            react_1.default.createElement(Stack.Screen, { name: "Masonry", component: Masonry_1.Masonry }),
            react_1.default.createElement(Stack.Screen, { name: "ComplexMasonry", component: ComplexMasonry_1.ComplexMasonry }),
            react_1.default.createElement(Stack.Screen, { name: "HorizontalList", component: HorizontalList_1.default }),
            react_1.default.createElement(Stack.Screen, { name: "CellRendererExamples", component: CellRendererExamples_1.default, options: { title: "CellRenderer Examples" } }),
            react_1.default.createElement(Stack.Group, { screenOptions: { presentation: "modal" } },
                react_1.default.createElement(Stack.Screen, { name: "Debug", component: Debug_1.DebugScreen })))));
};
exports.default = NavigationTree;
//# sourceMappingURL=NavigationTree.js.map