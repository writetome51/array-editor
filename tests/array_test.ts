import { ObjectFactory } from '@writetome51/object-factory/ObjectFactory';
import { ArrayEditor } from '../ArrayEditor';


let list = [1, 2, true, 3, 4, false, 5, 6, 7, 5, 6, 7, 1, 2, true, 3, 4];
let editor = ObjectFactory.getInstance(ArrayEditor);

editor.import([1, 2, 3, 4, 5, 6, 7, 8]);

let result = editor.remove_allOf(2)
	.insert_many(['jelly', 'donut'], 2)
	.append_one('frosting').export();

console.log(result);

