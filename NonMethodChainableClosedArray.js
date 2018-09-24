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
var ClosedArray_1 = require("./ClosedArray");
var NonMethodChainableClosedArray = /** @class */ (function (_super) {
    __extends(NonMethodChainableClosedArray, _super);
    function NonMethodChainableClosedArray(_array, // must be subclass of it.
    input) {
        if (input === void 0) { input = []; }
        var _this = _super.call(this, _array, input, function (property) {
            return function () {
                // Return a function, turning the property into a method:
                return function () {
                    var params = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        params[_i] = arguments[_i];
                    }
                    var _a;
                    return (_a = _this._array)[property].apply(_a, params);
                };
            };
        }) || this;
        _this._array = _array;
        return _this;
    }
    return NonMethodChainableClosedArray;
}(ClosedArray_1.ClosedArray));
exports.NonMethodChainableClosedArray = NonMethodChainableClosedArray;
