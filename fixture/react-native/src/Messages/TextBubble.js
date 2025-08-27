"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var react_native_1 = require("react-native");
var Avatar_1 = tslib_1.__importDefault(require("./Avatar"));
var TextBubble = function (_a) {
    var text = _a.text, mine = _a.mine, avatar = _a.avatar, name = _a.name;
    return (react_1.default.createElement(react_native_1.View, { style: mine ? {} : styles.otherBubbleWrapper },
        react_1.default.createElement(Avatar_1.default, { avatar: mine ? undefined : avatar }),
        react_1.default.createElement(react_native_1.View, { style: mine ? styles.mineInfo : styles.otherInfo },
            react_1.default.createElement(react_native_1.Text, { style: mine ? styles.none : styles.name },
                " ",
                name,
                " "),
            react_1.default.createElement(react_native_1.Text, { style: mine ? styles.mineBubble : styles.otherBubble }, text)),
        react_1.default.createElement(react_native_1.Image, { style: mine ? styles.mineArrow : styles.otherArrow, source: mine ? require("assets/arrow.png") : require("assets/arrowOther.png") })));
};
var styles = react_native_1.StyleSheet.create({
    otherBubbleWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-end",
    },
    mineInfo: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
    },
    otherInfo: {
        display: "flex",
    },
    name: {
        color: "#666",
        fontWeight: "400",
        fontSize: 13,
        marginLeft: 8,
        marginBottom: 0,
    },
    none: {
        display: "none",
        width: 0,
    },
    mineBubble: {
        backgroundColor: "#077FFF",
        color: "#FFF",
        borderRadius: 16,
        borderColor: "#fff",
        margin: 8,
        padding: 12,
        overflow: "hidden",
        marginLeft: 60,
        marginRight: 15,
    },
    otherBubble: {
        marginRight: 60,
        backgroundColor: "#E9E9EA",
        color: "#000",
        borderRadius: 16,
        borderColor: "#fff",
        margin: 8,
        marginTop: 4,
        padding: 12,
        overflow: "hidden",
    },
    mineArrow: {
        position: "absolute",
        right: 9,
        bottom: 7,
        width: 21,
        height: 16,
    },
    otherArrow: {
        position: "absolute",
        left: 44,
        bottom: 7,
        width: 21,
        height: 16,
    },
});
exports.default = TextBubble;
//# sourceMappingURL=TextBubble.js.map