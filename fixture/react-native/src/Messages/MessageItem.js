"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var ImageMessage_1 = tslib_1.__importDefault(require("./ImageMessage"));
var TextBubble_1 = tslib_1.__importDefault(require("./TextBubble"));
var userName_1 = tslib_1.__importDefault(require("./userName"));
var MessageType_1 = tslib_1.__importDefault(require("./models/MessageType"));
var MessageItem = function (_a) {
    var item = _a.item;
    var mine = item.sender === userName_1.default;
    switch (item.type) {
        case MessageType_1.default.Text:
            return (react_1.default.createElement(TextBubble_1.default, { text: item.text, mine: mine, avatar: item.avatar, name: item.sender }));
        case MessageType_1.default.Image:
            return react_1.default.createElement(ImageMessage_1.default, { image: item.image, mine: mine });
    }
};
exports.default = MessageItem;
//# sourceMappingURL=MessageItem.js.map