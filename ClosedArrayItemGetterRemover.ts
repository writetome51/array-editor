import { ObjectFactory } from '@writetome51/object-factory/ObjectFactory';
import { OpenArrayItemGetterRemover } from '@writetome51/open-array/OpenArrayItemGetterRemover';
import { NonMethodChainableClosedArray } from './NonMethodChainableClosedArray';


export class ClosedArrayItemGetterRemover extends NonMethodChainableClosedArray {


	constructor(
		protected _array: OpenArrayItemGetterRemover, // injected dependency

		input = []
	) {
		super(_array, input);
	}


}


ObjectFactory.register(
	{class: ClosedArrayItemGetterRemover, dependencies: [OpenArrayItemGetterRemover]}
);