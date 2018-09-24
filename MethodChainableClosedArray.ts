import { OpenArrayContainer } from '@writetome51/open-array/OpenArrayContainer';
import { ClosedArray } from './ClosedArray';


export abstract class MethodChainableClosedArray extends ClosedArray {


	constructor(
		protected _array: OpenArrayContainer, // must be subclass of it.

		input = []
	) {
		super(_array, input, (property) => {
			return () => {
				// Return a function, turning the property into a method:
				return (...params) => {
					this._array[property](...params);
					return this;
				};
			};
		});
	}


}
