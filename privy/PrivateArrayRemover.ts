import { ObjectFactory } from '@writetome51/object-factory/ObjectFactory';
import { PublicArrayRemover } from '@writetome51/public-array/PublicArrayRemover';
import { MethodChainablePrivateArray } from './MethodChainablePrivateArray';


export class PrivateArrayRemover extends MethodChainablePrivateArray {

	constructor(
		protected _array: PublicArrayRemover, // injected dependency

		input = []
	) {
		super(_array, input);
	}


}


ObjectFactory.register(
	{class: PrivateArrayRemover, dependencies: [PublicArrayRemover]}
);