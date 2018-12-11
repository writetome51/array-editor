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
var PublicArraySorter_1 = require("@writetome51/public-array/PublicArraySorter");
var ObjectFactory_1 = require("@writetome51/object-factory/ObjectFactory");
var MethodChainablePrivateArray_1 = require("./MethodChainablePrivateArray");
var PrivateArraySorter = /** @class */ (function (_super) {
    __extends(PrivateArraySorter, _super);
    function PrivateArraySorter(_array, // injected dependency
    input) {
        if (input === void 0) { input = []; }
        var _this = _super.call(this, _array, input) || this;
        _this._array = _array;
        return _this;
    }
    return PrivateArraySorter;
}(MethodChainablePrivateArray_1.MethodChainablePrivateArray));
exports.PrivateArraySorter = PrivateArraySorter;
ObjectFactory_1.ObjectFactory.register({ class: PrivateArraySorter, dependencies: [PublicArraySorter_1.PublicArraySorter] });
