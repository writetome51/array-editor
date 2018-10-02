import { ObjectFactory } from '@writetome51/object-factory/ObjectFactory';
import { OpenArrayFilter } from '@writetome51/open-array-filter/OpenArrayFilter';
import { MethodChainableClosedArray } from './MethodChainableClosedArray';



export class ClosedArrayFilter extends MethodChainableClosedArray {

	constructor(
		_array: OpenArrayFilter, // injected dependency
		input = []
	) {

		super(_array, input);
	}


}


ObjectFactory.register(
	{class: ClosedArrayFilter, dependencies: [OpenArrayFilter]}
);
