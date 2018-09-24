import { ObjectFactory } from '@writetome51/object-factory/ObjectFactory';
import { OpenArrayAppender } from '@writetome51/open-array/OpenArrayAppender';
import { MethodChainableClosedArray } from './MethodChainableClosedArray';


export class ClosedArrayAppender extends MethodChainableClosedArray {


	constructor(
		protected _array: OpenArrayAppender, // injected dependency

		input = []
	) {
		super(_array, input);
	}


}


ObjectFactory.register(
	{class: ClosedArrayAppender, dependencies: [OpenArrayAppender]}
);