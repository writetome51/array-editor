import { OpenArrayItemGetter }
	from '../../OpenDataContainer/OpenArrayContainer/OpenArrayItemGetter';
import { ClosedArrayContainer } from './ClosedArrayContainer';
import { ObjectFactory } from '../../../ObjectFactory/ObjectFactory';
import { getUninheritedPublicMethods }
	from 'datatype-handlers/objects/object_manipulation';


export class ClosedArrayItemGetter extends ClosedArrayContainer {


	constructor(
		protected _array: OpenArrayItemGetter, // injected dependency

		input = []
	) {
		super(_array, input);

		// Create methods identical to those belonging to this._array:
		let uninheritedPublicMethods = getUninheritedPublicMethods(this._array);

		// These methods don't modify the array.  They return a new array or requested
		// value.

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
	{class: ClosedArrayItemGetter, dependencies: [OpenArrayItemGetter]}
);
