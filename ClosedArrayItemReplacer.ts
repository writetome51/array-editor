import { ObjectFactory } from '../../../ObjectFactory/ObjectFactory';
import { ClosedArrayContainer } from './ClosedArrayContainer';
import { OpenArrayItemReplacer }
	from '../../OpenDataContainer/OpenArrayContainer/OpenArrayItemReplacer';
import { getUninheritedPublicMethods }
	from 'datatype-handlers/objects/object_manipulation';


export class ClosedArrayItemReplacer extends ClosedArrayContainer {


	constructor(
		protected _array: OpenArrayItemReplacer, // injected dependency
		input = []
	) {
		super(_array, input);

		// Create methods identical to those belonging to this._array:
		let uninheritedPublicMethods = getUninheritedPublicMethods(this._array);

		// These functions modify the array and return the class instance.

		this._createGetterAndOrSetterForEach(
			uninheritedPublicMethods,
			{
				get_getterFunction: (property) => {
					return () => {
						// Return a function, turning the property into a method:
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
	{class: ClosedArrayItemReplacer, dependencies: [OpenArrayItemReplacer]}
);