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
var PrivateArraySorter_1 = require("./privy/PrivateArraySorter");
var PrivateArrayInserter_1 = require("./privy/PrivateArrayInserter");
var PrivateArrayReplacer_1 = require("./privy/PrivateArrayReplacer");
var PrivateArrayFilter_1 = require("./privy/PrivateArrayFilter");
var PrivateArrayContentGetterConverterRemover_1 = require("./privy/PrivateArrayContentGetterConverterRemover");
var PrivateArrayGetter_1 = require("./privy/PrivateArrayGetter");
var PrivateArrayContent_1 = require("./privy/PrivateArrayContent");
var PrivateArrayRemover_1 = require("./privy/PrivateArrayRemover");
var PrivateArrayGetterConverter_1 = require("./privy/PrivateArrayGetterConverter");
var PrivateArrayGetterRemover_1 = require("./privy/PrivateArrayGetterRemover");
var MethodGenerator_1 = require("method-generator/MethodGenerator");
var ObjectFactory_1 = require("@writetome51/object-factory/ObjectFactory");
/***********
 Behold... ArrayEditor.
 ArrayEditor combines all the other PrivateArrayContainer classes into one powerful,
 versatile class.  This class contains methods that are defined during runtime using
 MethodGenerator.  So when you're calling these methods, a linting tool like TSLint
 will tell you these methods don't exist.  In this case, ignore TSLint.

 Every method generated for this class returns the class instance.  So they are all
 chainable, i.e, you can write something like:

 this.remove_allOf('nuts').insert_at(2, ['jelly', 'donut']).append(['frosting']).export();

 ************/
var ArrayEditor = /** @class */ (function (_super) {
    __extends(ArrayEditor, _super);
    function ArrayEditor(
    // begin injected dependencies...
    content, // this.content
    get, // this.get
    getConverted, // this.getConverted
    getAndRemove, // this.getAndRemove
    __remove, __replace, __insert, __sort, __filter, methodGenerator, 
    // ... end injected dependencies
    input) {
        if (input === void 0) { 
        // ... end injected dependencies
        input = []; }
        var _this = _super.call(this, content, get, getConverted, getAndRemove, input) || this;
        _this.__remove = __remove;
        _this.__replace = __replace;
        _this.__insert = __insert;
        _this.__sort = __sort;
        _this.__filter = __filter;
        // These properties are intended to be private, hence the underscores. You're only
        // intended to access the methods generated for them.
        _this._propertiesToGenerateMethodsFor = [
            '_remove', '_replace', '_insert', '_sort', '_filter'
        ];
        // create the properties:
        _this._createGetterAndOrSetterForEach(_this._propertiesToGenerateMethodsFor, {
            get_getterFunction: function (property) {
                return function () {
                    return _this["_" + property].import(_this._array.data);
                };
            }
        });
        methodGenerator.targetInstance = _this;
        methodGenerator.nameofFunctionToCallInEachNewMethod = '_doAction_updateData_and_returnThis';
        methodGenerator.generatePublicMethodsFor(_this._propertiesToGenerateMethodsFor);
        return _this;
    }
    Object.defineProperty(ArrayEditor.prototype, "append", {
        get: function () { },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArrayEditor.prototype, "prepend", {
        get: function () { },
        enumerable: true,
        configurable: true
    });
    // The method called inside each method created by methodGenerator:
    ArrayEditor.prototype._doAction_updateData_and_returnThis = function (obj, action, actionArgs) {
        var _this = this;
        return this.runMethod_and_returnThis(obj, action, actionArgs, function () {
            _this._array.data = obj.export();
        });
    };
    return ArrayEditor;
}(PrivateArrayContentGetterConverterRemover_1.PrivateArrayContentGetterConverterRemover));
exports.ArrayEditor = ArrayEditor;
ObjectFactory_1.ObjectFactory.register({
    class: ArrayEditor,
    dependencies: [
        PrivateArrayContent_1.PrivateArrayContent, PrivateArrayGetter_1.PrivateArrayGetter, PrivateArrayGetterConverter_1.PrivateArrayGetterConverter,
        PrivateArrayGetterRemover_1.PrivateArrayGetterRemover, PrivateArrayRemover_1.PrivateArrayRemover, PrivateArrayReplacer_1.PrivateArrayReplacer,
        PrivateArrayInserter_1.PrivateArrayInserter, PrivateArraySorter_1.PrivateArraySorter, PrivateArrayFilter_1.PrivateArrayFilter, MethodGenerator_1.MethodGenerator
    ]
});
