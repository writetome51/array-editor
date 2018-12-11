import { PublicArrayGetterConverter } from '@writetome51/public-array/PublicArrayGetterConverter';
import { ObjectFactory } from '@writetome51/object-factory/ObjectFactory';
import { NonMethodChainablePrivateArray } from './NonMethodChainablePrivateArray';


export class PrivateArrayGetterConverter extends NonMethodChainablePrivateArray {

	constructor(
		protected _array: PublicArrayGetterConverter, // injected dependency

		input = []
	) {
		super(_array, input);
	}


}


ObjectFactory.register(
	{class: PrivateArrayGetterConverter, dependencies: [PublicArrayGetterConverter]}
);