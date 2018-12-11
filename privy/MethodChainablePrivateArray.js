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
var PrivateArray_1 = require("./PrivateArray");
var MethodChainablePrivateArray = /** @class */ (function (_super) {
    __extends(MethodChainablePrivateArray, _super);
    function MethodChainablePrivateArray(_array, // must be subclass of it.
    input) {
        if (input === void 0) { input = []; }
        var _this = _super.call(this, _array, input, 
        // provide a function that returns a getter function for all the methods:
        function (method) {
            // return a getter function:
            return function () {
                // Return a function that simply calls the method with same name belonging to this._array,
                // and then returns this instance, making it chainable:
                return function () {
                    var params = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        params[_i] = arguments[_i];
                    }
                    var _a;
                    (_a = _this._array)[method].apply(_a, params);
                    return _this;
                };
            };
        }) || this;
        _this._array = _array;
        return _this;
    }
    return MethodChainablePrivateArray;
}(PrivateArray_1.PrivateArray));
exports.MethodChainablePrivateArray = MethodChainablePrivateArray;
