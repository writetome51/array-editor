"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ObjectFactory_1 = require("@writetome51/object-factory/ObjectFactory");
var ClosedArrayFilter_1 = require("../ClosedArrayFilter");
var filter = ObjectFactory_1.ObjectFactory.getInstance(ClosedArrayFilter_1.ClosedArrayFilter, [[1, 2, 3, 4, 5, 6, 6, 7, 7, '', '1', '2']]);
console.log(filter.byType('number').byTest(function (item) { return item > 4; }).export());
