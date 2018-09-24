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
var OpenArrayItemGetter_1 = require("@writetome51/open-array/OpenArrayItemGetter");
var ObjectFactory_1 = require("@writetome51/object-factory/ObjectFactory");
var NonMethodChainableClosedArray_1 = require("./NonMethodChainableClosedArray");
var ClosedArrayItemGetter = /** @class */ (function (_super) {
    __extends(ClosedArrayItemGetter, _super);
    function ClosedArrayItemGetter(_array, // injected dependency
    input) {
        if (input === void 0) { input = []; }
        var _this = _super.call(this, _array, input) || this;
        _this._array = _array;
        return _this;
    }
    return ClosedArrayItemGetter;
}(NonMethodChainableClosedArray_1.NonMethodChainableClosedArray));
exports.ClosedArrayItemGetter = ClosedArrayItemGetter;
ObjectFactory_1.ObjectFactory.register({ class: ClosedArrayItemGetter, dependencies: [OpenArrayItemGetter_1.OpenArrayItemGetter] });
