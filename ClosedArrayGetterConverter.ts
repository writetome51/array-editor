import { OpenArrayGetterConverter } from '@writetome51/open-array/OpenArrayGetterConverter';
import { ObjectFactory } from '@writetome51/object-factory/ObjectFactory';
import { NonMethodChainableClosedArray } from './NonMethodChainableClosedArray';


export class ClosedArrayGetterConverter extends NonMethodChainableClosedArray {

	constructor(
		protected _array: OpenArrayGetterConverter, // injected dependency

		input = []
	) {
		super(_array, input);
	}


}


ObjectFactory.register(
	{class: ClosedArrayGetterConverter, dependencies: [OpenArrayGetterConverter]}
);