import { ObjectFactory } from '@writetome51/object-factory/ObjectFactory';
import { OpenArrayPrepender }
	from '@writetome51/open-array/OpenArrayPrepender';
import { MethodChainableClosedArray } from './MethodChainableClosedArray';


export class ClosedArrayPrepender extends MethodChainableClosedArray {


	constructor(
		protected _array: OpenArrayPrepender, // injected dependency

		input = []
	) {
		super(_array, input);
	}


}


ObjectFactory.register(
	{class: ClosedArrayPrepender, dependencies: [OpenArrayPrepender]}
);