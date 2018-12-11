import { ObjectFactory } from '@writetome51/object-factory/ObjectFactory';
import { PublicArrayGetterRemover } from '@writetome51/public-array-item-getter-remover';
import { NonMethodChainablePrivateArray } from './NonMethodChainablePrivateArray';


export class PrivateArrayGetterRemover extends NonMethodChainablePrivateArray {

	constructor(
		protected _array: PublicArrayGetterRemover, // injected dependency

		input = []
	) {
		super(_array, input);
	}


}


ObjectFactory.register(
	{class: PrivateArrayGetterRemover, dependencies: [PublicArrayGetterRemover]}
);