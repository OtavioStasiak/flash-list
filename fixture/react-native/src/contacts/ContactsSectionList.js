"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var react_native_1 = require("react-native");
var Debug_1 = require("../Debug");
var ContactSectionHeader_1 = tslib_1.__importDefault(require("./ContactSectionHeader"));
var ContactDivider_1 = tslib_1.__importDefault(require("./ContactDivider"));
var ContactCell_1 = tslib_1.__importDefault(require("./ContactCell"));
var contacts_1 = tslib_1.__importDefault(require("./data/contacts"));
var ContactHeader_1 = tslib_1.__importDefault(require("./ContactHeader"));
var ContactsSectionList = function () {
    var debugContext = (0, react_1.useContext)(Debug_1.DebugContext);
    var _a = tslib_1.__read((0, react_1.useState)([]), 2), data = _a[0], setData = _a[1];
    (0, react_1.useEffect)(function () {
        var sectionedContacts = Array.from(contacts_1.default.keys())
            .map(function (key) {
            var _a;
            return {
                title: key,
                data: (_a = contacts_1.default.get(key)) !== null && _a !== void 0 ? _a : [],
            };
        })
            .sort(function (aSection, bSection) {
            return aSection.title.localeCompare(bSection.title);
        });
        setData(sectionedContacts);
    }, []);
    return (react_1.default.createElement(react_native_1.SectionList, { testID: "SectionList", keyExtractor: function (_a) {
            var firstName = _a.firstName, lastName = _a.lastName;
            return firstName + lastName;
        }, renderItem: function (_a) {
            var item = _a.item;
            return react_1.default.createElement(ContactCell_1.default, { contact: item });
        }, renderSectionHeader: function (_a) {
            var title = _a.section.title;
            return (react_1.default.createElement(ContactSectionHeader_1.default, { title: title }));
        }, ItemSeparatorComponent: ContactDivider_1.default, sections: data, ListHeaderComponent: ContactHeader_1.default, initialScrollIndex: debugContext.initialScrollIndex }));
};
exports.default = ContactsSectionList;
//# sourceMappingURL=ContactsSectionList.js.map