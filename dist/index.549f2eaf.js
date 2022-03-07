"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.limitLength = limitLength;
exports.makeUppercase = makeUppercase;
exports.replaceSpaces = replaceSpaces;
function makeUppercase(str) {
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
    return str.toUpperCase();
}
function replaceSpaces(str) {
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
    return str.replace(/\s/g, '_');
}
function limitLength(len, str) {
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr
    return str.substr(0, len);
}

//# sourceMappingURL=index.549f2eaf.js.map
