import { PublicArrayContainer } from '@writetome51/public-array/PublicArrayContainer';
import { PrivateArray } from './PrivateArray';


export abstract class NonMethodChainablePrivateArray extends PrivateArray {

	constructor(
		protected _array: PublicArrayContainer, // must be subclass of it.

		input = []
	) {
		super(
			_array,
			input,

			// provide a function that returns a getter function for all the methods:
			(method) => {
				// Return a getter function:
				return () => {
					// Simply return the method with same name belonging to this._array:
					return this._array[method];
				};
			}
		);
	}


}
