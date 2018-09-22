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
var OpenArrayContent_1 = require("../../OpenDataContainer/OpenArrayContainer/OpenArrayContent");
var ObjectFactory_1 = require("../../../ObjectFactory/ObjectFactory");
// This class has the same properties and methods defined inside OpenArrayContent.
var ClosedArrayContent = /** @class */ (function (_super) {
    __extends(ClosedArrayContent, _super);
    function ClosedArrayContent(_array, // injected dependency
    input) {
        if (input === void 0) { input = []; }
        var _this = _super.call(this, _array, input) || this;
        _this._array = _array;
        // Create properties identical to those belonging to OpenArrayContent:
        _this._createGetterAndOrSetterForEach(['length', 'isEmpty', 'notEmpty'], {
            get_getterFunction: function (property) {
                return function () {
                    return _this._array[property];
                };
            }
        });
        // Create methods identical to those belonging to OpenArrayContent:
        _this._createGetterAndOrSetterForEach(['has', 'hasAll', 'hasAny', 'matches', 'firstIndexOf', 'lastIndexOf',
            'indexesOf', 'allPass', 'anyPass'], {
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
    return ClosedArrayContent;
}(ClosedArrayContainer_1.ClosedArrayContainer));
exports.ClosedArrayContent = ClosedArrayContent;
ObjectFactory_1.ObjectFactory.register({ class: ClosedArrayContent, dependencies: [OpenArrayContent_1.OpenArrayContent] });
