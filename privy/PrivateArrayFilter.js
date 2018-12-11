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
var ObjectFactory_1 = require("@writetome51/object-factory/ObjectFactory");
var PublicArrayFilter_1 = require("@writetome51/public-array-filter/PublicArrayFilter");
var MethodChainablePrivateArray_1 = require("./MethodChainablePrivateArray");
var PrivateArrayFilter = /** @class */ (function (_super) {
    __extends(PrivateArrayFilter, _super);
    function PrivateArrayFilter(_array, // injected dependency
    input) {
        if (input === void 0) { input = []; }
        return _super.call(this, _array, input) || this;
    }
    return PrivateArrayFilter;
}(MethodChainablePrivateArray_1.MethodChainablePrivateArray));
exports.PrivateArrayFilter = PrivateArrayFilter;
ObjectFactory_1.ObjectFactory.register({ class: PrivateArrayFilter, dependencies: [PublicArrayFilter_1.PublicArrayFilter] });
