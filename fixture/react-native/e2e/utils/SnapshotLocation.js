"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reference = exports.saveReference = exports.saveDiff = exports.wipeArtifactsLocation = exports.ensureArtifactsLocation = void 0;
var tslib_1 = require("tslib");
var path = tslib_1.__importStar(require("path"));
var fs = tslib_1.__importStar(require("fs"));
var detox_1 = tslib_1.__importDefault(require("detox"));
var pngjs_1 = require("pngjs");
var ROOT_PATH = path.resolve(__dirname, "..");
var artifactsLocation = function (testCaseName) {
    var platform = detox_1.default.device.getPlatform();
    var location = path.resolve(ROOT_PATH, "../e2e/artifacts/".concat(platform), testCaseName);
    return location;
};
var ensureArtifactsLocation = function (name) {
    var location = artifactsLocation(name);
    if (!fs.existsSync(location)) {
        fs.mkdirSync(location, { recursive: true });
    }
    return location;
};
exports.ensureArtifactsLocation = ensureArtifactsLocation;
var wipeArtifactsLocation = function (name) {
    var location = artifactsLocation(name);
    if (fs.existsSync(location)) {
        fs.rmdirSync(location, { recursive: true });
    }
};
exports.wipeArtifactsLocation = wipeArtifactsLocation;
var saveDiff = function (diff, testName) {
    var diffsLocation = (0, exports.ensureArtifactsLocation)("diff");
    var diffPath = path.resolve(diffsLocation, testName);
    fs.writeFileSync(diffPath, pngjs_1.PNG.sync.write(diff));
    return diffPath;
};
exports.saveDiff = saveDiff;
var saveReference = function (referencePath, testName) {
    var testArtifactsLocation = (0, exports.ensureArtifactsLocation)(testName);
    var referenceName = path.resolve(testArtifactsLocation, "".concat(testName, ".png"));
    fs.renameSync(referencePath, referenceName);
    console.log("Reference screenshot for test name \"".concat(testName, "\" was created"));
};
exports.saveReference = saveReference;
var reference = function (testName) {
    var testArtifactsLocation = (0, exports.ensureArtifactsLocation)(testName);
    var referenceName = path.resolve(testArtifactsLocation, "".concat(testName, ".png"));
    return fs.existsSync(referenceName) ? referenceName : null;
};
exports.reference = reference;
//# sourceMappingURL=SnapshotLocation.js.map