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
var ClosedArraySorter_1 = require("./ClosedArraySorter");
var ClosedArrayItemInserter_1 = require("./ClosedArrayItemInserter");
var ClosedArrayItemReplacer_1 = require("./ClosedArrayItemReplacer");
var ClosedArrayFilter_1 = require("./ClosedArrayFilter");
var ClosedArrayContentGetterConverterRemover_1 = require("./ClosedArrayContentGetterConverterRemover");
var ClosedArrayItemGetter_1 = require("./ClosedArrayItemGetter");
var ClosedArrayContent_1 = require("./ClosedArrayContent");
var ClosedArrayItemRemover_1 = require("./ClosedArrayItemRemover");
var ClosedArrayGetterConverter_1 = require("./ClosedArrayGetterConverter");
var ClosedArrayAppender_1 = require("./ClosedArrayAppender");
var ClosedArrayPrepender_1 = require("./ClosedArrayPrepender");
var ClosedArrayItemGetterRemover_1 = require("./ClosedArrayItemGetterRemover");
var MethodGenerator_1 = require("../../../MethodGenerator");
var ObjectFactory_1 = require("../../../ObjectFactory/ObjectFactory");
/***********
 Behold... ArrayEditor.
 ArrayEditor combines all the other ClosedArrayContainer classes into one powerful,
 versatile class.  This class contains methods that are defined during runtime using
 MethodGenerator.  So when you're calling these methods, a linting tool like TSLint
 will tell you these methods don't exist.  In this case, ignore TSLint.

 Every method generated for this class returns the class instance.  So they are all
 chainable, i.e, you can write something like:

 this.remove_allOf('word').insert_multiple(['jelly','donut'], 2)
 .append_single('frosting').export();

 ************/
var ArrayEditor = /** @class */ (function (_super) {
    __extends(ArrayEditor, _super);
    function ArrayEditor(
    // begin injected dependencies...
    content, // this.content
    get, // this.get
    getConverted, // this.getConverted
    getAndRemove, // this.getAndRemove
    __remove, __replace, __insert, __sort, __filter, __append, __prepend, methodGenerator, 
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
        _this.__append = __append;
        _this.__prepend = __prepend;
        // These properties are intended to be private, hence the underscores. You're only
        // intended to access the methods generated for them.
        _this._propertiesToGenerateMethodsFor = [
            '_remove', '_replace', '_insert', '_sort', '_filter', '_append', '_prepend'
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
    // The method called inside each method created by methodGenerator:
    ArrayEditor.prototype._doAction_updateData_and_returnThis = function (obj, action, actionArgs) {
        var _this = this;
        return this.runMethod_and_returnThis(obj, action, actionArgs, function () {
            _this._array.data = obj.export();
            obj.empty();
        });
    };
    return ArrayEditor;
}(ClosedArrayContentGetterConverterRemover_1.ClosedArrayContentGetterConverterRemover));
exports.ArrayEditor = ArrayEditor;
ObjectFactory_1.ObjectFactory.register({
    class: ArrayEditor,
    dependencies: [
        ClosedArrayContent_1.ClosedArrayContent, ClosedArrayItemGetter_1.ClosedArrayItemGetter, ClosedArrayGetterConverter_1.ClosedArrayGetterConverter,
        ClosedArrayItemGetterRemover_1.ClosedArrayItemGetterRemover, ClosedArrayItemRemover_1.ClosedArrayItemRemover, ClosedArrayItemReplacer_1.ClosedArrayItemReplacer,
        ClosedArrayItemInserter_1.ClosedArrayItemInserter, ClosedArraySorter_1.ClosedArraySorter, ClosedArrayFilter_1.ClosedArrayFilter,
        ClosedArrayAppender_1.ClosedArrayAppender, ClosedArrayPrepender_1.ClosedArrayPrepender, MethodGenerator_1.MethodGenerator
    ]
});
