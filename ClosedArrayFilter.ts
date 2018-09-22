import { ObjectFactory } from '../../../ObjectFactory/ObjectFactory';
import { OpenArrayFilter } from '../../OpenDataContainer/OpenArrayContainer/OpenArrayFilter';
import { ClosedArrayContainer } from './ClosedArrayContainer';
import { getUninheritedPublicMethods } from 'datatype-handlers/objects/object_manipulation';


export class ClosedArrayFilter extends ClosedArrayContainer {

	constructor(
		protected _array: OpenArrayFilter, // injected dependency
		input = []
	) {

		super(_array, input);

		// Create methods identical to those belonging to this._array:
		let uninheritedPublicMethods = getUninheritedPublicMethods(this._array);

		// These functions modify the array, and return the class instance.
		this._createGetterAndOrSetterForEach(
			uninheritedPublicMethods,
			{
				get_getterFunction: (property) => {
					return () => {
						return (...params) => {
							this._array[property](...params);
							return this;
						};
					};
				}
			}
		);

	}


}


ObjectFactory.register(
	{class: ClosedArrayFilter, dependencies: [OpenArrayFilter]}
);
