"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var flash_list_1 = require("@shopify/flash-list");
var react_native_1 = require("react-native");
var Debug_1 = require("../Debug");
var contacts_1 = tslib_1.__importDefault(require("./data/contacts"));
var ContactCell_1 = tslib_1.__importDefault(require("./ContactCell"));
var ContactSectionHeader_1 = tslib_1.__importDefault(require("./ContactSectionHeader"));
var ContactHeader_1 = tslib_1.__importDefault(require("./ContactHeader"));
var ContactDivider_1 = tslib_1.__importDefault(require("./ContactDivider"));
var Contacts = function () {
    var debugContext = (0, react_1.useContext)(Debug_1.DebugContext);
    var _a = tslib_1.__read((0, react_1.useState)([]), 2), data = _a[0], setData = _a[1];
    (0, react_1.useEffect)(function () {
        var contactsWithTitles = Array.from(contacts_1.default.keys())
            .sort(function (aKey, bKey) { return aKey.localeCompare(bKey); })
            .flatMap(function (key) {
            var _a;
            return tslib_1.__spreadArray([key], tslib_1.__read(((_a = contacts_1.default.get(key)) !== null && _a !== void 0 ? _a : [])), false);
        });
        setData(contactsWithTitles);
    }, []);
    var stickyHeaderIndices = data
        .map(function (item, index) {
        if (typeof item === "string") {
            return index;
        }
        else {
            return null;
        }
    })
        .filter(function (item) { return item !== null; });
    var renderScrollComponent = (0, react_1.useMemo)(function () {
        // eslint-disable-next-line react/display-name
        return function (props) {
            return react_1.default.createElement(react_native_1.ScrollView, tslib_1.__assign({}, props));
        };
    }, []);
    return (react_1.default.createElement(flash_list_1.FlashList, { testID: "FlashList", data: data, renderItem: function (_a) {
            var item = _a.item;
            if (typeof item === "string") {
                return react_1.default.createElement(ContactSectionHeader_1.default, { title: item });
            }
            else {
                return react_1.default.createElement(ContactCell_1.default, { contact: item });
            }
        }, getItemType: function (item) {
            return typeof item === "string" ? "sectionHeader" : "row";
        }, ItemSeparatorComponent: ContactDivider_1.default, stickyHeaderIndices: stickyHeaderIndices, ListHeaderComponent: ContactHeader_1.default, initialScrollIndex: debugContext.initialScrollIndex, renderScrollComponent: renderScrollComponent }));
};
exports.default = Contacts;
//# sourceMappingURL=Contacts.js.map