import { PublicArrayInserter }from '@writetome51/public-array/PublicArrayInserter';
import { ObjectFactory } from '@writetome51/object-factory/ObjectFactory';
import { MethodChainablePrivateArray } from './MethodChainablePrivateArray';


export class PrivateArrayInserter extends MethodChainablePrivateArray {

	constructor(
		protected _array: PublicArrayInserter, // injected dependency,

		input = []
	) {
		super(_array, input);
	}


}


ObjectFactory.register(
	{class: PrivateArrayInserter, dependencies: [PublicArrayInserter]}
);