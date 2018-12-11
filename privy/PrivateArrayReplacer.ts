import { ObjectFactory } from '@writetome51/object-factory/ObjectFactory';
import { PublicArrayReplacer } from '@writetome51/public-array/PublicArrayReplacer';
import { MethodChainablePrivateArray } from './MethodChainablePrivateArray';


export class PrivateArrayReplacer extends MethodChainablePrivateArray {

	constructor(
		protected _array: PublicArrayReplacer, // injected dependency

		input = []
	) {
		super(_array, input);
	}


}


ObjectFactory.register(
	{class: PrivateArrayReplacer, dependencies: [PublicArrayReplacer]}
);