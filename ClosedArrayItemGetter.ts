import { OpenArrayItemGetter } from '@writetome51/open-array/OpenArrayItemGetter';
import { ObjectFactory } from '@writetome51/object-factory/ObjectFactory';
import { NonMethodChainableClosedArray } from './NonMethodChainableClosedArray';


export class ClosedArrayItemGetter extends NonMethodChainableClosedArray {

	constructor(
		protected _array: OpenArrayItemGetter, // injected dependency

		input = []
	) {
		super(_array, input);
	}


}


ObjectFactory.register(
	{class: ClosedArrayItemGetter, dependencies: [OpenArrayItemGetter]}
);
