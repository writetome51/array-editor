import { ObjectFactory } from '../../../ObjectFactory/ObjectFactory';
import { ClosedArrayContainer } from './ClosedArrayContainer';
import { OpenArrayItemGetterRemover }
	from '../../OpenDataContainer/OpenArrayContainer/OpenArrayItemGetterRemover';
import { getUninheritedPublicMethods } from 'datatype-handlers/objects/object_manipulation';


export class ClosedArrayItemGetterRemover extends ClosedArrayContainer {


	constructor(
		protected _array: OpenArrayItemGetterRemover, // injected dependency

		input = []
	) {
		super(_array, input);

		// Create methods identical to those belonging to this._array:
		let uninheritedPublicMethods = getUninheritedPublicMethods(this._array);

		// These functions modify the array and return a new array or requested value.

		this._createGetterAndOrSetterForEach(
			uninheritedPublicMethods,
			{
				get_getterFunction: (property) => {
					return () => {
						// Return a function, turning the property into a method:
						return (...params) => {
							return this._array[property](...params);
						};
					};
				}

			}
		);
	}


}


ObjectFactory.register(
	{class: ClosedArrayItemGetterRemover, dependencies: [OpenArrayItemGetterRemover]}
);