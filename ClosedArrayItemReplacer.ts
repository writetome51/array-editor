import { ObjectFactory } from '@writetome51/object-factory/ObjectFactory';
import { OpenArrayItemReplacer } from '@writetome51/open-array/OpenArrayItemReplacer';
import { MethodChainableClosedArray } from './MethodChainableClosedArray';


export class ClosedArrayItemReplacer extends MethodChainableClosedArray {

	constructor(
		protected _array: OpenArrayItemReplacer, // injected dependency

		input = []
	) {
		super(_array, input);
	}


}


ObjectFactory.register(
	{class: ClosedArrayItemReplacer, dependencies: [OpenArrayItemReplacer]}
);