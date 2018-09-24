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
var ClosedArrayContent_1 = require("./ClosedArrayContent");
var ClosedArrayItemGetter_1 = require("./ClosedArrayItemGetter");
var ClosedArrayContainer_1 = require("./ClosedArrayContainer");
var ClosedArrayGetterConverter_1 = require("./ClosedArrayGetterConverter");
var ObjectFactory_1 = require("@writetome51/object-factory/ObjectFactory");
var ClosedArrayItemGetterRemover_1 = require("./ClosedArrayItemGetterRemover");
/**********
This class has these properties:
    this.content, this.get, this.getConverted, this.getAndRemove .

 They're named as such so they act as prefixes to their method names/properties, i.e,
 this.content.length, this.get.adjacentItems(), this.getConverted.toOne(),
 this.getAndRemove.item(), and so forth.
 ***********/
var ClosedArrayContentGetterConverterRemover = /** @class */ (function (_super) {
    __extends(ClosedArrayContentGetterConverterRemover, _super);
    // public content: ClosedArrayContent;
    // public get: ClosedArrayItemGetter;
    // public getConverted: ClosedArrayGetterConverter;
    // public getAndRemove: ClosedArrayItemGetterRemover;
    function ClosedArrayContentGetterConverterRemover(
    // begin injected dependencies...
    _content, _get, _getConverted, _getAndRemove, 
    //...end injected dependencies
    input) {
        if (input === void 0) { 
        //...end injected dependencies
        input = []; }
        var _this = _super.call(this, { data: [] }, input) || this;
        _this._content = _content;
        _this._get = _get;
        _this._getConverted = _getConverted;
        _this._getAndRemove = _getAndRemove;
        // create the public properties:
        _this._createGetterAndOrSetterForEach(['content', 'get', 'getConverted', 'getAndRemove'], {
            get_getterFunction: function (property) {
                return function () {
                    return _this["_" + property].import(_this._array.data);
                };
            }
        });
        return _this;
    }
    return ClosedArrayContentGetterConverterRemover;
}(ClosedArrayContainer_1.ClosedArrayContainer));
exports.ClosedArrayContentGetterConverterRemover = ClosedArrayContentGetterConverterRemover;
ObjectFactory_1.ObjectFactory.register({
    class: ClosedArrayContentGetterConverterRemover,
    dependencies: [
        ClosedArrayContent_1.ClosedArrayContent, ClosedArrayItemGetter_1.ClosedArrayItemGetter, ClosedArrayGetterConverter_1.ClosedArrayGetterConverter,
        ClosedArrayItemGetterRemover_1.ClosedArrayItemGetterRemover
    ]
});
