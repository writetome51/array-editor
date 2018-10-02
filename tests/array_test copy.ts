import { ObjectFactory } from '@writetome51/object-factory/ObjectFactory';
import { ClosedArrayContent } from '../ClosedArrayContent';
import { ClosedArrayItemGetter } from '../ClosedArrayItemGetter';
import { ClosedArrayFilter } from '../ClosedArrayFilter';


let filter = ObjectFactory.getInstance(ClosedArrayFilter, [[1, 2, 3, 4, 5, 6, 6, 7, 7, '', '1', '2']]);

console.log(filter.byType('number').byTest(item => item > 4).export());