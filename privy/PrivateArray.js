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
var PrivateArrayContainer_1 = require("./PrivateArrayContainer");
var getUninheritedPublicMethods_1 = require("intuitive-object-handlers/get/getUninheritedPublicMethods");
var getUninheritiedPublicProperties_1 = require("intuitive-object-handlers/get/getUninheritiedPublicProperties");
// PrivateArray is an abstract class that provides most of the functionality for subclasses whose names begin 
// with 'PrivateArray'.  It gathers most of its logic from the passed PublicArrayContainer instance (this._array) .
// PrivateArray automatically generates properties and methods by using the properties and methods of this._array .
// First, it creates an array of the names of all the properties belonging to this._array .  Then it creates a getter 
// function for each one.  Each getter function simply returns the value of the corresponding PublicArrayContainer 
// property.  
// Then PrivateArray creates an array of the names of all methods belonging to this._array.  Then it creates a 
// getter function for each one.  What happens in that getter function is decided by a subclass.  In the constructor 
// below, the parameter get_getterFunctionForMethods must be a function that returns a getter function.  That 
// getter function, in turn, must return a function, which will be the value of the method.  That function could simply 
// be the corresponding PublicArrayContainer method, or it could be a function that calls the corresponding 
// PublicArrayContainer method somewhere inside it.
var PrivateArray = /** @class */ (function (_super) {
    __extends(PrivateArray, _super);
    function PrivateArray(_array, // must be subclass of it.
    input, get_getterFunctionForMethods // must return getter function
    ) {
        if (input === void 0) { input = []; }
        var _this = _super.call(this, _array, input) || this;
        _this._array = _array;
        // Create properties identical to those belonging to this._array:
        var uninheritedPublicProperties = getUninheritiedPublicProperties_1.getUninheritedPublicProperties(_this._array);
        _this._createGetterAndOrSetterForEach(uninheritedPublicProperties, {
            get_getterFunction: function (property) {
                // Returns a getter function that returns the value of the corresponding 
                // PublicArrayContainer property:
                return function () {
                    return _this._array[property];
                };
            }
        });
        // Create methods with names identical to those belonging to this._array:
        var uninheritedPublicMethods = getUninheritedPublicMethods_1.getUninheritedPublicMethods(_this._array);
        _this._createGetterAndOrSetterForEach(uninheritedPublicMethods, {
            get_getterFunction: get_getterFunctionForMethods
        });
        return _this;
    }
    return PrivateArray;
}(PrivateArrayContainer_1.PrivateArrayContainer));
exports.PrivateArray = PrivateArray;
