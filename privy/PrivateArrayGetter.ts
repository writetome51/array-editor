import { PublicArrayGetter } from '@writetome51/public-array/PublicArrayGetter';
import { ObjectFactory } from '@writetome51/object-factory/ObjectFactory';
import { NonMethodChainablePrivateArray } from './NonMethodChainablePrivateArray';


export class PrivateArrayGetter extends NonMethodChainablePrivateArray {

	constructor(
		protected _array: PublicArrayGetter, // injected dependency

		input = []
	) {
		super(_array, input);
	}


}


ObjectFactory.register(
	{class: PrivateArrayGetter, dependencies: [PublicArrayGetter]}
);
