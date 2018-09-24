import { ObjectFactory } from '@writetome51/object-factory/ObjectFactory';
import { ClosedArrayContent } from '../ClosedArrayContent';
import { ClosedArrayItemGetter } from '../ClosedArrayItemGetter';


let arr = ObjectFactory.getInstance(ClosedArrayItemGetter, [[1,2,3,4,5,6,6,7,7]]);

console.log(arr.tail(3));