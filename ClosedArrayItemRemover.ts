import { ObjectFactory } from '@writetome51/object-factory/ObjectFactory';
import { OpenArrayItemRemover } from '@writetome51/open-array/OpenArrayItemRemover';
import { MethodChainableClosedArray } from './MethodChainableClosedArray';


export class ClosedArrayItemRemover extends MethodChainableClosedArray {

	constructor(
		protected _array: OpenArrayItemRemover, // injected dependency

		input = []
	) {
		super(_array, input);
	}


}


ObjectFactory.register(
	{class: ClosedArrayItemRemover, dependencies: [OpenArrayItemRemover]}
);