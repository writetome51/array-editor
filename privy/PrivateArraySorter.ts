import { PublicArraySorter } from '@writetome51/public-array/PublicArraySorter';
import { ObjectFactory } from '@writetome51/object-factory/ObjectFactory';
import { MethodChainablePrivateArray } from './MethodChainablePrivateArray';


export class PrivateArraySorter extends MethodChainablePrivateArray {

	constructor(
		protected _array: PublicArraySorter, // injected dependency

		input = []
	) {
		super(_array, input);
	}


}


ObjectFactory.register(
	{class: PrivateArraySorter, dependencies: [PublicArraySorter]}
);