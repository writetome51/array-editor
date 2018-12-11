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
var NonMethodChainablePrivateArray = /** @class */ (function (_super) {
    __extends(NonMethodChainablePrivateArray, _super);
    function NonMethodChainablePrivateArray(_array, // must be subclass of it.
    input) {
        if (input === void 0) { input = []; }
        var _this = _super.call(this, _array, input, 
        // provide a function that returns a getter function for all the methods:
        function (method) {
            // Return a getter function:
            return function () {
                // Simply return the method with same name belonging to this._array:
                return _this._array[method];
            };
        }) || this;
        _this._array = _array;
        return _this;
    }
    return NonMethodChainablePrivateArray;
}(PrivateArray_1.PrivateArray));
exports.NonMethodChainablePrivateArray = NonMethodChainablePrivateArray;
