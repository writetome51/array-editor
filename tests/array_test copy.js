"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ObjectFactory_1 = require("@writetome51/object-factory/ObjectFactory");
var ClosedArrayItemGetter_1 = require("../ClosedArrayItemGetter");
var arr = ObjectFactory_1.ObjectFactory.getInstance(ClosedArrayItemGetter_1.ClosedArrayItemGetter, [[1, 2, 3, 4, 5, 6, 6, 7, 7]]);
console.log(arr.tail(3));
