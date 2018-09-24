"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ObjectFactory_1 = require("@writetome51/object-factory/ObjectFactory");
var ArrayEditor_1 = require("../ArrayEditor");
var list = [1, 2, true, 3, 4, false, 5, 6, 7, 5, 6, 7, 1, 2, true, 3, 4];
var editor = ObjectFactory_1.ObjectFactory.getInstance(ArrayEditor_1.ArrayEditor);
editor.import([1, 2, 3, 4, 5, 6, 7, 8]);
var result = editor.remove_allOf(2)
    .insert_many(['jelly', 'donut'], 2)
    .append_one('frosting').export();
console.log(result);
