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
var ObjectFactory_1 = require("../../../ObjectFactory/ObjectFactory");
var ClosedArrayContainer_1 = require("./ClosedArrayContainer");
var OpenArrayItemReplacer_1 = require("../../OpenDataContainer/OpenArrayContainer/OpenArrayItemReplacer");
var object_manipulation_1 = require("datatype-handlers/objects/object_manipulation");
var ClosedArrayItemReplacer = /** @class */ (function (_super) {
    __extends(ClosedArrayItemReplacer, _super);
    function ClosedArrayItemReplacer(_array, // injected dependency
    input) {
        if (input === void 0) { input = []; }
        var _this = _super.call(this, _array, input) || this;
        _this._array = _array;
        // Create methods identical to those belonging to this._array:
        var uninheritedPublicMethods = object_manipulation_1.getUninheritedPublicMethods(_this._array);
        // These functions modify the array and return the class instance.
        _this._createGetterAndOrSetterForEach(uninheritedPublicMethods, {
            get_getterFunction: function (property) {
                return function () {
                    // Return a function, turning the property into a method:
                    return function () {
                        var params = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            params[_i] = arguments[_i];
                        }
                        var _a;
                        (_a = _this._array)[property].apply(_a, params);
                        return _this;
                    };
                };
            }
        });
        return _this;
    }
    return ClosedArrayItemReplacer;
}(ClosedArrayContainer_1.ClosedArrayContainer));
exports.ClosedArrayItemReplacer = ClosedArrayItemReplacer;
ObjectFactory_1.ObjectFactory.register({ class: ClosedArrayItemReplacer, dependencies: [OpenArrayItemReplacer_1.OpenArrayItemReplacer] });
