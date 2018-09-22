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
var OpenArrayGetterConverter_1 = require("../../OpenDataContainer/OpenArrayContainer/OpenArrayGetterConverter");
var ObjectFactory_1 = require("../../../ObjectFactory/ObjectFactory");
var object_manipulation_1 = require("datatype-handlers/objects/object_manipulation");
var ClosedArrayGetterConverter = /** @class */ (function (_super) {
    __extends(ClosedArrayGetterConverter, _super);
    function ClosedArrayGetterConverter(_array, // injected dependency
    array) {
        if (array === void 0) { array = []; }
        var _this = _super.call(this, _array, array) || this;
        _this._array = _array;
        // Create methods identical to those belonging to this._array:
        var uninheritedPublicMethods = object_manipulation_1.getUninheritedPublicMethods(_this._array);
        // Create methods identical to those belonging to OpenArrayGetterConverter:
        _this._createGetterAndOrSetterForEach(uninheritedPublicMethods, {
            get_getterFunction: function (property) {
                return function () {
                    return function () {
                        var params = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            params[_i] = arguments[_i];
                        }
                        var _a;
                        return (_a = _this._array)[property].apply(_a, params);
                    };
                };
            }
        });
        return _this;
    }
    return ClosedArrayGetterConverter;
}(ClosedArrayContainer_1.ClosedArrayContainer));
exports.ClosedArrayGetterConverter = ClosedArrayGetterConverter;
ObjectFactory_1.ObjectFactory.register({ class: ClosedArrayGetterConverter, dependencies: [OpenArrayGetterConverter_1.OpenArrayGetterConverter] });
