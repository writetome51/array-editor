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
var BatchGetterSetter_1 = require("batch-getter-setter/BatchGetterSetter");
var ClosedArrayContainer = /** @class */ (function (_super) {
    __extends(ClosedArrayContainer, _super);
    function ClosedArrayContainer(_array, input) {
        if (input === void 0) { input = []; }
        var _this = _super.call(this) || this;
        _this._array = _array;
        _this._set_data(input);
        return _this;
    }
    // If passing an argument to the constructor isn't possible you can use import() instead.
    ClosedArrayContainer.prototype.import = function (array) {
        this._set_data(array);
        return this;
    };
    ClosedArrayContainer.prototype.empty = function () {
        this._array.data = [];
    };
    ClosedArrayContainer.prototype.export = function () {
        return this._array.data;
    };
    ClosedArrayContainer.prototype._set_data = function (array) {
        this._array.data = array;
    };
    return ClosedArrayContainer;
}(BatchGetterSetter_1.BatchGetterSetter));
exports.ClosedArrayContainer = ClosedArrayContainer;
