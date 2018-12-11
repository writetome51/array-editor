import { PublicArrayContent } from '@writetome51/public-array-content';
import { DIFactory } from '@writetome51/di-factory';
import { NonMethodChainablePrivateArray } from './NonMethodChainablePrivateArray';


// This class has the same properties and methods defined inside PublicArrayContent.

export class PrivateArrayContent extends NonMethodChainablePrivateArray {

	constructor(
		protected _array: PublicArrayContent, // injected dependency

		input = []
	) {
		super(_array, input);
	}


}


ObjectFactory.register(
	{class: PrivateArrayContent, dependencies: [PublicArrayContent]}
);