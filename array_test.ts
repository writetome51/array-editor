import { ObjectFactory } from '../../../ObjectFactory/ObjectFactory';
import { ArrayEditor } from './ArrayEditor';
import { getAllMethods } from '../../../../functions/data-type-handlers/objects/object_manipulation';


let list = [1, 2, true, 3, 4, false, 5, 6, 7, 5, 6, 7, 1, 2, true, 3, 4];
let editor = ObjectFactory.getInstance(ArrayEditor);

editor.import([1, 2, 3, 4, 5, 6, 7, 8]);

let result = editor.remove_allOf(2)
	.insert_multiple(['jelly', 'donut'], 2)
	.append_single('frosting')
	.content.indexesOf(3);

console.log(result);

