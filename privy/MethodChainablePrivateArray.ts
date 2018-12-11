import { PublicArrayContainer } from '@writetome51/public-array-container';
import { PrivateArray } from './PrivateArray';


export abstract class MethodChainablePrivateArray extends PrivateArray {

	constructor(
		protected _array: PublicArrayContainer, // must be subclass of it.

		input = []
	) {
		super(
			_array, 
			input,

			// provide a function that returns a getter function for all the methods:
			(method) => {
				// return a getter function:
				return () => {
					// Return a function that simply calls the method with same name belonging to this._array,
					// and then returns this instance, making it chainable:
					return (...params) => {
						this._array[method](...params);
						return this;
					};
				};
			}
		);
	}


}
