import { ObjectFactory } from '@writetome51/object-factory/ObjectFactory';
import { PublicArrayFilter } from '@writetome51/public-array-filter/PublicArrayFilter';
import { MethodChainablePrivateArray } from './MethodChainablePrivateArray';



export class PrivateArrayFilter extends MethodChainablePrivateArray {

	constructor(
		_array: PublicArrayFilter, // injected dependency
		input = []
	) {

		super(_array, input);
	}


}


ObjectFactory.register(
	{class: PrivateArrayFilter, dependencies: [PublicArrayFilter]}
);
