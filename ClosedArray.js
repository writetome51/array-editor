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
var ClosedArrayContainer_1 = require("./ClosedArrayContainer");
var getUninheritedPublicMethods_1 = require("intuitive-object-handlers/get/getUninheritedPublicMethods");
var getUninheritiedPublicProperties_1 = require("intuitive-object-handlers/get/getUninheritiedPublicProperties");
var ClosedArray = /** @class */ (function (_super) {
    __extends(ClosedArray, _super);
    function ClosedArray(_array, // must be subclass of it.
    input, get_getterFunctionForMethods // must return getter function
    ) {
        if (input === void 0) { input = []; }
        var _this = _super.call(this, _array, input) || this;
        _this._array = _array;
        // Create properties identical to those belonging to this._array:
        var uninheritedPublicProperties = getUninheritiedPublicProperties_1.getUninheritedPublicProperties(_this._array);
        _this._createGetterAndOrSetterForEach(uninheritedPublicProperties, {
            get_getterFunction: function (property) {
                return function () {
                    return _this._array[property];
                };
            }
        });
        // Create methods identical to those belonging to this._array:
        var uninheritedPublicMethods = getUninheritedPublicMethods_1.getUninheritedPublicMethods(_this._array);
        _this._createGetterAndOrSetterForEach(uninheritedPublicMethods, {
            get_getterFunction: get_getterFunctionForMethods
        });
        return _this;
    }
    return ClosedArray;
}(ClosedArrayContainer_1.ClosedArrayContainer));
exports.ClosedArray = ClosedArray;
