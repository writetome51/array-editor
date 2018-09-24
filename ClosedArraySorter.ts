import { ClosedArrayContainer } from './ClosedArrayContainer';
import { OpenArraySorter } from '@writetome51/open-array/OpenArraySorter';
import { ObjectFactory } from '@writetome51/object-factory/ObjectFactory';
import { getUninheritedPublicMethods }
	from 'intuitive-object-handlers/get/getUninheritedPublicMethods';


export class ClosedArraySorter extends ClosedArrayContainer {


	constructor(
		protected _array: OpenArraySorter, // injected dependency
		input = []
	) {
		super(_array, input);

		// Create methods identical to those belonging to this._array:
		let uninheritedPublicMethods = getUninheritedPublicMethods(this._array);

		// These functions modify the array, and return the class instance:

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
	{class: ClosedArraySorter, dependencies: [OpenArraySorter]}
);