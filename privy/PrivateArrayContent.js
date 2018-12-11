"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var public_array_content_1 = require("@writetome51/public-array-content");
var NonMethodChainablePrivateArray_1 = require("./NonMethodChainablePrivateArray");
// This class has the same properties and methods defined inside PublicArrayContent.
var PrivateArrayContent = /** @class */ (function (_super) {
    __extends(PrivateArrayContent, _super);
    function PrivateArrayContent(_array, // injected dependency
    input) {
        if (input === void 0) { input = []; }
        var _this = _super.call(this, _array, input) || this;
        _this._array = _array;
        return _this;
    }
    return PrivateArrayContent;
}(NonMethodChainablePrivateArray_1.NonMethodChainablePrivateArray));
exports.PrivateArrayContent = PrivateArrayContent;
ObjectFactory.register({ class: PrivateArrayContent, dependencies: [public_array_content_1.PublicArrayContent] });
