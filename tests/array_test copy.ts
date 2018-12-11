import { ObjectFactory } from '@writetome51/object-factory/ObjectFactory';
import { PrivateArrayContent } from '../privy/PrivateArrayContent';
import { PrivateArrayGetter } from '../privy/PrivateArrayGetter';
import { PrivateArrayFilter } from '../privy/PrivateArrayFilter';


let filter = ObjectFactory.getInstance(PrivateArrayFilter, [[1, 2, 3, 4, 5, 6, 6, 7, 7, '', '1', '2']]);

console.log(filter.byType('number').byTest(item => item > 4).export());