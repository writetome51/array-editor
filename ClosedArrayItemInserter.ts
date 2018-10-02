import { OpenArrayItemInserter }
	from '@writetome51/open-array/OpenArrayItemInserter';
import { ObjectFactory } from '@writetome51/object-factory/ObjectFactory';
import { MethodChainableClosedArray } from './MethodChainableClosedArray';


export class ClosedArrayItemInserter extends MethodChainableClosedArray {

	constructor(
		protected _array: OpenArrayItemInserter, // injected dependency,

		input = []
	) {
		super(_array, input);
	}


}


ObjectFactory.register(
	{class: ClosedArrayItemInserter, dependencies: [OpenArrayItemInserter]}
);