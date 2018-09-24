import { OpenArrayContainer } from '@writetome51/open-array/OpenArrayContainer';
import { ClosedArray } from './ClosedArray';


export abstract class NonMethodChainableClosedArray extends ClosedArray {


	constructor(
		protected _array: OpenArrayContainer, // must be subclass of it.

		input = []
	) {
		super(_array, input);
	}


	protected _get_getterFunctionForMethods(property) {
		return () => {
			// Return a function, turning the property into a method:
			return (...params) => {
				return this._array[property](...params);
			};
		};
	}


}
