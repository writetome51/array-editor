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
var ObjectFactory_1 = require("@writetome51/object-factory/ObjectFactory");
var PrivateArrayContent_1 = require("./PrivateArrayContent");
var PrivateArrayGetter_1 = require("./PrivateArrayGetter");
var PrivateArrayContainer_1 = require("./PrivateArrayContainer");
var PrivateArrayGetterConverter_1 = require("./PrivateArrayGetterConverter");
var PrivateArrayGetterRemover_1 = require("./PrivateArrayGetterRemover");
/**********
This class has these properties:
    this.content, this.get, this.getConverted, this.getAndRemove .

 They're named as such so they act as prefixes to their method names/properties, i.e,
 this.content.length, this.get.adjacentItems(), this.getConverted.toOne(),
 this.getAndRemove.item(), and so forth.
 ***********/
var PrivateArrayContentGetterConverterRemover = /** @class */ (function (_super) {
    __extends(PrivateArrayContentGetterConverterRemover, _super);
    // public content: PrivateArrayContent;
    // public get: PrivateArrayGetter;
    // public getConverted: PrivateArrayGetterConverter;
    // public getAndRemove: PrivateArrayGetterRemover;
    function PrivateArrayContentGetterConverterRemover(
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
    return PrivateArrayContentGetterConverterRemover;
}(PrivateArrayContainer_1.PrivateArrayContainer));
exports.PrivateArrayContentGetterConverterRemover = PrivateArrayContentGetterConverterRemover;
ObjectFactory_1.ObjectFactory.register({
    class: PrivateArrayContentGetterConverterRemover,
    dependencies: [
        PrivateArrayContent_1.PrivateArrayContent, PrivateArrayGetter_1.PrivateArrayGetter, PrivateArrayGetterConverter_1.PrivateArrayGetterConverter,
        PrivateArrayGetterRemover_1.PrivateArrayGetterRemover
    ]
});
