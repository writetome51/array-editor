import { OpenArraySorter } from '@writetome51/open-array/OpenArraySorter';
import { ObjectFactory } from '@writetome51/object-factory/ObjectFactory';
import { MethodChainableClosedArray } from './MethodChainableClosedArray';


export class ClosedArraySorter extends MethodChainableClosedArray {

	constructor(
		protected _array: OpenArraySorter, // injected dependency

		input = []
	) {
		super(_array, input);
	}


}


ObjectFactory.register(
	{class: ClosedArraySorter, dependencies: [OpenArraySorter]}
);