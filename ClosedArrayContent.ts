import { OpenArrayContent } from '@writetome51/open-array/OpenArrayContent';
import { ObjectFactory } from '@writetome51/object-factory/ObjectFactory';
import { NonMethodChainableClosedArray } from './NonMethodChainableClosedArray';


// This class has the same properties and methods defined inside OpenArrayContent.

export class ClosedArrayContent extends NonMethodChainableClosedArray {


	constructor(
		protected _array: OpenArrayContent, // injected dependency

		input = []
	) {
		super(_array, input);
	}


}


ObjectFactory.register(
	{class: ClosedArrayContent, dependencies: [OpenArrayContent]}
);